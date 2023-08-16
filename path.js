const button = document.querySelectorAll(".btn_path");
const charging = document.querySelector("#charging");
const contenu = document.querySelector(".contenu");
const tennis = document.querySelector(".aboutme button");
const decouvrir = document.getElementById('decouvrir');
const path_slides = document.querySelectorAll(".slides");
const card = document.querySelector(".card");

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
function PrintContentProjects() {
    for (let elem = 0; elem < card.children.length; elem++) {
        card.children[elem].addEventListener("click", () => {

            function HigherSize() {
                for (let i = 0; i < card.children.length; i++) {
                    if (i != elem) {
                        card.children[i].classList.add("flex_0");
                        card.children[i].classList.remove("flex_1");
                    }
                }

            }

            function LowerSize() {
                for (let i = 0; i < card.children.length; i++) {
                    if (i != elem) {
                        card.children[i].classList.add("flex_1");
                        card.children[i].classList.remove("flex_0");
                    }
                }
            }

            //augmente taille colonne
            HigherSize();

            //affiche le contenu selon celle selectionnée
            switch (elem) {
                case 0:
                    card.children[elem].innerHTML = `<div class="container">
                    <button class="cross">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 101 101" id="cross">
                            <path
                                d="M83.9 17.1c-.9-.9-2.5-.9-3.4 0l-30 30-30-30c-.9-.9-2.5-.9-3.4 0s-.9 2.5 0 3.4l30 30-30 30c-.9.9-.9 2.5 0 3.4.5.5 1.1.7 1.7.7.6 0 1.2-.2 1.7-.7l30-30 30 30c.5.5 1.1.7 1.7.7.6 0 1.2-.2 1.7-.7.9-.9.9-2.5 0-3.4l-30-30 30-30c.9-.9.9-2.4 0-3.4z">
                            </path>
                        </svg>
                    </button>
                </div>`;
                    break;
                case 1:
                    card.children[elem].innerHTML = `<div class="container">
                    <button class="cross">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 101 101" id="cross">
                            <path
                                d="M83.9 17.1c-.9-.9-2.5-.9-3.4 0l-30 30-30-30c-.9-.9-2.5-.9-3.4 0s-.9 2.5 0 3.4l30 30-30 30c-.9.9-.9 2.5 0 3.4.5.5 1.1.7 1.7.7.6 0 1.2-.2 1.7-.7l30-30 30 30c.5.5 1.1.7 1.7.7.6 0 1.2-.2 1.7-.7.9-.9.9-2.5 0-3.4l-30-30 30-30c.9-.9.9-2.4 0-3.4z">
                            </path>
                        </svg>
                    </button>
                </div>`;
                    break;
                case 2:
                    card.children[elem].innerHTML = `<div class="container">
                    <button class="cross">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 101 101" id="cross">
                            <path
                                d="M83.9 17.1c-.9-.9-2.5-.9-3.4 0l-30 30-30-30c-.9-.9-2.5-.9-3.4 0s-.9 2.5 0 3.4l30 30-30 30c-.9.9-.9 2.5 0 3.4.5.5 1.1.7 1.7.7.6 0 1.2-.2 1.7-.7l30-30 30 30c.5.5 1.1.7 1.7.7.6 0 1.2-.2 1.7-.7.9-.9.9-2.5 0-3.4l-30-30 30-30c.9-.9.9-2.4 0-3.4z">
                            </path>
                        </svg>
                    </button>
                </div>`;
                    break;
            }

            //reset les inscriptions avant l'ouverture des fenêtres
            const cross = document.querySelector(".cross");
            cross.addEventListener("click", () => {
                setTimeout(LowerSize, 0);


                function Resetcross() {
                    switch (elem) {
                        case 0:
                            card.children[elem].innerHTML = `<span class="fs-2">STAGES</span>`;
                            break;
                        case 1:
                            card.children[elem].innerHTML = `<span class="fs-2">PROFESSIONNEL</span>`;
                            break;
                        case 2:
                            card.children[elem].innerHTML = `<span class="fs-2">PERSONNEL</span>`;
                            break;
                    }

                }

                setTimeout(Resetcross, 0);

            });
        });
    }
}

//Découvre le bandeau du parcours
function SupprDecouvrir() {
    decouvrir.style.zIndex = -1;
}

//Apparition des bulles dans le parcours
function ApparaitreSlides() {
    for (let elem = 0; elem < path_slides.length; elem++) {
        if (path_slides[elem].children.length != 0) {
            path_slides[elem].children[0].style.opacity = 1;
        }
    }
}
//Disparition des bulles dans le parcours
function DisparaitreSlides() {
    for (let elem = 0; elem < path_slides.length; elem++) {
        if (path_slides[elem].children.length != 0) {
            path_slides[elem].children[0].style.opacity = 0;
        }
    }
}

//génére la barre de progression de parcours
function GenereProgression() {
    chargement_progress_bar = 13;
    if (mql.matches) {
        charging.style.height = chargement_progress_bar + '%';
    }
    else {
        charging.style.width = chargement_progress_bar + '%';
    }

    decouvrir.style.opacity = 0;
    setTimeout(SupprDecouvrir, 500);

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

                setTimeout(ApparaitreSlides, 100);

                const cta = document.querySelector(".cta");

                cta.addEventListener("click", function () {
                    window.open("https://www.mines-stetienne.fr/formation/ismin/");
                });
                break;

            case 1:
                chargement_progress_bar = 38;
                DisparaitreSlides;
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
                setTimeout(ApparaitreSlides, 100);
                break;

            case 2:
                chargement_progress_bar = 63;
                DisparaitreSlides;
                path_slides[1].innerHTML = '';
                path_slides[0].innerHTML = `                            <div class="position-absolute formation formation_f1">
                <h3>CPGE - Lycée François 1er</h3>
                <h5>Le Havre</h5>

                <p>
                    <strong>P</strong><span>hysique</span>
                    <strong>C</strong><span>himie &</span>
                    <strong>S</strong><span>ciences</span>
                    <strong>I</strong><span>ndustrielles</span>
                </p>
            </div>`;
                setTimeout(ApparaitreSlides, 100);
                break;

            case 3:
                chargement_progress_bar = 95;
                DisparaitreSlides;
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

//teste l'orientation du site



//animation des colonnes pour les projets
PrintContentProjects();



//animation balle de tennis
tennis.addEventListener("click", function () {
    console.log('tennis');
    document.querySelector(".tennis_ball").innerHTML = `<div class="origin_ball">
    <div class="ball border border-3 border-dark"></div>
</div>`;
});
