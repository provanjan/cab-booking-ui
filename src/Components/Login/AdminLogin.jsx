import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import "../Login/adminLogin.css";
import LoginService from '../Services/LoginService';
import { Link } from "react-router-dom";

export default function AdminLogin() {
    let navigate = useNavigate();

    const {
        register, handleSubmit, formState: { errors } } = useForm();

    const addAdmin = (data) => {
        LoginService.validateAdmin(data.email, data.password)
            .then((Response) => {
                console.log(Response);
                alert("Logged in Successfully !!");
                navigate("/admin");
            })
            .catch((error) => {
                alert("TRY AGAIN !! Email and password did not match!");
                navigate("/loginAdmin");
            });
    };

    return (
        <div className="row loginrow">
            <div class="card logincard col shadow">
                <div class="card-body">
                    <h5 class="card-title text-center mb-3">LOGIN</h5>
                    <div>
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
                                {...register("password", { required: true,minLength:4, maxLength: 20 })}
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
                        <div className="text-center">
                            <button
                                type="button"
                                onClick={handleSubmit(addAdmin)}
                                class="btn btn-outline-info shadow-sm mb-3 mt-2"
                            >
                                Login
                            </button>
                        </div>
                        <hr />
                        <h6 class="card-subtitle mb-3 mt-4 text-muted text-center">
                            Need an account? <Link to="/signUpAdmin">SIGN UP</Link>
                        </h6>
                    </div>
                </div>
            </div>
        </div>
    );
}