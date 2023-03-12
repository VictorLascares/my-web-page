import { NavMenu, NavButtons } from "../Nav";

const handleShowMenu = () => document.querySelector('#nav-menu').classList.add('show-menu');
const handleCloseMenu = () => document.querySelector('#nav-menu').classList.remove('show-menu');

export const Header = () => {
    return (
        <header className="header" id="header">
            <nav className="nav container">
                <a href="#" className="nav__logo">Victor</a>
                <NavMenu handleCloseMenu={handleCloseMenu} />
                <NavButtons handleShowMenu={handleShowMenu} />
            </nav>
        </header>
    );
}