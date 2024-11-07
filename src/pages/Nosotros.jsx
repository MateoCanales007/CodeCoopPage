import React from 'react';
import style from './nosotros.module.css';

class Nosotros extends React.Component {
    render() {
        return (
            <div>
                <img className={style.imgRosa} src="https://res.cloudinary.com/dj848z4er/image/upload/v1727886194/dmewynfytshk0sxjfbsr.png" alt="" />
                <h1 className={style.hh1}>Nosotros</h1>
                <p className={style.p3}>
                    Somos una cooperativa ubicada en Santa Tecla, La libertad, dedicada al desarrollo web. Ofreciendo
                    servicios que van desde el diseño hasta la programación avanzada y la gestión de bases de datos.
                    Nuestra estructura cooperativa fomenta la colaboración entre los miembros para permitir una rápida
                    adaptación a las necesidades del mercado, integrando nuevas tecnologías y soluciones personalizadas
                    para cada cliente. <br />
                    La cooperativa nace a partir de identificar una creciente necesidad en el ámbito digital y la continua
                    expansión de la tecnología, observamos una oportunidad para proporcionar nuestros servicios trabajando de manera
                    inclusiva y colaborativa.
                </p>
                <div className={style.caja}>
                    <div className= {style.container0}>
                        <h1 className={style.mision}>Misión</h1>
                        <p className={style.p1}>Nuestra Misión es desarrollar soluciones web innovadoras y personalizadas,
                            utilizando el talento y la experiencia de nuestros programadores especializados.
                            Operamos bajo un modelo cooperativo que promueve la colaboración, el crecimiento
                            profesional y el beneficio mutuo, asegurando que cada proyecto cumpla con los más altos
                            estándares de calidad y satisfacción del cliente.
                        </p>
                    </div>
                    <img className={style.imgCeleste}
                        src="https://res.cloudinary.com/dj848z4er/image/upload/v1727885705/jknenhy1ctarddfrji49.png" alt="" />
                    <div>
                        <h1 className={style.vision}>Visión</h1>
                        <p className={style.p2}>Ser líderes en el desarrollo de páginas y aplicaciones web, reconocidos por nuestra
                            excelencia técnica, enfoque socio cooperativo y compromiso con la innovación.
                            Aspiramos a crear un entorno donde los programadores puedan prosperar y desarrollarse,
                            contribuyendo al éxito de nuestros clientes y al progreso de la industria tecnológica.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Nosotros;