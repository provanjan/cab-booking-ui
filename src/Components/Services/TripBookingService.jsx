import axios from "axios";
const TRIPBOOKING_API_BASE_URL = "http://localhost:9090/api/v1/tripBookings/";
class TripBookingService
{
    bookTrip (tripDetails, customerId)
    {
        return axios.post(TRIPBOOKING_API_BASE_URL + customerId, tripDetails);
    }
    getTripBookings ()
    {
        return axios.get(TRIPBOOKING_API_BASE_URL);
    }
    getTripBookingById (tripBookingId)
    {
        return axios.get(TRIPBOOKING_API_BASE_URL + "getById/" + tripBookingId);
    }
    getAllTripsOfCustomer (customerId)
    {
        return axios.get(TRIPBOOKING_API_BASE_URL + 'customer/' + customerId);
    }
    updateTrip (tripBookingId, trip)
    {
        return axios.put(TRIPBOOKING_API_BASE_URL + tripBookingId, trip);
    }
    deleteTrip (tripBookingId)
    {
        return axios.delete(TRIPBOOKING_API_BASE_URL + tripBookingId);
    }
}


export default new TripBookingService();