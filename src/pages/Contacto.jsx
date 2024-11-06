import React from "react";
import style from "./contacto.module.css"; // Importa el CSS module

class Contacto extends React.Component {
    render() {
        return (
            <main className={style.main}>
                <div className={`${style.columnas} ${style.contFormulario}`}>
                    <h1>¿Quieres un sitio web a la medida de tus necesidades?</h1>
                    <p>
                        Suscríbete a nuestro boletín para recibir las últimas tendencias y consejos sobre desarrollo web y
                        tecnología. ¡No te pierdas las novedades de CodeCoop!
                    </p>
                    <p>Contacta con nosotros <a href="mailto:info@codecoop.com">info@codecoop.com</a></p>
                    <p>+503 1234-5678</p>
                    <p className={style.dias}>
                        <em>Lunes a Viernes: 9:00 a. m. - 6:00 p. m.<br />Sábado: 9:00 a. m. - 12:00 p. m.</em>
                    </p>
                    <h3 className={`${style.mb2} ${style.sigue}`}>Síguenos en redes sociales</h3>
                    <div className={style.redes}>
                        <a href="#"><img
                            src="https://res.cloudinary.com/dj848z4er/image/upload/v1728350695/l3rmmgiahhd6004iehz4.png"
                            alt="img-Whatsapp" /></a>
                        <a href="#"><img
                            src="https://res.cloudinary.com/dj848z4er/image/upload/v1728350390/jxnaol2rdnmu7lzcr3hp.png"
                            alt="img-Discord" /></a>
                        <a href="#"><img
                            src="https://res.cloudinary.com/dj848z4er/image/upload/v1728350390/ij1i0z8lv17xlooyluhp.png"
                            alt="img-Linkedin" /></a>
                        <a href="#"><img
                            src="https://res.cloudinary.com/dj848z4er/image/upload/v1728350325/sa2aofilsyathvkwhco0.png"
                            alt="img-Instagram" /></a>
                    </div>
                </div>

                {/* Formulario */}
                <div className={`${style.columnas} ${style.formulario}`}>
                    {/* Alerta que se mostrará al enviar el formulario */}
                    <div id="successAlert" className={`${style.alert} alert alert-success alert-dismissible fade show`} role="alert"
                        style={{ display: 'none' }}>
                        <i className="fas fa-check-circle"></i> ¡Operación exitosa! Se ha enviado tus datos correctamente.
                        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>

                    {/* Formulario de contacto */}
                    <form id="contactForm">
                        <input type="text" className={style.datCont} placeholder="Ingrese su Nombre" required />
                        <input type="email" className={style.datCont} placeholder="Dirección de E-mail" required />
                        <input type="number" className={style.datCont} min="18" placeholder="Introduce tu edad" required />
                        <textarea name="mensaje" className={style.datCont} placeholder="Ingrese su Mensaje"></textarea><br />
                        <button type="submit" className={`${style.btn} btn btn-primary m-auto`}>ENTREGAR</button>
                    </form>
                </div>
            </main>
        );
    }
}

export default Contacto;