import React from "react";
import AdminService from "../Services/AdminService";
import Table from 'react-bootstrap/Table';
import "../Admin/style.css";

class ShowTripBookings extends React.Component {

    constructor(props) {
        super(props);
        this.state = { tripBookings: [] }
    }

    componentDidMount() {
        AdminService.getTripBookings().then(response => {
            this.setState({
                tripBookings: response.data
            })
        })
    }

    render() {


        return (

            <div align="container-fluid" className="flex-wrapper">
                <h3 align="center"> Trip Booking Information </h3>
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

export default ShowTripBookings;