import axios from "axios";
const DRIVER_API_BASE_URL = "http://localhost:9090/api/v1/drivers/";
const CAB_API_BASE_URL = "http://localhost:9090/api/v1/cabs/";


class DriverService
{
    addDriver (driver)
    {
        return axios.post(DRIVER_API_BASE_URL, driver);
    }
    getDrivers ()
    {
        return axios.get(DRIVER_API_BASE_URL);
    }
    getDriverById (userId)
    {
        return axios.get(DRIVER_API_BASE_URL + userId);
    }
    updateDriver (driverId, driver)
    {
        return axios.put(DRIVER_API_BASE_URL + driverId, driver);
    }
    validateDriver (email, password)
    {
        return axios.get(DRIVER_API_BASE_URL + "validate/" + email + "/" + password)
    }
    deleteDriver (driverId)
    {
        return axios.delete(DRIVER_API_BASE_URL + driverId)
    }
    verifyOtp (otp)
    {
        return axios.get(DRIVER_API_BASE_URL + "verifyOtp/" + otp)
    }
    endTrip (driverId, tripBookingId)
    {
        return axios.get(DRIVER_API_BASE_URL + "endTrip/" + driverId + "/" + tripBookingId);
    }
    getBestAvailableDrivers ()
    {
        return axios.get(DRIVER_API_BASE_URL + "getBestAvailableDrivers")
    }
    addCabs (cab)
    {
        return axios.post(CAB_API_BASE_URL, cab);
    }
    getCabs ()
    {
        return axios.get(CAB_API_BASE_URL);
    }
    getCabById (cabId)
    {
        return axios.get(CAB_API_BASE_URL + cabId);
    }
    setCabToDriver (cab, driverId)
    {
        return axios.post(DRIVER_API_BASE_URL + "setCab/" + driverId, cab)
    }
}

export default new DriverService();