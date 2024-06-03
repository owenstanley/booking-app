import '../App.css';
import { Routes, Route, Link } from "react-router-dom"; 
import Main from './Main';
import Booking from './BookingPage';

function Navbar() {
  return (
    <>
    <Link to="/" className="nav-item">
        Home        
    </Link>
    <Link to="/about" className="nav-item">
        About
    </Link>
    <Link to="/menu" className="nav-item">
        Menu        
    </Link>
    <Link to="/reservations" className="nav-item">
        Reservations
    </Link><Link to="/order" className="nav-item">
        Order Online        
    </Link>
    <Link to="/login" className="nav-item">
        Login
    </Link>
    <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/reservations" element={<Booking />} />
      </Routes>
    </>
  );
}

export default Navbar;