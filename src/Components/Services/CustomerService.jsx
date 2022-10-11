import axios from "axios";
const CUSTOMER_API_BASE_URL = "http://localhost:8080/api/v1/customers/";

class CustomerService
{
    addCustomers (customer)
    {
        return axios.post(CUSTOMER_API_BASE_URL, customer);
    }
    getCustomers ()
    {
        return axios.get(CUSTOMER_API_BASE_URL);
    }
    updateCustomer (customerId, customer)
    {
        return axios.put(CUSTOMER_API_BASE_URL + customerId, customer);
    }
    deleteCustomer (customerId)
    {
        return axios.delete(CUSTOMER_API_BASE_URL + customerId)
    }
    rateDriver (driverRating, driverId)
    {
        return axios.post(CUSTOMER_API_BASE_URL + 'rateDriver/' + driverId, driverRating);
    }
    validateCustomer (email, password)
    {
        return axios.get(CUSTOMER_API_BASE_URL + 'validate/' + email + '/' + password);
    }
    getCustomerById (customerId)
    {
        return axios.get(CUSTOMER_API_BASE_URL + customerId)
    }
}

export default new CustomerService();