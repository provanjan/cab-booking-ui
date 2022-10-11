import React from "react";
import CustomerService from "../Services/CustomerService";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import "./adminLogin.css";
import { Link } from "react-router-dom";

export default function CustomerLogin ()
{
  let navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const addCustomer = (data) =>
  {
    CustomerService.validateCustomer(data.email, data.password)
      .then((response) =>
      {
        console.log(localStorage.getItem("customerId"))
        console.log(JSON.parse(parseInt(response.data.userId)));
        let customerId = parseInt(response.data.userId);
        window.localStorage.setItem("loggedInUserRole", "customer")
        console.log(customerId);
        window.localStorage.setItem("customerId", customerId);
        alert("Logged in Successfully !!");
        navigate("/customerDashboard");
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
          <h4 class="card-title text-center mb-3">CUSTOMER</h4>
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
                {...register("password", { required: true,minLength:4, maxLength:20 })}
              />
              {errors.password && errors.password.type === "required" && (
                <span className="error">Password is Required</span>
              )}
              {errors.password && errors.password.type === "maxLength" && (
                <span className="error">
                  Password must not contain more than 20 charcters
                </span>
              )}
              {errors.password && errors.password.type === "minLength" && (
                <span className="error">
                  Password must not contain less than 4 charcters
                </span>
              )}
            </div>
            <div className="text-center">
              <button
                type="button"
                onClick={handleSubmit(addCustomer)}
                class="btn btn-outline-info shadow-sm mb-3 mt-2"
              >
                Login
              </button>
            </div>
            <hr />
            <h6 class="card-subtitle mb-3 mt-4 text-muted text-center">
              Need an account? <Link to="/signUpCustomer">SIGN UP</Link>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}