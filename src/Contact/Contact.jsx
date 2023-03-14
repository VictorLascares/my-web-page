import { ContactData } from "./ContactData";
import { ContactForm } from "./ContactForm";

export const Contact = () => {
    return (
        <section className="contact section" id="contact">
            <h2 className="section__title">Contáctame</h2>
            <span className="section__subtitle">Ponerse en contacto</span>

            <div className="contact__container container grid">
                <ContactData />
                <ContactForm />
            </div>
        </section>
    );
};