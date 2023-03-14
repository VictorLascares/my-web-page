import { useEffect } from "react";
import { NavMenu, NavButtons } from "../Nav";

const handleShowMenu = () => document.querySelector('#nav-menu').classList.add('show-menu');
const handleCloseMenu = () => document.querySelector('#nav-menu').classList.remove('show-menu');

export const Header = () => {
    const changeTheme = (e) => {
        let theme = '';
        let iconTheme = '';
        if (e.target.classList.contains('bi-moon')) {
            theme = 'dark';
            iconTheme = 'bi-sun';
            e.target.classList.remove('bi-moon');
            e.target.classList.add('bi-sun');
            document.body.classList.add('dark-theme');
        } else {
            theme = 'light';
            iconTheme = 'bi-moon';
            e.target.classList.remove('bi-sun');
            e.target.classList.add('bi-moon');
            document.body.classList.remove('dark-theme');
        }
        localStorage.setItem('selected-theme', theme);
        localStorage.setItem('selected-icon', iconTheme)
    }

    const getCurrentTheme = () => {
        const themeButton = document.getElementById("theme-button");
        const selectedTheme = localStorage.getItem("selected-theme");
        if (selectedTheme === 'dark') {
            themeButton.classList.remove('bi-moon');
            themeButton.classList.add('bi-sun');
            document.body.classList.add('dark-theme');
        }
    };

    useEffect(() => {
        getCurrentTheme();
    }, []);

    return (
        <header className="header" id="header">
            <nav className="nav container">
                <a href="#" className="nav__logo">Victor</a>
                <NavMenu handleCloseMenu={handleCloseMenu} />
                <NavButtons
                    handleShowMenu={handleShowMenu}
                    changeTheme={changeTheme}
                />
            </nav>
        </header>
    );
}