//document.cookie = ""
console.log('hi from event script, your cookie: >>', document.cookie,"<<");




chrome.runtime.onMessage.addListener( function(request, sender, sendResponse) {
    //console.log("!!!!  message from CS  !!!!", request.loginData, "<<")
    //console.log("sender", sender);

    if (request.newLoginData){

          if (!document.cookie) document.cookie = JSON.stringify(request.newLoginData)
          else {
                  document.cookie = ""
                  document.cookie = JSON.stringify(request.newLoginData)
          }
          console.log('cookie saved >>', document.cookie,"<<");
    }
    

    if (request.getLoginData){
          console.log("req for cookie", request.getLoginData);

          let cookie = document.cookie
          //console.log("userCookie", typeof cookie, cookie)

          //if (cookie.includes("; ")) cookie = cookie.replace("; ", "")

          
          if (cookie) {
                // it doesnt change into object if its not double-parsed
                cookie = JSON.parse( JSON.parse(cookie))
                console.log("userCookie parsed", typeof cookie, cookie)
                /**
                 *      {     
                 *        name: "okram",
                 *        session: has fields _id, expir., etc
                 *       }
                 * 
                 */
                sendResponse(cookie)//{session: cookie.session})


          } else sendResponse({name: "you've no cookie stored"})
          //console.log("userCookie", typeof parsed, parsed)
          

    } else if (request.getCookieData){

          //let cookie = document.cookie
          //console.log("cookie", cookie)
          //sendResponse({session: "halo halo"})
    }

    //console.log(sender.tab ? "from a content script:" + sender.tab.url :"from the extension");
    //if (request.greeting == "hello")sendResponse({farewell: "goodbye"});
  });