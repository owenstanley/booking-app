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
  // setting up variables for the available booking window
  const today = new Date();
  // max date is 3 months in advance
  const maxDate = new Date(new Date().setMonth(today.getMonth() + 3));
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

  // array for the available occaions - used to map options
  const arrOccasions = ["None", "Birthday", "Anniversary", "Other"];
  // array for all available times - starting at 12:00 and ending at 21:30
  // need to update a map for given opening hours if possible
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
  // setting up array to track the times available to book - you cannot book before the current date+time
  let availableTimes = allTimes;

  // handing form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`${dateReserved} ${timeReserved} ${promoEmails} ${privacyPolicy}`);
  };

  // submit is disabled unless form is valid
  const getIsFormValid = () => {
    return fullName && validateEmail(email);
  };

  // function to get available times in dropdown depending on the current date selected
  // if date is today, only show times ahead of current time
  const getValidTimes = () => {
    // resetting availableTimes to allTimes
    availableTimes = allTimes;
    // if date is today
    if (dateReserved.toLocaleDateString() === today.toLocaleDateString()) {
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
      availableTimes.splice(0, availableTimes.indexOf(currentTime));
    }
  };

  // generating the options for the time selector
  const generateTimeOptions = () => {
    getValidTimes();
    return availableTimes.map((time, index) => (
      <option key={index} value={time}>
        {time}
      </option>
    ));
  };

  // generating the options for the occasion selector
  const generateOccaionOptions = () => {
    return arrOccasions.map((occ, index) => (
      <option key={index} value={occ}>
        {occ}
      </option>
    ));
  };

  // clear form func
  const clearForm = () => {
    setEmail("");
    setFullName("");
  };

  // validate email func
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  // form contains:
  // calendar built with react-calendar
  // time
  // guests
  // occasion
  // additional info
  // name
  // email
  // phone
  // contact emails
  // privacy policy
  // submit
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
            Additional requests:
          </label>
          <textarea
            rows="1"
            cols="40"
            value={addInfo}
            onChange={(e) => {
              setAddInfo(e.target.value);
            }}
          >
          </textarea>
        </div>
        <br/>
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
        <div className="Field">
          <label>
            Please check here if you would like to receive marketing emails from
            us:
          </label>
          <input
            type="checkbox"
            value={promoEmails}
            defaultChecked={promoEmails}
            onChange={() => {
              setPromoEmails(!promoEmails);
            }}
          />
        </div>
        <br/>
        <div className="Field">
          <label>
            Please agree to our Privacy Policy:<sup>*</sup>
          </label>
          <input
            type="checkbox"
            value={privacyPolicy}
            defaultChecked={privacyPolicy}
            onChange={() => {
              setPrivacyPolicy(!privacyPolicy);
            }}
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
