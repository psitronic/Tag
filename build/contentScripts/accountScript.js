$(function(){
  console.log("hi frm account script")


  chrome.runtime.sendMessage({getLoginData: true}, function(response){

          console.log("msg sent, recieved this:\n", response)

          $.post("/manageAccount", {_id: response.session.userId})

  })
})

