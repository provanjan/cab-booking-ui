import React from "react";
import CustomerService from "../Services/CustomerService";
import TripBookingService from "../Services/TripBookingService";
import { Link } from "react-router-dom";
import "./trip.css";
import DriverService from "../Services/DriverService";

class CurrentTripCustomer extends React.Component
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
                alert("Error occured");
            });

        TripBookingService.getAllTripsOfCustomer(customerId)
            .then((response) =>
            {
                this.setState({ trips: response.data });
                console.log(response.data)
                DriverService.getDriverById(response.data.driverId)
                    .then((response) =>
                    {
                        this.setState({ drivers: response.data });
                    })
                    .catch((error) =>
                    {
                        alert("Error occured");
                    });
            })
            .catch((error) =>
            {
                alert("Error occured");
            });

    }


    render ()
    {
        return (

            <div align="center">
                {
                    this.state.trips.status ? (
                        <div>
                            <div class="card historycard" >
                                <h3 style={{ color: "darkcyan" }} className="text-center mt-4 mb-2">YAYY !! You're on a trip </h3>
                                <h4 className="text-center mt-4 mb-2">Have a safe journey</h4>
                                <div class="card-body shadow">
                                    <h5 class="card-title">DRIVER NAME</h5>
                                    <p class="card-text">{this.state.drivers.userName}</p>
                                    <hr />
                                    <h4>{this.state.customers.userName}</h4>
                                    <h5 class="card-title">PICKUP POINT</h5>
                                    <p class="card-text">{this.state.trips.fromLocation} </p>
                                    <div className="to">&nbsp; To &nbsp;</div>
                                    <h5 class="card-title">DROP POINT</h5>
                                    <p class="card-text">{this.state.trips.toLocation} </p>
                                </div>
                            </div>
                            {/* <div class="card historycard" >
                                <div class="card-body shadow">

                                    <h5 class="card-title">PAYMENT DETAILS</h5>
                                    <p class="card-text">₹ {this.state.trips.totalAmount}</p>
                                    <hr />
                                    <h5 class="card-title">Share this OTP with Driver to start Trip</h5>
                                    <p class="card-text">{this.state.trips.otp}</p>
                                    <hr />
                                </div>
                            </div> */}
                        </div>
                    ) : (
                        <div class="card" style={{ width: "60%", align: "center" }}>


                            <div class="card-body shadow">
                                <h3 style={{ color: "darkcyan" }} className="text-center mt-4 mb-2"> Your Trip has ended  !!</h3>
                                <hr />
                                <h1 style={{ color: "gray" }} className="text-center mt-4 mb-2"> Hope you had comfortable ride </h1>
                                <hr />
                                <center>
                                    <Link align="center" style={{ color: "black", fontSize: "larger" }} className="text-center mt-4 mb-2" to={`/rate/${this.state.drivers.userId}`}>Click here to see summary</Link>
                                </center>
                            </div>
                        </div>
                    )}
            </div>

        );
    }
}

export default CurrentTripCustomer;