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
                            <a href="#skills" className="footer__link">Habilidades & Tecnologias</a>
                        </li>
                        <li>
                            <a href="#portfolio" className="footer__link">Portfolio</a>
                        </li>
                        <li>
                            <a href="#about" className="footer__link">Acerca De</a>
                        </li>
                    </ul>

                    <div className="footer__social">
                        <a
                            href="https://github.com/VictorLascares"
                            target="_blank"
                            className="footer__social"
                        >
                            <i className="bi bi-github"></i>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/victorlascares"
                            target="_blank"
                            className="footer__social"
                        >
                            <i className="bi bi-linkedin"></i>
                        </a>
                        <a
                            href="https://twitter.com/victor_lascares"
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