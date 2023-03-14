import { Project } from "./Project";

const projects = [
    {
        id: "aadalsdj",
        name: "Modern Website",
        description: "Website adaptable to all devices, with ui components and animated interactions",
        image: "portfolio1",
        link: "https://example.github.com"
    },
    {
        id: "jaldasd",
        name: "Brand Design",
        description: "Website adaptable to all devices, with ui components and animated interactions",
        image: "portfolio2.jpg",
        link: "https://example.github.com"
    }
]

export const Portfolio = () => {
    return (
        <section className="portfolio section" id="portfolio">
            <h2 className="section__title">Portfolio</h2>
            <span className="section__subtitle">Trabajos mas recientes</span>

            <div className="portfolio__container container grid">
                {
                    projects.map( project => 
                        <Project 
                            key={project.id} 
                            project={project}
                        />
                    )
                }
            </div>
        </section>
    );
}