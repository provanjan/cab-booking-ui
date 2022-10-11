import React from "react";
import AdminService from "../Services/AdminService";
import Table from 'react-bootstrap/Table';
import { Link } from "react-router-dom";
import "../Admin/style.css";

class ShowCustomer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            customer: {}
        }
        this.getCustomer = this.getCustomer.bind(this)
    }


    getCustomer(event) {
        const id = event.target.userId.value;
        AdminService.getCustomer(id).then(response => {

            this.setState({
                customer: response.data
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
                <h3 align="center"> Customer Information </h3>
                <div className="container form body form-body">
                    <form onSubmit={this.getCustomer}>
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
                        </tr>
                    </thead>
                    <tbody>
                        {
                            <tr align="center">
                                <td>{this.state.customer.userId}</td>
                                <td>{this.state.customer.userName}</td>
                                <td>{this.state.customer.password}</td>
                                <td>{this.state.customer.email}</td>
                                <td>{this.state.customer.mobile}</td>
                                <td>{this.state.customer.address}</td>
                            </tr>

                        }
                    </tbody>
                </Table>
            </div>
            </div>
        )

    }
}
export default ShowCustomer;
