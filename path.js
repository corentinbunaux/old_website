const button = document.querySelectorAll(".btn_path");
const charging = document.querySelector("#charging");
const contenu = document.querySelector(".contenu");
const tennis = document.querySelector(".aboutme button");
const decouvrir = document.getElementById('decouvrir');
const path_slides = document.querySelectorAll(".slides");
const btn_activation = document.querySelectorAll(".card_col .btn_activation");
const card = document.querySelector(".card_col");
const cross = document.querySelectorAll(".cross");
const langue = document.querySelector("html").attributes.lang.value; //fr ou en

var chargement_progress_bar = 0;
var orientation = '';
var mql = window.matchMedia("(orientation: portrait)");//récupère l'orientation du site
PrintOrientationChange(); //récupère l'orientation à l'ouverture du site

mql.addListener(PrintOrientationChange); //appelle la fonction à chaque changemen de mql

function PrintOrientationChange() {//met à jour l'orientation du site
    if (mql.matches) {
        orientation = 'portrait';
        charging.style.height = chargement_progress_bar + '%';
        charging.style.width = 100 + '%';
        document.querySelector(".navbar-toggler-icon").style.height = '5rem'
        document.querySelector(".navbar-toggler-icon").style.width = '5rem'

    } else {
        orientation = 'paysage';
        charging.style.height = 50 + '%';
        charging.style.width = chargement_progress_bar + '%';
        document.querySelector(".navbar-toggler-icon").style.height = ''
        document.querySelector(".navbar-toggler-icon").style.width = ''
    }
}

//afficher le contenu selon la colonne surlignée dans projets
for (let elem = 0; elem < btn_activation.length; elem++) {
    btn_activation[elem].addEventListener("click", () => {

        function HigherSize() {
            for (let i = 0; i < card.children.length; i++) {
                if (i != elem) {
                    card.children[i].classList.add("flex_0");
                    card.children[i].classList.remove("flex_1");
                }
            }
        }

        //augmente taille colonne
        HigherSize();

        //affiche le contenu selon celle selectionnée
        card.children[elem].children[0].classList.remove('opacity-0');
        card.children[elem].children[0].classList.add('opacity-100');
        card.children[elem].children[1].classList.remove('opacity-100');
        card.children[elem].children[1].classList.add('opacity-0');
    });

    cross[elem].addEventListener("click", () => {

        function LowerSize() {
            for (let i = 0; i < card.children.length; i++) {
                if (i != elem) {
                    card.children[i].classList.remove("flex_0");
                    card.children[i].classList.add("flex_1");
                }
            }
        }
        LowerSize();

        card.children[elem].children[1].classList.remove('opacity-0');
        card.children[elem].children[1].classList.add('opacity-100');
        card.children[elem].children[0].classList.remove('opacity-100');
        card.children[elem].children[0].classList.add('opacity-0');
    });


}

//Découvre le bandeau du parcours
function SupprDecouvrir() {
    decouvrir.style.zIndex = -1;
}

//Apparition des bulles dans le parcours
function ApparaitreSlides() {
    for (let elem = 0; elem < path_slides.length; elem++) {
        if (path_slides[elem].childNodes.length) {
            path_slides[elem].children[0].style.opacity = 1;
        }
    }
}
//Disparition des bulles dans le parcours
function DisparaitreSlides() {
    for (let elem = 0; elem < path_slides.length; elem++) {
        if (path_slides[elem].childNodes.length) {
            path_slides[elem].children[0].style.opacity = 0;
        }
    }
}

