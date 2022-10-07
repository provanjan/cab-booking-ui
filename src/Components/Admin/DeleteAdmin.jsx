import AdminService from "../Services/AdminService";
import React from "react";
import "../Admin/style.css";

class  DeleteAdmin extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            admins: []
        }
        this.deleteAdmin = this.deleteAdmin.bind(this);
    }

    componentDidMount(){
        AdminService.getAdmins().then(response => {
            this.setState({
                admins: response.data
            })
        })
    }

    deleteAdmin(event){
        const id = event.target.id.value;
        AdminService.deleteAdmin(id).then(response => {
            alert("Deleted Successfully");
        })
    }

    render(){

        return (
            <div className="container flex-wrapper">
                <br></br>
                <br></br>
                <form  onSubmit={this.deleteAdmin}>
                        <select class="form-control" name="id">
                        <option>---Choose Admin To Delete---</option>
                        {   
                            this.state.admins.map(admin=>(
                                <option value={admin.userId}>{admin.userName} {admin.email} {admin.userId} ({admin.mobile})</option>
                            ))
                        }
                    </select>
                    <button type="submit" className="btn btn-danger">Delete</button>

                </form>
            
            </div>
        )
    }


}

export default DeleteAdmin;