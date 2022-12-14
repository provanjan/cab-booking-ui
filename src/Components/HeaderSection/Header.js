import React from "react";
import icon from "../images/icon.png";
import "./header.css";
// import { NavLink } from "react-router-dom";
import RateDriver from "../Customer/RateDriver.js";

export default function Header() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand navicon" href="#">
            <img src={icon} className="card-img-top" alt="..." />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="Header.js"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Book a ride
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  Add your cab details
                </a>
              </li>
            </ul>
            <form className="d-flex loginbtn">
              <button className="btn btn-outline-success " type="submit">
                Login / Sign up
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
