import React from "react";
import "../OurService/service.css";
import taxi from "../images/taxi.jpg";

export default function OurService() {
    return (
        <div >
        <h3 className="text-center pt-5">Our Services</h3>
  
        <div className="card shadow mb-3 aboutcard service">
          <div className="row g-0">
            <div className="col-md-4">
              <img src={taxi} className="img-fluid rounded-start p-3 pt-5" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body"><br/>
                <h5 className="card-title">24/7 Availability</h5>
                <p className="card-text">
                  We are 24/7 available at your doorstep
                </p>
                <h5 className="card-title">Safety</h5>
                <p className="card-text">
                  We ensure safety of the riders. Safety of a individual is prime focus. So let the rider share their trip details with close ones.
                </p>
                <h5 className="card-title">Cashless Travel</h5>
                <p className="card-text">
                  Ran out of cash?? No issues.. we are here to save you. We provide online transaction so that you can travel hassle free.
                </p>
                <h5 className="card-title">Send Deliverables</h5>
                <p className="card-text">
                  Got anything to deliver to your close ones? but do not have enough time ? We are here to save you. We will deliver your things to your close ones.
                </p>
                <h5 className="card-title">Air Conditioned Cabs</h5>
                <p className="card-text">
                  Want to beat the heat? We are here to save you. All our cabs are air conditioned so that you can travel comfortably.
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