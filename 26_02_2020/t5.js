//Hover on image to fit the frame

var imageL = document.createElement("img");
document.body.appendChild(imageL);
imageL.setAttribute("src", "image1.jpg");
imageL.setAttribute("width", "50%");
imageL.setAttribute("height", "50%");

var div = document.createElement("div");
document.body.appendChild(div);
div.setAttribute("class", ".image");
var simage1 = document.createElement("img");
simage1.setAttribute("src", "image1.jpg");
simage1.setAttribute("width", "20%");
simage1.setAttribute("height", "20%");
var simage2 = document.createElement("img");
simage2.setAttribute("src", "image2.jpg");
simage2.setAttribute("width", "20%");
simage2.setAttribute("height", "20%");
var simage3 = document.createElement("img");
simage3.setAttribute("src", "image3.jpg");
simage3.setAttribute("width", "20%");
simage3.setAttribute("height", "20%");
div.appendChild(simage1);
div.appendChild(simage2);
div.appendChild(simage3);

simage1.addEventListener("mouseover", f1);
simage2.addEventListener("mouseover", f2);
simage3.addEventListener("mouseover", f3);

function f1() {
    imageL.setAttribute("src", "image1.jpg");
}

function f2() {
    imageL.setAttribute("src", "image2.jpg");
}

function f3() {
    imageL.setAttribute("src", "image3.jpg");
}
