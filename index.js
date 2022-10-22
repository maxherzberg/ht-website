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