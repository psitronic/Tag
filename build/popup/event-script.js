// deleteAllCookies();
console.log('hi from event script', document.cookie,"<<");




chrome.runtime.onMessage.addListener( function(request, sender, sendResponse) {
    console.log("!!!!  message from CS  !!!!", request.loginData, "<<");
    console.log('request', request);

    if (request.newLoginData) {
        if (!document.cookie) {
            createCookie('loginData', request.newLoginData, 28);
        }
    }
    if (request.getLoginData) {
        console.log("req for cookie", request.getLoginData);
        const loginData = JSON.parse(readCookie('loginData'));
        sendResponse(loginData);
    }

    console.log(sender.tab ? "from a content script:" + sender.tab.url :"from the extension");
});

function createCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    if (typeof value === 'object') {
        value = JSON.stringify(value);
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name,"",-1);
}

function deleteAllCookies() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}
