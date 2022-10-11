import React from "react";
import DriverService from "../Services/DriverService";


class ShowCab extends React.Component
{

    constructor(props)
    {
        super(props);
        this.state = { cabs: [] }
    }


    componentDidMount ()
    {
        DriverService.getCabs().then(response =>
        {
            this.setState({
                cabs: response.data
            })
        })
    }


    render ()
    {

        return (

            <div align="container-fluid" style={{ margin: "10px", padding: "20px" }} >
                <div align="center" className="mt-5 mb-4" style={{ fontSize: "60px" }}> Cabs Information </div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>S.No.</th>
                            <th>CARTYPE</th>
                            <th>PERKMRATE</th>
                            <th>Model Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.cabs.map((cab, i) => (
                                <tr>
                                    <td>{i + 1}</td>
                                    <td>{cab.carType}</td>
                                    <td>{cab.perKmRate}</td>
                                    <td>{cab.modelNo}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>

        )
    }
}

export default ShowCab;