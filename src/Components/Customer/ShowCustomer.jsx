import React from "react";
import CustomerService from "../Services/CustomerService";
class Customer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      customers: [],
    };
  }

  componentDidMount() {
    CustomerService.getCustomers().then((response) => {
      this.setState({ customers: response.data });
    });
  }

  render() {
    return (
      <div align="container-fluid">
        <div align="center"> Customer Information </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Customer Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {this.state.customers.map((customer) => (
              <tr key={customer.userId}>
                <td>{customer.userId}</td>
                <td>{customer.userName}</td>
                <td>{customer.email}</td>
                <td>{customer.mobile}</td>
                <td>{customer.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Customer;
