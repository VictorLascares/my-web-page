export const About = () => {
    return (
        <section className="about section" id="about">
            <h2 className="section__title">Acerca de</h2>
            <span className="section__subtitle">Mi presentacion</span>
            <div className="about__container container grid">
                <img src="assets/img/about.jpg" alt="" className="about__img" />
                <div className="about__data">
                    <p className="about__description">
                        Web developer, with extensive knowledge and years of experience,
                        working in web tecnologies and UI / UX, delivering quality work.
                    </p>
                    <div className="about__info">
                        <div>
                            <span className="about__info-title">08+</span>
                            <span className="about__info-name"
                            >Years <br />
                                experience</span
                            >
                        </div>
                        <div>
                            <span className="about__info-title">20+</span>
                            <span className="about__info-name"
                            >Completed <br />
                                project</span
                            >
                        </div>
                        <div>
                            <span className="about__info-title">05+</span>
                            <span className="about__info-name"
                            >Companies <br />
                                worked</span
                            >
                        </div>
                    </div>
                    <div className="about__buttons">
                        <a
                            download=""
                            href="assets/pdf/Alexa-Cv.pdf"
                            className="button button--flex"
                        >
                            Descargar CV<i className="bi bi-download button__icon"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};