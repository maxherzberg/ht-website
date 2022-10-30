function login() {
    var user = document.getElementById("user").value;
    var pass = document.getElementById("password").value;

    if(user == "admin" && pass == "admin") {
        location.href = "admin.html";
    } else if (user == "default" && pass == "default") {
        location.href = "default.html";
    } else {
        alert("Invalid credentials!");
        document.getElementById("user").value = "";
        document.getElementById("password").value = "";
    }
}

function logout() {
    location.href = "index.html";
}

var count = 0;
var card0;
var card1;
var card2;
var card3;
var card4;
var card5;
var card6;

function deal(amount) {
    for(i=0; i<amount; i++) {
        var int = Math.round((Math.random()*10)+1);
        alert(int);
        count=count+int;
    }      
}

function blackjack() {
    count=0;
    deal(2);
    alert(count);
    if(count>21) {
        alert("Verloren");
    } else {
        var cont = prompt("Weitermachen?");

        if(cont == "ja"  || cont == "Ja") {
            deal(1);
            alert(count);
        } else {
            alert("Der Dealer hat: " + (Math.round((Math.random()*10)+1)+Math.round((Math.random()*10)+1)));
        }
    }
}