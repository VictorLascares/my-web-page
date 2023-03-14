import Portfolio from "../assets/img/portfolio1.jpg";


export const Project = ({project}) => {
    const { name, description, image, url } = project;

    return (
        <div className="portfolio__content grid">
            <img
                src={ Portfolio }
                alt=""
                className="portfolio__img"
            />

            <div className="portfolio__data">
                <h3 className="portfolio__title">{ name }</h3>
                <p className="portfolio__description">
                    { description }
                </p>
                <a
                    href={ url }
                    className="button button__primary button--flex"
                >
                    Demo
                    <i className="bi bi-arrow-right button__icon"></i>
                </a>
            </div>
        </div>
    );
};