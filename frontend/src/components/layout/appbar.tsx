import React from "react";
import { NavLink } from "react-router-dom";

export default function MenuAppBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light ">
      <section className="container">
        <a className="navbar-brand" href="/">
          Vacations {process.env.PORT}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <NavLink className="nav-link" to="/" exact>
              Home
            </NavLink>
            <NavLink className="nav-link" to="/vacations" exact>
              Vacations
            </NavLink>
            <NavLink className="nav-link" to="/about" exact>
              About
            </NavLink>
            <NavLink className="nav-link isAdmin" to="/admin" exact>
              Admin
            </NavLink>
          </ul>
          <button className="btn btn-primary">Log in</button>
          <button className="btn btn-danger">Log out</button>
        </div>
      </section>
    </nav>
  );
}
