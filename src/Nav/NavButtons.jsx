export const NavButtons = ({ handleShowMenu }) => {
    return (
        <div className="nav__btns">
            <i className="bi bi-moon change-theme" id="theme-button"></i>
            <div className="nav__toggle" id="nav-toggle">
                <i className="bi bi-grid" onClick={ handleShowMenu }></i>
            </div>
        </div>
    );
};