import "../App.css";
import React from "react";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-time-picker/dist/TimePicker.css";
import "react-calendar/dist/Calendar.css";

/*Date.prototype.add15minutes = function () {
  return new Date(this.setMinutes(this.getMinutes() + 15));
};*/

// TODO add final input fields
// time validation with rounding up to 00 - e.g. 15:58 gives 15:15 as the next available time
// form validation - feedback if e.g. email is wrong
// css styling
// lifting state up to main

const BookingForm = () => {
  const today = new Date();
  const maxDate = new Date(new Date().setMonth(today.getMonth() + 3));
  const [dateReserved, setDateReserved] = useState(today);
  const [timeReserved, setTimeReserved] = useState("12:00");
  const [numGuests, setNumGuests] = useState(1);
  const [occasion, setOccasion] = useState("None");
  const [addInfo, setAddInfo] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhonenNumber] = useState("");
  const [promoEmails, setPromoEmails] = useState("");
  const [privacyPolicy, setPrivacyPolicy] = useState("");

  const arrOccasions = ["None", "Birthday", "Anniversary", "Other"];

  const allTimes = [
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
  let availableTimes = allTimes;

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`${dateReserved} ${timeReserved}`);
  };

  const getIsFormValid = () => {
    return fullName && validateEmail(email);
  };

  const getValidTimes = () => {
    availableTimes = allTimes;
    if (dateReserved.toLocaleDateString() === today.toLocaleDateString()) {
      const hours = today.getHours();
      const minutes =
        (Math.round(today.getMinutes() / 15) * 15) % 60 < today.getMinutes()
          ? ((Math.round(today.getMinutes() / 15) * 15) % 60) + 15
          : (Math.round(today.getMinutes() / 15) * 15) % 60;
      const currentTime = `${hours}:${minutes}`;
      console.log(currentTime);
      availableTimes.splice(0, availableTimes.indexOf(currentTime));
    }
  };

  const generateOccaionOptions = () => {
    return arrOccasions.map((occ) => <option value={occ}>{occ}</option>);
  };

  const generateTimeOptions = () => {
    getValidTimes();
    return availableTimes.map((time) => <option value={time}>{time}</option>);
  };

  const clearForm = () => {
    setEmail("");
    setFullName("");
  };

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="reservations-form">
        <Calendar
          value={dateReserved}
          onChange={(value) => {
            setDateReserved(value);
          }}
          selectRange={false}
          minDate={today}
          maxDate={maxDate}
          minDetail="year"
        />
        <div className="Field">
          <label>
            Choose time:<sup>*</sup>
          </label>
          <select
            value={timeReserved}
            onChange={(e) => {
              setTimeReserved(e.target.value);
            }}
          >
            {generateTimeOptions()}
          </select>
        </div>
        <div className="Field">
          <label>
            No. of guests:<sup>*</sup>
          </label>
          <select
            value={numGuests}
            onChange={(e) => {
              setNumGuests(e.target.value);
            }}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
          </select>
        </div>
        <div className="Field">
          <label>
            Occasion:<sup>*</sup>
          </label>
          <select
            value={occasion}
            onChange={(e) => {
              setOccasion(e.target.value);
            }}
          >
            {generateOccaionOptions()}
          </select>
        </div>
        <div className="Field">
          <label>
            Full name:<sup>*</sup>
          </label>
          <input
            value={fullName}
            onChange={(e) => {
              setFullName(e.target.value);
            }}
            placeholder="Full name"
          />
        </div>
        <div className="Field">
          <label>
            Email address:<sup>*</sup>
          </label>
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Email address"
          />
        </div>
        <div className="Field">
          <label>
            Phone number:<sup>*</sup>
          </label>
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => {
              setPhonenNumber(e.target.value);
            }}
            placeholder=""
          />
        </div>
        <button type="submit" disabled={!getIsFormValid()} onSubmit={clearForm}>
          Reserve
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
