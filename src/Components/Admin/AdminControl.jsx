import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import "../Admin/style.css";

function AdminControl() {
  return (
    <Card>
      <Card.Header>

        <Card.Title align="center">Admin Controls</Card.Title>
        <Card.Text align="center">
          Admin can perform any of the below listed functions
        </Card.Text>
      </Card.Header>

      <section className="page-contain">
        <div className="data-card">
          <h3>Admin Menu</h3>

          <p>All Functionalities related to admin</p>
          <span className="link-text">
            <Nav.Item>
              <Nav.Link ><NavLink to="/getAllAdmin">Get All Admins</NavLink> </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link ><NavLink to="/getAdmin" >Get Admin By Id</NavLink></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link ><NavLink to="/updateAdmin" >Update Admin </NavLink></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link ><NavLink to="/deleteAdmin" >Delete Admin </NavLink></Nav.Link>
            </Nav.Item>

          </span>
        </div>

        <div href="#" className="data-card">
          <h3>Driver Menu</h3>

          <p>All functionalitites related to driver</p>
          <span className="link-text">
            <Nav.Item>
              <Nav.Link><NavLink to="/drivers">Get All Driver</NavLink></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link><NavLink to="/getDriver">Get Driver By Id</NavLink></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link><NavLink to="/bestDrivers">Best Drivers List</NavLink></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link><NavLink to="/deleteDriver">Delete Driver</NavLink></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link><NavLink to="/getCabs">Get Cab List</NavLink></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link><NavLink to="/getCab">Get Cab By Id</NavLink></Nav.Link>
            </Nav.Item>
          </span>
        </div>

        <div className="data-card">
          <h3>Customer Menu</h3>

          <p>All Functionalities related to customer</p>
          <span className="link-text">
            <Nav.Item>
              <Nav.Link><NavLink to="/customers">Customer List</NavLink></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link><NavLink to="/customer">Customer By Id</NavLink></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link><NavLink to="/deleteCustomer">Delete Customer</NavLink></Nav.Link>
            </Nav.Item>

          </span>
        </div>
        <div className="data-card">
          <h3>Trip Booking Menu</h3>

          <p>All functionalities related to trip booking</p>
          <span className="link-text">
            <Nav.Item>
              <Nav.Link><NavLink to="/allTripBookings">Get All Trips</NavLink></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link><NavLink to="/tripBooking/customer">Get Trips By Customer Id</NavLink></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link><NavLink to="/tripBooking/driver">Get Trips By Driver Id</NavLink></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link><NavLink to="/tripBooking/date">Get Trips By Date</NavLink></Nav.Link>
            </Nav.Item>

          </span>
        </div>
      </section>



    </Card >
  );
}

export default AdminControl;