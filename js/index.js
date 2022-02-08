function layers() {
    let layer = document.querySelector(".layers");
    layer.style.top = -(window.pageYOffset / 10) + "px";
    let layer0 = document.querySelector("#layer-0");
    layer0.style.top = -(window.pageYOffset / 5.75) + "px";
    let moon = document.querySelector("#layer-moon");
    moon.style.top = -(window.pageYOffset / 10) + "px";
    let layer1 = document.querySelector("#layer-1");
    layer1.style.top = -(window.pageYOffset / 8) + "px";
   
    let layer2 = document.querySelector("#layer-2");
    layer2.style.top = -(window.pageYOffset / 3) + "px";
    let layer3 = document.querySelector("#layer-3");
    layer3.style.top = -(window.pageYOffset / 2.25) + "px";
    let layer4 = document.querySelector("#layer-4");
    layer4.style.top = -(window.pageYOffset / 1.25) + "px";

    // let layer = document.querySelector(".layers");
    // layer.style.top = -(window.pageYOffset / 80) + "px";
    // let layer0 = document.querySelector("#layer-0");
    // layer0.style.top = -(window.pageYOffset / 4.75) + "px";
    // let moon = document.querySelector("#layer-moon");
    // moon.style.top = (window.pageYOffset / 80) + "px";
    // let layer1 = document.querySelector("#layer-1");
    // layer1.style.top = -(window.pageYOffset / 30) + "px";
    // let layer2 = document.querySelector("#layer-2");
    // layer2.style.top = -(window.pageYOffset / 1.75) + "px";



     //ide na dole nije merodavan za ostale
    



}
window.addEventListener("scroll", layers, false);


function show() {

    document.querySelector('a').style.animation = "btn 0.5s 1";
   

}