//génére la barre de progression de parcours
function GenereProgression() {
    document.querySelector(".ensemble").classList.add("opacity-100");
    chargement_progress_bar = 13;
    if (mql.matches) {
        charging.style.height = chargement_progress_bar + '%';
    }
    else {
        charging.style.width = chargement_progress_bar + '%';
    }

    decouvrir.style.opacity = 0;
    setTimeout(SupprDecouvrir, 500);
    if (langue == 'fr') {
        path_slides[1].innerHTML = '';
        path_slides[0].innerHTML = `<div class="position-absolute formation formation_mse">
        <h3>École des Mines de Saint-Étienne</h3>
            <p>
                <strong>I</strong><span>ngénieur</span>
                <strong>S</strong><span>pécialité</span>
                <strong>M</strong><span>icroélectronique et</span>
                <strong>In</strong>formatique<span></span>
            </p>
            <p>
                <span>Rang français :</span> <strong>11e</strong><span>.</span> <span>Rang
                    mondial :</span> <strong>Top 501-600</strong><span>.</span>
            </p>
            <button class="cta">
                <span>En savoir plus</span>
                <svg viewBox="0 0 13 10" height="10px" width="15px">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                </svg>
            </button>
    </div>`;
        const cta = document.querySelector(".cta");

        cta.addEventListener("click", function () {
            window.open("https://www.mines-stetienne.fr/formation/ismin/");
        });
    }
    else {
        path_slides[1].innerHTML = '';
        path_slides[0].innerHTML = `<div class="position-absolute formation formation_mse">
        <h3>Mines Saint-Etienne Engineering</h3>
        <p>
            INSMIN's program : "Engineer Specialized in Microelectronics and Computer Science"
        </p>
        <p>Equivalent to a <strong>Master's degree</strong></p>
        <p>
            <span>French Ranking:</span> <strong>11th</strong><span>.</span> <span>World Ranking:</span>
            <strong>Top 501-600</strong><span>.</span>
        </p>
        <button class="cta">
            <span>Learn more</span>
            <svg viewBox="0 0 13 10" height="10px" width="15px">
                <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
        </button>
    </div>
    `;
        const cta = document.querySelector(".cta");

        cta.addEventListener("click", function () {
            window.open("https://www.mines-stetienne.fr/en/academic/ismin-masters-degree-in-microelectronics-and-computer-science/");
        });
    }

    setTimeout(ApparaitreSlides, 300);
}

//animation du bandeau pour parcours
document.querySelector(".btn_start").addEventListener("click", function () {
    GenereProgression();
});

