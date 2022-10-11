import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
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
import OurService from "./Components/OurService/OurService";
import Contact from "./Components/Contact/Contact";
import CustomerSignUp from "./Components/SignUp/CustomerSignUp";
import DriverSignUp from "./Components/SignUp/DriverSignUp";
import CustomerLogin from "./Components/Login/CustomerLogin";
import DriverLogin from "./Components/Login/DriverLogin";
import CustomerDashboard from "./Components/Customer/CustomerDashboard";
import DashboardDriver from "./Components/Driver/DashboardDriver";
import BookTrip from "./Components/TripBooking/BookTrip";
import RateDriver from "./Components/Customer/RateDriver";
import TripHistory from "./Components/TripBooking/TripHistory";
import EditProfile from "./Components/Customer/EditProfile";
import CustomerDelete from "./Components/Customer/CustomerDelete";
import TripDetails from "./Components/TripBooking/TripDetails";
import UpdateDrivers from "./Components/Driver/UpdateDrivers";
import DriverDelete from "./Components/Driver/DriverDelete";
import TripDetailsDriver from "./Components/Driver/TripDetailsDriver";
import StartTrip from "./Components/Driver/StartTrip";
import CurrentTripCustomer from "./Components/TripBooking/CurrentTripCustomer";
import EndedTripCustomer from "./Components/TripBooking/EndedTripCustomer";
import EditTrip from "./Components/TripBooking/EditTrip";
import CabDetails from "./Components/Driver/CabDetails";
import ShowCab from "./Components/Driver/ShowCab";
import GetCab from "./Components/Admin/GetCab";
import GetCabs from "./Components/Admin/GetCabs";
import DeleteCab from "./Components/Driver/DeleteCab";
import UpdateCab from "./Components/Driver/UpdateCab";

function App ()
{
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/admin" element={<AdminDashboard />} />
          <Route exact path="/addAdmin" element={<AddAdmin />} />
          <Route exact path="/getAllAdmin" element={<ShowAdmins />} />
          <Route exact path="/deleteAdmin" element={<DeleteAdmin />} />
          <Route exact path="/getAdmin" element={<GetAdmin />} />
          <Route exact path="/allTripBookings" element={<ShowTripBookings />} />
          <Route exact path="/updateAdmin" element={<UpdateAdmin />} />
          <Route exact path="/tripBooking/customer" element={<ShowTripBookingsByCustomer />} />
          <Route exact path="/tripBooking/driver" element={<ShowTripBookingsByDriver />} />
          <Route exact path="tripBooking/date" element={<ShowTripBookingsDateWise />} />
          <Route exact path="/drivers" element={<ShowDrivers />} />
          <Route exact path="/getDriver" element={<ShowDriver />} />
          <Route exact path="/bestDrivers" element={<BestDrivers />} />
          <Route exact path="/customers" element={<ShowCustomers />} />
          <Route exact path="/customer" element={<ShowCustomer />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/showCab" element={<ShowCab />} />
          <Route exact path="/deleteCustomer" element={<DeleteCustomer />} />
          <Route exact path="deleteDriver" element={<DeleteDriver />} />
          <Route exact path="/loginAdmin" element={<AdminLogin />} />
          <Route exact path="/signUpAdmin" element={<AdminSignUp />} />
          <Route exact path="/service" element={<OurService />} />
          <Route exact path="/contactUs" element={<Contact />} />
          <Route exact path="/loginCustomer" element={<CustomerLogin />} />
          <Route exact path="/loginDriver" element={<DriverLogin />} />
          <Route exact path="/signUpCustomer" element={<CustomerSignUp />} />
          <Route exact path="/signUpDriver" element={<DriverSignUp />} />
          <Route exact path="/customerDashboard" element={<CustomerDashboard />} />
          <Route exact path="/driver" element={<DashboardDriver />} />
          <Route exact path="/ride" element={<BookTrip />} />
          <Route exact path="/rate/:userId" element={<RateDriver />} />
          <Route exact path="/tripHistory" element={<TripHistory />} />
          <Route exact path="/editProfile" element={< EditProfile />} />
          <Route exact path="/delete" element={<CustomerDelete />} />
          <Route exact path="/tripsOfCustomer" element={<TripDetails />} />
          <Route exact path="/updateDriver" element={<UpdateDrivers />} />
          <Route exact path="/driverDelete" element={<DriverDelete />} />
          <Route exact path="/startTrip" element={<StartTrip />} />
          <Route exact path="/TripDetailsDriver" element={<TripDetailsDriver />} />
          <Route exact path="/currentTripCustomer" element={<CurrentTripCustomer />} />
          <Route exact path="/endedTripCustomer" element={<EndedTripCustomer />} />
          <Route exact path="/editTrip/:tripBookingId" element={<EditTrip />} />
          <Route exact path="/cabDetails" element={<CabDetails />} />
          <Route exact path="/getCab" element={<GetCab/>}/>
          <Route exact path="/getCabs" element={<GetCabs/>}/>
          <Route exact path="/deleteCab" element={<DeleteCab/>}/>
          <Route exact path="/updateCab" element={<UpdateCab/>}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
