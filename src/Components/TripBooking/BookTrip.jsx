import React from "react";
import { useNavigate } from "react-router";
import TripBookingService from "../Services/TripBookingService";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export default function BookTrip ()
{
  let navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const bookTrip = (data) =>
  {
    let customerId = window.localStorage.getItem("customerId");

    TripBookingService.bookTrip(data, customerId)
      .then((response) =>
      {
        alert("Trip booked !!");
        window.localStorage.setItem("tripBookingId", parseInt(response.data.tripBookingId))
        navigate("/tripsOfCustomer");

      })
      .catch((error) =>
      {
        alert("Error !");
      });

  };

  return (
    <div className="mt-5 mb-5">
      <div
        style={{
          padding: "15px",
          alignItems: "center",
          width: "50%",
          margin: "auto",
        }}
        className="card"
      >
        <div className="card-body shadow  ">
          <h3 align="center"> Book your Joyful and Comfortable Ride </h3>
          <br />
          <div className="card" style={{ border: "0px" }}>
            <div className="card-body">
              <form onSubmit={handleSubmit(bookTrip)} className="row g-3">
                <div className="col-md-6">
                  <label
                    style={{ fontWeight: "bold" }}
                    for="inputYourLocation"
                    className="form-label"
                  >
                    PICK UP POINT:
                  </label>
                  <input
                    type="yourLocation"
                    name="fromLocation"
                    className="form-control"
                    id="inputYourLocation"
                    {...register("fromLocation", {
                      required: true,
                      maxLength: 15,
                    })}
                  />
                  {errors.fromLocation && errors.fromLocation.type === "required" && (
                    <span className="error">PICK UP POINT is Required</span>
                  )}
                  {errors.fromLocation && errors.fromLocation.type === "max" && (
                    <span className="error">Max length reached</span>
                  )}
                </div>
                <div className="col-md-6">
                  <label
                    style={{ fontWeight: "bold" }}
                    for="inputDestination"
                    className="form-label"
                  >
                    DROP POINT:
                  </label>
                  <input
                    type="destination"
                    className="form-control"
                    name="toLocation"
                    id="inputDestination"
                    {...register("toLocation", {
                      required: true,
                      maxLength: 15,
                    })}
                  />
                  {errors.toLocation && errors.toLocation.type === "required" && (
                    <span className="error">DROP POINT is Required</span>
                  )}
                  {errors.toLocation && errors.toLocation.type === "max" && (
                    <span className="error">Max length reached</span>
                  )}
                </div>
                <div className="col-12">
                  <label
                    style={{ fontWeight: "bold" }}
                    for="inputDate"
                    className="form-label"
                  >
                    Date:
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="inputDate"
                    name="fromDateTime"
                    {...register("fromDateTime", {
                      required: true,
                      maxLength: 15,
                    })}
                  />
                  {errors.fromDateTime && errors.fromDateTime.type === "required" && (
                    <span className="error">Date is Required</span>
                  )}
                  {errors.fromDateTime && errors.fromDateTime.type === "max" && (
                    <span className="error">Max length reached</span>
                  )}
                </div>
                <div className="col-12">
                  <label
                    style={{ fontWeight: "bold" }}
                    for="inputDistance"
                    className="form-label"
                  >
                    Distance:
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="distanceInKm"
                    name="distanceInKm"
                    {...register("distanceInKm", {
                      required: true,
                      min: 1
                    })}
                  />
                  {errors.fromDateTime && errors.fromDateTime.type === "required" && (
                    <span className="error">Distance is Required</span>
                  )}
                  {errors.fromDateTime && errors.fromDateTime.type === "min" && (
                    <span className="error">Min 1km should be distance </span>
                  )}
                </div>
                {/* <div className="col-12">
                  <label for="inputTime" className="form-label">Time:</label>
                  <input type="time" className="form-control" id="inputTime" />
                </div> */}
                <div className="col-6 text-center">
                  <button
                    style={{ fontWeight: "bold" }}
                    type="submit"
                    className="btn btn-success"
                  >
                    Book Now
                  </button>
                </div>
                <div className="col-6 text-center">
                  <Link type="cancel" className="btn btn-danger" to="/customerDashboard">
                    Cancel
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}