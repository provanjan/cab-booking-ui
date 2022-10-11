import React from "react";
import AdminService from "../Services/AdminService";
import Table from 'react-bootstrap/Table';
import { Link } from "react-router-dom";
import "../Admin/style.css";

class ShowDriver extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            driver: {}
        }
        this.getDriver = this.getDriver.bind(this)
    }


    getDriver(event) {
        const id = event.target.userId.value;
        AdminService.getDriver(id).then(response => {

            this.setState({
                driver: response.data
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
                <h3 align="center"> Driver Information </h3>
                <div className="container form body form-body">
                    <form onSubmit={this.getDriver}>
                        <input type="text" name="userId" placeholder="Enter the id to be searched" className="form-control" />
                        <button type="submit" className="btn btn-dark">Submit</button>
                    </form>
                </div>
                <br></br>
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
                            
                                <tr align="center">
                                    <td>{this.state.driver.userId}</td>
                                    <td>{this.state.driver.userName}</td>
                                    <td>{this.state.driver.password}</td>
                                    <td>{this.state.driver.email}</td>
                                    <td>{this.state.driver.mobile}</td>
                                    <td>{this.state.driver.address}</td>
                                    <td>{this.state.driver.availability}</td>
                                    <td>{this.state.driver.licenseNo}</td>
                                    <td>{this.state.driver.rating}</td>
                                </tr>
                            
                        }
                    </tbody>
                </Table>
            </div>
            </div>
        )

    }
}
export default ShowDriver;
