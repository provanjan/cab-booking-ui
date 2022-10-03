import React, { useState } from "react";
import CustomerService from "../Services/CustomerService";
import "./customer.css";
import { useNavigate } from "react-router-dom";

export default function CustomerDetails ()
{
    let navigate = useNavigate();

    const [customer, setCustomer] = useState({
        userName: "",
        password: "",
        mobile: "",
        email: "",
        address: "",
    });

    const { userName, password, mobile, email, address } = customer;

    const onInputChange = (event) =>
    {
        setCustomer({ ...customer, [event.target.name]: event.target.value });
    };

    const onSubmit = async (e) =>
    {
        e.preventDefault();
        await CustomerService.addCustomers(customer);
        navigate("/showCustomer");
    };
    return (
        <div>
            <div className="card">
                <div className="card-body"><br />
                    <h3 className="text-center">Add Your Details:</h3><br />
                    <div className='card customerform'>
                        <div className='card-body'>
                            <form onSubmit={(event) => onSubmit(event)}>
                                <div class="mb-3">
                                    <label for="inputUsername" className="form-label">Username:</label>
                                    <input type={"userName"} className="form-control" id="inputUsername" aria-describedby="emailHelp"
                                        name="userName"
                                        value={userName}
                                        onChange={(event) => onInputChange(event)} />
                                </div>
                                <div class="mb-3">
                                    <label for="inputEmail1" className="form-label">Email address:</label>
                                    <input type={"email"} className="form-control" id="inputEmail1" aria-describedby="emailHelp"
                                        name="email"
                                        value={email}
                                        onChange={(event) => onInputChange(event)} />
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div class="mb-3">
                                    <label for="inputPassword1" className="form-label">Password:</label>
                                    <input type={"password"} className="form-control" id="inputPassword1"
                                        name="password"
                                        value={password}
                                        onChange={(event) => onInputChange(event)} />
                                </div>
                                <div class="mb-3">
                                    <label for="inputMobile" className="form-label">Mobile:</label>
                                    <input type={"mobile"} className="form-control" id="inputMobile"
                                        name="mobile"
                                        value={mobile}
                                        onChange={(event) => onInputChange(event)} />
                                </div>
                                <div class="mb-3">
                                    <label for="inputAddress" className="form-label">Address:</label>
                                    <input type={"address"} className="form-control" id="inputAddress"
                                        name="address"
                                        value={address}
                                        onChange={(event) => onInputChange(event)} />
                                </div>

                                <button type="submit" onClick={(event) => onSubmit(event)} className="btn btn-primary">Submit</button>
                            </form>

                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
}