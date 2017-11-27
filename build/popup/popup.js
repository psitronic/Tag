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
});