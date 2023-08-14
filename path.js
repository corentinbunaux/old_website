const button = document.querySelectorAll(".btn_path");
const charging = document.querySelector("#charging");
const contenu = document.querySelector(".contenu");
const tennis = document.querySelector(".aboutme button");
const decouvrir = document.getElementById('decouvrir');
const path_slide_top = document.getElementById("slide_top");
const path_slide_bottom = document.getElementById("slide_bottom");
//console.log(path_slide_bottom, path_slide_top);



//afficher le contenu selon la colonne surlignée dans projets
const card = document.querySelector(".card");
for (let elem = 0; elem < card.children.length; elem++) {
    card.children[elem].addEventListener("mouseover", (event) => {
        switch (elem) {
            case 0:
                card.children[elem].innerHTML = `Automatisation des machines chez Kusmi Tea`;
                break;
            case 1:
                card.children[elem].innerHTML = `Projets d'info des Mines, TIPE`;
                break;
            case 2:
                card.children[elem].innerHTML = `Portfolio`;
                break;
        }
    },
        false,
    );
    card.children[elem].addEventListener("mouseout", (event) => {
        switch (elem) {
            case 0:
                card.children[elem].innerHTML = `<p class="stage"><span class="border fs-2">STAGES</span></p>`;
                break;
            case 1:
                card.children[elem].innerHTML = `<p class="pro"><span class="border fs-2">PROFESSIONNEL</span></p>`;
                break;
            case 2:
                card.children[elem].innerHTML = `<p class="perso"><span class="border fs-2">PERSONNEL</span></p>`;
                break;
        }

    },
        false,
    );
}


//teste l'orientation du site
var mql = window.matchMedia("(orientation: portrait)");
mql.addListener(handleOrientationChange);
handleOrientationChange(mql);

function handleOrientationChange(mql) {
    if (mql.matches) {//portrait

    } else {//paysage
    }
}


//découvre la barre de progression de parcours
function GenereProgression() {
    decouvrir.innerHTML = ``;
    decouvrir.style.zIndex = -1;
    console.log(decouvrir);
    path_slide_bottom.innerHTML = `                            <div
    class="position-absolute date date_mse fs-5 p-1 rounded-pill d-flex justify-content-center align-items-center">
    2025 - 2022</div>`;
    path_slide_top.innerHTML = `<div class="position-absolute formation formation_mse">
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
    console.log(cta);

    cta.addEventListener("click", function () {
        window.open("https://www.mines-stetienne.fr/formation/ismin/");
    });
}

document.querySelector(".btn_start").addEventListener("click", function () {
    GenereProgression();
});


//évolution de la barre de progression au fil des clics + génération des slides
for (let elem = 0; elem < button.length; elem++) {
    button[elem].addEventListener("click", function () {

        charging.style.width = (elem * 33) + '%';

        //fait déborder la barre au dernier point
        if (elem == button.length - 1) {
            charging.style.width = '103%';
        }

        //anime les boutons selon celui activé
        for (let i = 0; i <= elem; i++) {
            button[i].classList.add('checked');
            button[i + 1].classList.add('opacity-100');
        }
        for (let i = button.length - 1; i > elem; i--) {
            button[i].classList.remove('checked');
        }
        for (let i = button.length - 1; i > elem + 1; i--) {
            button[i].classList.remove('opacity-100');
        }

        switch (elem) {

            case 0:
                path_slide_bottom.innerHTML = `                            <div
                class="position-absolute date date_mse fs-5 p-1 rounded-pill d-flex justify-content-center align-items-center">
                2025 - 2022</div>`;
                path_slide_top.innerHTML = `<div class="position-absolute formation formation_mse">
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
                break;

            case 1:
                path_slide_bottom.innerHTML = `<div class="position-absolute formation formation_vh">
                <h3>CPGE - Lycée Victor Hugo ~ Caen</h1>
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
                path_slide_top.innerHTML = `<div
                class="position-absolute date date_vh fs-5 p-1 rounded-pill d-flex justify-content-center align-items-center">
                2022 - 2021</div>`;
                break;

            case 2:
                path_slide_bottom.innerHTML = ``;
                path_slide_top.innerHTML = ``;
                break;

            case 3:
                path_slide_bottom.innerHTML = ``;
                path_slide_top.innerHTML = ``;
                break;
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