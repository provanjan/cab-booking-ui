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
}

export default new CustomerService();