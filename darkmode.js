const darkmode = document.querySelector(".darkmode");
const head = document.querySelector("header");
const navbar = document.querySelector(".navbar");
const body = document.querySelector("body");
const footer = document.querySelector("footer");
const profile = document.querySelector(".profile");
const competences = document.querySelector(".competences");
const projects = document.querySelector(".projects");
const path = document.querySelector(".path");
const aboutme = document.querySelector(".aboutme");
const carousel = document.querySelector(".carousel");
const progress_bar = document.querySelectorAll(".progress");
const logos = document.querySelectorAll(".competences svg");
let compteur = 0;

const reponse = fetch("http://127.0.0.1:5501/index.html");
console.log(reponse);


darkmode.addEventListener("click", () => {
    compteur++;
    console.log(compteur);

    body.classList.toggle('light__body');
    body.classList.toggle('dark__body');


    head.classList.toggle('light__header');
    head.classList.toggle('dark__header');

    navbar.classList.toggle('navbar-light');
    navbar.classList.toggle('navbar-dark');

    profile.classList.toggle('light__profile');
    profile.classList.toggle('dark__profile');

    competences.classList.toggle('light__competences');
    competences.classList.toggle('dark__competences');

    carousel.classList.toggle('carousel-dark');
    carousel.classList.toggle('carousel.light');

    //couleur des logos
    if (compteur % 2 == 1) {  //si impair = mode sombre
        for (let elem in logos) {
            let ChildNodes = logos[elem].childNodes;
            for (let i in ChildNodes) {
                if (ChildNodes[i].attributes) {
                    if (ChildNodes[i].attributes.fill.textContent == '#272424') { ChildNodes[i].attributes.fill.textContent = '#040C0E'; }
                    else if (ChildNodes[i].attributes.fill.textContent == '#585A56') { ChildNodes[i].attributes.fill.textContent = '#BE9063'; }
                    else { ChildNodes[i].attributes.fill.textContent = '#F1F3F2'; }
                }
            }
        }
    }
    else {
        for (let elem in logos) {
            let ChildNodes = logos[elem].childNodes;
            for (let i in ChildNodes) {
                if (ChildNodes[i].attributes) {
                    if (ChildNodes[i].attributes.fill.textContent == '#040C0E') { ChildNodes[i].attributes.fill.textContent = '#272424'; }
                    else if (ChildNodes[i].attributes.fill.textContent == '#BE9063') { ChildNodes[i].attributes.fill.textContent = '#585A56'; }
                    else { ChildNodes[i].attributes.fill.textContent = '#F1F3F2'; }
                }
            }
        }
    }


    //couleur des barres de progression
    for (let elem = 0; elem < progress_bar.length; elem++) {
        progress_bar[elem].classList.toggle('border-dark');
        progress_bar[elem].classList.toggle('border-light');
    }


    projects.classList.toggle('light__projects');
    projects.classList.toggle('dark__projects');

    path.classList.toggle('light__path');
    path.classList.toggle('dark__path');



    aboutme.classList.toggle('light__aboutme');
    aboutme.classList.toggle('dark__aboutme');

    footer.classList.toggle('light__footer');
    footer.classList.toggle('dark__footer');
});