//évolution de la barre de progression au fil des clics + génération des slides
for (let elem = 0; elem < button.length; elem++) {
    button[elem].addEventListener("click", function () {

        //anime les boutons selon celui activé
        for (let i = 0; i <= elem; i++) {
            button[i].classList.add('checked');
            button[i].classList.add('checked_' + i);
            if (i != button.length - 1) {
                button[i + 1].classList.add('opacity-100');
            }
        }
        for (let i = button.length - 1; i > elem; i--) {
            button[i].classList.remove('checked');
            button[i].classList.remove('checked_' + i);
        }
        for (let i = button.length - 1; i > elem + 1; i--) {
            button[i].classList.remove('opacity-100');
        }

        switch (elem) {

            case 0:
                chargement_progress_bar = 13;
                DisparaitreSlides;

                if (langue == 'fr') {
                    path_slides[1].innerHTML = '';
                    path_slides[0].innerHTML = `<div class="position-absolute formation formation_mse">
        <h3>École des Mines de Saint-Étienne</h1>
            <p>
                <strong>I</strong><span>ngénieur</span>
                <strong>S</strong><span>pécialité</span>
                <strong>M</strong><span>icroélectronique et</span>
                <strong>In</strong>formatique<span></span>
            </p>
            <p>
                <span>Rang français :</span> <strong>11e</strong><span>.</span> <span>Rang
                    mondial :</span> <strong>Top 501-600</strong><span>.</span>
            </p>
            <button class="cta">
                <span>En savoir plus</span>
                <svg viewBox="0 0 13 10" height="10px" width="15px">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                </svg>
            </button>
    </div>`;
                    const cta = document.querySelector(".cta");

                    cta.addEventListener("click", function () {
                        window.open("https://www.mines-stetienne.fr/formation/ismin/");
                    });

                }
                else {
                    path_slides[1].innerHTML = '';
                    path_slides[0].innerHTML = `<div class="position-absolute formation formation_mse">
                    <h3>Mines Saint-Etienne Engineering</h3>
                    <p>
                        INSMIN's program : "Engineer Specialized in Microelectronics and Computer Science"
                    </p>
                    <p>Equivalent to a <strong>Master's degree</strong></p>
                    <p>
                        <span>French Ranking:</span> <strong>11th</strong><span>.</span> <span>World Ranking:</span>
                        <strong>Top 501-600</strong><span>.</span>
                    </p>
                    <button class="cta">
                        <span>Learn more</span>
                        <svg viewBox="0 0 13 10" height="10px" width="15px">
                            <path d="M1,5 L11,5"></path>
                            <polyline points="8 1 12 5 8 9"></polyline>
                        </svg>
                    </button>
                </div>
                `;
                    const cta = document.querySelector(".cta");

                    cta.addEventListener("click", function () {
                        window.open("https://www.mines-stetienne.fr/en/academic/ismin-masters-degree-in-microelectronics-and-computer-science/");
                    });
                }
                setTimeout(ApparaitreSlides, 100);
                break;

            case 1:
                chargement_progress_bar = 38;
                DisparaitreSlides;
                if (langue == 'fr') {
                    path_slides[1].innerHTML = `<div class="position-absolute formation formation_vh">
                    <h3>CPGE - Lycée Victor Hugo</h3>
                    <h5>Caen</h5>
                        <p>
                            <strong>P</strong><span>hysique &</span>
                            <strong>S</strong><span>ciences</span>
                            <strong>I</strong><span>ndustrielles</span>
                        </p>
                        <p>
                            <span>Admission</span> <span>concours</span>
                            <strong>Mines-Telecom</strong><span>.</span>
                        </p>
                </div>`;
                    path_slides[0].innerHTML = '';
                }
                else {
                    path_slides[1].innerHTML = `<div class="position-absolute formation formation_vh">
                    <h3>CPGE - Victor Hugo's High School</h3>
                    <h5>Caen</h5>
                        <p>
                            <strong>P</strong><span>hysics &</span>
                            <strong>S</strong><span>ciences of the</span>
                            <strong>I</strong><span>ndutry</span>
                        </p>
                        <p>
                            <span>Admission</span> <span>competition</span>
                            <strong>Mines-Telecom</strong><span>.</span>
                        </p>
                </div>`;
                    path_slides[0].innerHTML = '';
                }

                setTimeout(ApparaitreSlides, 100);
                break;

            case 2:
                chargement_progress_bar = 63;
                DisparaitreSlides;
                if (langue == 'fr') {
                    path_slides[1].innerHTML = '';
                    path_slides[0].innerHTML = `                            <div class="position-absolute formation formation_f1">
                    <h3>CPGE - Lycée François 1er</h3>
                    <h5>Le Havre</h5>
                    <p>
                    <strong>C</strong><span>lasses</span>
                    <strong>P</strong><span>réparatoires aux</span>
                    <strong>G</strong><span>randes</span>
                    <strong>E</strong><span>coles</span>
                    </p>
                    <p>
                        <strong>P</strong><span>hysique</span>
                        <strong>C</strong><span>himie &</span>
                        <strong>S</strong><span>ciences</span>
                        <strong>I</strong><span>ndustrielles</span>
                    </p>
                </div>`;
                }
                else {
                    path_slides[1].innerHTML = '';
                    path_slides[0].innerHTML = `                            <div class="position-absolute formation formation_f1">
                    <h3>CPGE - François 1st's High School</h3>
                    <h5>Le Havre</h5>
                    <p>
                    <strong>CPGE</strong> are a two-year undergraduate intensive course in mathematics and physics to prepare for the competitive entrance exams to the French "Grandes Ecoles" (high level graduate engineering /business school).
                    </p>
                    <p>
                        <strong>P</strong><span>hysics,</span>
                        <strong>C</strong><span>hemistry &</span>
                        <strong>S</strong><span>ciences of the</span>
                        <strong>I</strong><span>ndutry</span>
                    </p>
                </div>`;
                }

                setTimeout(ApparaitreSlides, 100);
                break;

            case 3:
                chargement_progress_bar = 95;
                DisparaitreSlides;
                if (langue == 'fr') {
                    path_slides[1].innerHTML = `<div class="position-absolute formation formation_glc">
                    <h3>Lycée Guillaume Le Conquérant</h3>
                    <h5>Lillebonne</h5>
                    <p>
                        <span>Baccalauréat série</span> <strong>S</strong><span>cientifique</span> <span>-
                            option SVT,</span>
                    </p>
                    <p>
                        <span>Admis mention</span> <strong>Très Bien</strong>
                    </p>
                </div>`;
                    path_slides[0].innerHTML = '';
                }
                else {
                    path_slides[1].innerHTML = `<div class="position-absolute formation formation_glc">
                    <h3>William The Conqueror's High School</h3>
                    <h5>Lillebonne</h5>
                    <p>
                        <span>Baccalauréat with major in</span> <strong>Sciences</strong><span></span> <span>-
                            biology option</span>
                    </p>
                    <p>
                        <strong>First class honors</strong>
                    </p>
                </div>`;
                    path_slides[0].innerHTML = '';
                }

                setTimeout(ApparaitreSlides, 100);
                break;
        }

        if (orientation == 'paysage') {
            charging.style.width = chargement_progress_bar + '%';
        }
        else {
            charging.style.height = chargement_progress_bar + '%';
        }
    })
};


