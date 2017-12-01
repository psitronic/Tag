document.cookie = ""
console.log('hi from event script', document.cookie,"<<");




chrome.runtime.onMessage.addListener( function(request, sender, sendResponse) {
    console.log("!!!!  message from CS  !!!!", request.loginData, "<<")

    if (request.newLoginData){
          //document.cookie = "",
          if (!document.cookie) document.cookie = JSON.stringify(request.newLoginData)

          console.log('cookies saved >>', document.cookie,"<<");
    }
    //console.log("sender", sender);
    console.log("req", request);
    if (request.getLoginData){
          console.log("req for cookie", request.getLoginData);

          let cookie = document.cookie
          //console.log("userCookie", typeof cookie)

          if (cookie.includes("; ")) cookie = cookie.replace("; ", "")
          //else if (!cookie.includes(";")) console.log("no ; ")

          //let parsed = JSON.parse(  JSON.stringify(cookie))
          //cookie = JSON.parse(cookie)

          // it doesnt change into object if its not double-parsed...
          cookie = JSON.parse( JSON.parse(cookie))

          console.log("userCookie", typeof cookie, cookie)
          //console.log("userCookie", typeof parsed, parsed)
          sendResponse({session: cookie.session})
    }

    console.log(sender.tab ? "from a content script:" + sender.tab.url :"from the extension");
    //if (request.greeting == "hello")sendResponse({farewell: "goodbye"});
  });