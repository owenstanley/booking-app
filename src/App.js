import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Booking from "./components/BookingPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/reservations" element={<Booking />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
