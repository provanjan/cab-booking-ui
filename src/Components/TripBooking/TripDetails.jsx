import React from "react";
import CustomerService from "../Services/CustomerService";
import TripBookingService from "../Services/TripBookingService";
import DriverService from "../Services/DriverService";
import { Link } from "react-router-dom";
import "./trip.css";

class TripDetails extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      trips: [],
      customers: [],
      drivers: [],
      cabs: [],
    };
    this.deleteTrip = this.deleteTrip.bind(this);
  }

  componentDidMount ()
  {
    let customerId = window.localStorage.getItem("customerId");
    CustomerService.getCustomerById(customerId)
      .then((response) =>
      {
        this.setState({ customers: response.data });
      })
      .catch((error) =>
      {
        alert("Error occured");
      });

    TripBookingService.getAllTripsOfCustomer(customerId)
      .then((response) =>
      {
        this.setState({ trips: response.data });
        DriverService.getDriverById(parseInt(response.data.driverId))
          .then((response) =>
          {
            this.setState({ drivers: response.data });
            // this.setState({ cabId: response.data.cabId });
            console.log(response.data.cab.cabId);
            DriverService.getCabById(parseInt(response.data.cab.cabId))           
              .then((response) =>
              {
                this.setState({ cabs: response.data });
              })
              .catch((error) =>
              {
                alert("Error occure d");
              });
          })
 {/*         .catch((error) =>
          {
            alert(error.data);
          }); */}
      })
      .catch((error) =>
      {
        alert("Error occured trip");
      });

  }

  deleteTrip (id)
  {
    TripBookingService.deleteTrip(id)
      .then((response) =>
      {
        alert("Trip Cancelled");
        window.localStorage.removeItem("tripBookingId")
      })
      .catch((error) =>
      {
        alert("Internal Server Error");
      });
  }


  render ()
  {
    return (

      <div align="container-fluid" className="card shadow mb-3">
        <h3 style={{ color: "darkcyan" }} className="text-center mt-4 mb-2">------Trip Details------</h3>
        {/* <form class="card-body shadow" onSubmit={this.deleteTrip(parseInt(this.state.trips.tripBookingId))}> */}
        <div class="card historycard" >
          <div class="card-body shadow">
            <h4>{this.state.customers.userName}</h4>
            <h5 class="card-title">PICKUP POINT</h5>
            <p class="card-text">{this.state.trips.fromLocation} </p>
            <div className="to">&nbsp; To &nbsp;</div>
            <h5 class="card-title">DROP POINT</h5>
            <p class="card-text">{this.state.trips.toLocation} </p>
          </div>
        </div>
        <div class="card historycard" >
          <div class="card-body shadow">
            <h4>DRIVER and CAB DETAILS</h4>
            <h5 class="card-title">Driver Name</h5>
            <p class="card-text">{this.state.drivers.userName} </p>
            <hr />
{/*            <h5 class="card-title">Cab Type</h5>
            <p class="card-text">{this.state.cabs.carType} </p> */}
          </div>
        </div>
        <div class="card historycard" >
          <div class="card-body shadow">
            <h5 class="card-title">DATE</h5>
            <p class="card-text">{this.state.trips.fromDateTime}</p>
            <hr />
            <h5 class="card-title">PAYMENT DETAILS</h5>
            <p class="card-text">₹ {this.state.trips.totalAmount}</p>
            <hr />
            <h5 class="card-title">Share this OTP with Driver to start Trip</h5>
            <p class="card-text">{this.state.trips.otp}</p>
            <hr />
          </div>
        </div>
        <center className="historybtn">
          <Link to="/customerDashboard" style={{ border: "15px", borderColor: "green" }}><button type="button" class="btn btn-outline-success" >--CONFIRM--</button></Link><br /><br />
          <Link to={`/editTrip/${this.state.trips.tripBookingId}`} style={{ border: "15px" }}>
            <button type="button" class="btn btn-outline-dark">Edit Trip</button>
          </Link><br /><br />
          <Link to="/customerDashboard" >
            <button type="submit"
              class="btn btn-outline-danger"
              onClick={() => this.deleteTrip(parseInt(this.state.trips.tripBookingId))}
            >Cancel Ride</button>
          </Link>
        </center>
        {/* </form> */}
      </div>

    );
  }
}

export default TripDetails;