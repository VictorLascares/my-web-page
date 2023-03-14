export const SkillData = ({ data }) => {
    const { tecnology, percentage } = data;
    return (
        <div className="skills__data">
            <div className="skills__title">
                <h4 className="skills__name">{ tecnology }</h4>
                <span className="skills__number">{ percentage }%</span>
            </div>
            <div className="skills__bar">
                <div className={`skills__percentage skills__percentage--${percentage}`}></div>
            </div>
        </div>
    );
};