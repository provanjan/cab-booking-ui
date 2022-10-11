import React from "react";
import AdminService from "../Services/AdminService";
import CustomerService from "../Services/CustomerService";

class TripHistory extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      trips: [],
      customers: [],
      drivers: [],
    };
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
        alert("Error occured !!");
      });
    AdminService.getTripBookingsByCustomerId(customerId)
      .then((response) =>
      {
        this.setState({ trips: response.data });
      })
      .catch((error) =>
      {
        alert("Error occured");
      });
  }
  render ()
  {
    return (
      <div align="container-fluid">
        <br />
        <h3 className="text-center">-------Trip History-------</h3>
        <br />
        <div
          style={{ margin: "20px", padding: "20px" }}
          className="card shadow mb-3"
        >
          {/* <div className="col-md-6">
            <label
              style={{ fontWeight: "bold" }}
              for="inputYourLocation"
              className="form-label"
            >
              PICK UP POINT:
            </label>
            <input
              type="yourLocation"
              name="fromLocation"
              className="form-control"
              id="inputYourLocation"
              {...register("fromLocation", {
                required: true,
                maxLength: 15,
              })}
            />
          </div>
          <div className="col-md-6">
            <label
              style={{ fontWeight: "bold" }}
              for="inputDestination"
              className="form-label"
            >
              DROP POINT:
            </label>
            <input
              type="destination"
              className="form-control"
              name="toLocation"
              id="inputDestination"
              {...register("toLocation", {
                required: true,
                maxLength: 15,
              })}
            />
          </div>
          <div className="col-12">
            <label
              style={{ fontWeight: "bold" }}
              for="inputDate"
              className="form-label"
            >
              Date:
            </label>
            <input
              type="date"
              className="form-control"
              id="inputDate"
              name="fromDateTime"
              {...register("fromDateTime", {
                required: true,
                maxLength: 15,
              })}
            />
          </div>
          <div className="col-12">
            <label
              style={{ fontWeight: "bold" }}
              for="inputDistance"
              className="form-label"
            >
              Distance:
            </label>
            <input
              type="number"
              className="form-control"
              id="distanceInKm"
              name="distanceInKm"
              {...register("distanceInKm", {
                required: true,
              })}
            />
          </div> */}
          {/* <h3>{this.state.customers.userName}</h3> */}
          <table className="table table-striped " align="center">
            <thead style={{ backgroundColor: "lightblue" }}>
              <tr>
                <th>Customer ID</th>
                <th>Customer Name</th>
                <th>From Location</th>
                <th>To Location</th>
                <th>Date </th>
                <th>Distance</th>
                <th>Bill</th>
              </tr>
            </thead>
            <tbody>
              {this.state.trips.map((trip) => (
                <tr style={{ padding: "5px" }}>
                  <td>{trip.customerId}</td>
                  <td>{this.state.customers.userName}</td>
                  <td>{trip.fromLocation}</td>
                  <td>{trip.toLocation}</td>
                  <td>{trip.fromDateTime}</td>
                  <td>{trip.distanceInKm}</td>
                  <td>₹ {trip.totalAmount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default TripHistory;