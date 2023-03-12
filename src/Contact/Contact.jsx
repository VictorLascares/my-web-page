export const Contact = () => {
    return (
        <section className="contact section" id="contact">
            <h2 className="section__title">Contáctame</h2>
            <span className="section__subtitle">Ponerse en contacto</span>

            <div className="contact__container container grid">
                <div>
                    <div className="contact__information">
                        <i className="uil uil-phone contact__icon"></i>

                        <div>
                            <h3 className="contact__title">Llámame</h3>
                            <span className="contact__subtitle">961-375-1407</span>
                        </div>
                    </div>

                    <div className="contact__information">
                        <i className="uil uil-envelope contact__icon"></i>

                        <div>
                            <h3 className="contact__title">Correo Electrónico</h3>
                            <span className="contact__subtitle">vmlascares@gmail.com</span>
                        </div>
                    </div>

                    <div className="contact__information">
                        <i className="uil uil-map-marker contact__icon"></i>

                        <div>
                            <h3 className="contact__title">Ubicación</h3>
                            <span className="contact__subtitle"
                            >México - Tuxtla Gutiérrez, Chiapas</span
                            >
                        </div>
                    </div>
                </div>

                <form action="" className="contact__form grid">
                    <div className="contact__inputs grid">
                        <div className="contact__content">
                            <label className="contact__label">Nombre</label>
                            <input type="text" className="contact__input" />
                        </div>

                        <div className="contact__content">
                            <label className="contact__label">Correo Electrónico</label>
                            <input type="email" className="contact__input" />
                        </div>
                    </div>

                    <div className="contact__content">
                        <label className="contact__label">Proyecto</label>
                        <input type="text" className="contact__input" />
                    </div>

                    <div className="contact__content">
                        <label className="contact__label">Mensaje</label>
                        <textarea
                            name=""
                            id=""
                            cols="0"
                            rows="7"
                            className="contact__input"
                        ></textarea>
                    </div>

                    <div>
                        <a href="#" className="button button--flex">
                            Enviar mensaje
                            <i className="bi bi-send button__icon"></i>
                        </a>
                    </div>
                </form>
            </div>
        </section>
    );
};