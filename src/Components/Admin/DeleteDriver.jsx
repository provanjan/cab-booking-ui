import AdminService from "../Services/AdminService";
import React from "react";
import "../Admin/style.css";

class  DeleteDriver extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            drivers: []
        }
        this.deleteDriver = this.deleteDriver.bind(this);
    }

    componentDidMount(){
        AdminService.getDrivers().then(response => {
            this.setState({
                drivers: response.data
            })
        })
    }

    deleteDriver(event){
        const id = event.target.id.value;
        AdminService.deleteDriver(id).then(response => {
            alert("Deleted Successfully");
        })
    }

    render(){

        return (
            <div className="container flex-wrapper">
                <br></br>
                <br></br>
                <form  onSubmit={this.deleteDriver}>
                        <select class="form-control" name="id">
                        <option>---Choose Driver To Delete---</option>
                        {   
                            this.state.drivers.map(driver=>(
                                <option value={driver.userId}>{driver.userName} {driver.email} {driver.userId} ({driver.mobile})</option>
                            ))
                        }
                    </select>
                    <button type="submit" className="btn btn-danger">Delete</button>

                </form>
            
            </div>
        )
    }


}

export default DeleteDriver;