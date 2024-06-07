import "../App.css";
import React from "react";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-time-picker/dist/TimePicker.css";

const BookingForm = () => {
  const today = new Date();
  const maxDate = new Date(new Date().setMonth(today.getMonth() + 3));
  const [dateReserved, setDateReserved] = useState(today);
  const [timeReserved, setTimeReserved] = useState(today);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`${dateReserved} ${timeReserved}`);
  };

  const getIsFormValid = () => {
    return fullName && validateEmail(email);
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
    <>
      <form onSubmit={handleSubmit}>
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
        <label>
          Choose time:<sup>*</sup>
        </label>
        <div className="Field">
          <label>Full name</label>
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
            Email address <sup>*</sup>
          </label>
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Email address"
          />
        </div>
        <button type="submit" disabled={!getIsFormValid()} onSubmit={clearForm}>
          Reserve
        </button>
      </form>
    </>
  );
};

export default BookingForm;
