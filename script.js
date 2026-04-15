let originalBg = "white";
let originalText = "black";
let originalSize = "18px";

let isImageVisible = true;

function changeBg() {
    document.body.style.backgroundColor =
        document.body.style.backgroundColor === "lightblue"
        ? "lightgreen"
        : "lightblue";
}

function changeText() {
    let para = document.getElementById("para");
    para.style.color =
        para.style.color === "purple"
        ? "blue"
        : "red";
}

function changeSize() {
    let para = document.getElementById("para");
    para.style.fontSize =
        para.style.fontSize === "24px"
        ? "18px"
        : "24px";
}

function toggleImage() {
    let img = document.getElementById("myImage");
    isImageVisible = !isImageVisible;
    img.style.display = isImageVisible ? "block" : "none";
}

function resetStyles() {
    document.body.style.backgroundColor = originalBg;

    let para = document.getElementById("para");
    para.style.color = originalText;
    para.style.fontSize = originalSize;

    let img = document.getElementById("myImage");
    img.style.display = "block";
    isImageVisible = true;
}