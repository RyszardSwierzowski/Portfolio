var xhr = new XMLHttpRequest();
var xhr2 = new XMLHttpRequest();
function submitLogin() {
    var login = document.getElementById("loginL");
    var password = document.getElementById("passwordL");
    var url = "http://localhost:8080/api/login";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/json");

    var data = JSON.stringify({
        "name": login.value,
        "password": password.value
    });
    xhr.send(data);

    xhr.onload = function () {
        var myStatus = xhr.status;
        if (myStatus == 200) {
            var now = new Date();
            var time = now.getTime();
            var expireTime = time + 1000 * 200000000; // 10 min
            now.setTime(expireTime);
            document.cookie = 'JwtToken=' + xhr.responseText + ';expires=' + now.toUTCString() + ';path=/';

            window.location.replace('../userPages/userPage.html');
        }else {
            alert("Nieudana próba zalogowania się !!!")
        }

    }
    xhr.waiting;
}


function register() {

    var login = document.getElementById("loginR");
    var password = document.getElementById("passwordR");
    var email = document.getElementById("emailR");

    var url = "http://localhost:8080/api/register";

    xhr2.open("POST", url, true);
    xhr2.setRequestHeader("Content-type", "application/json");

    var data = JSON.stringify({
        "name": login.value,
        "password": password.value,
        "email": email.value
    });

    xhr2.send(data);

    xhr2.onload = function () {

        var myStatus = xhr.status;
        if (myStatus == 200) {
            var now = new Date();
            var time = now.getTime();
            var expireTime = time + 1000 * 200000000; // 10 min
            now.setTime(expireTime);
            document.cookie = 'sss=' + xhr2.responseText + ';expires=' + now.toUTCString() + ';path=/';

            window.location.replace('../userPages/userPage.html');
        }else {
            alert("Nieudana próba zalogowania się !!!")
        }

    }
xhr2.waiting;

}













