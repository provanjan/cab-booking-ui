import AdminService from "../Services/AdminService";
import React from "react";
import { Link } from "react-router-dom";
import "../Admin/style.css";

class UpdateAdmin extends React.Component
{

    constructor(props)
    {
        super(props);
        this.state = {
            admins: [],
            admin: {}
        }
        this.update = this.update.bind(this)
        this.getAdmin = this.getAdmin.bind(this)
    }

    componentDidMount ()
    {
        AdminService.getAdmins().then(response =>
        {
            this.setState({
                admins: response.data
            })
        })
    }

    getAdmin (event)
    {
        const id = event.target.id.value;
        AdminService.getById(id).then(response =>
        {
            this.setState({
                admin: response.data
            })
        })
    }

    update (event)
    {
        const id = event.target.id.value;
        const userName = event.target.userName.value;
        const password = event.target.password.value;
        const email = event.target.email.value;
        const mobile = event.target.mobile.value;
        const address = event.target.address.value;
        const data = {
            "id": id,
            "userName": userName,
            "password": password,
            "email": email,
            "mobile": mobile,
            "address": address
        }
        AdminService.update(id, data).then(response =>
        {
            alert("Updated Successfully");
        })
    }

    render ()
    {

        return (
            <div>
                <Link to="/admin"><button className="btn btn-success"><i className="fa fa-arrow-left"></i> Back</button></Link>
                <div className="container flex-wrapper">
                    <h3 align="center">Update Admin Information</h3>
                    <br></br>
                    <br></br>
                    <div className="container form body form-body">
                        <form onSubmit={this.update}>
                            <select class="form-control" name="id" onChange={this.getAdmin}>
                                <option>---Choose Admin To Update---</option>
                                {
                                    this.state.admins.map(admin => (
                                        <option value={admin.userId}>{admin.userName} {admin.email} {admin.userId} ({admin.mobile})</option>
                                    ))
                                }
                            </select>
                            <input type="text" name="userName" placeholder="User Name" className="form-control" value={this.state.userName} />
                            <input type="password" name="password" placeholder="Password" className="form-control" value={this.state.password} />
                            <input type="email" name="email" placeholder="Email" className="form-control" value={this.state.email} />
                            <input type="text" name="mobile" placeholder="Phone Number" className="form-control" value={this.state.mobile} />
                            <input type="text" name="address" placeholder="Address" className="form-control" value={this.state.address} />
                            <button type="submit" className="btn btn-success">Update</button>

                        </form>
                    </div>

                </div >
            </div>

        )
    }


}

export default UpdateAdmin;