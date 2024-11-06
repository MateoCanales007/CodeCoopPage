import React from 'react';

class Home extends React.Component {
    render() {
        return (
            <main className="container mt-5">
                <div className="row">
                    <div className="col-md-4">
                        <div className="image-container">
                            <img id="img1"
                                src="https://res.cloudinary.com/dj848z4er/image/upload/v1727843394/qguswlz487tkdixvlqol.png"
                                alt="WWW" className="img-fluid" />
                            <img id="img2"
                                src="https://res.cloudinary.com/dj848z4er/image/upload/v1727843398/e7fdhmohlg8utpfb3gcv.png"
                                alt="Code" className="img-fluid" />
                            <img id="img3"
                                src="https://res.cloudinary.com/dj848z4er/image/upload/v1727843467/vbalmyupjg2muwmqsdyu.png"
                                alt="SEO" className="img-fluid" />
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="main-content">
                            <h1 className="mb-4"><span>CODECOOP</span></h1>
                            <b />
                            <div className="p">
                                <span className="purple">Uniendo (</span><span className="cyan"><i>talento</i> <i className="pink">&</i>
                                    <span className="purple"> Fuerza</span></span><span className="purple">)</span>
                                <br />
                                <span className="green">=</span><span className="pink"> 'para crear soluciones'</span>
                            </div>
                            <a href="./Contacto/contacto.html" className="cta-button">Únete a nosotros
                                <img src="https://res.cloudinary.com/dj848z4er/image/upload/v1726644202/dgppfgjrhe4j1uqxcy1e.png"
                                    alt="right-row" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="corner-image">
                    <img src="https://res.cloudinary.com/dj848z4er/image/upload/v1727843785/kau43pqzhdevd5eeeskw.png"
                        alt="Imagen en la esquina" />
                </div>
            </main>
        );
    }
}

export default Home;