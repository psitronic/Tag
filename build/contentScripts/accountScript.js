$(function(){
  console.log("hi from account script")


  chrome.runtime.sendMessage({getLoginData: true}, function(response){

          console.log("msg sent, recieved this:\n", response)
          //let origin = "https://stickertags2.glitch.me"

          if (location.href === "https://stickertags2.glitch.me/manageAccount")
          
             $.post("/manageAccount", {_id: response.session.userId}, function(data, status, xhr){

                    if (!data) console.error("no URL subpath received")
                    else {
                      console.log("resp", data)

                      location.href =  location.origin + data

                      console.log("location", location)
                    }
              })

  })
})
