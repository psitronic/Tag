browser = (typeof chrome === 'undefined') ? browser : chrome;

class API {
    constructor(baseUrl) {
        this.baseUrl =  baseUrl;
    }

    /** apiCall
     * @param {object}  args - the arguments passed to the api call
     * @param {string}  [subPath='']    - to make an apicall to baseUrl + subpath
     * @param {string}  [method='GET']  - the method used for the api call
     * @returns {Promise<response>}
     * @example
     * var args = {
     *    action: 'signup',
     *    username: 'Tom',
     *    email: 'Tom@tom.tom',
     *    password: '1234b4'
     * };
     * apiCall(args, 'account/', 'POST');
     */
    apiCall(args, subPath='', method='GET') {
        const url = this.baseUrl + subPath;
        switch(method) {
            case 'GET': {
                // Convert args object to parameter string	
                const parameterString = '?' + Object.entries(args).map(argPair => argPair.join('=')).join('&');
                return this._get(url + parameterString);
                break;
            }
            case 'POST': {
                return this._post(url, args);
                break;
            }
            default: {
                return Promise.reject('unsupported method');
            }
        }
    }
    _get(url) {
        return new Promise((resolve, reject) => {
            $.getJSON(url)
                .done(resolve)
                .fail(reject);
        });
    }
    _post(url, args) {
        return new Promise((resolve, reject) => {
            $.post(url, args)
                .done(resolve)
                .fail(reject);
        });
    }
}

// Create API
const tagAPI = new API('https://stickertags2.glitch.me/');

// Add function
tagAPI.login = function(loginemail, loginpassword) {
    const args = {
        loginemail, 
        loginpassword,
    };
    return this.apiCall(args, 'login', 'POST'); //this.apiCall(args, 'loginjson', 'POST');
};


$(document).ready(function() {
    $('form').submit(function(e) {
        e.preventDefault();
        var email = $('input[name="email"]').val();
        var password = $('input[name="password"]').val();
        
        $('#status').text('Logging in');

        // Call function
        tagAPI.login(email, password)
            .then(onLogin)
            .catch(onLoginError);
    });

    // Cookie login
    checkCookieLogin()
        .then(onLogin)
        .catch(() => {});   // (If no login data is stored it is no error, hence do nothing)
    
    $('#userAccountAnchor').click(ev => {
        // open new tab with url "/manageAccount" and server redirects and sends handlebars file
        openManageAccountSite();
    });

    $('#logout').click(ev => {
        ev.preventDefault();
        browser.runtime.sendMessage({removeLoginData: true}, function(response) {
            $('#status').text(`Logged out. Reopen to log in.`);
        });
    });

    $('#injectionActive').change((ev)=>{
        if ( $('#injectionActive').is(':checked')) {
            //browser.tabs.create({url: "www.wikipedia.org"})    
            browser.tabs.query({},tabs=>{
                tabs.forEach(tab => {
                    browser.tabs.executeScript(tab.id, {
                        "code": `$('#tag-main').removeClass('hidden');`        
                    });
                    
                });     
            });
        } else {
            browser.tabs.query({},tabs=>{
                    tabs.forEach(tab => {
                        browser.tabs.executeScript(tab.id, {
                            "code": `$('#tag-main').addClass('hidden');`
                        })
                    }); 
                    
            })
        }
            })
});

function openManageAccountSite() {
    browser.tabs.create({ url: "https://stickertags2.glitch.me/manageAccount" }, (newTab) => {
        browser.tabs.query({ url: "https://stickertags2.glitch.me/manageAccount", currentWindow: true }, function (tabs) {
            browser.tabs.sendMessage(tabs[0].id, { greeting: "hello to content script" }, function (response) {
                console.log(response.farewell);
            });
        });
    });
}

// Checks if login data is stored in cookies
function checkCookieLogin() {
    return new Promise((resolve, reject) => {
        browser.runtime.sendMessage({getLoginData: true}, function(response) {
            if (response) {
                resolve(response);
            } else {
                reject();
            }
        });
    });
}

function onLogin(response) {
    console.log('onLogin', response);
    $('#status').text(`Logged in as ${response.name}`);
    $('#activePanel').css('display', 'flex');
    $('#loginForm').css('display', 'none');

    // store cookie on client must be done in event/background extension script otherwise it results in double un-parseable entry
    //if (!document.cookie) document.cookie = JSON.stringify(response)

    browser.runtime.sendMessage({
        newLoginData: response
    }, function(response) {
        console.log(response);
    });
}

function onLoginError(error) {
    $('#status').text('Couldn\'t log in');
    console.log(error);
}
