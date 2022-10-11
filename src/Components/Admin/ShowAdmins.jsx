import React from "react";
import AdminService from "../Services/AdminService";
import Table from 'react-bootstrap/Table';
import { Link } from "react-router-dom";
import "../Admin/style.css";

class ShowAdmins extends React.Component {

    constructor(props) {
        super(props);
        this.state = { admins: [] }
    }

    componentDidMount() {
        AdminService.getAdmins().then(response => {
            this.setState({
                admins: response.data
            })
        })
    }

    render() {


        return (

            <div>
                <Link to="/admin"><button className="btn btn-success"><i className="fa fa-arrow-left"></i> Back</button></Link>
                <div align="container-fluid" className="flex-wrapper">
                <h3 align="center"> Admins Information </h3>
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
                            this.state.admins.map(admin => (
                                <tr align="center">
                                    <td>{admin.userId}</td>
                                    <td>{admin.userName}</td>
                                    <td>{admin.password}</td>
                                    <td>{admin.email}</td>
                                    <td>{admin.mobile}</td>
                                    <td>{admin.address}</td>
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

export default ShowAdmins;