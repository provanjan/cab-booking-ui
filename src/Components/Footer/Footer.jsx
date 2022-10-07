import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faInstagram,
  faFacebook,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <div className="footer-card">
      <div className="card text-center ">
        <div className="card-body">
          <p className="card-text row pt-5 pb-5">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 col">
              <li className="nav-item">
                <Link
                  className="nav-link foot active"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link foot" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link foot" to=" ">
                  Contact Us
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 col">
              <li className="nav-item">
                <a
                  className="nav-link foot active"
                  aria-current="page"
                  href="Header.js"
                >
                  Book a Ride
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link foot" to=" ">
                  Edit Your Profile
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link foot" to=" ">
                  Rate a driver
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 col">
              <li className="nav-item">
                <Link className="nav-link foot" to=" ">
                  Login as Driver
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link foot" to="/loginAdmin">
                  Login as a Admin
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 col">
              <div>
                <FontAwesomeIcon icon={faInstagram} size="2x" className="icon" />
                <FontAwesomeIcon icon={faFacebook} size="2x" className="icon" />
                <FontAwesomeIcon icon={faTwitter} size="2x" className="icon" />
                <FontAwesomeIcon icon={faYoutube} size="2x" className="icon" />
              </div>
            </ul>

          </p>
        </div>
        <div className="card-footer text-muted">
          Cab Booking Application Copyright &copy; All rights reserved
        </div>
      </div>
    </div>
  );
}