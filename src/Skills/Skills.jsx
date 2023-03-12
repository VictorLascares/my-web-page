import { Skill } from "./Skill";

export const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">Habilidades & Tecnologias</h2>
            <span className="section__subtitle">Mi nivel tecnico</span>

            <div className="skills__container container grid">
                <Skill />
            </div>
        </section>
    );
};