import { Skill } from "./Skill";


const habilities = [
    {
        id: 'asdhkasd',
        hability: "Frontend Developer",
        experience: "Mas de 6 meses",
        tecnologies: [
            { tecnology: "HTML", percentage: "90" },
            { tecnology: "CSS", percentage: "90" },
            { tecnology: "JavaScript", percentage: "80" },
            { tecnology: "React", percentage: "70" },
        ]
    },
    {
        id: 'asjdasd',
        hability: "Web Design",
        experience: "Mas de 6 meses",
        tecnologies: [
            { tecnology: "Figma", percentage: "70" },
            { tecnology: "Gimp", percentage: "50" },
            { tecnology: "Sketch", percentage: "50" },
            { tecnology: "Blender", percentage: "50" },
        ]
    }
]

export const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">Habilidades & Tecnologias</h2>
            <span className="section__subtitle">Mi nivel tecnico</span>

            <div className="skills__container container grid">
                {
                    habilities.map(hability => 
                        <Skill 
                            key={hability.id} 
                            data={hability}
                        />
                    )
                }
            </div>
        </section>
    );
};