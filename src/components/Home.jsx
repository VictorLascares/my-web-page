import Profile from "../assets/profile.png"

export const Home = () => {
    return (
        <section id='home' className="home section">
            <div className="home__container container">
                <div className="home__content">
                    <div className="home__img">
                        <img
                            className=""
                            alt="hero"
                            src={Profile}
                        />
                    </div>
                    <div className="home__data">
                        <h1 className="home__title">Hola, soy Victor Láscares</h1>
                        <h3 className="home__subtitle">Frontend Developer</h3>
                        <p className="home__description">
                            Desarrollador front end con experiencia en el maquetado de páginas responsive haciendo uso de la libreria React.
                        </p>
                        <div className="home__buttons">
                            <a
                                href="#contact"
                                className="button button__primary">
                                Trabaja conmingo
                            </a>
                            <a
                                href="#portfolio"
                                className="button button__secundary">
                                Mira mi último trabajo
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}