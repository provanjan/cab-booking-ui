import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import CustomerService from "../Services/CustomerService";

export default function EditProfile ()
{
  let navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const updateCustomer = (data) =>
  {
    let customerId = window.localStorage.getItem("customerId");
    CustomerService.updateCustomer(customerId, data)
      .then((Response) =>
      {
        alert("PROFILE UPDATED SUCCESSFULLY !!");
        navigate("/customerDashboard");
      })
      .catch((error) =>
      {
        alert("Uh Oh - Internal Server Occured !!");
      });
  };
  return (
    <div>
      <Link to="/customerDashboard"><button className="btn btn-success"><i className="fa fa-arrow-left"></i> Back</button></Link>
      <div className="row loginrow">
      <div class="card logincard col shadow">
        <div class="card-body">
          <h2 class="card-title text-center mb-3">EDIT YOUR PROFILE INFO</h2>
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
              {errors.password && errors.password.type === "maxLength" && (
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
                type="tel"
                name="mobile"
                placeholder="Phone Number"
                className="form-control"
                {...register("mobile", {
                  required: true,
                  maxLength: 10,
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
            <center alignItems="horizontal" className="col">
              <div
                style={{ fontWeight: "bold", padding: "10px" }}
                align="center "
                className="row-3 text-center"
              >
                <button
                  style={{ fontWeight: "bold" }}
                  type="submit"
                  className="btn btn-success"
                  onClick={handleSubmit(updateCustomer)}
                >
                  SAVE
                </button>
              </div>
              <div
                style={{ fontWeight: "bold", padding: "10px" }}
                className="row-3 text-center"
              >
                <Link type="cancel" className="btn btn-danger" to="/customerDashboard">
                  Cancel
                </Link>
              </div>
            </center>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}