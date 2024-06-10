import "../App.css";
import Home from "./Home";
import BookingPage from "./BookingPage";
import About from "./About";
import Menu from "./Menu";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useState, useReducer } from "react";
import Login from "./Login";
import OrderOnline from "./OrderOnline";
import { submitAPI, fetchAPI } from "../utils/mockAPI";
import ConfirmedBooking from "./ConfirmedBooking";

// setting up variables for the available booking window
const today = new Date();
// max date is 3 months in advance
const maxDate = new Date(new Date().setMonth(today.getMonth() + 3));

const Main = () => {
  const updateTimes = (state, date) => {
    return fetchAPI(date);
  };

  const navigate = useNavigate();

  const resetForm = () => {
    setDateReserved(new Date());
    setTimeReserved("17:00")
    setNumGuests(1)
    setOccasion("None")
    setAddInfo("")
    setFullName("")
    setEmail("")
    setPhoneNumber("")
    setPromoEmails(false)
    setPrivacyPolicy(false)
  }

  const submitForm = (e, formData) => {
    e.preventDefault();
    if (submitAPI(formData)) {
      navigate("/confirmed-booking");
    }
  };

  // setting up state variables
  const [dateReserved, setDateReserved] = useState(today);
  const [timeReserved, setTimeReserved] = useState("17:00");
  const [numGuests, setNumGuests] = useState(1);
  const [occasion, setOccasion] = useState("None");
  const [addInfo, setAddInfo] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [promoEmails, setPromoEmails] = useState(false);
  const [privacyPolicy, setPrivacyPolicy] = useState(false);

  const initialTimes = fetchAPI(dateReserved);
  const [availableTimes, dispatch] = useReducer(updateTimes, initialTimes);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route
          path="/reservations"
          element={
            <BookingPage
              today={today}
              maxDate={maxDate}
              dateReserved={dateReserved}
              setDateReserved={setDateReserved}
              availableTimes={availableTimes}
              dispatch={dispatch}
              timeReserved={timeReserved}
              setTimeReserved={setTimeReserved}
              numGuests={numGuests}
              setNumGuests={setNumGuests}
              occasion={occasion}
              setOccasion={setOccasion}
              addInfo={addInfo}
              setAddInfo={setAddInfo}
              fullName={fullName}
              setFullName={setFullName}
              email={email}
              setEmail={setEmail}
              phoneNumber={phoneNumber}
              setPhoneNumber={setPhoneNumber}
              promoEmails={promoEmails}
              setPromoEmails={setPromoEmails}
              privacyPolicy={privacyPolicy}
              setPrivacyPolicy={setPrivacyPolicy}
              onSubmit={submitForm}
            />
          }
        />
        <Route path="/order-online" element={<OrderOnline />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/confirmed-booking"
          element={
            <ConfirmedBooking
              dateReserved={dateReserved}
              setDateReserved={setDateReserved}
              timeReserved={timeReserved}
              numGuests={numGuests}
              occasion={occasion}
              fullName={fullName}
              email={email}
              resetForm={resetForm}
            />
          }
        />
      </Routes>
    </>
  );
};

export default Main;
