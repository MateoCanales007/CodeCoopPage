import React from "react";
import style from "./footer.module.css";

class Footer extends React.Component {
    render() {
        return (
            <footer className={style.footer}>
                <div className={style.container}>
                    <div className={style.footerContent}>
                        <div className={style.footerLogo}>
                            <img src="https://res.cloudinary.com/dj848z4er/image/upload/v1726411181/CodeCoop_1__preview_rev_3_dgiuzm.png"
                                alt="CodeCoop Logo" />
                        </div>
                        <div className= {style.footerLinks}>
                            <div className= {style.footerColumn}>
                                <h3>Cooperativa</h3>
                                <ul className= {style.cooperativa}>
                                    <li><a href="#">Menu</a></li>
                                    <li><a href="#">Nosotros</a></li>
                                    <li><a href="#">Nuestro equipo</a></li>
                                    <li><a href="#">Portafolio</a></li>
                                </ul>
                            </div>
                            <div className={style.footerColumn}>
                                <h3>Contacto</h3>
                                <ul>
                                    <li><a href="#">Formulario de Contacto</a></li>
                                    <li><a href="#">FAQ</a></li>
                                    <li><a href="#">Política de privacidad</a></li>
                                    <li><a href="#">T&C</a></li>
                                </ul>
                            </div>
                            <div className={style.footerColumn}>
                                <h3>Social</h3>
                                <ul>
                                    <li><a href="#">Facebook</a></li>
                                    <li><a href="#">Discord</a></li>
                                    <li><a href="#">LinkedIn</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={style.footerBottom}>
                        <p>&copy; 2024 CodeCoop. <span>Todos los derechos están reservados.</span></p>
                        <p><a href="#" style= {{color: "#ffffff", textDecoration: "none"}}>Terminos y condiciones</a></p>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;