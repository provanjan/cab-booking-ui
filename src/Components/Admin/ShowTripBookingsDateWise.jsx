import React from "react";
import AdminService from "../Services/AdminService";
import Table from 'react-bootstrap/Table';
import "../Admin/style.css";

class ShowTripBookingsDateWise extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tripBookings: []
        }
        this.getTripBooking = this.getTripBooking.bind(this)
    }

    getTripBooking(event) {
        const date = event.target.date.value;
        AdminService.getTripBookingsDateWise(date).then(response => {
            this.setState({
                tripBookings: response.data
            });
        })
        .catch((error)=>{
            alert("Wrong Date!! Enter a valid Date");
        })
        event.preventDefault()
    }

    render() {

        return (
            <div align="container-fluid" className="flex-wrapper">
                <h3 align="center"> Trip Booking Information Based on Date</h3>
                <div className="container form body form-body">
                    <form onSubmit={this.getTripBooking}>
                        <input type="text" name="date" placeholder="Enter the date to be searched" className="form-control" />
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
                            <th>From Date & Time</th>
                            <th>Distance</th>
                            <th>Total Amount</th>
                            <th>Status</th>
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
                                    <td>{tripBooking.status}</td>
                                    <td>{tripBooking.otp}</td>
                                </tr>
                            ))

                        }
                    </tbody>
                </Table>
            </div>
        )
    }
}
export default ShowTripBookingsDateWise;