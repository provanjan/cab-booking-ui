import React from "react";
import DriverService from "../Services/DriverService";
import {Link} from "react-router-dom";

class UpdateCab extends React.Component
{

    constructor(props)
    {
        super(props);
        this.state = {
            cabs: [],
            cab: {}
        }
        this.updateCab = this.updateCab.bind(this)
        this.getCab = this.getCab.bind(this)
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

    getCab (event)
    {
        const cabId = event.target.cabId.value;
        DriverService.getCab(cabId).then(response =>
        {
            this.setState({
                cab: response.data
            })
        })
    }

    updateCab (event)
    {
        event.preventDefault();
        const cabId = event.target.cabId.value;
        const carType = event.target.carType.value;
        const modelNumber = event.target.modelNumber.value;
        const perKmRate = event.target.perKmRate.value;

        const data = {

            "cabId": cabId,
            "carType": carType,
            "modelNumber": modelNumber,
            "perKmRate": perKmRate

        }
        DriverService.updateCab(cabId, data).then(response =>
        {
            alert("Updated Successfully");
        })
    }

    render ()
    {

        return (
            <div>
                <Link to="/driver"><button className="btn btn-success"><i className="fa fa-arrow-left"></i> Back</button></Link>
                <div align="center" className="container">
                <h3 align="center">Update Cab Information</h3>
                <br></br>

                <div className="container form body form-body">
                    <form onSubmit={this.updateCab}>
                        <select class="form-control" name="cabId" onChange={this.getCab}>
                            <option>---Choose Cab To Update---</option>
                            {
                                this.state.cabs.map(cab => (
                                    <option value={cab.cabId}> ({cab.cabId}) {cab.carType}  {cab.modelNumber} {cab.perKmRate} </option>
                                ))
                            }
                        </select>
                        <input type="text" name="carType" placeholder="car type" className="form-control" value={this.state.carType} />
                        <input type="text" name="modelNumber" placeholder="Model number" className="form-control" value={this.state.modelNumber} />
                        <input type="text" name="perKmRate" placeholder="Rate per km" className="form-control" value={this.state.perKmRate} />
                        <center>


                            <button type="submit" style={{ margin: "10px" }} className="btn btn-danger">Update</button>
                        </center>
                    </form>
                </div>

            </div >
            </div>
        )
    }


}
export default UpdateCab;