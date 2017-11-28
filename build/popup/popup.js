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
tagAPI.login = function(email, password) {
    const args = {
        email, 
        password,
    };
    return this.apiCall(args, 'loginjson', 'POST');
};


$(document).ready(function() {
    $('form').submit(function(e) {
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
            .then(response => $('#status').text(`Logged in as ${response.name}`))
            .catch(error => alert('Login error\n' + JSON.stringify(error, null, 2)));
    });
    
    //  https://developer.chrome.com/extensions/xhr#requesting-permission
    $('#injectingActive').click(function(e){
                /**
                 *  im using now just plain status of checkbox to see if to execute a script, 
                 *  but later we can fetch 'active-injecting' status
                 *  using either cookies or sessions collection from mongoDB
                 */


                if ($('#injectingActive').is(":checked")){
                    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){

                        // chrome.tabs.executeScript(null, {file: "contentScripts/script.js"})
                        // chrome.tabs.update(tabs[0].id, {url: tabs[0].url});

                        setTimeout(()=>{
                            //chrome.tabs.update(tabs[0].id, {url: tabs[0].url});
                            //alert("tab id" + tabs[0].id)
                            chrome.tabs.executeScript( tabs[0].id,{
                                // this works    
                                'code': 'document.body.innerHTML = "<h1>a Tag!</h1>" + document.body.innerHTML',
                                //'file': "test.js", //i cant make the same work as file, i dont know why
                                'runAt': "document_end"
                            });
                        }, 1000)
                    })

                } else {
                    chrome.tabs.query({active:true}, function(tabs){
                        
                        chrome.tabs.update(tabs[0].id, {url: tabs[0].url});
                    })
                }
    })
});
