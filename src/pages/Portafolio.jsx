import React from "react";
import style from "./portafolio.module.css";

class Portafolio extends React.Component {
    constructor(props) {
        super(props);
        this.img1Ref = React.createRef();
        this.img2Ref = React.createRef();
        this.img3Ref = React.createRef();
        this.texto1Ref = React.createRef();
        this.texto2Ref = React.createRef();
        this.texto3Ref = React.createRef();
    }

    componentDidMount() {
        const img1 = this.img1Ref.current; 
        const img2 = this.img2Ref.current; 
        const img3 = this.img3Ref.current; 
        const texto1 = this.texto1Ref.current;
        const texto2 = this.texto2Ref.current;
        const texto3 = this.texto3Ref.current;

        const mostrar = () => {
            document.querySelector(`.${style.contenedorAlerta}`).classList.add('visible');
        };

        const esconder = () => {
            document.querySelector(`.${style.contenedorAlerta}`).classList.remove('visible');
        };

        // Agregar eventos solo si no es móvil
        if (window.innerWidth > 768) {
            img1.addEventListener('mouseover', mostrar);
            img1.addEventListener('mouseout', esconder);
            img2.addEventListener('mouseover', mostrar);
            img2.addEventListener('mouseout', esconder);
            img3.addEventListener('mouseover', mostrar);
            img3.addEventListener('mouseout', esconder);
        }

        // Función común para manejar clics
        const handleClick = (img, textoVisible, ...otros) => {
            img.classList.remove(style.peque);
            img.classList.add(style.grande);
            otros.forEach(other => {
                other.classList.remove(style.grande);
                other.classList.add(style.peque);
            });
            textoVisible.classList.add(style.textVisible);
            [texto1, texto2, texto3].forEach(t => t !== textoVisible ? t.classList.remove(style.textVisible) : null);
        };

        img1.addEventListener('click', () => handleClick(img1, texto1, img2, img3));
        img1.addEventListener('dblclick', () => window.open("https://mybookingkodigoapp.netlify.app/login")); 

        img2.addEventListener('click', () => handleClick(img2, texto2, img1, img3));
        img2.addEventListener('dblclick', () => window.open("https://alejandroahf.github.io/Peludos-en-Casa/")); 

        img3.addEventListener('click', () => handleClick(img3, texto3, img1, img2));
        img3.addEventListener('dblclick', () => window.open("https://alejandroahf.github.io/Landingpage-SIMAN/")); 

}

render() {
    return (
        <main className={style.main}>
            <section>
                <div className={style.contenedorTexto}>
                    <div className={style.tituloTexto}>
                        <h1>PORTAFOLIO</h1>
                    </div>
                    <div className={style.texto}>
                        <p>Estos son algunos de los proyectos que hemos realizado. <br/> Si está en movil, darle doble tap para ver el sitio web.</p>
                    </div>
                </div>
            </section>
            <section className={style.contenedorAlerta}>
                <p>Haga doble clic para ver el sitio web</p>
            </section>
            <section className={style.contenedorPortafolio}>
                <div className={style.contentPaginaWeb}>
                    <img
                        ref={this.img1Ref}
                        className={style.grande}
                        src="https://res.cloudinary.com/dj848z4er/image/upload/v1731042499/jx2ihofaozsobajlvqic.png"
                        alt="Sistema para alojamientos de hotel"
                    />
                    <div ref={this.texto1Ref} className={style.textInvisible}>
                        <p className={style.titleDescription}>Alojamientos</p>
                        <p>Sistema de alojamientos de hotel. <br /> usuario: abner95@example.com <br /> contraseña: $2y$12$uYSt7J5Zwqho9cUpTkWCW.I4OVojaUjwxHMBZs4DBc48xvH.6Rnxa</p>
                    </div>
                </div>
                <div className={style.contentPaginaWeb}>
                    <img
                        ref={this.img2Ref}
                        className={style.peque}
                        src="https://res.cloudinary.com/dksv7n9bg/image/upload/v1726070575/unyvwlpl5ubl4cgl8p1i.png"
                        alt="Página web para la adopción de perritos"
                    />
                    <div ref={this.texto2Ref} className={style.textInvisible}>
                        <p className={style.titleDescription}>Peludos en Casa</p>
                        <p>Se realizó una página web para la adopción de perritos.</p>
                    </div>
                </div>
                <div className={style.contentPaginaWeb}>
                    <img
                        ref={this.img3Ref}
                        className={style.peque}
                        src="https://res.cloudinary.com/dksv7n9bg/image/upload/v1726070576/x82rueeccrjtgmfjqpwq.png"
                        alt="Página web para la empresa Siman"
                    />
                    <div ref={this.texto3Ref} className={style.textInvisible}>
                        <p className={style.titleDescription}>Siman</p>
                        <p>Se realizó una página web para la empresa Siman.</p>
                    </div>
                </div>
            </section>
        </main>
    );
}
}

export default Portafolio;