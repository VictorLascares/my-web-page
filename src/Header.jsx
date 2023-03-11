import { NavMenu, NavButtons } from "./Nav";

export const Header = () => {
    return (
        <header className="header" id="header">
            <nav className="nav container">
                <a href="#" className="nav__logo">Victor</a>
                <NavMenu /> 
                <NavButtons /> 
            </nav>
        </header>
    ); 
}