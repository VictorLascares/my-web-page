import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="navbar">
            <Link to="/">
                <img src="/src/assets/img/Logo.svg" alt="Logo" />
            </Link>
            <nav className="nav">
                <Link to="/">Home</Link>
                <Link to="#about">About</Link>
                <Link to="/works">Works</Link>
                <Link to="#contact">Contact</Link>
            </nav>
        </div>
    );
};

export default Navbar;
