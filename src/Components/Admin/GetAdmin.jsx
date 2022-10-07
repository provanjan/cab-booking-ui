import React from "react";
import AdminService from "../Services/AdminService";
import Table from 'react-bootstrap/Table';
import "../Admin/style.css";

class GetAdmin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            admin: {}
        }
        this.getAdmin = this.getAdmin.bind(this)
    }


    getAdmin(event) {
        const id = event.target.userId.value;
        AdminService.getById(id).then(response => {

            this.setState({
                admin: response.data
            });
        })
        .catch((error)=>{
            alert("Wrong ID!! Enter a valid ID");
        })
        event.preventDefault()
    }
    render() {

        return (
            <div align="container-fluid" className="flex-wrapper">
                <h3 align="center"> Admin Information </h3>
                <div className="container form body form-body">
                    <form onSubmit={this.getAdmin}>
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
                                <td>{this.state.admin.userId}</td>
                                <td>{this.state.admin.userName}</td>
                                <td>{this.state.admin.password}</td>
                                <td>{this.state.admin.email}</td>
                                <td>{this.state.admin.mobile}</td>
                                <td>{this.state.admin.address}</td>
                            </tr>

                        }
                    </tbody>
                </Table>
            </div>
        )

    }
}
export default GetAdmin;
