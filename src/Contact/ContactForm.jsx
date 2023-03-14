export const ContactForm = () => {
    return (
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
                <label className="contact__label">Mensaje</label>
                <textarea
                    name=""
                    id=""
                    cols="0"
                    rows="5"
                    className="contact__input"
                ></textarea>
            </div>

            <div>
                <a href="#" className="button button__primary button--flex">
                    Enviar mensaje
                    <i className="bi bi-send button__icon"></i>
                </a>
            </div>
        </form>
    );
};