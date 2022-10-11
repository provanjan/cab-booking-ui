import React from "react";
import CustomerService from "../Services/CustomerService";
import TripBookingService from "../Services/TripBookingService"
import DriverService from "../Services/DriverService";
import "./trip.css";

class EndedTripCustomer extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            trips: [],
            customers: [],
            drivers: [],
            cabs: []
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

    render ()
    {
        return (

            <div align="container-fluid" style={{ marginBottom: "0px", width: "100%" }}>
                <h3 style={{ color: "black" }} className="text-center mt-4 mb-2">------Trip Summary------</h3>
                <div class="card historycard" >
                    <div class="card-body shadow">

                        <h5 class="card-title">PICKUP POINT</h5>
                        <p class="card-text">{this.state.trips.fromLocation} </p>
                        <div className="to">&nbsp; To &nbsp;</div>
                        <h5 class="card-title">DROP POINT</h5>
                        <p class="card-text">{this.state.trips.toLocation} </p>
                        <hr />
                    </div>
                    <div class="card-body shadow">
                        <h4>Driver Name</h4>
                        <p class="card-text">{this.state.drivers.userName}</p>
                        <hr />
                        <h5 class="card-title">Car Type</h5>
                        <p class="card-text">₹ {this.state.cabs.carType}</p>
                    </div>
                </div>
            </div>

        );
    }
}

export default EndedTripCustomer;