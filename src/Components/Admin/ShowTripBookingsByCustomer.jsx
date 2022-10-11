import React from "react";
import AdminService from "../Services/AdminService";
import Table from 'react-bootstrap/Table';
import { Link } from "react-router-dom";
import "../Admin/style.css";

class ShowTripBookingsByCustomer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tripBookings: []
        }
        this.getTripBooking = this.getTripBooking.bind(this)
    }

    getTripBooking(event) {
        const id = event.target.customerId.value;
        AdminService.getTripBookingsByCustomerId(id).then(response => {
            this.setState({
                tripBookings: response.data
            });
        })
        .catch((error)=>{
            alert("Wrong ID!! Enter a valid ID");
        })
        event.preventDefault()
    }

    render() {

        return (
            <div>
                <Link to="/admin"><button className="btn btn-success"><i className="fa fa-arrow-left"></i> Back</button></Link>
                <div align="container-fluid" className="flex-wrapper">
                <h3 align="center"> Trip Booking Information of Customer</h3>
                <div className="container form body form-body">
                    <form onSubmit={this.getTripBooking}>
                        <input type="text" name="customerId" placeholder="Enter the id to be searched" className="form-control" />
                        <button type="submit" className="btn btn-dark">Submit</button>
                    </form>
                </div>
                <br></br>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr align="center">
                            <th>ID</th>
                            <th>Customer ID</th>
                            <th>From Location</th>
                            <th>To Location</th>
                            <th>From Date</th>
                            <th>Distance</th>
                            <th>Total Amount</th>
                            <th>OTP</th>
                        </tr>
                    </thead>
                    <tbody>
                        {

                            this.state.tripBookings.map(tripBooking => (
                                <tr align="center">
                                    <td>{tripBooking.tripBookingId}</td>
                                    <td>{tripBooking.customerId}</td>
                                    <td>{tripBooking.fromLocation}</td>
                                    <td>{tripBooking.toLocation}</td>
                                    <td>{tripBooking.fromDateTime}</td>
                                    <td>{tripBooking.distanceInKm}</td>
                                    <td>{tripBooking.totalAmount}</td>
                                    <td>{tripBooking.otp}</td>
                                </tr>
                            ))

                        }
                    </tbody>
                </Table>
            </div>
            </div>

        )
    }
}
export default ShowTripBookingsByCustomer;