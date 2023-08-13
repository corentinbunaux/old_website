const button = document.querySelectorAll(".btn_path");
const charging = document.querySelector("#charging");
const contenu = document.querySelector(".contenu");
const tennis = document.querySelector(".aboutme button");
const decouvrir = document.getElementById('decouvrir');
const path_slide_top = document.getElementById("slide_top");
const path_slide_bottom = document.getElementById("slide_bottom");
//console.log(path_slide_bottom, path_slide_top);

const card = document.querySelector(".card");

//afficher le contenu selon la colonne surlignée
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

//message pour les téléphones en mode portrait
let message_error = `
<div class="message">
  <div>
  <span>Veuillez positionner votre</span> <span>écran en mode paysage</span></div>

<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" id="screen-rotation"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M16.48 2.52c3.27 1.55 5.61 4.72 5.97 8.48h1.5C23.44 4.84 18.29 0 12 0l-.66.03 3.81 3.81 1.33-1.32zm-6.25-.77c-.59-.59-1.54-.59-2.12 0L1.75 8.11c-.59.59-.59 1.54 0 2.12l12.02 12.02c.59.59 1.54.59 2.12 0l6.36-6.36c.59-.59.59-1.54 0-2.12L10.23 1.75zm4.6 19.44L2.81 9.17l6.36-6.36 12.02 12.02-6.36 6.36zm-7.31.29C4.25 19.94 1.91 16.76 1.55 13H.05C.56 19.16 5.71 24 12 24l.66-.03-3.81-3.81-1.33 1.32z"></path>
</svg>
  
</div>`

//teste l'orientation du site
var mql = window.matchMedia("(orientation: portrait)");
mql.addListener(handleOrientationChange);
handleOrientationChange(mql);

function handleOrientationChange(mql) {
    if (mql.matches) {//portrait
        const html = document.querySelector("html");
        const deja_tourne = document.querySelector(".error");

        if (!deja_tourne) {
            const error = document.createElement("div");
            error.classList.add('error');
            error.innerHTML = message_error;
            html.appendChild(error);
        }
        else {
            deja_tourne.innerHTML = message_error;
        }

    } else {//paysage
        const error = document.querySelector(".error");
        if (error) {
            error.innerHTML = '';
            error.classList.remove('error');
        }
    }
}


//découvre la barre de progression 
function GenereProgression() {
    decouvrir.innerHTML = ``;
    decouvrir.style.zIndex = '-1000';
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
    })
};

//animation balle de tennis
tennis.addEventListener("click", function () {
    console.log('tennis');
    document.querySelector(".tennis_ball").innerHTML = `<div class="origin_ball">
    <div class="ball border border-3 border-dark"></div>
</div>`;
});

