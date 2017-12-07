browser = (typeof chrome === 'undefined') ? browser : chrome;

class API {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
        this.baseArgs = {};
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
    apiCall(args, subPath = '', method = 'GET') {
        args = {
            ...this.baseArgs,
            ...args
        };
        const url = this.baseUrl + subPath;
        switch (method) {
            case 'GET':
                {
                    // Convert args object to parameter string	
                    const parameterString = '?' + Object.entries(args).map(argPair => argPair.join('=')).join('&');
                    return this._get(url + parameterString);
                    break;
                }
            case 'POST':
                {
                    return this._post(url, args);
                    break;
                }
            default:
                {
                    return Promise.reject('unsupported method');
                }
        }
    }
    /** setBaseArg
     * @description Sets an argument which will be passed to all api calls
     * @param {string}  key
     * @param {any}     value
     * @example
     * // Setting an apikey to be passed to all api calls
     * myApi.setBaseArg('apiKey', 'abjkalödsfasd234sdf');
     */
    setBaseArg(key, value) {
        this.baseArgs[key] = value;
    }
    removeBaseArg(key) {
        delete this.baseArgs[key];
    }
    _get(url) {
        console.log('_get', url);
        return new Promise((resolve, reject) => {
            $.getJSON(url)
                .done(resolve)
                .fail(reject);
        });
    }
    _post(url, args) {
        console.log('_post', url, args);
        return new Promise((resolve, reject) => {
            $.post(url, args)
                .done(resolve)
                .fail(reject);
        });
    }
}

// Create API
const tagAPI = new API('https://stickertags2.glitch.me/api/');

tagAPI.login = function (loginemail, loginpassword) {
    const args = {
        loginemail,
        loginpassword,
    };
    return this.apiCall(args, 'login', 'POST');
};

tagAPI.logout = function () {
    const args = {};
    
    return this.apiCall(args, 'logout', 'POST');
};

// getMessages is only for testing if the authentication works, can be removed later from here
tagAPI.getMessages = function () {
    return this.apiCall({}, 'getMessages');
};


$(document).ready(function () {
    $('form').submit(function (e) {
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
        .catch(() => {}); // (If no login data is stored it is no error, hence do nothing)

    $('#userAccountAnchor').click(ev => {
        // open new tab with url "/manageAccount" and server redirects and sends handlebars file
        openManageAccountSite();
    });

    $('#logout').click(ev => {
        ev.preventDefault();
        browser.runtime.sendMessage({
            removeLoginData: true
        }, function (response) {
            $('#status').text(`Almost logged out. Just a sec..`); // Reopen to log in.
        });
        tagAPI.logout()
            .then(response => {
                    console.log('logout response', response);

                    $('body').append(`<h2 style="text-align: center; color: black">Logged out!</h2>`)
                    setTimeout(()=>{
                        window.close();
                    },1200)
                    
            })
            .catch(console.error);
    });

    $('#injectionActive').change((ev) => {
        if ($('#injectionActive').is(':checked')) {
            //browser.tabs.create({url: "www.wikipedia.org"})    
            browser.tabs.query({}, tabs => {
                tabs.forEach(tab => {
                    browser.tabs.executeScript(tab.id, {
                        "code": `$('#tag-main').removeClass('hidden');`
                    });

                });
            });
        } else {
            browser.tabs.query({}, tabs => {
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
    browser.tabs.create({
        url: "https://stickertags2.glitch.me/manageAccount"
    }, (newTab) => {
        browser.tabs.query({
            url: "https://stickertags2.glitch.me/manageAccount",
            currentWindow: true
        }, function (tabs) {
            browser.tabs.sendMessage(tabs[0].id, {
                greeting: "hello to content script"
            }, function (response) {
                console.log(response.farewell);
            });
        });
    });
}

// Checks if login data is stored in cookies
function checkCookieLogin() {
    return new Promise((resolve, reject) => {
        browser.runtime.sendMessage({
            getLoginData: true
        }, function (response) {

                console.log( "logindata response", response)
                
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
    }, function (response) {
        console.log(response);
    });

    // for testing authentication only. can be deleted later
    tagAPI.getMessages()
        .then(response => console.log(response))
        .catch(console.error);
}

function onLoginError(error) {
    $('#status').text('Couldn\'t log in\n' + JSON.stringify(error));
    console.log(error);
}