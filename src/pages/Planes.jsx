import React from 'react';
import style from './planes.module.css';

class Planes extends React.Component {
    render() {
        return (
            <div>
                <h1 style={{ textAlign: 'center', fontWeight: 700, paddingTop: 40}}>PLANES</h1>
                <main>
                    <div className={style.container}>
                        <div className={style.planesContainer}>
                            {/* Paquete Básico */}
                            <div className={`${style.plan} ${style.planBasico}`}>
                                <p className={style.planTitle}>Básica</p>
                                <h2 className={style.planPrice}>$399.99</h2>
                                <ul className={style.planFeatures}>
                                    <li>Página web básica</li>
                                    <li>Página de inicio</li>
                                    <li>Apartado de imágenes, experiencia</li>
                                    <li>Publicar fotos</li>
                                    <li>Publicar videos</li>
                                </ul>
                                <a href="#" className={style.ctaButton}>SELECCIONAR PLAN</a>
                            </div>

                            {/* Paquete Estándar */}
                            <div className={`${style.plan} ${style.planStandar}`}>
                                <p className={style.planTitle}>Estándar</p>
                                <h2 className={style.planPrice}>$595.99</h2>
                                <ul className={style.planFeatures}>
                                    <li>Todo el plan básico</li>
                                    <li>5 Cuentas</li>
                                    <li>Atención personalizada</li>
                                    <li>Feedback mensual</li>
                                    <li>Destaca tus contenidos</li>
                                    <li>Acceso Ilimitado</li>
                                    <li>Ofertas y descuentos</li>
                                    <li>Mayor seguridad</li>
                                </ul>
                                <a href="#" className={style.ctaButton}>SELECCIONAR PLAN</a>
                            </div>

                            {/* Paquete Avanzado */}
                            <div className={`${style.plan} ${style.planAvanzado}`}>
                                <p className={style.planTitle}>Avanzada</p>
                                <h2 className={style.planPrice}>$989.99</h2>
                                <ul className={style.planFeatures}>
                                    <li>Todas las características de los planes anteriores además de las características personalizadas que necesites.</li>
                                    <li>Se realizará un presupuesto ajustado a las necesidades de tu negocio.</li>
                                </ul>
                                <a href="#" className={style.ctaButton}>SELECCIONAR PLAN</a>
                            </div>
                        </div>

                        {/* Segunda fila de planes */}
                        <div className={style.planesContainer}>
                            {/* Paquete 4 */}
                            <div className={`${style.plan} ${style.planPaquete}`}>
                                <p className={style.planTitle}>Paquete 4</p>
                                <h2 className={style.planPrice}>$344.99</h2>
                                <ul className={style.planFeatures}>
                                    <li>Optimización al sitio web</li>
                                    <li>Estrategias de SEO</li> 
                                    <li>Integración de Google Analytics</li>
                                </ul>
                                <a href="#" className={style.ctaButton}>SELECCIONAR PLAN</a>
                            </div>

                            {/* Paquete 5 */}
                            <div className={`${style.plan} ${style.planPaquete}`}>
                                <p className={style.planTitle}>Paquete 5</p>
                                <h2 className={style.planPrice}>$209.99</h2>
                                <ul className={style.planFeatures}>
                                    <li>Optimización al sitio web cada 2 meses</li>
                                    <li>Actualizaciones y correcciones mensuales</li>
                                    <li>Condiciones aplican</li>
                                </ul>
                                <a href="#" className={style.ctaButton}>SELECCIONAR PLAN</a>
                            </div>

                        </div>

                    </div>
                </main>
            </div>
        );
    }
}

export default Planes;