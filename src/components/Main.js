import "../App.css";
import Home from "./Home";
import BookingPage from "./BookingPage";
import About from "./About";
import Menu from "./Menu";
import { Routes, Route } from "react-router-dom";
import { useState, useReducer } from "react";
import Login from "./Login";
import OrderOnline from "./OrderOnline";
import { submitAPI, fetchAPI } from "../utils/mockAPI";

// setting up variables for the available booking window
const today = new Date();
// max date is 3 months in advance
const maxDate = new Date(new Date().setMonth(today.getMonth() + 3));

const Main = () => {
  const updateTimes = (state, date) => {
    return fetchAPI(date);
  };

  // setting up state variables
  const [dateReserved, setDateReserved] = useState(today);
  const [timeReserved, setTimeReserved] = useState("12:00");
  const [numGuests, setNumGuests] = useState(1);
  const [occasion, setOccasion] = useState("None");
  const [addInfo, setAddInfo] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhonenNumber] = useState("");
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
              setPhonenNumber={setPhonenNumber}
              promoEmails={promoEmails}
              setPromoEmails={setPromoEmails}
              privacyPolicy={privacyPolicy}
              setPrivacyPolicy={setPrivacyPolicy}
            />
          }
        />
        <Route path="/order-online" element={<OrderOnline />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default Main;
