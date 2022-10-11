import React from "react";
import cabride from "../images/cabride.gif";
import "./home.css";

export default function Home() {
  return (
    <div>
      <div className="card">
        <img src={cabride} class="card-img-top" alt="..." />
        {/* <div class="card-body">
          <p class="card-text ">
            24/7 available
            <br />
            The one you can trust
          </p>
        </div> */}
      </div>
    </div>
  );
}