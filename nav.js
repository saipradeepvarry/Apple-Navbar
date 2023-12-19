function switchbutton() {
    const html = document.documentElement;
    html.classList.toggle("ligth");
}

function toogleMenu() {
    const nav = document.querySelector("nav");
    nav.classList.toggle("mobile-active");
}