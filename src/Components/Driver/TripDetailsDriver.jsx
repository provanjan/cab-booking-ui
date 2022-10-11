import React from "react";
import DriverService from "../Services/DriverService";
import TripBookingService from "../Services/TripBookingService";
import CustomerService from "../Services/CustomerService";
import { Link } from "react-router-dom";

class TripDetailsDriver extends React.Component
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
    this.endTrip = this.endTrip.bind(this);
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
          .catch((error) =>
          {
            alert("Error occured");
          });
      })
      .catch((error) =>
      {
        alert("Error occured trip");
      });

  }

  endTrip (tripBookingId, driverId)
  {
    DriverService.endTrip(driverId, tripBookingId)
      .then((response) =>
      {
        alert("Trip ended");
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
      <div align="container-fluid">
        <h3 style={{ color: "darkcyan" }} className="text-center mt-4 mb-2">------Driver Trip Details------</h3>
        {/* <form class="card-body shadow" onSubmit={this.deleteTrip(parseInt(this.state.trips.tripBookingId))}> */}
        <div class="card historycard" >
          <div class="card-body shadow">
            <h4>DRIVER and CAB DETAILS</h4>
            <h5 class="card-title">Driver Name</h5>
            <p class="card-text">{this.state.drivers.userName} </p>
            <hr />
            <h5 class="card-title">Cab Type</h5>
            <p class="card-text">{this.state.cabs.carType} </p>
          </div>
        </div>

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
            <h5 class="card-title">DATE</h5>
            <p class="card-text">{this.state.trips.fromDateTime}</p>
            <hr />
            <h5 class="card-title">PAYMENT DETAILS</h5>
            <p class="card-text">₹ {this.state.trips.totalAmount}</p>
            <hr />
            <Link to="/driver"
              onClick={() =>
                this.endTrip(parseInt(this.state.trips.tripBookingId), parseInt(this.state.drivers.userId))
              }>
              <button
                type="button"

                className="btn btn-outline-danger"
              >
                End Trip
              </button>
            </Link>

          </div>
        </div>
      </div>

    );
  }
}

export default TripDetailsDriver;