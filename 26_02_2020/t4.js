//Reading contents from text box & Basic Regx

var user = document.createElement("input");
var pass = document.createElement("input");
var butt = document.createElement("button");
var br = document.createElement("br");
var p2 = document.createElement("p");
var p1 = document.createElement("p");

user.setAttribute("type", "email");
pass.setAttribute("type", "password");
butt.setAttribute("id", "checker");
butt.textContent = "check";
user.placeholder = "username";
pass.placeholder = "password";

document.body.appendChild(user);
document.body.appendChild(br);
document.body.appendChild(pass);
document.body.appendChild(butt);
document.body.appendChild(p2);
document.body.appendChild(p1);

butt.addEventListener("click", check);

function check() {
    var us = /^[a-zA-Z0-9@._]+$/g;
    var index_at = user.value.indexOf("@");
    var index_dot = user.value.indexOf(".");
    var skip = 1;
    if (index_at == -1 || index_dot == -1) {
        skip = 0;
    }

    if (us.test(user.value) && skip && index_dot != 0 && index_at != index_dot - 1 &&
        index_at != index_dot + 1 && index_dot != user.value.length - 1 &&
        index_at != 0 && index_at != user.value.length - 1 && index_dot > index_at) {
        p2.textContent = "user name validation successful, ";
    } else {
        p2.textContent = "user name validation failed, ";
    }
    var regex = /^[!@#\$%\^\&*\)\(+=._-]+$/g;

    if (regex.test(pass.value[7]) && pass.value.length == 8) {
        p1.textContent = "password validation successful";
    } else {
        p1.textContent = "password validation failed";
    }

}
