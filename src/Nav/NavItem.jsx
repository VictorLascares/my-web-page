export const NavItem = ({ menuItem }) => {
    return (
        <li className="nav__item">
            <a href={`#${menuItem.name}`} className="nav__link active-link">
                <i className={`bi bi-${menuItem.icon} nav__icon`}></i>
                {menuItem.name}
            </a>
        </li>
    );
};