import React from 'react'
import { useNavigate } from 'react-router';
import TripBookingService from '../Services/TripBookingService';

export default function BookRide ()
{
  let navigate = useNavigate()
  const onSubmit = async (event) =>
  {
    event.preventDefault();
    await TripBookingService.getTripBookings()
    navigate("/customer");
  };

  return (
    <div>
      <div className="card" >
        <div className="card-body"><br />
          <h3>Add Details To Book A Ride:</h3><br />
          <div className='card'>
            <div className='card-body'>
              <form className="row g-3">
                <div className="col-md-6">
                  <label for="inputYourLocation" className="form-label">Your Location:</label>
                  <input type="yourLocation" className="form-control" id="inputYourLocation" />
                </div>
                <div className="col-md-6">
                  <label for="inputDestination" className="form-label">Destination:</label>
                  <input type="destination" className="form-control" id="inputDestination" />
                </div>
                <div className="col-12">
                  <label for="inputDate" className="form-label">Date:</label>
                  <input type="date" className="form-control" id="inputDate" />
                </div>
                {/* <div className="col-12">
                  <label for="inputTime" className="form-label">Time:</label>
                  <input type="time" className="form-control" id="inputTime" />
                </div> */}
                <div className="col-12 text-center">
                  <button type="submit" onSubmit={(event) => onSubmit(event)} className="btn btn-success">Book Now</button>
                </div>
                <div className="col-12 text-center">
                  <button type="cancel" className="btn btn-danger">Cancel</button>
                </div>
              </form>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}