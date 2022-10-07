import axios from "axios";
const DRIVER_API_BASE_URL = "http://localhost:8080/api/v1/drivers/";

class DriverService
{
    addDriver (driver)
    {
        return axios.post(DRIVER_API_BASE_URL, driver);
    }
    // getDriverById (userId)
    // {
    //     return axios.get(DRIVER_API_BASE_URL + userId);
    // }
}

export default new DriverService();