//animation balle de tennis
tennis.addEventListener("click", function () {
    console.log('tennis');
    document.querySelector(".tennis_ball").innerHTML = `<div class="origin_ball">
    <div class="ball border border-3 border-dark"></div>
</div>`;
});


//déroulement progressif
const ratio = .3
const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
}

const handleIntersect = function (entries, observer) {
    entries.forEach(function (entry) {
        if (entry.intersectionRatio > ratio) {
            entry.target.classList.add('reveal-visible')
            observer.unobserve(entry.target)
        }
    });
}

const observer = new IntersectionObserver(handleIntersect, options)
document.querySelectorAll(".reveal").forEach(function (r) {
    observer.observe(r)
})

//scroll ajusté 
const sections = document.querySelectorAll("section")
const nav_link = document.querySelectorAll(".nav-link")
for (let elem = 0; elem < nav_link.length; elem++) {
    nav_link[elem].addEventListener("click", () => {
        window.scroll({
            top: sections[elem].offsetTop - document.querySelector("nav").offsetHeight,
            left: sections[elem].offsetLeft,
            behavior: "smooth",
        });
    })
}



//DARKMODE
const body = document.querySelector("body")
const header = document.querySelector("header")
const translation = document.querySelector("#dropdownMenuButton")
const profile = document.querySelector(".profile")
const path = document.querySelector(".path")
const competences = document.querySelector(".competences")
const projects = document.querySelector(".projects")
const aboutme = document.querySelector(".aboutme")
const footer = document.querySelector("footer")
const svg = document.querySelectorAll("svg")
/*recuère l'ensemble du document*/
let checkbox = document.querySelector("header input")
let checked = checkbox.checked
/*recupère le toggle*/
GenereTheme(checked)
ChangeColorSVG(checked)

checkbox.addEventListener("change", () => {
    checked = checkbox.checked
    GenereTheme(checked)
});

function GenereLight() {
    body.classList.add("bg-light");
    header.classList.add("light__header")
    header.children[0].classList.add("navbar-light")
    translation.innerHTML = `<img src="language.png" alt="Language" style="height: 2.4rem;">`
    profile.classList.add("light__profile")
    path.classList.add("light__path")
    competences.classList.add("light__competences")
    projects.classList.add("light__projects")
    aboutme.classList.add("light__aboutme")
    footer.classList.add("light__footer")

    body.classList.remove("bg-dark");
    header.classList.remove("dark__header")
    header.children[0].classList.remove("navbar-dark")
    profile.classList.remove("dark__profile")
    path.classList.remove("dark__path")
    competences.classList.remove("dark__competences")
    projects.classList.remove("dark__projects")
    aboutme.classList.remove("dark__aboutme")
    footer.classList.remove("dark__footer")
}

function GenereDark() {
    body.classList.remove("bg-light");
    header.classList.remove("light__header")
    header.children[0].classList.remove("navbar-light")
    profile.classList.remove("light__profile")
    path.classList.remove("light__path")
    competences.classList.remove("light__competences")
    projects.classList.remove("light__projects")
    aboutme.classList.remove("light__aboutme")
    footer.classList.remove("light__footer")

    body.classList.add("bg-dark");
    header.classList.add("dark__header")
    header.children[0].classList.add("navbar-dark")
    translation.innerHTML = `<img src="language_dark.png" alt="Language" style="height: 2.4rem;">`
    profile.classList.add("dark__profile")
    path.classList.add("dark__path")
    competences.classList.add("dark__competences")
    projects.classList.add("dark__projects")
    aboutme.classList.add("dark__aboutme")
    footer.classList.add("dark__footer")
}

