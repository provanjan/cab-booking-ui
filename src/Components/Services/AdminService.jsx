import axios from "axios";

const baseURL = "http://localhost:8080/api/v1/admins";
const baseURLDriver="http://localhost:8080/api/v1/drivers";
const baseURLCustomer="http://localhost:8080/api/v1/customers";

class AdminService{

    saveAdmin(admin){
        return axios.post(baseURL+'/',admin);
    }

    deleteAdmin(adminId){
        return axios.delete(baseURL+'/'+adminId);
    }

    getAdmins(){
        return axios.get(baseURL+'/');
    }

    getById(adminId){
        return axios.get(baseURL+'/'+adminId);
    }

    getTripBookings(){
        return axios.get(baseURL+'/trips');
    }

    update(adminId,admin){
        return axios.put(baseURL+'/'+adminId,admin);
    }

    getTripBookingsByCustomerId(customerId){
        return axios.get(baseURL+'/trips/'+customerId);
    }

    getTripBookingsByDriverId(driverId){
        return axios.get(baseURL+'/trips/drivers/'+driverId);
    }

    getTripBookingsDateWise(date){
        return axios.get(baseURL+'/trips/date/'+date);
    }

    getDrivers(){
        return axios.get(baseURLDriver+'/');
    }

    getDriver(driverId){
        return axios.get(baseURLDriver+'/'+driverId);
    }

    getBestDrivers(){
        return axios.get(baseURLDriver+'/bestDrivers');
    }

    deleteDriver(driverId){
        return axios.delete(baseURLDriver+'/'+driverId);
    }

    getCustomers(){
        return axios.get(baseURLCustomer+'/');
    }

    getCustomer(customerId){
        return axios.get(baseURLCustomer+'/'+customerId);
    }

    deleteCustomer(customerId){
        return axios.delete(baseURLCustomer+'/'+customerId);
    }
}

export default new AdminService();