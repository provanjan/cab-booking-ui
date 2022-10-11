import React from "react";

import cab from "../images/cab.png";
import "../About/about.css";

export default function About() {
  return (
    <div>
      <h3 className="text-center pt-5">About Us</h3>

      <div className="card shadow mb-3 aboutcard">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={cab} className="img-fluid rounded-start p-3 pt-5" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Redefining Mobility for Billions</h5>
              <p className="card-text">
                We are India’s largest mobility platform and one of the world’s
                largest ride-hailing companies, serving 250+ cities across
                India, Australia, New Zealand, and the UK. Our app offers
                mobility solutions by connecting customers to drivers and a wide
                range of vehicles across bikes, auto-rickshaws, metered taxis,
                and cabs, enabling convenience and transparency for hundreds of
                millions of consumers and over 1.5 million driver-partners.
              </p>
              <p>
                Our core mobility offering in India is supplemented by its
                electric-vehicle arm, Our Electric; India’s largest fleet
                management business, Our Fleet Technologies and Our Skilling,
                that aims to enable millions of livelihood opportunities for
                India's youth. With its acquisition of Ridlr, India’s leading
                public transportation app and investment in Vogo, a dockless
                scooter sharing solution, Our is looking to build mobility for
                the next billion Indians. Our also extends its consumer
                offerings like micro-insurance and credit led payments through
                Our Financial Services and a range of owned food brands through
                India’s largest network of kitchens under its Food business.
              </p>

              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}