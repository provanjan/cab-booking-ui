import axios from "axios";

const baseURLAdmin="http://localhost:8080/api/v1/admins";

class SignUpService{

    addAdmin(admin){
        return axios.post(baseURLAdmin+'/',admin);
    }
}

export default new SignUpService();