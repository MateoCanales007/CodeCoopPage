// javascript/portafolio.js

const initPortafolio = () => {
    const img1 = document.getElementById('img1'); 
    const img2 = document.getElementById('img2'); 
    const img3 = document.getElementById('img3'); 
    const texto1 = document.getElementById('text-paginaWeb1');
    const texto2 = document.getElementById('text-paginaWeb2');
    const texto3 = document.getElementById('text-paginaWeb3');

    function mostrar() {
        document.querySelector('.contenedor-alerta').classList.add('visible');
    }

    function esconder() {
        document.querySelector('.contenedor-alerta').classList.remove('visible');
    }

    img1.addEventListener('mouseover', mostrar);
    img1.addEventListener('mouseout', esconder);
    texto1.classList.add('textVisible');

    img1.addEventListener('click', () => {
        img1.classList.remove('peque');
        img1.classList.add('grande');
        img2.classList.remove('grande');
        img2.classList.add('peque');
        img3.classList.remove('grande');
        img3.classList.add('peque');

        texto1.classList.add('textVisible');
        texto2.classList.remove('textVisible');
        texto3.classList.remove('textVisible');
    });

    img1.addEventListener('dblclick', () => {
        window.open("https://alejandroahf.github.io/Pagina-let-s-meet/"); 
    });

    img2.addEventListener('click', () => {
        img2.classList.remove('peque');
        img2.classList.add('grande');
        img1.classList.remove('grande');
        img1.classList.add('peque');
        img3.classList.remove('peque');
        img3.classList.add('peque');

        texto1.classList.remove('textVisible');
        texto2.classList.add('textVisible');
        texto3.classList.remove('textVisible');
    });

    img2.addEventListener('dblclick', () => {
        window.open("https://alejandroahf.github.io/Peludos-en-Casa/"); 
    });

    img3.addEventListener('click', () => {
        img3.classList.remove('peque');
        img3.classList.add('grande');
        img2.classList.remove('grande');
        img2.classList.add('peque');
        img1.classList.remove('grande');
        img1.classList.add('peque');

        texto1.classList.remove('textVisible');
        texto2.classList.remove('textVisible');
        texto3.classList.add('textVisible');
    });

    img3.addEventListener('dblclick', () => {
        window.open("https://alejandroahf.github.io/Landingpage-SIMAN/"); 
    });
};

// Exporta la función para ser utilizada en el componente
export default initPortafolio;