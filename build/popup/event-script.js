browser = (typeof chrome === 'undefined') ? browser : chrome;
console.log('event-script.js started');


browser.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    console.log("!!!!  message from CS  !!!!", request.loginData, "<<");
    console.log('request', request);

    if (request.removeLoginData) {
        localStorage.removeItem('loginData');
    }
    if (request.newLoginData) {
        localStorage.setItem('loginData', JSON.stringify(request.newLoginData));
    }
    if (request.getLoginData) {
        const loginData = JSON.parse(localStorage.getItem('loginData'));
        const response = (loginData === 'null') ? 'not found' : loginData;
        console.log('Sending response', response);
        sendResponse(response);
    }

    console.log(sender.tab ? "from a content script:" + sender.tab.url : "from the extension");
});


const logLocalStorage = function() {
    console.group('localStorage');
    console.log('logging local storage');
    console.groupEnd();
    for (const key in localStorage) {
        console.log(key, localStorage.getItem(key));
    }
    console.groupEnd();
};