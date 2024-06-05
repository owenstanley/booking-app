import "../App.css";
import React from "react";
import { useState } from "react";

const BookingForm = () => {
  const [dateReserved, setDateReserved] = useState("");
  const [timeReserved, setTimeReserved] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Account created!");
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
        <label>
          Choose date:<sup>*</sup>
        </label>
        <input
          value={dateReserved}
          type="date"
          onChange={(e) => {
            setDateReserved(e.target.value);
          }}
        />
        <label>
          Choose time:<sup>*</sup>
        </label>
        <input
          value={timeReserved}
          onChange={(e) => {
            setTimeReserved(e.target.value);
          }}
          placeholder="Time"
        />
        <button
          type="submit"
          disabled={!getIsFormValid()}
          onSubmit={clearForm}
        >Reserve</button>
      </form>
    </>
  );
};

export default BookingForm;
