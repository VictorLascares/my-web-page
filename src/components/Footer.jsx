export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__bg">
                <div className="footer__container container grid">
                    <div>
                        <h2 className="footer__title">Victor</h2>
                        <span className="footer__subtitle">Frontend Developer</span>
                    </div>

                    <ul className="footer__links">
                        <li>
                            <a href="#services" className="footer__link">Habilidades</a>
                        </li>
                        <li>
                            <a href="#portfolio" className="footer__link">Portfolio</a>
                        </li>
                        <li>
                            <a href="#contact" className="footer__link">Contactame</a>
                        </li>
                    </ul>

                    <div className="footer__social">
                        <a
                            href="https://www.facebook.com/"
                            target="_blank"
                            className="footer__social"
                        >
                            <i className="bi bi-facebook"></i>
                        </a>
                        <a
                            href="https://www.instagram.com/"
                            target="_blank"
                            className="footer__social"
                        >
                            <i className="bi bi-instagram"></i>
                        </a>
                        <a
                            href="https://twitter.com/"
                            target="_blank"
                            className="footer__social"
                        >
                            <i className="bi bi-twitter"></i>
                        </a>
                    </div>
                </div>
                <p className="footer__copy">&#169; Victor Lascares. Todos los derechos reservados</p>
            </div>
        </footer>
    );
};