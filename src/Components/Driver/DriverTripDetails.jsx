import React from "react";
import CustomerService from "../Services/CustomerService";
import TripBookingService from "../Services/TripBookingService";
import DriverService from "../Services/DriverService";
import "../TripBooking/trip.css";

class DriverTripDetails extends React.Component
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
            <div>

                {/* {
                    !(this.state.drivers.length > 0) ? ( */}
                <div align="container-fluid">
                    <h3 style={{ color: "darkslategray" }} className="text-center mt-4 mb-2">------Driver Trip Details------</h3>
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
                        </div>
                    </div>
                </div>
                {/* ) : (
                        <div class="card" style={{ width: "60%", align: "center" }}>


                            <div class="card-body shadow">
                                <h3 style={{ color: "darkcyan" }} className="text-center mt-4 mb-2"> You don't have any ride scheduled currently !!</h3>
                                <hr />
                                <h1 style={{ color: "gray" }} className="text-center mt-4 mb-2"> Make you Car ready to fly -- !!!! </h1>
                                <hr />
                            </div>
                        </div>
                    )} */}
            </div>
        );
    }
}

export default DriverTripDetails;