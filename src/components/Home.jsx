import Profile from "../assets/profile.png"

export const Home = () => {
    return (
        <section id='home' className="home section">
            <div className="home__container container">
                <div className="home__content grid">
                    <h1 className="home__title">
                        Hola, Soy Victor Láscares.
                        <br />Me gusta construir aplicaciones increibles.
                    </h1>
                    <p className="home__subtitle">
                        Desarrollador front end con experiencia en el maquetado de páginas responsive haciendo uso de la libreria React.
                    </p>
                    <div className="home__buttons">
                        <a
                            href="#contact"
                            className="button button--flex">
                            Trabaja conmingo
                        </a>
                        <a
                            href="#projects"
                            className="button button--white">
                            Mira mi último trabajo
                        </a>
                    </div>
                </div>
                <div className="home__img">
                    <img
                        className=""
                        alt="hero"
                        src={ Profile }
                    />
                </div>
            </div>
        </section>
    );
}