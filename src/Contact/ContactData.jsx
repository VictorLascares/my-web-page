export const ContactData = () => {
    return (
        <div className="contact__data">
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
    );
};