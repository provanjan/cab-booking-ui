import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import DriverService from "../Services/DriverService";
import "./adminLogin.css";

export default function LoginDriver ()
{
  let navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const addDriver = (data) =>
  {

    DriverService.validateDriver(data.email, data.password)
      .then((response) =>
      {
        console.log(JSON.parse(parseInt(response.data.userId)));
        let driverId = JSON.stringify(parseInt(response.data.userId));
        console.log(driverId);
        window.localStorage.setItem("driverId", driverId);
        window.localStorage.setItem("loggedInUserRole", "driver")
        alert("Logged in Successfully !!");
        navigate("/driver");
      })
      .catch((error) =>
      {
        alert("TRY AGAIN !!!!  Email and password does not match !!!");
      });
  };

  return (
    <div className="row loginrow">
      <div class="card logincard col shadow">
        <div class="card-body">
          <h4 class="card-title text-center mb-3">DRIVER</h4>
          <h2 class="card-title text-center mb-3">LOGIN</h2>
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
                  Password must not contain more than 10 characters
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
                onClick={handleSubmit(addDriver)}
                class="btn btn-outline-info shadow-sm mb-3 mt-2"
              >
                Login
              </button>
            </div>
            <hr />
            <h6 class="card-subtitle mb-3 mt-4 text-muted text-center">
              Need an account? <Link to="/signUpDriver">SIGN UP</Link>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}