import Header from "./Components/HeaderSection/Header";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import BookRide from "./Components/Customer/BookRide";
import CustomerDetails from "./Components/Customer/CustomerDetails";
import ShowCustomer from "./Components/Customer/ShowCustomer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
          <Route exact path="/showCustomer" element={<ShowCustomer />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
