import DriverService from '../Services/DriverService';
import { useNavigate } from 'react-router-dom';
import React, { useState } from "react";
import {Link} from "react-router-dom";

function AddCab ()
{

    let navigate = useNavigate();
    const [cab, setCab] = useState({
        carType: "",
        perKmRate: "",
        modelNumber: ""
    });

    const { carType, perKmRate, modelNumber } = cab;

    const onInputChange = (event) =>
    {
        setCab({ ...cab, [event.target.name]: event.target.value });
    };

    const onSubmit = async (event) =>
    {
        event.preventDefault()
        await DriverService.addCabs(cab)
            .then((response) =>
            {
                console.log(response.data.cabId)
                alert("Cab Added Succesfully !!")

            })
            .catch((error) =>
            {
                alert("Internal Server Error")
            });
        let driverId = window.localStorage.getItem("driverId")
        DriverService.setCabToDriver(cab, driverId)
            .then((response) =>
            {
                alert("Driver got his cab")
                navigate("/showCab")
            })
            .catch((error) =>
            {
                alert("Could not set")
            })
    };

    return (
        <div>
            <Link to="/driver"><button className="btn btn-success"><i className="fa fa-arrow-left"></i> Back</button></Link>
            <div className="card">
                <div className="card-body">
                    <h3 className="text-center mt-5 mb-4">Add Your Cab Details:</h3><br />
                    <div className='card driverform'>
                        <div className='card-body'>
                            <form onSubmit={(event) => onSubmit(event)}>
                                <div class="mb-3">
                                    <label for="inputCarType" className="form-label">Car Type:</label>
                                    <input type={"carType"} className="form-control" id="inputCarType" aria-describedby="emailHelp"
                                        name="carType"
                                        value={carType}
                                        onChange={(event) => onInputChange(event)} />


                                </div>
                                <div class="mb-3">
                                    <label for="inputPerKmRate" className="form-label">Per Km Rate:</label>
                                    <input type={"perKmRate"} className="form-control" id="inputPerKmRate"
                                        name="perKmRate"
                                        value={perKmRate}
                                        onChange={(event) => onInputChange(event)} />

                                </div>
                                <div class="mb-3">
                                    <label for="inputModelNumber" className="form-label">Model Number:</label>
                                    <input type={"modelNumber"} className="form-control" id="inputModelNumber"
                                        name="modelNumber"
                                        value={modelNumber}
                                        onChange={(event) => onInputChange(event)} />
                                </div>



                                <center>
                                    <button type="submit" onClick={(event) => onSubmit(event)} className="btn btn-primary">Submit</button>
                                </center>
                            </form>

                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default AddCab;