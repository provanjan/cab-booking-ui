import React from "react";
import CustomerService from "../Services/CustomerService";
import "./customer.css";

class CustomerDelete extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      customers: [],
    };
    this.deleteCustomer = this.deleteCustomer.bind(this);
  }
  componentDidMount ()
  {
    CustomerService.getCustomers().then((response) =>
    {
      this.setState({
        customers: response.data,
      });
    });
  }

  deleteCustomer (event)
  {
    const id = event.target.id.value;
    CustomerService.deleteCustomer(id)
      .then((response) =>
      {
        alert("Deleted Successfully");
      })
      .catch((error) =>
      {
        alert("Some Error Occured !!");
      });
  }

  render ()
  {
    return (
      <div className="container">
        <h3 className="customerform" align="center">
          -----DELETE CUSTOMER------
        </h3>
        <form className="customerform" onSubmit={this.deleteCustomer}>
          <select class="form-control" name="id">
            <option align="center">---Choose Customer to delete---</option>
            {this.state.customers.map((customer) => (
              <option value={customer.userId}>
                Id : {customer.userId} - Name : {customer.userName} - Email :{" "}
                {customer.email} - Mobile : {customer.mobile}
              </option>
            ))}
          </select>
          <center>
            <br></br>
            <button type="submit" className="btn btn-danger">
              Delete
            </button>
          </center>
        </form>
      </div>
    );
  }
}

export default CustomerDelete;