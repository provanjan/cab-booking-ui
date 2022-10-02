import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faFacebook,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <div>
      <div className="card text-center ">
        <div className="card-body">
          {/* <h5 class="card-title quicklink">Quick Links</h5> */}
          <p className="card-text row pt-5 pb-5">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 col">
              <li className="nav-item">
                <a
                  className="nav-link foot active"
                  aria-current="page"
                  href="Header.js"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link foot" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link foot" href="#">
                  Contact Us
                </a>
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
                <a className="nav-link foot" href="#">
                  Edit Your Profile
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link foot" href="#">
                  Rate a driver
                </a>
              </li>
            </ul>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 col">
              <li className="nav-item">
                <a className="nav-link foot" href="#">
                  Login as Driver
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link foot" href="#">
                  Login as a Admin
                </a>
              </li>
            </ul>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 col">
              <div>
                <FontAwesomeIcon icon={faGithub} size="2x" className="icon" />
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
