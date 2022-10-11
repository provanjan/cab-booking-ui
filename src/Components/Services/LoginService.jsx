import axios from "axios";

const baseURLAdmin = "http://localhost:9090/api/v1/admins";

class LoginService
{

    validateAdmin (email, password)
    {
        return axios.get(baseURLAdmin + '/validate/' + email + '/' + password);
    }
}
export default new LoginService();