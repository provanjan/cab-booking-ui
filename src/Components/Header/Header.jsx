import React from "react";
import icon from "../images/icon.png";
import "./header.css";
import {Link} from 'react-router-dom';


export default function Header ()
{
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand navicon" to=" ">
            <img src={icon} className="card-img-top" alt="..." />
          </Link>
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
                  href="/"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/customerDetails">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/ride">
                  Book a ride
                </Link>
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