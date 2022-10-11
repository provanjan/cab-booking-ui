import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import history from "../images/history.png";
import book from "../images/book.png";
import edit from "../images/edit.png";
import "./driver.css";

export default function DashboardDriver ()
{
  let navigate = useNavigate();
  useEffect(() =>
  {
    if (localStorage.getItem("loggedInUserRole") === "customer")
    {
      navigate("/customerDashboard")
    }
    else if (localStorage.getItem("loggedInUserRole") === "driver")
    {
      navigate("/driver")
    }
    else
    {
      navigate("/loginDriver")
    }
  }, [navigate])

  const logOut = () =>
  {
    window.localStorage.removeItem("loggedInUserRole")
    window.localStorage.removeItem("driverId")
    navigate("/loginDriver")

  }
  return (

    <div>
      <h1 align="center" className="mt-5 mb-3">
        Dashboard Driver
      </h1>
      <div className="card dashboardcard">
        <div className="card-body text-center" >
          <div>
            <h4 className="mb-5">
              <img src={book} className="dashicon" alt="..." />
              <a href="/cabDetails">Add My Cab Details</a>
            </h4>
            {/* <h4 className="mb-5">
              <img src={rate} className="dashicon" alt="..." />
              <a href="/rate">Rate a Driver</a>
            </h4> */}
            <h4 className="mb-5">
              <img src={history} className="dashicon" alt="..." />
              <a href="/startTrip">Trip Requests</a>
            </h4>
            <h4 className="mb-5">
              <img src={edit} className="dashicon" alt="..." />
              <a href="/updateDriver">Edit my profile</a>
            </h4>
          </div>
        </div>
        <center>
          <button
            type="button"
            style={{ backgroundColor: "rgb(111, 136, 168)", color: "white", fontWeight: "bold" }}
            className="btn success shadow mb-3"
            onClick={logOut}>
            LOG OUT
          </button>
        </center>

      </div>
    </div>
  );
}