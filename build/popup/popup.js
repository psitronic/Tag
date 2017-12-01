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

//document.cookie = ""
var cookie = document.cookie
//document.cookie = "ahoy"
//"username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
//document.cookie = document.cookie.replace("ahoy; ","")

$(document).ready(function() {
    
    $('#status').text("cookie: " +cookie )//JSON.parse(JSON.stringify(cookie)))
    if (cookie){

        if (cookie.includes("; ")) cookie = cookie.replace("; ", "")

        //let parsed = JSON.parse(cookie)
        cookie = JSON.parse(cookie)
        //let cookie = document.cookie.replace("; ","")    // .JSON.stringify(cookie))
        //alert( typeof cookie)

        $('#status').text('logged in as >>' + cookie.name + "<<")

    } else {
        $('#status').text('no cookie stored')
    }


    $('form').submit(function(e) {
        //alert("submitted")
        e.preventDefault();
        var email = $('input[name="email"]').val();
        var password = $('input[name="password"]').val();
        const args = {
            email: email,
            password: password
        };
        $('#status').text('Logging in');
        // Call function
        tagAPI.login(email, password)
            .then(response => {

                    

                    $('#status').text(`Logged in as ${response.name}`);

                    // store cookie on client must be done in event/background extension script otherwise it results in double un-parseable entry
                    //if (!document.cookie) document.cookie = JSON.stringify(response)

                    chrome.runtime.sendMessage(/*'hdgehpkhhjjifmjhkadeolficifligml',*/{newLoginData: JSON.stringify(response)}, function(response) {})

                    $('#activePanel').css('display', 'flex')  
                    $('#loginForm').css('display', 'none')

                    $('#userAccountAnchor').click((ev)=>{

                            
                            //$.post("https://stickertags2.glitch.me/manageAccount", {id: response._id})//}, (er, data, d2)=>{})

                            // open new tab with url "/manageAccount" and server redirects and sends handlebars file
                            chrome.tabs.create({url:"https://stickertags2.glitch.me/manageAccount"}, (newTab)=>{

                                chrome.tabs.query({url: "https://stickertags2.glitch.me/manageAccount", currentWindow: true}, function(tabs) {
                                    chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello to content script"}, function(response) {
                                      
                                                  console.log(response.farewell);
                                    });
                                  });

                            })

                    })
            })
            .catch(error => alert('Login error\n' + JSON.stringify(error, null, 2)));
    });
});