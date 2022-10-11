import React from "react";
import DriverService from "../Services/DriverService";
import {Link} from "react-router-dom";

class DeleteCab extends React.Component
{


    constructor(props)
    {
        super(props);
        this.state = {
            cabs: []
        }
        this.deleteCab = this.deleteCab.bind(this);
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

    deleteCab (event)
    {
        event.preventDefault();
        const cabId = event.target.cabId.value;
        DriverService.deleteCab(cabId).then(response =>
        {
            alert("Deleted Successfully");
        })
    }

    render ()
    {

        return (
            <div>
                <Link to="/driver"><button className="btn btn-success"><i className="fa fa-arrow-left"></i> Back</button></Link>
                <div align="center" className="center">
                <br />
                <form onSubmit={this.deleteCab}>
                    <select align="center" style={{ padding: "10px", width: "60%" }} class="form-control" name="cabId">
                        <option>---Choose---</option>
                        {
                            this.state.cabs.map(cab => (
                                <option value={cab.cabId}>{cab.carType} {cab.regNumber} ({cab.cabId})</option>
                            ))
                        }
                    </select>
                    <center>


                        <button style={{ padding: "10px", margin: "10px" }} type="submit" className="btn btn-danger">Delete</button>
                    </center>
                </form>

            </div>
            </div>
        )
    }


}

export default DeleteCab;