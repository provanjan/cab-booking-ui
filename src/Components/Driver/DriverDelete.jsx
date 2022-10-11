import DriverService from "../Services/DriverService";
import React from "react";

class DriverDelete extends React.Component
{

    constructor(props)
    {
        super(props);
        this.state = {
            drivers: []
        }
        this.DeleteDriver = this.deleteDriver.bind(this);
    }

    componentDidMount ()
    {
        DriverService.getDrivers().then(response =>
        {
            this.setState({
                drivers: response.data
            })
        })
    }

    deleteDriver (event)
    {
        const id = event.target.id.value;
        DriverService.deleteDriver(id).then(response =>
        {
            alert("Deleted Successfully");
        })
    }

    render ()
    {

        return (
            <div className="container">
                <h3 align="center" className="mt-5 mb-4">Delete Driver Information</h3>
                <div className="container form body form-body updatecard">
                    <form onSubmit={this.deleteDriver}>
                        <select class="form-control" name="id">
                            <option>---Choose To Delete---</option>
                            {
                                this.state.drivers.map(driver => (
                                    <option value={driver.userId}>{driver.userName} -- {driver.email} -- {driver.address} -- ({driver.userId})</option>
                                ))
                            }
                        </select>
                        <center><button type="submit" className="btn btn-danger mb-4 mt-2">Delete</button></center>

                    </form>
                </div>

            </div>
        )
    }


}

export default DriverDelete;