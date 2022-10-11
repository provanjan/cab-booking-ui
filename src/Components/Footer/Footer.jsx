import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import
{
  faInstagram,
  faFacebook,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import "./footer.css";


export default function Footer ()
{
  return (
    <div>
      <hr />
      <div className="card text-center bg-dark">
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
                <Link className="nav-link foot" to="/contactUs">
                  Contact Us
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 col">

              <li className="nav-item">
                <Link className="nav-link foot" to="/loginCustomer">
                  Customer Login
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link foot" to="/loginDriver">
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
        <div className="card-footer bg-light text-muted bg-dark">
          Cab Booking Application Copyright &copy; All rights reserved
        </div>
      </div>
    </div>
  );
}