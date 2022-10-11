import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import DriverService from "../Services/DriverService";
import DriverTripDetails from "./DriverTripDetails";

export default function StartTrip ()
{
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let navigate = useNavigate();

  const startTrip = (data) =>
  {
    DriverService.verifyOtp(data.otp)
      .then((response) =>
      {
        alert("OTP VERIFIED !! HAPPY JOURNEY !!");
        console.log(parseInt(response.data.tripBookingId));
        let tripBookingId = JSON.stringify(
          parseInt(response.data.tripBookingId)
        );
        window.localStorage.setItem("tripBookingId", tripBookingId);
        console.log(localStorage.getItem("tripBookingId"));
        navigate(`/tripDetailsDriver`);
      })
      .catch((errors) =>
      {
        alert("Invalid Otp Try Again !!");
      });
  };

  return (
    <div align="center">

      <div>
        <DriverTripDetails />
        <div class="card historycard" >
          <div class="card-body shadow">
            <form className="container">
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  -------Verify otp to start Trip-------
                </label>
                <input
                  type="number"
                  name="otp"
                  align="center"
                  style={{ width: "50%" }}
                  placeholder="Enter 4 digit OTP "
                  class="form-control"
                  {...register("otp", {
                    required: true,
                    min: 0,
                  })}
                />
                {errors.otp && errors.otp.type === "required" && (
                  <span className="error">OTP is Required</span>
                )}{" "}
                {errors.otp && errors.otp.type === "max" && (
                  <span className="error">OTP can't be more than 9999</span>
                )}
                {errors.otp && errors.otp.type === "min" && (
                  <span className="error">OTP can't be negative</span>
                )}
              </div>
              <button
                onClick={handleSubmit(startTrip)}
                type="submit"
                class="btn btn-primary"
              >
                VERIFY OTP
              </button>
            </form>
          </div>
        </div>
      </div>

    </div>
    /* <Link
        type="button"
        onClick={() => this.deleteTrip(parseInt(trip.tripBookingId))}
        className="btn btn-success"
        to={`/editTrip/${trip.tripBookingId}`}
      >
        VERIFY OTP
      </Link>
    </div> */
  );
}