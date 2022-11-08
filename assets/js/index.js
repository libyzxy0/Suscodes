// Varriables
var f = document.querySelector("[data-f]");
var m = document.querySelector("[data-alert-msg]");
var i = document.querySelector("[data-dpy-img]");
var p = document.querySelector(".m-modal");
var g = document.querySelector(".s_btn");   
var a = document.querySelector(".a-modal");
var c = document.querySelector(".a-modal-btn-close");
var o = document.querySelector(".a-modal-btn");

//Form submit listener, with prevent default
f.addEventListener("submit", y);
function y(e) {
    e.preventDefault();
    let code = document.querySelector("[data-i]").value;
    if (code == 0) {
        emp();
    } else {
        codes(code);
    }
}

function emp() {
    m.style.color="red";
    m.innerHTML=`Error please enter a code!`;
    g.style.background="red";
    setTimeout(function(){
        m.innerHTML="...";
        g.style.background="none";
        f.reset();
    }, 2000);
}
//Error Alert
function err() {
    m.style.color="yellow";
    m.innerHTML="Loading...";
    g.style.background="var(--color)";
    setTimeout(function(){
    m.style.color="red";
    m.innerHTML=`Error code not found!`;
    g.style.background="red";
    setTimeout(function(){
        m.innerHTML="...";
        g.style.background="none";
        f.reset();
    }, 2000);
    }, 3000);
}

//Show modal and display image
function dpy(path) {
    m.style.color="yellow";
    m.innerHTML="Loading...";
    g.style.background="var(--color)";
    setTimeout(function(){
    g.style.background="greenyellow";
    m.style.color="greenyellow";
    m.innerHTML=`Code founded please wait!`;
    setTimeout(function(){
    p.style.display="block";
    i.src = path;
    m.innerHTML=`...`;
    g.style.background="transparent";
    f.reset();
   }, 2000);
   }, 3000);
}

//Close Open modals
function openAbout() {
    c.style.display="block";
    a.style.display="block";
    o.style.display="none";
}
function closeAbout() {
    c.style.display="none";
    a.style.display="none";
    o.style.display="block";
}
function closeModal() {
    p.style.display="none";
}

//Made with Jan Liby Dela Costa(libyzxy0).
