import { Link } from "react-router-dom";
import React from "react";
import Imagen from "./images/client-logo-2.png";

import Register from "./Register";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top">
      <div className="container-fluid">
        <a className="navbar-brand ms-4" href="/#">
          <img className="img-top ms-4 me-4" src={Imagen} alt="..." />
          Aventura
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse ms-4 d-flex" id="navbarNav">
          <div className="navegacion">
            <ul className="navbar-nav ">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link" aria-current="page" to="/cities">
                  Cities
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <Register />
      </div>
    </nav>
  );
}

export default Navbar;
