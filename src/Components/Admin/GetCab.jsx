import React from "react";
import AdminService from "../Services/AdminService";
import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';

import "../Admin/style.css";

class GetCab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cab: {}
        }
        this.getCab = this.getCab.bind(this)
    }


    getCab(event) {
        const id = event.target.cabId.value;
        AdminService.getCab(id).then(response => {

            this.setState({
                cab: response.data
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
                <h3 align="center"> Cab Information </h3>
                <div className="container form body form-body">
                    <form onSubmit={this.getCab}>
                        <input type="text" name="cabId" placeholder="Enter the id to be searched" className="form-control" />
                        <button type="submit" className="btn btn-dark">Submit</button>
                    </form>
                </div>
                <br></br>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr align="center">
                            <th>ID</th>
                            <th>Cab Type</th>
                            <th>Rate Per Km</th>
                            <th>Model NO.</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            <tr align="center">
                                <td>{this.state.cab.cabId}</td>
                                <td>{this.state.cab.carType}</td>
                                <td>{this.state.cab.perKmRate}</td>
                                <td>{this.state.cab.modelNo}</td>
                            </tr>

                        }
                    </tbody>
                </Table>
            </div>
            </div>
        )

    }
}
export default GetCab;
