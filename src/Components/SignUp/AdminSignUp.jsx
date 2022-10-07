import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import SignUpService from "../Services/SignUpService";
import { Link } from "react-router-dom";
import "../SignUp/signup.css";

export default function AdminSignUp() {
    let navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const addAdmin = (data) => {
        SignUpService.addAdmin(data)
            .then((Response) => {
                alert("SIGN UP SUCCESSFUL !!");
                navigate("/admin");
            })
            .catch((error) => {
                alert("UH OH - Internal Server Error");
            });
    };
    return (
        <div className="row loginrow">
            <div class="card logincard col shadow">
                <div class="card-body">
                    <h5 class="card-title text-center mb-3">SIGN UP</h5>
                    <div>
                        <div class="mb-3">
                            <label for="FormControlName" class="form-label">
                                Name:
                            </label>
                            <input
                                type="text"
                                id="FormControlName"
                                name="userName"
                                placeholder="Name"
                                className="form-control"
                                {...register("userName", { required: true,minLength:3, maxLength: 20 })}
                            />
                            {errors.userName && errors.userName.type === "required" && (
                                <span className="error">Name is Required</span>
                            )}
                            {errors.userName && errors.userName.type === "maxLength" && (
                                <span className="error">
                                    Name must not contain more than 20 characters
                                </span>
                            )}
                            {errors.userName && errors.userName.type === "minLength" && (
                                <span className="error">
                                    Name must not contain less than 3 characters
                                </span>
                            )}
                        </div>
                        <div class="mb-3">
                            <label for="FormControlEmail" class="form-label">
                                Email address:
                            </label>
                            <input
                                type="email"
                                class="form-control"
                                id="FormControlEmail"
                                placeholder="name@example.com"
                                name="email"
                                className="form-control"
                                {...register("email", {
                                    required: true,
                                    pattern: { value: /\S+@\S+.\S+\S+/ },
                                })}
                            />
                            {errors.email && errors.email.type === "required" && (
                                <span className="error">Email is Required</span>
                            )}
                            {errors.email && errors.email.type === "pattern" && (
                                <span className="error">Email must be in name@example.com</span>
                            )}
                        </div>
                        <div class="mb-3">
                            <label for="FormControlPassword" class="form-label">
                                Password:
                            </label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                className="form-control"
                                {...register("password", { required: true, maxLength: 20,minLength:4 })}
                            />
                            {errors.password && errors.password.type === "required" && (
                                <span className="error">Password is Required</span>
                            )}
                            {errors.password && errors.password.type === "maxLength" && (
                                <span className="error">
                                    Password must not contain more than 20 characters
                                </span>
                            )}
                            {errors.password && errors.password.type === "minLength" && (
                                <span className="error">
                                    Password must not contain less than 4 characters
                                </span>
                            )}
                        </div>
                        <div class="mb-3">
                            <label for="FormControlMobile" class="form-label">
                                Mobile:
                            </label>
                            <input
                                type="text"
                                name="mobile"
                                placeholder="Phone Number"
                                className="form-control"
                                {...register("mobile", {
                                    required: true,
                                    maxLength: 12,
                                })}
                            />
                            {errors.mobile && errors.mobile.type === "required" && (
                                <span className="error">Phone Number is Required</span>
                            )}
                            {errors.mobile && errors.mobile.type === "maxLength" && (
                                <span className="error">
                                    Phone Number must not be longer than 10 digits
                                </span>
                            )}
                        </div>
                        <div class="mb-3">
                            <label for="FormControlAddress" class="form-label">
                                Address:
                            </label>
                            <input
                                type="text"
                                name="address"
                                placeholder="Address"
                                className="form-control"
                                {...register("address", { required: true })}
                            />
                            {errors.address && errors.address.type === "required" && (
                                <span className="error">Address is Required</span>
                            )}
                        </div>
                        <div className="text-center">
                            <button
                                type="button"
                                onClick={handleSubmit(addAdmin)}
                                class="btn btn-outline-info shadow-sm mb-3 mt-2"
                            >
                                Sign Up
                            </button>
                        </div>
                        <hr />
                        <h6 class="card-subtitle mb-3 mt-4 text-muted text-center">
                            Already a user? <Link to="/loginAdmin">LOGIN</Link>
                        </h6>
                    </div>
                </div>
            </div>
        </div>
    );
}