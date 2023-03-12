import Porfolio1 from "../assets/img/portfolio1.jpg";
import Porfolio2 from "../assets/img/portfolio2.jpg";
import Porfolio3 from "../assets/img/portfolio3.jpg";

export const Portfolio = () => {
    return (
        <section className="portfolio section" id="portfolio">
            <h2 className="section__title">Portfolio</h2>
            <span className="section__subtitle">Trabajos mas recientes</span>

            <div className="portfolio__container container grid">
                <div className="portfolio__content grid">
                    <img
                        src={Porfolio1}
                        alt=""
                        className="portfolio__img"
                    />

                    <div className="portfolio__data">
                        <h3 className="portfolio__title">Modern Website</h3>
                        <p className="portfolio__description">
                            Website adaptable to all devices, with ui components and
                            animated interactions
                        </p>
                        <a
                            href="#"
                            className="button button--flex button--small portfolio__button"
                        >
                            Demo
                            <i className="bi bi-arrow-right button__icon"></i>
                        </a>
                    </div>
                </div>

                <div className="portfolio__content grid">
                    <img
                        src={Porfolio2}
                        alt=""
                        className="portfolio__img"
                    />

                    <div className="portfolio__data">
                        <h3 className="portfolio__title">Brand Design</h3>
                        <p className="portfolio__description">
                            Website adaptable to all devices, with ui components and
                            animated interactions
                        </p>
                        <a
                            href="#"
                            className="button button--flex button--small portfolio__button"
                        >
                            Demo
                            <i className="bi bi-arrow-right button__icon"></i>
                        </a>
                    </div>
                </div>

                <div className="portfolio__content grid swiper-slide">
                    <img
                        src={Porfolio3}
                        alt=""
                        className="portfolio__img"
                    />

                    <div className="portfolio__data">
                        <h3 className="portfolio__title">Online Store</h3>
                        <p className="portfolio__description">
                            Website adaptable to all devices, with ui components and
                            animated interactions
                        </p>
                        <a
                            href="#"
                            className="button button--flex button--small portfolio__button"
                        >
                            Demo
                            <i className="bi bi-arrow-right button__icon"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}