import React from "react";
import AdminService from "../Services/AdminService";
import Table from 'react-bootstrap/Table';
import { Link } from "react-router-dom";
import "../Admin/style.css";

class GetCabs extends React.Component {

    constructor(props) {
        super(props);
        this.state = { cabs: [] }
    }

    componentDidMount() {
        AdminService.getCabs().then(response => {
            this.setState({
                cabs: response.data
            })
        })
    }

    render() {


        return (

            <div>
                <Link to="/admin"><button className="btn btn-success"><i className="fa fa-arrow-left"></i> Back</button></Link>
                <div align="container-fluid" className="flex-wrapper">
                <h3 align="center"> Cabs Information </h3>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr align="center">
                            <th>ID</th>
                            <th>Cab Type</th>
                            <th>Rate per Km</th>
                            <th>Model No.</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.cabs.map(cab => (
                                <tr align="center">
                                    <td>{cab.cabId}</td>
                                    <td>{cab.carType}</td>
                                    <td>{cab.perKmRate}</td>
                                    <td>{cab.modelNo}</td>
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

export default GetCabs;