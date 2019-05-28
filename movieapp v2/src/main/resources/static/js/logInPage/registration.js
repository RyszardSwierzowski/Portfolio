function register() {


    var login = document.getElementById("loginR");
    var password = document.getElementById("passwordR");
    var email = document.getElementById("emailR");


    var xhr2 = new XMLHttpRequest();
    var url = "http://localhost:8080/api/register";

    xhr2.open("POST", url, true);
    xhr2.setRequestHeader("Content-type", "application/json");


    var data = JSON.stringify({
        "name": login.value,
        "password": password.value,
        "email": email.value
    });

    xhr2.send(JSON.stringify({
        "name": login.value,
        "password": password.value,
        "email": email.value
    }));


    xhr2.onload = function (ev) {
for(var i=0;i<10000;i++){

}

alert("xx");

    }


}




