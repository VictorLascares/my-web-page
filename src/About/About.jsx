export const About = () => {
    return (
        <section class="about section" id="about">
            <h2 class="section__title">Acerca de</h2>
            <span class="section__subtitle">Mi presentacion</span>
            <div class="about__container container grid">
                <img src="assets/img/about.jpg" alt="" class="about__img" />
                <div class="about__data">
                    <p class="about__description">
                        Web developer, with extensive knowledge and years of experience,
                        working in web tecnologies and UI / UX, delivering quality work.
                    </p>
                    <div class="about__info">
                        <div>
                            <span class="about__info-title">08+</span>
                            <span class="about__info-name"
                            >Years <br />
                                experience</span
                            >
                        </div>
                        <div>
                            <span class="about__info-title">20+</span>
                            <span class="about__info-name"
                            >Completed <br />
                                project</span
                            >
                        </div>
                        <div>
                            <span class="about__info-title">05+</span>
                            <span class="about__info-name"
                            >Companies <br />
                                worked</span
                            >
                        </div>
                    </div>
                    <div class="about__buttons">
                        <a
                            download=""
                            href="assets/pdf/Alexa-Cv.pdf"
                            class="button button--flex"
                        >
                            Descargar CV<i class="bi bi-download button__icon"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};