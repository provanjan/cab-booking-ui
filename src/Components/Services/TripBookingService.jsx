import axios from "axios";
import DriverService from "./DriverService";
const TRIPBOOKING_API_BASE_URL = "http://localhost:8080/api/v1/tripBookings/";

class TripBookingService
{
    // bookTrip (tripDetails)
    // {
    //     let userId = 1;
    //     DriverService.getDriverById(userId).then((response) =>
    //     {
    //         this.setState({ driver: response.data })
    //     })

    //     return axios.post(TRIPBOOKING_API_BASE_URL, tripDetails);
    // }
    getTripBookings ()
    {
        return axios.get(TRIPBOOKING_API_BASE_URL);
    }
}

export default new TripBookingService();