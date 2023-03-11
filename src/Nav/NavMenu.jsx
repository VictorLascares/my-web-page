import { NavItem } from "./NavItem";


const menu = [
    { name: "About", icon: "person" },
    { name: "Skills", icon: "gear" },
    { name: "Portfolio", icon: "folder" },
    { name: "Contact", icon: "send" },
];

export const NavMenu = () => {
    return (
        <div className="nav__menu" id="nav-menu">
            <ul className="nav__list grid">
                {
                    menu.map(menuItem => 
                        <NavItem
                            key={menuItem.name}
                            menuItem={menuItem}
                        />
                    )
                }
            </ul>
            <i className="bi bi-x-square nav__close" id="nav-close"></i>
        </div>
    );
};