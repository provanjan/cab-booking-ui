import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import BookRide from "./Components/Customer/BookRide";
import CustomerDetails from "./Components/Customer/CustomerDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminDashboard from "./Components/Admin/AdminDashboard";
import AddAdmin from "./Components/Admin/AddAdmin";
import ShowAdmins from "./Components/Admin/ShowAdmins";
import DeleteAdmin from "./Components/Admin/DeleteAdmin";
import GetAdmin from "./Components/Admin/GetAdmin";
import ShowTripBookings from "./Components/Admin/ShowTripBookings";
import UpdateAdmin from "./Components/Admin/UpdateAdmin";
import ShowTripBookingsByCustomer from "./Components/Admin/ShowTripBookingsByCustomer";
import ShowTripBookingsByDriver from "./Components/Admin/ShowTripBookingsByDriver";
import ShowTripBookingsDateWise from "./Components/Admin/ShowTripBookingsDateWise";
import ShowDrivers from "./Components/Admin/ShowDrivers";
import ShowDriver from "./Components/Admin/ShowDriver";
import BestDrivers from "./Components/Admin/BestDrivers";
import ShowCustomers from "./Components/Admin/ShowCustomers";
import ShowCustomer from "./Components/Admin/ShowCustomer";
import About from "./Components/About/About";
import DeleteCustomer from "./Components/Admin/DeleteCustomer";
import DeleteDriver from "./Components/Admin/DeleteDriver";
import AdminLogin from "./Components/Login/AdminLogin";
import AdminSignUp from "./Components/SignUp/AdminSignUp";

function App ()
{
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/ride" element={<BookRide />} />
          <Route exact path="/customerDetails" element={<CustomerDetails />} />
          <Route exact path="/admin" element={<AdminDashboard/>}/>
          <Route exact path="/addAdmin" element={<AddAdmin/>}/>
          <Route exact path="/getAllAdmin" element={<ShowAdmins/>}/>
          <Route exact path="/deleteAdmin" element={<DeleteAdmin/>}/>
          <Route exact path="/getAdmin" element={<GetAdmin/>}/>
          <Route exact path="/allTripBookings" element={<ShowTripBookings/>}/>
          <Route exact path="/updateAdmin" element={<UpdateAdmin/>}/>
          <Route exact path="/tripBooking/customer" element={<ShowTripBookingsByCustomer/>}/>
          <Route exact path="/tripBooking/driver" element={<ShowTripBookingsByDriver/>}/>
          <Route exact path="tripBooking/date" element={<ShowTripBookingsDateWise/>}/>
          <Route exact path="/drivers" element={<ShowDrivers/>}/>
          <Route exact path="/getDriver" element={<ShowDriver/>}/>
          <Route exact path="/bestDrivers" element={<BestDrivers/>}/>
          <Route exact path="/customers" element={<ShowCustomers/>}/>
          <Route exact path="/customer" element={<ShowCustomer/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/deleteCustomer" element={<DeleteCustomer/>}/>
          <Route exact path="deleteDriver" element={<DeleteDriver/>}/>
          <Route exact path="/loginAdmin" element={<AdminLogin/>}/>
          <Route exact path="/signUpAdmin" element={<AdminSignUp/>}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
