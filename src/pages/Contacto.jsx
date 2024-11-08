import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { getDatabase, ref, push } from "firebase/database";	
import style from "./contacto.module.css";

const Contacto = () => {
    const { currentUser } = useAuth();
    const [formState, setFormState] = useState({
        successMessage: '',
        errorMessage: '',
        loading: false,
        email: ''
    });

    useEffect(() => {
        if (currentUser) {
            setFormState(prev => ({
                ...prev,
                email: currentUser.email
            }));
        }
    }, [currentUser]);

    const handleEmailChange = (e) => {
        setFormState(prev => ({
            ...prev,
            email: e.target.value
        }));
    };

    const handleCloseAlert = () => {
        setFormState(prev => ({
            ...prev,
            successMessage: '',
            errorMessage: ''
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormState(prev => ({
            ...prev,
            loading: true,
            successMessage: '',
            errorMessage: ''
        }));

        const formData = new FormData(e.target);
        const name = formData.get('name');
        const email = formState.email;
        const age = formData.get('age');
        const messageContent = formData.get('mensaje');

        if (!currentUser) {
            setFormState(prev => ({
                ...prev,
                errorMessage: 'Debes iniciar sesión para enviar el formulario.',
                loading: false
            }));
            return;
        }

        if (email !== currentUser.email) {
            setFormState(prev => ({
                ...prev,
                errorMessage: 'El correo electrónico no coincide con tu cuenta.',
                loading: false
            }));
            return;
        }

        try {
            const db = getDatabase();
            const newContactRef = ref(db, `contactForm/${currentUser.uid}`);
            await push(newContactRef, {
                name,
                email,
                age,
                messageContent,
                timestamp: Date.now()
            });

            setFormState(prev => ({
                ...prev,
                successMessage: '¡Operación exitosa! Se ha enviado tus datos correctamente.',
                loading: false
            }));
            e.target.reset();
            setFormState(prev => ({
                ...prev,
                email: currentUser.email
            }));
        } catch (error) {
            console.error('Error al enviar los datos:', error);
            setFormState(prev => ({
                ...prev,
                errorMessage: 'Ocurrió un error al enviar tus datos. Inténtalo de nuevo.',
                loading: false
            }));
        }
    };

    const { successMessage, errorMessage, loading, email } = formState;

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
                    <a href="#"><img src="https://res.cloudinary.com/dj848z4er/image/upload/v1728350695/l3rmmgiahhd6004iehz4.png" alt="img-Whatsapp" /></a>
                    <a href="#"><img src="https://res.cloudinary.com/dj848z4er/image/upload/v1728350390/jxnaol2rdnmu7lzcr3hp.png" alt="img-Discord" /></a>
                    <a href="#"><img src="https://res.cloudinary.com/dj848z4er/image/upload/v1728350390/ij1i0z8lv17xlooyluhp.png" alt="img-Linkedin" /></a>
                    <a href="#"><img src="https://res.cloudinary.com/dj848z4er/image/upload/v1728350325/sa2aofilsyathvkwhco0.png" alt="img-Instagram" /></a>
                </div>
            </div>

            <div className={`${style.columnas} ${style.formulario}`}>
                {successMessage && (
                    <div className={`${style.alert} alert alert-success alert-dismissible fade show`} role="alert">
                        <i className="fas fa-check-circle"></i> {successMessage}
                        <button type="button" className="btn-close" onClick={handleCloseAlert} aria-label="Close"></button>
                    </div>
                )}
                {errorMessage && (
                    <div className={`${style.alert} alert alert-danger alert-dismissible fade show`} role="alert">
                        <i className="fas fa-exclamation-circle"></i> {errorMessage}
                        <button type="button" className="btn-close" onClick={handleCloseAlert} aria-label="Close"></button>
                    </div>
                )}

                <form id="contactForm" onSubmit={handleSubmit}>
                    <input type="text" name="name" className={style.datCont} placeholder="Ingrese su Nombre" required />
                    <input
                        type="email"
                        name="email"
                        className={style.datCont}
                        placeholder="Dirección de E-mail"
                        value={email}
                        onChange={handleEmailChange}
                        required
                    />
                    <input type="number" name="age" className={style.datCont} min="18" placeholder="Introduce tu edad" required />
                    <textarea name="mensaje" className={style.datCont} placeholder="Ingrese su Mensaje"></textarea><br />
                    <button type="submit" className={`${style.btn} btn btn-primary m-auto`} disabled={loading}>
                        {loading ? 'Enviando...' : 'ENTREGAR'}
                    </button>
                </form>
            </div>
        </main>
    );
};

export default Contacto;