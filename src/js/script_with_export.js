export default function() {
/**
 * @description a template for creating an API caller
 * @example
 * const myAPI = new API('http://example.org/api/');
 * myAPI.myOwnAPICall = function() {
 *   var args = {
 *      action: 'test',
 *      something: 'something'
 *   };
 *   return this.apiCall(args, 'GET');
 * };
 * 
 * myApi.myOwnAPICall()
 *  .then(response => console.log(response))
 *  .catch(error => console.error(error));
 */
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
tagAPI.getMessages = function() {
    const args = { 
        website: getWebsite()
    };
    return this.apiCall(args, 'getMessages');
};

tagAPI.postMessage = function(message) {
    const args = {
        website: getWebsite(),
        message: message
    };
    return this.apiCall(args, 'postMessage', 'POST');
};

const getWebsite = () => {
    let website = window.location.host + window.location.pathname;
    if (website.includes('index.')) {
        website = website.substring(0, website.indexOf('index.'));
    }
    return website;
};

// Add sample response for getMessages (useful when you have no internet / the server is not responding)
if (true) {
    tagAPI.getMessages = () => Promise.resolve([
        {
            author: 'Lui',
            text: 'Awesome Atmosphere'
        },
        {
            author: 'Ian',
            text: 'Hello World!'
        },
        {
            author: 'Laslo',
            text: 'Really beautiful website <3'
        },
        {
            author: 'Iris',
            text: '#FAQ is really interesting'
        }
    ]);
}
if (true) {
    tagAPI.postMessage = (message) => Promise.resolve({
        author: 'you',
        text: message
    });
}

$(document).ready(function() {
    $('#tag-trigger-icon').on('click', function(event) {
        $('#tag-main').toggleClass('tag-small');
    });
    tagAPI.getMessages()
        .then(messages => {
            if (messages.length) {
                showMessages(messages);
            } else {
                showMessages([{author: 'Tag Team', text: '#First'}]);
            }
        })
        .catch(error => {
            console.error(error);
        });
    
    initNewMessageForm();
});

const showMessages = messages => messages.forEach(appendMessage);
const prependMessage = message => $('#tag-messages').prepend(getMessageHtml(message));
const appendMessage = message => $('#tag-messages').append(getMessageHtml(message));

const getMessageHtml = message => `
    <li class="tag-message">
        <header>
            <h4 class="tag-author">${message.author}</h4>
        </header>
        <p class="tag-text">${message.text}</p>
    </li>
`;

const initNewMessageForm = () => {
    // Show submit button on focus
    $('form[name="new-message"] *').focus(function(e) {
        $(this).parent().children('button[type="submit"]').fadeIn();
    });

    const handleSubmit = function(event) {
        event.preventDefault();
        const message = $('form[name="new-message"] textarea').val();
        tagAPI.postMessage(message)
            .then(response => {
                $('form[name="new-message"] textarea').val('');
                prependMessage(response);
            })
            .catch(() => alert('Error while creating message :/'));
    };
    // Submit triggerer
    $('form[name="new-message"]').submit(handleSubmit);
    $('form[name="new-message').keydown(function(e) {
        // Ctrl + Enter
        if (e.ctrlKey && e.which === 13) {
            handleSubmit(e);
        }
    });
};

};