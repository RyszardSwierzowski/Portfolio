
/*
var ourRequest = new XMLHttpRequest();

ourRequest.open('GET','http://localhost:8080/api/user/1');
// ourRequest.open('GET','http://localhost:8080/api/user/all');
ourRequest.onload = function () {
    console.log(ourRequest.responseText)

//    dla listy
//     var ourJson = JSON.parse(ourRequest.responseText);
    // console.log(ourJson[0])
}
ourRequest.send();

 */

/*
var btn =document.getElementById("btn")
btn.addEventListener("click", function () {
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET','http://localhost:8080/api/user/1');
    ourRequest.onload = function () {
        console.log(ourRequest.responseText)
    }
    ourRequest.send();
})

 */

//////////////////


var userContainer = document.getElementById("userWyswietlDiv"); // pobranie diva

var btn =document.getElementById("btn")
btn.addEventListener("click", function () {
    var ourRequest = new XMLHttpRequest();

    ourRequest.open('GET','http://localhost:8080/api/user/all');
    ourRequest.onload = function () {
        var ourJson = JSON.parse(ourRequest.responseText);
        renderHTML(ourJson);
        // console.log(ourRequest.responseText)
    }
   // ourRequest.onerror = function(){
        // co sie stanei jak nie uda sie pobrac
   // }
    ourRequest.send();
})

function renderHTML(data) {
    var htmlString = "";

    for(i=0; i<data.length;i++){
        htmlString += "<p> user name: " + data[i].name+"</p>"
    }

    userContainer.innerHTML="";
    userContainer.insertAdjacentHTML('beforeend',htmlString);

}

///////////////////////// BUTTON POST
var btn2 =document.getElementById("btn2")
btn2.addEventListener("click", function () {
    var  xhr = new XMLHttpRequest();
    var url = "http://localhost:8080/api/user/addOne";

    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/json");

    if (xhr.readyState == 4 && xhr.status == 200) {
        var json = JSON.parse(xhr.responseText);
        console.log(json.email + ", " + json.name)
    }


    var data = JSON.stringify({
        "name": "use11r1",
        "password": "root"
    });
    xhr.send(data);



})


////////////////// BUTTON POBIERZ TOKEN



var divToken = document.getElementById("divToken"); // pobranie diva
var buttonToken =document.getElementById("btn3")
var token ;

buttonToken.addEventListener("click", function () {
    var  xhr = new XMLHttpRequest();

    var url = "http://localhost:8080/api/login";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/json");

    var data = JSON.stringify({
        "name": "user1",
        "password": "root"
    });
    xhr.send(data);

    xhr.onload = function () {
        token = xhr.responseText;
        divToken.innerText=token;
    }
    localStorage.setItem("aa","vv");


    var now = new Date();
    var time = now.getTime();
    var expireTime = time + 1000*10; // 10 min
    now.setTime(expireTime);
    var tempExp = 'Wed, 31 Oct 2012 08:50:17 GMT';
    document.cookie = 'JwtToken='+token+';expires='+now.toUTCString()+';path=/';


    document.cookie = "token=xxxxa;";

})