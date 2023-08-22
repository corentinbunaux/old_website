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

    } else {
        orientation = 'paysage';
        charging.style.height = 50 + '%';
        charging.style.width = chargement_progress_bar + '%';
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
    }

    setTimeout(ApparaitreSlides, 300);

    const cta = document.querySelector(".cta");

    cta.addEventListener("click", function () {
        window.open("https://www.mines-stetienne.fr/formation/ismin/");
    });
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
            if (i != button.length - 1) {
                button[i + 1].classList.add('opacity-100');
            }
        }
        for (let i = button.length - 1; i > elem; i--) {
            button[i].classList.remove('checked');
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
                }
                setTimeout(ApparaitreSlides, 100);

                const cta = document.querySelector(".cta");

                cta.addEventListener("click", function () {
                    window.open("https://www.mines-stetienne.fr/formation/ismin/");
                });
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

