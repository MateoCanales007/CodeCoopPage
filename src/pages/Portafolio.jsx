import React from "react";
import style from "./portafolio.module.css"; 

class Portafolio extends React.Component {
    render() {
        return (
            <main className={style.main}>
                <section>
                    <div className={style.contenedorTexto}>
                        <div className={style.tituloTexto}>
                            <h1>PORTAFOLIO</h1>
                        </div>
                    </div>
                </section>
                <section className={style.contenedorAlerta}>
                    <p>Haga doble clic para ver el sitio web</p>
                </section>
                <section className={style.contenedorPortafolio}>
                    <div className={style.contentPaginaWeb}>
                        <img 
                            id="img1" 
                            className={style.grande}
                            src="https://res.cloudinary.com/dksv7n9bg/image/upload/v1726070576/hy2u5ndvxxwvmrmmhfrw.png" 
                            alt="Página web para un restaurante" 
                        />
                        <div id="text-paginaWeb1" className={style.textInvisible}>
                            <p className={style.titleDescription}>Let's Meat</p>
                            <p>Se realizó una página web para un restaurante.</p>
                        </div>
                    </div>
                    <div className={style.contentPaginaWeb}>
                        <img 
                            id="img2" 
                            className={style.peque}
                            src="https://res.cloudinary.com/dksv7n9bg/image/upload/v1726070575/unyvwlpl5ubl4cgl8p1i.png" 
                            alt="Página web para la adopción de perritos" 
                        />
                        <div id="text-paginaWeb2" className={style.textInvisible}>
                            <p className={style.titleDescription}>Peludos en Casa</p>
                            <p>Se realizó una página web para la adopción de perritos.</p>
                        </div>
                    </div>
                    <div className={style.contentPaginaWeb}>
                        <img 
                            id="img3" 
                            className={style.peque}
                            src="https://res.cloudinary.com/dksv7n9bg/image/upload/v1726070576/x82rueeccrjtgmfjqpwq.png" 
                            alt="Página web para la empresa Siman" 
                        />
                        <div id="text-paginaWeb3" className={style.textInvisible}>
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