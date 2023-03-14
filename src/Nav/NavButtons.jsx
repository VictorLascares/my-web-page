export const NavButtons = ({ handleShowMenu, changeTheme }) => {
    return (
        <div className="nav__btns">
            <i 
                className="bi bi-moon change-theme"
                id="theme-button" 
                onClick={changeTheme}
            ></i>
            <div className="nav__toggle" id="nav-toggle">
                <i className="bi bi-grid" onClick={ handleShowMenu }></i>
            </div>
        </div>
    );
};