/*
        switch (elem) {

            case 0:
                contenu.innerHTML = `<div class="row">
                <div
                    class="col-8 offset-1 d-flex justify-content-center align-items-center fw-light fs-2 border_color_bottom">
                    <pre><span>Lycée</span> <span>Guillaume Le Conquérant</span></pre>
                </div>
                <div class="col-2 d-flex justify-content-start align-items-center border_color_bottom">
                    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 64 64"
                        viewBox="0 0 64 64" id="school" height="70%">
                        <polygon fill="#585A56"
                            points="23.875 29.768 11.146 29.768 6.39 35.503 23.875 35.503">
                        </polygon>
                        <path fill="#272424" d="M57.6087837,53.6133614V36.6866951H40.1234665v16.9266663H38.151844V26.1322899l1.207962,0.7503815h4.7438698
            l-11.577179-7.1765423v-9.2051458h0.7536545v5.1779661c2.4594269-0.4071445,4.9223251,2.2340069,7.3782845,0.5315037v-5.8877287
            c-2.7083359,1.8772974-5.4201393-1.5242443-8.1319389-0.3062735V8.8591175c0-0.2960701-0.2421684-0.5417051-0.5417042-0.5417051
            c-0.2993431,0-0.5417061,0.245635-0.5417061,0.5417051v10.8672256l-11.5467625,7.1563282h4.7438717l1.2077694-0.7469139v27.4776039
            h-1.9714336V36.6866951H6.3912206v16.9266663H3.5887504v2.0692253h56.8225021v-2.0692253H57.6087837z M11.2833195,51.3524055
            H8.5343657v-2.7487602h2.7489538V51.3524055z M11.2833195,46.5244102H8.5343657V43.77565h2.7489538V46.5244102z
             M11.2833195,41.6964188H8.5343657v-2.748764h2.7489538V41.6964188z M16.5082569,51.3524055h-2.7487602v-2.7487602h2.7487602
            V51.3524055z M16.5082569,46.5244102h-2.7487602V43.77565h2.7487602V46.5244102z M16.5082569,41.6964188h-2.7487602v-2.748764
            h2.7487602V41.6964188z M21.7299232,51.3524055h-2.7487621v-2.7487602h2.7487621V51.3524055z M21.7299232,46.5244102h-2.7487621
            V43.77565h2.7487621V46.5244102z M21.7299232,41.6964188h-2.7487621v-2.748764h2.7487621V41.6964188z M30.962019,51.4095802
            h-2.7487602V48.66082h2.7487602V51.4095802z M30.962019,46.1881065h-2.7487602v-2.748951h2.7487602V46.1881065z
             M30.962019,40.9662514h-2.7487602v-2.748764h2.7487602V40.9662514z M35.7867432,51.4095802h-2.745491V48.66082h2.745491
            V51.4095802z M35.7867432,46.1881065h-2.745491v-2.748951h2.745491V46.1881065z M35.7867432,40.9662514h-2.745491v-2.748764
            h2.745491V40.9662514z M45.0188408,51.3524055h-2.748764v-2.7487602h2.748764V51.3524055z M45.0188408,46.5244102h-2.748764
            V43.77565h2.748764V46.5244102z M45.0188408,41.6964188h-2.748764v-2.748764h2.748764V41.6964188z M50.2405052,51.3524055
            H47.491745v-2.7487602h2.7487602V51.3524055z M50.2405052,46.5244102H47.491745V43.77565h2.7487602V46.5244102z
             M50.2405052,41.6964188H47.491745v-2.748764h2.7487602V41.6964188z M55.4621696,51.3524055h-2.7452965v-2.7487602h2.7452965
            V51.3524055z M55.4621696,46.5244102h-2.7452965V43.77565h2.7452965V46.5244102z M55.4621696,41.6964188h-2.7452965v-2.748764
            h2.7452965V41.6964188z"></path>
                        <polygon fill="#585A56"
                            points="40.124 35.503 57.609 35.503 52.853 29.768 40.124 29.768">
                        </polygon>
                    </svg>
                </div>
            </div>
            <div class="row position-relative">
                <div class="col-10 d-flex justify-content-center align-items-center">
                    <div class="container h-100">
                        <div class="row h-100">
                            <div class="col d-flex justify-content-end align-items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="flask"
                                    height="fit-content">
                                    <path fill="#F1F3F2"
                                        d="M12 2a1.13 1.13 0 0 0-1.13 1.13v10.4L2.16 28.29a1.13 1.13 0 0 0 1 1.71H16V2zm17.84 26.29-8.75-14.76V3.13A1.13 1.13 0 0 0 20 2h-4v28h12.87a1.13 1.13 0 0 0 1-1.71z">
                                    </path>
                                    <path fill="#585A56"
                                        d="M11.06 14.83a1.13 1.13 0 0 0-1.23.52L2.16 28.29a1.13 1.13 0 0 0 1 1.71H16V17.43a11.51 11.51 0 0 0-4.94-2.6Z">
                                    </path>
                                    <path fill="#F1F3F2"
                                        d="m29.84 28.29-8.75-14.76V3.13A1.13 1.13 0 0 0 20 2h-4v28h12.87a1.13 1.13 0 0 0 1-1.71Z">
                                    </path>
                                    <path fill="#272424"
                                        d="m29.84 28.29-4.17-7a1.13 1.13 0 0 0-1.19-.53 8.18 8.18 0 0 1-7.68-2.56c-.26-.26-.53-.51-.8-.74V30h12.87a1.13 1.13 0 0 0 1-1.71Z">
                                    </path>
                                    <path fill="#272424"
                                        d="m29.84 28.29-4.17-7a1.13 1.13 0 0 0-1.19-.53 8.18 8.18 0 0 1-7.68-2.56c-.26-.26-.53-.51-.8-.74V30h12.87a1.13 1.13 0 0 0 1-1.71Z">
                                    </path>
                                </svg>
                            </div>
                            <div
                                class="col-10 d-flex justify-content-center align-items-center fw-light fs-1">
                                <pre><span>Baccalauréat série Scientifique-SVT</span></pre>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="date_lycee d-flex justify-content-center align-items-center fw-light fs-3">
                        2017 -
                        2020</div>
                </div>
            </div>
            <div class="row">
            <div class="col-2 offset-2 d-flex justify-content-start align-items-center border_color_top">
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 3" viewBox="0 0 64 64"
                id="certificate" height="70%">
                <path fill="#272424"
                    d="M42.86,46.75H12.53c-1.26,0-2.28-1.02-2.28-2.28V20.28c0-1.26,1.02-2.28,2.28-2.28H50.72c1.26,0,2.28,1.02,2.28,2.28v17.29c.02,.64,1,.66,1,0V20.28c0-1.81-1.47-3.28-3.28-3.28H12.53c-1.81,0-3.28,1.47-3.28,3.28v24.19c0,1.81,1.47,3.28,3.28,3.28h30.33c.64,0,.58-.99,0-1Z">
                </path>
                <path fill="#272424"
                    d="M43 23c.55 0 1-.45 1-1v-1c0-.55-.45-1-1-1H21c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h22zm-22-2h22v1H21v-1zM48.72 26H15.28c-.28 0-.5.22-.5.5s.22.5.5.5H48.72c.28 0 .5-.22.5-.5s-.22-.5-.5-.5zM42.47 31h4.03c.28 0 .5-.22.5-.5s-.22-.5-.5-.5h-4.03c-.28 0-.5.22-.5.5s.22.5.5.5zM36.75 30.5c0-.28-.22-.5-.5-.5H15.28c-.28 0-.5.22-.5.5s.22.5.5.5h20.97c.28 0 .5-.22.5-.5zM31 34.5c0-.28-.22-.5-.5-.5H15.28c-.28 0-.5.22-.5.5s.22.5.5.5h15.22c.28 0 .5-.22.5-.5zM34 34.5c0 .28.22.5.5.5h6.03c.28 0 .5-.22.5-.5s-.22-.5-.5-.5h-6.03c-.28 0-.5.22-.5.5zM47.5 34h-4.12c-.28 0-.5.22-.5.5s.22.5.5.5h4.12c.28 0 .5-.22.5-.5s-.22-.5-.5-.5z">
                </path>
                <path fill="#272424"
                    d="M58.67,45.92l-1.67-1.98,.88-2.45c.22-.62,.13-1.31-.25-1.84-.17-.24-.38-.44-.63-.58V15c0-.55-.45-1-1-1H7.25c-.55,0-1,.45-1,1V49.75c0,.55,.45,1,1,1H44.74c.35,.3,.8,.46,1.27,.46,.12,0,.24,0,.36-.03l1.63-.29v6.11c0,.4,.24,.77,.62,.92,.12,.06,.25,.08,.38,.08,.26,0,.52-.1,.71-.29l1.29-1.3,1.29,1.3c.19,.19,.45,.29,.71,.29,.13,0,.26-.02,.38-.08,.38-.15,.62-.52,.62-.92v-4.81s.03-.06,.04-.09l.49-1.35h1.47c.55,0,1-.45,1-1v-.46l.48-.09c.72-.13,1.29-.61,1.54-1.3,.25-.68,.12-1.42-.35-1.98Zm-51.42,3.83V15H56v23.79h-.01c-.12,0-.24,.01-.36,.03l-1.63,.29-.92,.16-.08-.09-1.6-1.89c-.39-.46-.95-.72-1.54-.72-.86,0-1.6,.52-1.9,1.33l-.88,2.44-2.56,.46c-.72,.13-1.29,.61-1.54,1.3-.25,.68-.12,1.42,.35,1.98l1.67,1.98-.25,.69-.36,1-.27,.76c-.14,.4-.16,.84-.03,1.24H7.25Zm45.75,7.25l-2-2-2,2v-6.18l1.6,1.89c.39,.46,.95,.72,1.54,.72,.31,0,.6-.07,.86-.19v3.76Zm3-7.25h-1.11l.03-.09,1.08-.19v.28Zm1.3-1.53l-.3,.05-1,.18-1.25,.22c-.34,.06-.62,.29-.75,.61-.01,.01-.02,.03-.02,.04l-.16,.43-.36,1-.36,1.01c-.03,.07-.06,.14-.1,.2-.2,.3-.53,.47-.86,.47-.28,0-.57-.12-.77-.36l-1.11-1.32-.56-.66c-.14-.17-.33-.29-.53-.34-.05-.01-.11-.02-.17-.02-.02-.01-.05-.01-.08-.01-.06,0-.12,.01-.17,.02h-.06s-.69,.13-.69,.13l-1.8,.32c-.07,.02-.13,.02-.19,.02-.35,0-.66-.19-.85-.46-.16-.25-.21-.58-.1-.9l.4-1.1,.37-1,.12-.33c.12-.34,.05-.73-.18-1l-1.67-1.98c-.5-.6-.17-1.52,.6-1.66l2.55-.45c.35-.06,.65-.31,.77-.65l.88-2.44c.16-.43,.56-.67,.96-.67,.28,0,.57,.12,.77,.36l1.67,1.98c.18,.22,.43,.35,.7,.36,.03,.01,.05,.01,.08,.01,.06,0,.12-.01,.17-.02l.75-.14,1.8-.32c.07-.01,.13-.01,.19-.01h.01c.56,.01,1,.47,1,1.01,0,.12-.02,.23-.06,.35l-.89,2.43c-.02,.06-.03,.11-.05,.17v.35c.04,.18,.11,.34,.23,.48l.77,.91,.9,1.07c.5,.6,.17,1.52-.6,1.66Z">
                </path>
                <path fill="#272424"
                    d="M53 41.54c-.59-.34-1.27-.54-2-.54-2.21 0-4 1.79-4 4 0 .63.15 1.22.41 1.75.15.33.35.63.59.89.03.04.07.08.1.11.26.28.56.52.9.71.59.34 1.27.54 2 .54s1.41-.2 2-.54c.38-.22.72-.49 1-.82.62-.71 1-1.63 1-2.64s-.38-1.93-1-2.64c-.28-.33-.62-.6-1-.82zm.71 4.75c-.17.36-.41.68-.71.94-.53.48-1.23.77-2 .77-.42 0-.83-.09-1.19-.25-.3-.12-.57-.3-.81-.52-.16-.14-.31-.3-.44-.48-.1-.14-.19-.3-.27-.46-.18-.39-.29-.83-.29-1.29 0-1.66 1.34-3 3-3 .77 0 1.47.29 2 .77.56.49.93 1.19.98 1.98.02.08.02.17.02.25 0 .46-.11.9-.29 1.29zM33.5 43h8c.28 0 .5-.22.5-.5s-.22-.5-.5-.5h-8c-.28 0-.5.22-.5.5s.22.5.5.5zM21.23 41.92c.15.09.29.13.44.13.36 0 .72-.24 1.08-.47.5-.33 1.05-.7 1.67-.59.32.06.51.21.76.41.3.24.68.55 1.29.6.8.07 1.6-.33 2.4-1.15.19-.2.19-.52-.01-.71-.2-.19-.51-.19-.71.01-.58.6-1.09.89-1.6.85-.3-.02-.49-.17-.74-.38-.29-.23-.64-.52-1.21-.62-1-.17-1.8.35-2.39.74-.11.08-.25.17-.37.23.02-.22.1-.56.15-.79.18-.78.37-1.58-.13-2.05-.58-.55-1.79-.58-6.64 2.96-.22.16-.27.48-.11.7.17.22.48.27.7.11 4.46-3.26 5.29-3.06 5.35-3.06.08.15-.06.78-.14 1.11-.18.77-.36 1.58.23 1.96z">
                </path>
            </svg>
        </div>
                <div
                    class="col-6 d-flex justify-content-center align-items-center fw-light fs-2 border_color_top">
                    <pre><span>Mention</span> <span>Très Bien</span></pre>
                </div>
                
            </div>`;
                break;

            case 1:
                contenu.innerHTML = `<div class="row h-100">
                <div class="col-6">
                    <div class="container h-100">
                        <div
                            class="row d-flex justify-content-center align-items-center h-50 border_color_bottom">
                            <div class="container fw-light">
                                <div class="row d-flex justify-content-center align-items-center fs-2 mb-4">
                                    Lycée François 1er - Le Havre
                                </div>
                                <div class="row">
                                    <div class="col d-flex justify-content-center align-items-center">
                                        <strong class="fs-2">C</strong><span class="fs-3">lasses</span>
                                    </div>
                                    <div class="col d-flex justify-content-center align-items-center">
                                        <strong class="fs-2">P</strong><span
                                            class="fs-3">réparatoires</span>
                                    </div>
                                    <div class="col-1 d-flex justify-content-center align-items-center">
                                        <span class="fs-3">aux</span>
                                     </div>
                                    <div class="col d-flex justify-content-center align-items-center">
                                        <strong class="fs-2">G</strong><span class="fs-3">randes</span>
                                    </div>
                                    <div class="col d-flex justify-content-center align-items-center">
                                        <strong class="fs-2">E</strong><span class="fs-3">coles</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row h-50 d-flex justify-content-center align-items-center">
                            <div class="col d-flex justify-content-center align-items-center h-100">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" id="study-lamp"
                                    height="50%">
                                    <g data-name="Layer 2">
                                        <path fill="#585A56"
                                            d="M8.284 53.844a1 1 0 0 1-.674-1.739 8.055 8.055 0 0 1 3.009-1.728 1 1 0 0 1 .596 1.909 6.051 6.051 0 0 0-2.258 1.297.997.997 0 0 1-.673.261Zm-.974 2.26c.057-.17.122-.336.194-.498a1 1 0 1 0-1.831-.806q-.144.329-.259.67a1 1 0 1 0 1.897.634ZM5.957 25.042A1.044 1.044 0 0 1 7 24a1 1 0 0 0 0-2 3.047 3.047 0 0 0-3.044 3.042 1 1 0 0 0 2 0ZM25.71 8.96a1 1 0 0 0 .24-1.394.99.99 0 0 1 .24-1.383 1 1 0 1 0-1.154-1.633 2.992 2.992 0 0 0-.72 4.172 1 1 0 0 0 1.394.239Z">
                                        </path>
                                        <path fill="#BE9063"
                                            d="M54 44.02a5.997 5.997 0 0 1 6-5.993H36a5.993 5.993 0 1 0 0 11.987h24a5.997 5.997 0 0 1-6-5.994zm7.999-15.98a.995.995 0 0 1-.53-.153l-.753-.473a1 1 0 0 1 1.062-1.694l.753.473A1 1 0 0 1 62 28.04zm-4.142-2.599a.995.995 0 0 1-.53-.153l-1.693-1.063a1 1 0 0 1 1.063-1.694l1.693 1.063a1 1 0 0 1-.532 1.847zm-5.082-3.189a.995.995 0 0 1-.53-.153l-1.694-1.063a1 1 0 0 1 1.063-1.694l1.694 1.063a1 1 0 0 1-.532 1.847zm-5.082-3.189a.995.995 0 0 1-.53-.152l-1.694-1.063a1 1 0 0 1 1.062-1.695l1.695 1.063a1 1 0 0 1-.532 1.847zM29 38a1 1 0 0 1-1-1v-2a1 1 0 0 1 2 0v2a1 1 0 0 1-1 1zm0-6a1 1 0 0 1-1-1v-2a1 1 0 0 1 2 0v2a1 1 0 0 1-1 1zm8 4a1 1 0 0 1-.96-.724l-.344-1.194a1 1 0 1 1 1.922-.552l.343 1.194A1.002 1.002 0 0 1 37 36.001zm-1.448-5.038a1 1 0 0 1-.96-.724l-.553-1.922a1 1 0 1 1 1.922-.553l.553 1.922a1.002 1.002 0 0 1-.962 1.277zm24.447 3.07a.995.995 0 0 1-.599-.2l-1.593-1.194a1 1 0 0 1 1.199-1.6l1.594 1.194a1 1 0 0 1-.6 1.8zm-4.795-3.592a.995.995 0 0 1-.599-.2l-1.601-1.2a1 1 0 1 1 1.2-1.6l1.6 1.2a1 1 0 0 1-.6 1.8zm-4.803-3.598a.996.996 0 0 1-.598-.2l-1.6-1.199a1 1 0 1 1 1.198-1.6l1.601 1.199a1 1 0 0 1-.6 1.8zM45.6 23.246a.995.995 0 0 1-.599-.2l-1.601-1.2a1 1 0 0 1 1.2-1.6l1.6 1.2a1 1 0 0 1-.6 1.8zm-1.157 9.45a1 1 0 0 1-.833-.444l-1.11-1.664a1 1 0 0 1 1.664-1.11l1.11 1.664a1 1 0 0 1-.831 1.555zm-3.331-4.99a1 1 0 0 1-.833-.445l-1.11-1.664a1 1 0 0 1 1.664-1.11l1.11 1.664a1 1 0 0 1-.278 1.387.99.99 0 0 1-.554.168z">
                                        </path>
                                        <path fill="#272424"
                                            d="M33.42 23.092a3.991 3.991 0 0 0 6.317-4.457l4.19-2.957a1 1 0 0 0 .24-1.394L41.86 11.02a5.01 5.01 0 0 0-6.093-1.692l-4.097-5.793A6.001 6.001 0 0 0 20.855 5.98a5.947 5.947 0 0 0 .99 4.438l-12.951 8.94A5.99 5.99 0 1 0 5.32 30.793l3.37 17.103A11.01 11.01 0 0 0 2 58.01V62a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1v-3.99a11.002 11.002 0 0 0-9.34-10.856l-3.508-17.795a5.97 5.97 0 0 0 1.722-5.54l12.394-8.557.697.984a4.991 4.991 0 0 0-.44 6.303l2.308 3.264a1 1 0 0 0 1.393.239Zm3.736-1.413a1.989 1.989 0 0 1-1.986.179l2.816-1.988a1.982 1.982 0 0 1-.83 1.809Zm-14.33-15.36a3.967 3.967 0 0 1 1.634-2.587 4.009 4.009 0 0 1 5.576.958l4.037 5.71-6.533 4.61-4.039-5.711a3.965 3.965 0 0 1-.675-2.98ZM3 25.041a4 4 0 1 1 4 3.994 4.002 4.002 0 0 1-4-3.994Zm18.767 30.964H14a1 1 0 0 0 0 2h8V61H4v-2.99a9.004 9.004 0 0 1 8.994-8.994h.012a9.004 9.004 0 0 1 8.761 6.99Zm-9.169-8.97a10.973 10.973 0 0 0-1.99.248L7.402 31.016a5.961 5.961 0 0 0 1.948-.46Zm-.488-25.12a6.036 6.036 0 0 0-1.267-1.472l12.155-8.393 1.116 1.578Zm15.048-.521a2.993 2.993 0 0 1 .72-4.175l8.166-5.763a3.007 3.007 0 0 1 4.183.718l1.73 2.446-13.068 9.22ZM60 51.014a1 1 0 0 0 0-2 4.993 4.993 0 1 1 0-9.987 1 1 0 0 0 0-2H36a6.985 6.985 0 0 0-3.589 12.987A6.985 6.985 0 0 0 36 63h24a1 1 0 0 0 0-2 4.993 4.993 0 1 1 0-9.986ZM31 44.02a5.002 5.002 0 0 1 5-4.993h19.103A6.973 6.973 0 0 0 53.083 43H45a1 1 0 0 0 0 2h8.077a6.972 6.972 0 0 0 2.027 4.014H36a5.002 5.002 0 0 1-5-4.994ZM53.081 55H45a1 1 0 0 0 0 2h8.079a6.973 6.973 0 0 0 2.025 4H36a4.993 4.993 0 1 1 0-9.986h19.103A6.973 6.973 0 0 0 53.081 55Z">
                                        </path>
                                    </g>
                                </svg>
                            </div>
                            <div class="col h-100 position-relative">
                                <div class="date_pcsi fs-3">
                                    <span class="y_2020">2020</span>
                                    <span class="tiret">-</span>
                                    <span class="y_2021">2021</span>
                                </div>
                                <div class="d-flex justify-content-center align-items-center h-100 w-100">
                                    <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
                                        <path fill="#585A56"
                                            d="M831 649q25 149-120.5 183.5t-263.5-1Q329 796 277.5 698t-131-227q-79.5-129 51-199.5t242-67Q551 208 624 271.5t127.5 146Q806 500 831 649Z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="col-5 border_color_left ms-5 pe-5 ps-5">
                    <div class="container h-100 pcsi">
                        <div class="row h-25 d-flex justify-content-center align-items-center">
                            <div class="d-flex justify-content-start ms-5 ps-5 align-items-center fw-light">
                                <strong class="fs-1 maj">P</strong><span class="fs-2">hysique</span>
                            </div>
                        </div>
                        <div class="row h-25 d-flex justify-content-center align-items-center">
                            <div class="d-flex justify-content-start ms-5 ps-5 align-items-center fw-light">
                                <strong class="fs-1 maj">C</strong><span class="fs-2">himie</span>
                            </div>
                        </div>
                        <div class="row h-25 d-flex justify-content-center align-items-center">
                            <div class="d-flex justify-content-start ms-5 ps-5 align-items-center fw-light">
                                <strong class="fs-1 maj">S</strong><span class="fs-2">ciences</span>
                            </div>
                        </div>
                        <div class="row h-25 d-flex justify-content-center align-items-center">
                            <div class="d-flex justify-content-start ms-5 ps-5 align-items-center fw-light">
                                <span><strong class="fs-1 maj">I</strong><span
                                        class="fs-2">ndustrielles</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
                break;

            case 2:
                contenu.innerHTML = `<div class="row h-50 fw-light">
                <div class="col border_color_right">
                    <div class="row d-flex justify-content-center align-items-center fs-2 mb-4 mt-3">
                        Lycée Victor Hugo - Caen
                    </div>
                    <div class="row">
                        <div class="col d-flex justify-content-center align-items-center">
                            <strong class="fs-2">C</strong><span class="fs-3">lasses</span>
                        </div>
                        <div class="col d-flex justify-content-center align-items-center">
                            <strong class="fs-2">P</strong><span class="fs-3">réparatoires</span>
                        </div>
                        <div class="col-1 d-flex justify-content-center align-items-center">
                            <span class="fs-3">aux</span>
                        </div>
                        <div class="col d-flex justify-content-center align-items-center">
                            <strong class="fs-2">G</strong><span class="fs-3">randes</span>
                        </div>
                        <div class="col d-flex justify-content-center align-items-center">
                            <strong class="fs-2">E</strong><span class="fs-3">coles</span>
                        </div>
                    </div>
                </div>
                <div class="col d-flex flex-column">
                    <div class="row h-25 d-flex justify-content-center align-items-center fs-2 mt-5">
                        Admission
                    </div>
                    <div class="row">
                        <span class="d-flex justify-content-center fs-3">concours</span>
                        <strong class="d-flex justify-content-center mt-3 fs-2">Mines-Télécom</strong>
                    </div>
                </div>
            </div>
            <div class="row h-25 bande">
                <div class="col-2 offset-1 h-100 d-flex justify-content-center align-items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" id="exam" height="70%">
                        <path fill="#FFF"
                            d="m24.948 92.901-2.864 10.602c-.695 2.572 3.168 3.604 3.861 1.043l2.864-10.602c.69-2.55-3.171-3.597-3.861-1.043z">
                        </path>
                        <path fill="#FFF"
                            d="M122 116.998H8.618l13.909-51h3.675c-2.802 4.929-1.07 10.265 2.661 13.457l-2.12 7.908c-.385 1.451.927 2.837 2.425 2.456l13.524-3.443a1.983 1.983 0 0 0 1.083-.549l3.142-3.116c2.871 3.359 7.662 5.232 12.688 3.581 2.477 4.264 6.331 6.25 10.525 6.25 3.782 0 7.472-1.831 9.71-5.055 5.513.627 12.306-2.862 14.201-5.136 5.428 2.395 9.885 5.167 27.934 5.38h.023c2.63 0 2.652-3.97.023-4-26.536-.31-27.947-8.158-40.745-10.736l-.013-.001c-4.763-.941-21.243.517-28.41-.234-3.871-.932-6.474-4.649-5.972-8.486v-.018c.515-3.143 2.508-5.278 3.62-5.556 0 0 18.591-1.257 46.216-4.246 2.629-.285 2.197-4.25-.43-3.977l-18.94 2.049c9.497-9.42 14.288-14.183 15.3-15.187 9.64 2.47 29.349 9.349 29.349 9.349 2.241 0 2.782-3.166.646-3.894-7.534-2.57-16.296-5.915-26.697-8.727l13.837-13.725c.919-.919.7-2.195-.026-2.865L99.382 7.553c-.781-.752-2.043-.721-2.794.029L77.293 26.829c-4.494-1.811-10.79-2.627-12.669-2.627-8.886 0-20.746 23.37-27.708 31.673-1.669 1.989-4.674 3.721-7.356 6.123H21c-.902 0-1.692.604-1.93 1.474l-15 55A2.001 2.001 0 0 0 6 120.998h116c2.642 0 2.646-4 0-4zM59.554 82.009l-.003.002-.005.002a7.863 7.863 0 0 1-9.643-1.949l3.304-3.277c1.295.063 4.075.128 10.377.195a7.809 7.809 0 0 1-4.03 5.027zm-18.191.578L31.49 85.1l2.587-9.653 1.197-1.188 7.258 7.167-1.169 1.161zm1.572-15.862c.454 3.326 2.741 7.132 5.361 8.985l-2.924 2.9-7.258-7.167c5.612-5.567 4.147-4.147 4.821-4.718zm20.223 17.719a11.723 11.723 0 0 0 4.508-7.42l8.713.087c.986 2.283 1.854 4.975.721 7.191-3.109 5.678-10.781 5.592-13.942.142zm18.392-.886c.311-2.015-.172-4.571-.847-6.491 1.304-.023 7.994 2.93 9.308 3.503-2.3 1.658-5.803 2.869-8.461 2.988zm16.48-71.765 7.482 7.155c-20.959 20.79-13.537 13.44-34.503 34.235-2.414.12-9.851.507-15.451.958 5.692-5.647-3.377 3.388 42.472-42.348zM39.98 58.445c5.917-7.055 18.802-30.243 24.644-30.243 1.503 0 5.937.608 9.539 1.75C50.42 53.637 63.611 40.519 30.878 72.987c-.503.498-.604 1.201-.785 1.877-.964-1.381-1.855-3.502-.863-5.975 1.729-4.311 7.621-6.71 10.75-10.444z">
                        </path>
                    </svg>
                </div>
                <div class="col-6 h-100 d-flex justify-content-center align-items-center">
                    <div class="container h-100 ">
                        <div class="row h-100">
                            <div class="col m-3">
                                <div class="row h-50 year_top year_right year_bottom"></div>
                                <div class="row h-50 year_left year_bottom"></div>
                            </div>
                            <div class="col m-3">
                                <div class="row h-50 year_top year_right year_left"></div>
                                <div class="row h-50 year_bottom year_right year_left"></div>
                            </div>
                            <div class="col m-3">
                                <div class="row h-50 year_top year_right year_bottom"></div>
                                <div class="row h-50 year_left year_bottom"></div>
                            </div>
                            <div class="col m-3">
                                <div class="row h-50 year_right"></div>
                                <div class="row h-50 year_right"></div>
                            </div>
                            <div class="col m-3">
                                <div class="row h-50 year_bottom"></div>
                                <div class="row h-50 year_top"></div>
                            </div>
                            <div class="col m-3">
                                <div class="row h-50 year_top year_right year_bottom"></div>
                                <div class="row h-50 year_left year_bottom"></div>
                            </div>
                            <div class="col m-3">
                                <div class="row h-50 year_top year_right year_left"></div>
                                <div class="row h-50 year_bottom year_right year_left"></div>
                            </div>
                            <div class="col m-3">
                                <div class="row h-50 year_top year_right year_bottom"></div>
                                <div class="row h-50 year_left year_bottom"></div>
                            </div>
                            <div class="col m-3">
                                <div class="row h-50 year_top year_right year_bottom"></div>
                                <div class="row h-50 year_left year_bottom"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-2 h-100 d-flex justify-content-center align-items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" id="work-force"
                        height="80%">
                        <path fill="#F1F3F2"
                            d="M45.03 48.26c-4.07 3.75-9.37 5.81-14.94 5.81-4.12 0-8.04-1.12-11.47-3.23l.75-.08c.53-.05.92-.53.87-1.06a.968.968 0 0 0-1.06-.87l-3.33.34c-.27.03-.51.16-.68.38-.16.22-.23.49-.18.75l.58 3.3c.08.47.49.8.95.8.06 0 .11 0 .17-.01.53-.09.88-.6.79-1.12l-.17-.95c3.81 2.42 8.18 3.7 12.78 3.7 6.05 0 11.82-2.25 16.25-6.33.39-.36.42-.98.06-1.37a.966.966 0 0 0-1.37-.06zM13.91 16.58c.25 0 .49-.09.68-.28 4.17-4.11 9.68-6.37 15.51-6.37 4.35 0 8.58 1.3 12.17 3.68l-.75.05a.98.98 0 0 0-.91 1.03c.03.51.46.91.97.91h.06l3.34-.21c.27-.02.52-.15.69-.35.17-.21.25-.48.21-.75l-.46-3.32a.97.97 0 0 0-1.92.26l.13.96C39.66 9.48 34.93 8 30.09 8c-6.35 0-12.34 2.46-16.88 6.93-.38.38-.39.99-.01 1.37.2.18.46.28.71.28zm-4.45.24c-3.1 0-5.74 2.03-6.66 4.83-.01 0-.01 0-.01.01 0 0 0 .01-.01.02-.21.68-.34 1.41-.34 2.15 0 3.87 3.15 7.02 7.02 7.02s7.01-3.15 7.01-7.02c.01-3.87-3.14-7.01-7.01-7.01zm0 1.94c2.09 0 3.9 1.27 4.66 3.09-.89-.23-1.55-.65-2.31-1.43a.977.977 0 0 0-1.29-.08c-.12.09-2.56 1.93-5.55 1.13.87-1.6 2.55-2.71 4.49-2.71zm0 10.15c-2.8 0-5.08-2.28-5.08-5.08 0-.16.04-.32.05-.48 2.92.8 5.42-.31 6.59-1 1.03.88 2.07 1.34 3.51 1.55a5.07 5.07 0 0 1-5.07 5.01z">
                        </path>
                        <path fill="#272424"
                            d="M14.13 21.85c-.89-.23-1.55-.65-2.31-1.43a.977.977 0 0 0-1.29-.08c-.12.09-2.56 1.93-5.55 1.13.85-1.61 2.53-2.72 4.48-2.72 2.1.01 3.9 1.28 4.67 3.1z">
                        </path>
                        <path fill="#BE9063"
                            d="M14.54 23.9c-.04 2.77-2.3 5.01-5.07 5.01-2.8 0-5.08-2.28-5.08-5.08 0-.16.04-.32.05-.48 2.92.8 5.42-.31 6.59-1 1.02.88 2.06 1.34 3.51 1.55z">
                        </path>
                        <path fill="#272424"
                            d="M9.2 18.77c-1.27.15-2.37 1.29-2.89 2.9a6.33 6.33 0 0 1-1.33-.18c.82-1.54 2.38-2.62 4.22-2.72z">
                        </path>
                        <path fill="#272424"
                            d="M14.13 21.85c-.72-.18-1.28-.48-1.86-1.01-.63-1.27-1.66-2.08-2.8-2.08a5.06 5.06 0 0 1 4.66 3.09z">
                        </path>
                        <path fill="#BE9063"
                            d="M9.46 28.91c-2.8 0-5.08-2.28-5.08-5.08 0-.16.04-.32.05-.48.53.15 1.06.23 1.56.26-.01.07-.01.15-.01.22 0 2.81 1.56 5.08 3.48 5.08z">
                        </path>
                        <path fill="#BE9063"
                            d="M14.54 23.9c-.04 2.77-2.3 5.01-5.07 5.01 1.91 0 3.47-2.27 3.47-5.08 0-.12 0-.23-.01-.34.48.2 1 .32 1.61.41z">
                        </path>
                        <path fill="#F1F3F2"
                            d="M11.96 31.47h-5C3.12 31.47 0 34.59 0 38.43v7.79c0 .53.44.97.97.97h16.99c.53 0 .97-.44.97-.97v-7.79c0-3.84-3.13-6.96-6.97-6.96zm-1.75 1.94-.38 1.23H9.1l-.38-1.23h1.49zm-1.05 3.17h.59l.91 4.25-1.2 1.28-1.2-1.28.9-4.25zm7.83 8.67H1.94v-6.82c0-2.68 2.11-4.85 4.75-4.99l.69 2.22-1.12 5.26c-.07.31.03.64.24.87l2.26 2.4c.18.19.44.3.71.3.26 0 .52-.11.71-.3l2.25-2.4c.22-.23.31-.56.24-.87l-1.12-5.26.68-2.22c2.65.15 4.76 2.32 4.76 4.99v6.82z">
                        </path>
                        <path fill="#BE9063"
                            d="m10.21 33.41-.38 1.23H9.1l-.38-1.23zM10.67 40.83l-1.21 1.28-1.2-1.28.9-4.25h.6z">
                        </path>
                        <path fill="#272424"
                            d="M16.99 38.43v6.82H1.94v-6.82c0-2.68 2.11-4.85 4.75-4.99l.69 2.22-1.12 5.26c-.07.31.03.64.24.87l2.26 2.4c.18.19.44.3.71.3.26 0 .52-.11.71-.3l2.25-2.4c.22-.23.31-.56.24-.87l-1.12-5.26.68-2.22c2.65.15 4.76 2.32 4.76 4.99z">
                        </path>
                        <path fill="#272424"
                            d="M6.72 33.54c-1.8.46-3.16 2.47-3.16 4.9v6.82H1.94v-6.82c0-2.68 2.11-4.85 4.75-4.99l.03.09z">
                        </path>
                        <path fill="#272424"
                            d="M16.99 38.43v6.82h-1.62v-6.82c0-2.43-1.37-4.44-3.17-4.9l.03-.1c2.65.16 4.76 2.33 4.76 5z">
                        </path>
                        <path fill="#F1F3F2"
                            d="M55.68 25.7a8.851 8.851 0 0 0-6.3-2.61 8.8 8.8 0 0 0-6.3 2.61c-3.47 3.47-3.47 9.12 0 12.61a8.871 8.871 0 0 0 6.3 2.6c2.28 0 4.57-.86 6.3-2.6 3.47-3.48 3.47-9.14 0-12.61zM54.3 36.93a6.977 6.977 0 0 1-9.86 0A6.945 6.945 0 0 1 42.4 32c0-1.86.73-3.62 2.04-4.94 1.32-1.31 3.07-2.04 4.94-2.04s3.61.73 4.93 2.04A6.936 6.936 0 0 1 56.36 32a6.964 6.964 0 0 1-2.06 4.93z">
                        </path>
                        <path fill="#F1F3F2"
                            d="M63.72 28.87a.976.976 0 0 0-.69-.28h-1.95c-.24-.86-.59-1.69-1.02-2.47l1.37-1.37c.38-.38.38-.99 0-1.37l-3.44-3.45c-.37-.36-1.01-.36-1.37 0l-1.38 1.38c-.79-.44-1.61-.78-2.47-1.02v-1.95a.97.97 0 0 0-.97-.97h-4.87c-.26 0-.5.11-.69.29-.18.17-.28.43-.28.68v1.95c-.86.25-1.69.59-2.46 1.03l-1.38-1.38c-.38-.38-1-.38-1.38 0l-3.44 3.44a.993.993 0 0 0 0 1.38l1.38 1.38c-.43.78-.77 1.6-1.02 2.46h-1.95c-.53 0-.97.44-.97.97v4.88c0 .25.11.5.29.68.17.18.43.29.68.29h1.95c.25.85.59 1.68 1.02 2.46l-1.37 1.38c-.18.17-.29.43-.29.68 0 .26.11.5.29.69l3.44 3.44c.18.18.43.29.69.29.25 0 .5-.11.69-.29l1.37-1.37c.79.43 1.61.77 2.47 1.02v1.94c0 .53.44.97.97.97h4.87c.54 0 .97-.44.97-.97v-1.94c.86-.25 1.69-.59 2.47-1.03l1.37 1.38c.38.37 1 .38 1.38-.01l3.44-3.44c.18-.18.29-.43.29-.69 0-.25-.11-.5-.29-.68l-1.37-1.38c.43-.79.77-1.61 1.02-2.46l1.94-.01c.53 0 .97-.43.97-.97v-4.87c0-.26-.11-.5-.28-.69zm-1.66 4.59-1.73.01c-.46 0-.84.31-.95.76-.25 1.17-.71 2.27-1.35 3.28a.98.98 0 0 0 .13 1.21l1.22 1.21L57.31 42l-1.22-1.21a.968.968 0 0 0-1.2-.14 9.837 9.837 0 0 1-3.28 1.36c-.45.1-.77.49-.77.95v1.73h-2.93v-1.73c0-.46-.32-.85-.77-.95-1.16-.25-2.27-.71-3.28-1.35a.955.955 0 0 0-1.2.13l-1.22 1.22-2.08-2.08 1.22-1.22c.32-.32.38-.82.13-1.2-.64-1-1.1-2.1-1.35-3.28-.11-.45-.49-.77-.95-.77l-1.74.01v-2.94h1.74c.46 0 .84-.32.94-.77.26-1.17.72-2.27 1.36-3.27.24-.39.19-.89-.14-1.21l-1.22-1.22L41.44 22l1.22 1.22c.32.32.82.38 1.21.13 1-.64 2.1-1.1 3.28-1.36.44-.1.76-.48.76-.94v-1.74h2.93v1.73c0 .46.32.85.77.95 1.17.26 2.27.72 3.28 1.36.39.24.88.18 1.21-.14l1.21-1.22 2.08 2.08-1.21 1.22a.97.97 0 0 0-.14 1.2c.64 1.01 1.1 2.11 1.36 3.29.1.44.49.76.95.76h1.73v2.92z">
                        </path>
                        <path fill="#272424"
                            d="M60.33 30.53c-.46 0-.85-.32-.95-.76-.26-1.17-.72-2.28-1.36-3.29a.97.97 0 0 1 .14-1.2l1.21-1.22-2.08-2.08-1.21 1.22c-.33.32-.82.38-1.21.14-1.01-.64-2.1-1.1-3.28-1.36a.973.973 0 0 1-.77-.95V19.3H47.9v1.74c0 .46-.32.84-.76.94-1.17.26-2.28.72-3.28 1.36-.39.25-.89.19-1.21-.13L41.44 22l-2.08 2.08 1.22 1.22c.33.32.38.82.14 1.21-.64 1-1.1 2.09-1.36 3.27-.1.45-.48.77-.94.77h-1.74v2.94l1.74-.01c.46 0 .84.32.95.77.25 1.17.71 2.28 1.35 3.28.25.38.19.88-.13 1.2l-1.22 1.22 2.08 2.08 1.22-1.22c.32-.32.82-.38 1.2-.13 1.01.64 2.11 1.1 3.28 1.35.45.1.77.49.77.95v1.73h2.93v-1.73c0-.46.32-.85.77-.95 1.16-.25 2.27-.71 3.28-1.36.39-.24.88-.18 1.2.14L57.31 42l2.08-2.08-1.22-1.21a.98.98 0 0 1-.13-1.21c.64-1.01 1.1-2.1 1.35-3.28.11-.45.49-.76.95-.76l1.73-.01v-2.93h-1.74zM49.38 40.91c-2.28 0-4.57-.86-6.3-2.6-3.47-3.48-3.47-9.13 0-12.61a8.834 8.834 0 0 1 6.3-2.61c2.38 0 4.62.92 6.3 2.61 3.47 3.47 3.47 9.12 0 12.61a8.913 8.913 0 0 1-6.3 2.6z">
                        </path>
                        <path fill="#BE9063"
                            d="M54.3 27.07c-1.32-1.31-3.06-2.04-4.93-2.04a6.968 6.968 0 0 0-6.98 6.98c0 1.86.73 3.61 2.04 4.93 2.72 2.72 7.15 2.72 9.86 0a6.913 6.913 0 0 0 2.05-4.93c.01-1.87-.72-3.62-2.04-4.94zm-2.5 5.9h-2.42a.97.97 0 0 1-.97-.97v-4.75c0-.53.43-.97.97-.97.53 0 .97.44.97.97v3.78h1.45c.53 0 .97.44.97.97 0 .54-.44.97-.97.97z">
                        </path>
                        <path fill="#BE9063"
                            d="M55.34 35.61c-.21.33-.44.65-.7.94-2.73 2.36-6.88 2.25-9.47-.35a6.945 6.945 0 0 1-2.04-4.93c0-1.69.6-3.3 1.69-4.56.29-.25.61-.48.94-.67a6.824 6.824 0 0 0-1.02 3.62c0 1.86.73 3.61 2.04 4.93a6.963 6.963 0 0 0 8.56 1.02z">
                        </path>
                        <path fill="#BE9063"
                            d="M54.64 36.55c-.1.14-.21.25-.34.38a6.977 6.977 0 0 1-9.86 0A6.945 6.945 0 0 1 42.4 32c0-1.86.73-3.62 2.04-4.94.13-.12.24-.23.38-.35a6.949 6.949 0 0 0-1.69 4.56 6.962 6.962 0 0 0 11.51 5.28z">
                        </path>
                        <path fill="#272424"
                            d="M56.3 25.07a9.803 9.803 0 0 0-6.92-2.86c-2.62 0-5.08 1.03-6.93 2.86A9.784 9.784 0 0 0 39.59 32c0 2.62 1.02 5.07 2.86 6.92 3.83 3.82 10.04 3.81 13.86 0A9.729 9.729 0 0 0 59.18 32a9.803 9.803 0 0 0-2.88-6.93zm-.62 13.24a8.871 8.871 0 0 1-6.3 2.6c-2.28 0-4.57-.86-6.3-2.6-3.47-3.48-3.47-9.13 0-12.61a8.834 8.834 0 0 1 6.3-2.61c2.38 0 4.62.92 6.3 2.61 3.47 3.47 3.47 9.13 0 12.61z">
                        </path>
                        <path fill="#272424"
                            d="M52.77 32.01c0 .53-.44.97-.97.97h-2.42a.97.97 0 0 1-.97-.97v-4.75c0-.53.43-.97.97-.97.53 0 .97.44.97.97v3.78h1.45c.53 0 .97.43.97.97z">
                        </path>
                    </svg>
                </div>
            </div>
            <div class="row">
                <div class="col d-flex align-items-center justify-content-end">
                    <div class="fw-light">
                        <strong class="fs-1 maj">P</strong><span class="fs-2">hysique</span>
                    </div>
                </div>
                <div class="col d-flex align-items-center justify-content-center">
                    <div class="fw-light">
                        <strong class="fs-1 maj">S</strong><span class="fs-2">ciences</span>
                    </div>
                </div>
                <div class="col d-flex align-items-center justify-content-start">
                    <div class="fw-light">
                        <strong class="fs-1 maj">I</strong><span class="fs-2">ndustrielles</span>
                    </div>
                </div>
            </div>`;
                break;

            case 3:
                contenu.innerHTML = `<div class="row h-25 border_color_bottom">
                <div class="col-10 fs-1 fw-lighter d-flex justify-content-center align-items-center">
                    Ecole Nationale Supérieure des Mines de Saint-Etienne
                </div>
                <div class="col">
                    <img class="img-fluid mh-100 p-2" src="Logo_Mines_Saint-Étienne.svg.png"
                        alt="Logo des Mines">
                </div>
            </div>
            <div class="row h-75">
            <div class="col">
                <div class="row h-75">
                    <div class="col position-relative d-flex justify-content-center align-items-center">
                        <div
                            class="position-absolute h-100 w-100 d-flex align-items-center justify-content-center">
                            <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 256 256"
                                viewBox="0 0 256 256" id="ranking" width="75%">
                                <path fill="#F1F3F2" d="M84.623,173.094v56.366H37.52v-56.366c0-3.761,3.049-6.81,6.81-6.81h33.482
                    C81.574,166.284,84.623,169.333,84.623,173.094z"></path>
                                <rect width="18.053" height="34.125" x="52.045" y="180.809"
                                    fill="#81A3A7">
                                </rect>
                                <path fill="#F1F3F2" d="M151.552,126.716V229.46h-47.103V126.716c0-3.761,3.049-6.81,6.81-6.81h33.482
                    C148.503,119.906,151.552,122.955,151.552,126.716z"></path>
                                <rect width="18.053" height="80.501" x="118.975" y="134.433"
                                    fill="#81A3A7">
                                </rect>
                                <path fill="#F1F3F2" d="M218.481,191.642v37.818h-47.103v-37.818c0-3.761,3.049-6.81,6.81-6.81h33.482
                    C215.432,184.832,218.481,187.881,218.481,191.642z"></path>
                                <rect width="18.05" height="15.578" x="185.905" y="199.356"
                                    fill="#81A3A7">
                                </rect>
                                <polygon fill="#272424"
                                    points="144.687 66.905 148.608 89.855 128.019 78.997 107.393 89.855 111.351 66.905 94.648 50.637 117.706 47.297 128.019 26.417 138.332 47.297 161.354 50.637">
                                </polygon>
                                <path fill="#272424"
                                    d="M240.569 232.182c1.504 0 2.723-1.22 2.723-2.723 0-1.504-1.22-2.723-2.723-2.723h-19.366v-35.093c0-5.259-4.277-9.536-9.532-9.536h-33.483c-5.255 0-9.532 4.277-9.532 9.536v35.093h-14.38V126.716c0-5.255-4.277-9.532-9.536-9.532h-33.483c-5.255 0-9.532 4.277-9.532 9.532v100.019h-14.38v-53.643c0-5.255-4.277-9.532-9.536-9.532H44.329c-5.255 0-9.532 4.277-9.532 9.532v53.643H15.431c-1.504 0-2.723 1.22-2.723 2.723 0 1.504 1.22 2.723 2.723 2.723C37.253 232.182 188.484 232.182 240.569 232.182zM174.103 191.643c0-2.255 1.833-4.089 4.085-4.089h33.483c2.252 0 4.085 1.833 4.085 4.089v35.093h-41.653V191.643zM107.173 126.716c0-2.252 1.833-4.085 4.085-4.085h33.483c2.255 0 4.089 1.833 4.089 4.085v100.019h-41.657V126.716zM40.243 173.093c0-2.252 1.833-4.085 4.085-4.085h33.483c2.255 0 4.089 1.833 4.089 4.085v53.643H40.243V173.093zM163.944 49.793c-.319-.986-1.17-1.702-2.199-1.851l-21.603-3.135-9.681-19.596c-.922-1.858-3.965-1.858-4.887 0l-9.677 19.596-21.639 3.135c-1.028.149-1.879.869-2.199 1.855-.323.986-.053 2.067.688 2.791l15.674 15.27-3.713 21.532c-.177 1.025.245 2.057 1.082 2.667.837.613 1.947.688 2.872.209l19.355-10.192 19.319 10.188c.877.47 2.002.426 2.869-.202.84-.61 1.259-1.642 1.085-2.663l-3.677-21.539 15.642-15.27C164.001 51.861 164.266 50.779 163.944 49.793zM142.787 64.957c-.642.628-.936 1.528-.784 2.408l2.989 17.504-15.706-8.28c-.816-.43-1.767-.41-2.539-.004l-15.731 8.284 3.018-17.497c.152-.887-.142-1.791-.784-2.415l-12.745-12.415 17.589-2.55c.887-.128 1.656-.684 2.053-1.489l7.869-15.936 7.872 15.936c.397.805 1.167 1.362 2.053 1.489l17.564 2.55L142.787 64.957z">
                                </path>
                            </svg>
                        </div>
                        <div class="position-absolute container h-100">
                            <div class="row h-25">
                                <div
                                    class="fs-4 fw-lighter h-100 d-flex justify-content-center align-items-center">
                                    <div>
                                        <span>Rang français :</span>
                                        <strong>11ème</strong>
                                    </div>
                                </div>
                            </div>
                            <div class="row h-50"></div>
                            <div class="row h-25">
                                <div
                                    class="fs-4 fw-lighter h-100 d-flex justify-content-center align-items-center">
                                    <div>
                                        <strong>Top 501-600</strong>
                                        <span>mondial</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row bubbles h-25 d-flex justify-content-center align-items-center">
                    <div class="position-relative d-flex align-items-center">
                        <div
                            class="col-5 h-100 d-flex justify-content-center align-items-center position-relative">
                            <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"
                                class="position-absolute">
                                <path class="position-relative" fill="#81A3A7"
                                    d="M827.5 738Q655 976 375 885T95 500q0-294 280-385t452.5 147q172.5 238 0 476Z" />
                            </svg>
                            <div class="position-absolute fs-2 fw-lighter mse_date">
                                <strong>2022</strong>
                            </div>
                        </div>
                        <div
                            class="col-3 h-100 d-flex justify-content-center align-items-center position-relative">
                            <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"
                                class="position-absolute">
                                <path fill="#81A3A7"
                                    d="M827.5 738Q655 976 375 885T95 500q0-294 280-385t452.5 147q172.5 238 0 476Z" />
                            </svg>
                            <div class="position-absolute fs-4 fw-lighter mse_date"><strong>-</strong>
                            </div>
                        </div>
                        <div
                            class="col-4 h-100 d-flex justify-content-center align-items-center position-relative">
                            <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"
                                class="position-absolute">
                                <path fill="#81A3A7"
                                    d="M827.5 738Q655 976 375 885T95 500q0-294 280-385t452.5 147q172.5 238 0 476Z" />
                            </svg>
                            <div class="position-absolute fs-3 fw-lighter mse_date">
                                <strong>2025</strong>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            
                <div class="col-5 fs-2 fw-lighter">
                    <div class="row h-75 ms-lg-5">
                        <div class="col h-100">
                            <div class="row h-25">
                                <div class="d-flex align-items-center">
                                    <strong>I</strong><span>ngénieur</span>
                                </div>
                            </div>
                            <div class="row h-25">
                                <div class="d-flex align-items-center">
                                    <strong>S</strong><span>pécialité</span>
                                </div>
                            </div>
                            <div class="row h-25">
                                <div class="d-flex align-items-center">
                                    <strong>M</strong><span>icroélectronique</span>
                                </div>
                            </div>
                            <div class="row h-25">
                                <div class="d-flex align-items-center">
                                    <strong>In</strong><span>formatique</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row h-25 fs-5 bubbles">
                        <button class="cta">
                            <span>En savoir plus</span>
                            <svg viewBox="0 0 13 10" height="10px" width="15px">
                                <path d="M1,5 L11,5"></path>
                                <polyline points="8 1 12 5 8 9"></polyline>
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="col-4 costume border_color_right border_color_left"></div>

                
            </div>`;

                const cta = document.querySelector(".cta");
                console.log(cta);

                cta.addEventListener("click", function () {
                    window.open("https://www.mines-stetienne.fr/lecole/");
                    console.log('ok');
                });
                break;
        }
    });
}
*/