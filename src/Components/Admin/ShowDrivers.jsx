import React from "react";
import AdminService from "../Services/AdminService";
import Table from 'react-bootstrap/Table';
import { Link } from "react-router-dom";
import "../Admin/style.css";

class ShowDrivers extends React.Component {

    constructor(props) {
        super(props);
        this.state = { drivers: [] }
    }

    componentDidMount() {
        AdminService.getDrivers().then(response => {
            this.setState({
                drivers: response.data
            })
        })
    }

    render() {


        return (

            <div>
                <Link to="/admin"><button className="btn btn-success"><i className="fa fa-arrow-left"></i> Back</button></Link>
                <div align="container-fluid" className="flex-wrapper">
                <h3 align="center"> Drivers Information </h3>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr align="center">
                            <th>ID</th>
                            <th>User Name</th>
                            <th>Password</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>Address</th>
                            <th>Availability</th>
                            <th>License No.</th>
                            <th>Rating</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.drivers.map(driver => (
                                <tr align="center">
                                    <td>{driver.userId}</td>
                                    <td>{driver.userName}</td>
                                    <td>{driver.password}</td>
                                    <td>{driver.email}</td>
                                    <td>{driver.mobile}</td>
                                    <td>{driver.address}</td>
                                    <td>{driver.availability}</td>
                                    <td>{driver.licenseNo}</td>
                                    <td>{driver.rating}</td>
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

export default ShowDrivers;