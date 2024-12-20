import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [imagesLoaded, setImagesLoaded] = useState([false, false, false]);
    const [showCornerImage, setShowCornerImage] = useState(false);

    useEffect(() => {
        // Restablecer el estado de las imágenes cargadas
        setImagesLoaded([false, false, false]);
        setShowCornerImage(false);

        // Efecto para la animación de las imágenes
        const imageTimeouts = imagesLoaded.map((_, index) => {
            return setTimeout(() => {
                setImagesLoaded(prev => {
                    const newState = [...prev];
                    newState[index] = true;
                    return newState;
                });
            }, index * 900);
        });

        // Efecto para la imagen de la esquina
        const cornerTimeout = setTimeout(() => {
            setShowCornerImage(true);
        }, 2500);

        // Limpieza de timeouts
        return () => {
            imageTimeouts.forEach(timeout => clearTimeout(timeout));
            clearTimeout(cornerTimeout);
        };
    }, []); // El array vacío asegura que esto solo se ejecute al montar

    return (
        <main className="container mt-5">
            <div className="row">
                <div className="col-md-4">
                    <div className="image-container">
                        <img
                            id="img1"
                            src="https://res.cloudinary.com/dj848z4er/image/upload/v1727843394/qguswlz487tkdixvlqol.png"
                            alt="WWW"
                            className={imagesLoaded[0] ? 'fade-in' : ''}
                        />
                        <img
                            id="img2"
                            src="https://res.cloudinary.com/dj848z4er/image/upload/v1727843398/e7fdhmohlg8utpfb3gcv.png"
                            alt="Code"
                            className={imagesLoaded[1] ? 'fade-in' : ''}
                        />
                        <img
                            id="img3"
                            src="https://res.cloudinary.com/dj848z4er/image/upload/v1727843467/vbalmyupjg2muwmqsdyu.png"
                            alt="SEO"
                            className={imagesLoaded[2] ? 'fade-in' : ''}
                        />
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="main-content">
                        <h1 className="mb-4"><span>CODECOOP</span></h1>
                        <div className="p">
                            <span className="purple">Uniendo (</span>
                            <span className="cyan">
                                <i>talento</i> <i className="pink">&</i>
                                <span className="purple"> Fuerza</span>
                            </span>
                            <span className="purple">)</span>
                            <br />
                            <span className="green">=</span>
                            <span className="pink"> 'para crear soluciones'</span>
                        </div>
                        <Link to="/contacto" className="cta-button">
                            Únete a nosotros
                            <img 
                                src="https://res.cloudinary.com/dj848z4er/image/upload/v1726644202/dgppfgjrhe4j1uqxcy1e.png"
                                alt="right-row" 
                            />
                        </Link>
                    </div>
                </div>
            </div>
            <div className={`corner-image ${showCornerImage ? 'show' : ''}`}>
                <img
                    src="https://res.cloudinary.com/dj848z4er/image/upload/v1727843785/kau43pqzhdevd5eeeskw.png"
                    alt="Imagen en la esquina"
                />
            </div>
        </main>
    );
};

export default Home;