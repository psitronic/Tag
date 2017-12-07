browser = (typeof chrome === 'undefined') ? browser : chrome;

$(function () {
    //console.log("hi frm account script")

    browser.runtime.sendMessage({
        getLoginData: true
    }, function (response) {

        console.log("browser.runtime recieved:", response)

        if (location.href === "https://stickertags2.glitch.me/manageAccount") {
            $.post("/api/manageAccount", {
                _id: response.userId
            }, function (data, status, xhr) {
                if (!data) console.error("no URL subpath received")
                else {
                    console.log("resp", data)
                    location.href = location.origin + data;
                    console.log("location", location)
                }
            });
        } 
    });
});