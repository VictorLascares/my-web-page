export const Skill = () => {
    return (
        <div className="skills__content skills__open">
            <div className="skills__header">
                <i className="uil uil-brackets-curly skills__icon"></i>

                <div>
                    <h3 className="skills__title">Frontend Developer</h3>
                    <span className="skills__subtitle">More than 4 years</span>
                </div>

                <i className="uil uil-angle-down skills__arrow"></i>
            </div>

            <div className="skills__list grid">
                <div className="skills__data">
                    <div className="skills__title">
                        <h4 className="skills__name">HTML</h4>
                        <span className="skills__number">90%</span>
                    </div>
                    <div className="skills__bar">
                        <div className="skills__percentage skills__html"></div>
                    </div>
                </div>
                <div className="skills__data">
                    <div className="skills__title">
                        <h4 className="skills__name">CSS</h4>
                        <span className="skills__number">80%</span>
                    </div>
                    <div className="skills__bar">
                        <div className="skills__percentage skills__css"></div>
                    </div>
                </div>
                <div className="skills__data">
                    <div className="skills__title">
                        <h4 className="skills__name">JavaScript</h4>
                        <span className="skills__number">60%</span>
                    </div>
                    <div className="skills__bar">
                        <div className="skills__percentage skills__js"></div>
                    </div>
                </div>
                <div className="skills__data">
                    <div className="skills__title">
                        <h4 className="skills__name">React</h4>
                        <span className="skills__number">85%</span>
                    </div>
                    <div className="skills__bar">
                        <div className="skills__percentage skills__react"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}