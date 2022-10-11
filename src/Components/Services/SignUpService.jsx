import axios from "axios";

const baseURLAdmin = "http://localhost:9090/api/v1/admins";

class SignUpService
{

    addAdmin (admin)
    {
        return axios.post(baseURLAdmin + '/', admin);
    }
}

export default new SignUpService();