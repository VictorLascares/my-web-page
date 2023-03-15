import { SkillData } from "./SkillData";

export const SkillItem = ({ data }) => {
    const { hability, experience, tecnologies  } = data;

    return (
        <div className="skills__content skills__open">
            <div className="skills__header">
                <i className="uil uil-brackets-curly skills__icon"></i>

                <div>
                    <h3 className="skills__title">{ hability }</h3>
                    <span className="skills__subtitle">{ experience }</span>
                </div>

                <i className="bi bi-chevron-down skills__arrow"></i>
            </div>

            <div className="skills__list grid">
                {
                    tecnologies.map( tecnology => 
                        <SkillData 
                            key={tecnology.tecnology} 
                            data={tecnology}
                        />
                    )
                } 
            </div>
        </div>
    );
}