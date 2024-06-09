import "../App.css";
import Home from "./Home";
import Booking from "./BookingPage";
import About from "./About";
import Menu from "./Menu";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { useReducer } from "react";
import Login from "./Login";
import OrderOnline from "./OrderOnline";

// setting up variables for the available booking window
const today = new Date();
// max date is 3 months in advance
const maxDate = new Date(new Date().setMonth(today.getMonth() + 3));

const updateTimes = (state, date) => {
  if (date.toLocaleDateString() === today.toLocaleDateString()) {
    // variable for nearest 15 minutes to time - e.g. 12 mins -> 15 mins
    const nearestFifteen = (Math.round(today.getMinutes() / 15) * 15) % 60;
    // minutes variable - if we rounded the time down, we add 15 minutes
    // meaning if time is e.g. 16:05, the next available time will be 16:15
    const minutes =
      nearestFifteen <= today.getMinutes() && today.getMinutes() < 53
        ? (Math.round((nearestFifteen + 15) / 15) * 15) % 60
        : nearestFifteen;
    // hours variable - if we rounded minutes up to 00, add 1 to hours
    const hours = minutes === 0 ? today.getHours() + 1 : today.getHours();
    // current time variable - if minutes = 0, add the leading 0 -> 00
    const currentTime = `${hours}:${minutes === 0 ? "0" : ""}${minutes}`;
    // splicing the array to only show times after currentTime
    state.splice(0, state.indexOf(currentTime));
  } else {
    return initFunc();
  }
  return state;
};

const initFunc = () => {
  let times = [
    "12:00",
    "12:15",
    "12:30",
    "12:45",
    "13:00",
    "13:15",
    "13:30",
    "13:45",
    "14:00",
    "14:15",
    "14:30",
    "14:45",
    "15:00",
    "15:15",
    "15:30",
    "15:45",
    "16:00",
    "16:15",
    "16:30",
    "16:45",
    "17:00",
    "17:15",
    "17:30",
    "17:45",
    "18:00",
    "18:15",
    "18:30",
    "18:45",
    "19:00",
    "19:15",
    "19:30",
    "19:45",
    "20:00",
    "20:15",
    "20:30",
    "20:45",
    "21:00",
    "21:15",
    "21:30",
  ];
  return times;
};

const Main = () => {
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
  const availableTimes = updateTimes(initFunc(), dateReserved);

  const [state, dispatch] = useReducer(
    updateTimes,
    availableTimes,
    initFunc
  );

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route
          path="/reservations"
          element={
            <Booking
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
