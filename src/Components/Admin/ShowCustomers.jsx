import React from "react";
import AdminService from "../Services/AdminService";
import Table from 'react-bootstrap/Table';
import "../Admin/style.css";

class ShowCustomers extends React.Component {

    constructor(props) {
        super(props);
        this.state = { customers: [] }
    }

    componentDidMount() {
        AdminService.getCustomers().then(response => {
            this.setState({
                customers: response.data
            })
        })
    }

    render() {


        return (

            <div align="container-fluid" className="flex-wrapper">
                <h3 align="center"> Customers Information </h3>
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
                            this.state.customers.map(customer => (
                                <tr align="center">
                                    <td>{customer.userId}</td>
                                    <td>{customer.userName}</td>
                                    <td>{customer.password}</td>
                                    <td>{customer.email}</td>
                                    <td>{customer.mobile}</td>
                                    <td>{customer.address}</td>
                                    
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </div>

        )
    }
}

export default ShowCustomers;