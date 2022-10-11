import React from "react";
import CustomerService from "../Services/CustomerService";
import { useNavigate, useParams } from "react-router";
import { useForm } from "react-hook-form";
import "./customer.css";
import EndedTripCustomer from "../TripBooking/EndedTripCustomer";

export default function RateDriver ()
{
  const { userId } = useParams();
  let navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const rateDriver = (data) =>
  {
    console.log(data.rating);
    CustomerService.rateDriver(data, userId).then((response) =>
    {
      alert(response.data);
      navigate("/customerDashboard");
    }).catch((error) =>
    {
      alert("Internal Server Error")
    });

  };

  return (
    <div align="center">
      <EndedTripCustomer />
      <form className="container">
        <div class="mb-3 rate">
          <label for="exampleInputEmail1" class="form-label mt-4 mb-2">
            Rate the Driver
          </label>
          <input
            type="tel"
            name="rating"
            placeholder="Rate out of 5 "
            class="form-control"
            {...register("rating", {
              required: true,
              min: 1,
              max: 5,
            })}
          />
          {errors.rating && errors.rating.type === "required" && (
            <span className="error">Rating is Required</span>
          )}{" "}
          {errors.rating && errors.rating.type === "max" && (
            <span className="error">Rating can't be more than 5</span>
          )}
          {errors.rating && errors.rating.type === "min" && (
            <span className="error">Min rating allowed is 1</span>
          )}
        </div>
        <button
          onClick={handleSubmit(rateDriver)}
          type="submit"
          class="btn btn-outline-dark"
        >
          Rate
        </button>
      </form>
    </div>
  );
}