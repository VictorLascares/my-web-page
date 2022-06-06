import React from "react";
import { Link } from "react-router-dom";
import Logo from '/src/assets/img/Logo.svg'
import Resume from '/src/assets/pdf/CV_VictorLascares.pdf'


const Navbar = () => {
  return (
    <div className="sticky-top navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={Logo} alt="" width="40" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav align-items-center">
            <li className="nav-item">
              <a href="#about" className="nav-link">About</a>
            </li>
            <li className="nav-item">
              <a href="#skills" className="nav-link">Skills</a>
            </li>
            <li className="nav-item">
              <a href="#portfolio" className="nav-link">Portfolio</a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link">Contact</a>
            </li>
            <li className="btn btn-info rounded-0">
              <a style={{fontSize: '1.3rem'}} className="text-uppercase text-decoration-none text-dark" href={Resume} target='_blank'>Resume</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