function GenereTheme(checked) {
    if (checked) {
        GenereDark()
    }
    else {
        GenereLight()
    }
    ChangeColorSVG(checked)
}

function ChangeColorSVG(checked) {
    if (checked) {
        for (let elem in svg) {
            if (svg[elem].id == 'linkedin' || svg[elem].id == 'github' || svg[elem].id == 'mail') {
                svg[elem].style.fill = "#e8e8e8"
            }
            else if (svg[elem].id == 'html5') {
                svg[elem].children[0].style.fill = "#8D9EA5"
                svg[elem].children[1].style.fill = "#2A465C"
                svg[elem].children[2].style.fill = "#e8e8e8"
                svg[elem].children[3].style.fill = "#e8e8e8"
            }
            else if (svg[elem].id == 'css3') {
                svg[elem].children[0].style.fill = "#8D9EA5"
                svg[elem].children[1].style.fill = "#2A465C"
                svg[elem].children[2].style.fill = "#e8e8e8"
                svg[elem].children[3].style.fill = "#e8e8e8"
                svg[elem].children[4].style.fill = "#e8e8e8"
                svg[elem].children[5].style.fill = "#e8e8e8"
            }
            else if (svg[elem].id == 'javascript') {
                svg[elem].children[0].style.fill = "#8D9EA5"
                svg[elem].children[1].style.fill = "#e8e8e8"
            }
            else if (svg[elem].id == 'c') {
                svg[elem].children[0].style.fill = "#8D9EA5"
                svg[elem].children[1].style.fill = "#2A465C"
                svg[elem].children[2].style.fill = "#e8e8e8"
            }
            else if (svg[elem].id == 'c++') {
                svg[elem].children[0].style.fill = "#8D9EA5"
                svg[elem].children[1].style.fill = "#2A465C"
                svg[elem].children[2].style.fill = "#2A465C"
                svg[elem].children[3].style.fill = "#2A465C"
                svg[elem].children[4].style.fill = "#e8e8e8"
                svg[elem].children[5].style.fill = "#e8e8e8"
            }
            else if (svg[elem].id == 'python') {
                svg[elem].children[0].style.fill = "#e8e8e8"
                svg[elem].children[1].style.fill = "#e8e8e8"
                svg[elem].children[2].style.fill = "#8D9EA5"
            }
        }
    }
    else {
        for (let elem in svg) {
            if (svg[elem].id == 'linkedin' || svg[elem].id == 'github' || svg[elem].id == 'mail') {
                svg[elem].style.fill = "#272424"
            }
            else if (svg[elem].id == 'html5') {
                svg[elem].children[0].style.fill = "#272424"
                svg[elem].children[1].style.fill = "#585A56"
                svg[elem].children[2].style.fill = "#F1F3F2"
                svg[elem].children[3].style.fill = "#F1F3F2"
            }
            else if (svg[elem].id == 'css3') {
                svg[elem].children[0].style.fill = "#272424"
                svg[elem].children[1].style.fill = "#585A56"
                svg[elem].children[2].style.fill = "#F1F3F2"
                svg[elem].children[3].style.fill = "#F1F3F2"
                svg[elem].children[4].style.fill = "#F1F3F2"
                svg[elem].children[5].style.fill = "#F1F3F2"
            }
            else if (svg[elem].id == 'javascript') {
                svg[elem].children[0].style.fill = "#272424"
                svg[elem].children[1].style.fill = "#F1F3F2"
            }
            else if (svg[elem].id == 'c') {
                svg[elem].children[0].style.fill = "#585A56"
                svg[elem].children[1].style.fill = "#272424"
                svg[elem].children[2].style.fill = "#F1F3F2"
            }
            else if (svg[elem].id == 'c++') {
                svg[elem].children[0].style.fill = "#585A56"
                svg[elem].children[1].style.fill = "#272424"
                svg[elem].children[2].style.fill = "#272424"
                svg[elem].children[3].style.fill = "#272424"
                svg[elem].children[4].style.fill = "#F1F3F2"
                svg[elem].children[5].style.fill = "#F1F3F2"
            }
            else if (svg[elem].id == 'python') {
                svg[elem].children[0].style.fill = "#272424"
                svg[elem].children[1].style.fill = "#272424"
                svg[elem].children[2].style.fill = "#585A56"
            }
        }
    }
}
