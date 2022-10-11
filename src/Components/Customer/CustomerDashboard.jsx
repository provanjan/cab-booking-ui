import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import "./customer.css";
import history from "../images/history.png";
import rate from "../images/rate.png";
import book from "../images/book.png";
import edit from "../images/edit.png";



export default function CustomerDashboard ()
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
      navigate("/loginCustomer")
    }
  }, [navigate])


  const logOut = () =>
  {
    window.localStorage.removeItem("loggedInUserRole")
    navigate("/loginCustomer")

  }
  return (
    <div alignItems="center" className="dashbg">
      <div className="col-md-12 text-right" align="right">
        <button className="btn btn-dark " onClick={() =>
        {
          logOut()
        }}><i className="fa fa-lock "></i> LOGOUT</button>
      </div>
      <h1 align="center" className="mt-5 mb-3">
        Customer Dashboard
      </h1>
      <div className="card dashboardcard">
        <div className="card-body text-center" >
          <div>
            <h4 className="mb-5">
              <img src={book} className="dashicon" alt="..." />
              <a href="/ride">Book my trip</a>
            </h4>
            <h4 className="mb-5">
              <img src={rate} className="dashicon" alt="..." />
              <a href="/currentTripCustomer">Current ongoing Trip</a>
            </h4>
            <h4 className="mb-5">
              <img src={history} className="dashicon" alt="..." />
              <a href="/tripHistory">Trip History</a>
            </h4>
            <h4 className="mb-5">
              <img src={edit} className="dashicon" alt="..." />
              <a href="/editProfile">Edit my profile</a>
            </h4>
          </div>
        </div>
        {/* <center>
          <button
            type="button"
            style={{ backgroundColor: "rgb(111, 136, 168)", color: "white", fontWeight: "bold" }}
            className="btn success shadow mb-3"
            onClick={logOut}>
            LOG OUT
          </button>
        </center> */}

      </div>
    </div>
  );
}