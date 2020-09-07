import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/iti-logo.png';

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to={'/'}>
          <img src={Logo} width="30" height="30" className="d-inline-block align-top" alt="" loading="lazy" />
          <span className="ml-1">TecNM</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Usuarios
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to="/users">
                  Existentes
                </Link>
                <Link className="dropdown-item" to="/users/create">
                  <span className="text-primary font-weight-bold">Nuevo</span> 
                </Link>
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item" to="#">
                  Something else here
                </Link>
              </div>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Estudiantes
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to="/students">
                  Existentes
                </Link>
                <Link className="dropdown-item" to="/students/new">
                  <span className="text-primary font-weight-bold">Nuevo</span> 
                </Link>
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item" to="#">
                  Something else here
                </Link>
              </div>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Personal
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to="#">
                  Existentes
                </Link>
                <Link className="dropdown-item" to="#">
                  <span className="text-primary font-weight-bold">Nuevo</span> 
                </Link>
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item" to="#">
                  Something else here
                </Link>
              </div>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Preparatorias
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to="#">
                  Existentes
                </Link>
                <Link className="dropdown-item" to="#">
                  <span className="text-primary font-weight-bold">Nuevo</span> 
                </Link>
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item" to="#">
                  Something else here
                </Link>
              </div>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Departamentos académicos
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to="#">
                  Existentes
                </Link>
                <Link className="dropdown-item" to="#">
                  <span className="text-primary font-weight-bold">Nuevo</span> 
                </Link>
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item" to="#">
                  Something else here
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
