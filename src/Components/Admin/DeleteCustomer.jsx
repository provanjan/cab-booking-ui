import AdminService from "../Services/AdminService";
import React from "react";
import "../Admin/style.css";

class  DeleteCustomer extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            customers: []
        }
        this.deleteCustomer = this.deleteCustomer.bind(this);
    }

    componentDidMount(){
        AdminService.getCustomers().then(response => {
            this.setState({
                customers: response.data
            })
        })
    }

    deleteCustomer(event){
        const id = event.target.id.value;
        AdminService.deleteCustomer(id).then(response => {
            alert("Deleted Successfully");
        })
    }

    render(){

        return (
            <div className="container flex-wrapper">
                <br></br>
                <br></br>
                <form  onSubmit={this.deleteCustomer}>
                        <select class="form-control" name="id">
                        <option>---Choose Customer To Delete---</option>
                        {   
                            this.state.customers.map(customer=>(
                                <option value={customer.userId}>{customer.userName} {customer.email} {customer.userId} ({customer.mobile})</option>
                            ))
                        }
                    </select>
                    <button type="submit" className="btn btn-danger">Delete</button>

                </form>
            
            </div>
        )
    }


}

export default DeleteCustomer;