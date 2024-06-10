import "../App.css";
import React from "react";
import Calendar from "react-calendar";
import PhoneInput from "react-phone-number-input";
import { isPossiblePhoneNumber } from "react-phone-number-input";
import "react-time-picker/dist/TimePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-phone-number-input/style.css";

// TODO
// form validation - feedback if e.g. email is wrong
// css styling

const BookingForm = (props) => {
  // array for the available occaions - used to map options
  const arrOccasions = ["None", "Birthday", "Anniversary", "Other"];

  const addTouchedClass = (input) => {
    input.classList.add("touched");
  };

  // submit is disabled unless form is valid
  const getIsFormValid = () => {
    return (
      props.fullName &&
      validateEmail(props.email) &&
      (props.phoneNumber === undefined
        ? false
        : isPossiblePhoneNumber(props.phoneNumber))
    );
  };

  // generating the options for the time selector
  const generateTimeOptions = () => {
    return props.availableTimes.map((time, index) => (
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

  // validate email func
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  return (
    <div className="form-container">
      <form onSubmit={props.onSubmit} className="reservations-form">
        <div className="calendar-container">
          <Calendar
            name="dateReserved"
            value={props.dateReserved}
            onChange={(value) => {
              props.setDateReserved(value);
              props.dispatch(value);
            }}
            selectRange={false}
            minDate={props.today}
            maxDate={props.maxDate}
            minDetail="year"
          />
        </div>
        <div className="Field">
          <label>
            Choose time:<sup>*</sup>
          </label>
          <select
            name="timeReserved"
            value={props.timeReserved}
            onChange={(e) => {
              props.setTimeReserved(e.target.value);
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
            value={props.numGuests}
            onChange={(e) => {
              props.setNumGuests(e.target.value);
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
            value={props.occasion}
            onChange={(e) => {
              props.setOccasion(e.target.value);
            }}
          >
            {generateOccaionOptions()}
          </select>
        </div>
        <div className="Field">
          <label>Additional requests:</label>
          <textarea
            rows="1"
            cols="40"
            value={props.addInfo}
            onChange={(e) => {
              props.setAddInfo(e.target.value);
            }}
          ></textarea>
        </div>
        <br />
        <div className="Field">
          <label>
            Full name:<sup>*</sup>
          </label>
          <input
            name="fullName"
            className="required-field"
            value={props.fullName}
            onChange={(e) => {
              props.setFullName(e.target.value);
            }}
            onClick={(e) => {
              addTouchedClass(e.target);
            }}
            placeholder="Full name"
            required
            minLength={3}
          />
        </div>
        <div className="Field">
          <label>
            Email address:<sup>*</sup>
          </label>
          <input
            name="email"
            className="required-field"
            value={props.email}
            onChange={(e) => {
              if (!e.target.value) {
                e.target.setCustomValidity(
                  "Please fill in this field"
                );
              } else if (!validateEmail(e.target.value)) {
                e.target.setCustomValidity("Please enter a valid email address");
              } else {
                e.target.setCustomValidity("");
              }
              props.setEmail(e.target.value);
            }}
            onClick={(e) => {
              addTouchedClass(e.target);
            }}
            placeholder="Email address"
            required
            pattern="(([^<>\(\)\[\]\\.,;:\s@]+(\.[^<>\(\)\[\]\\.,;:\s@]+)*)|(.+))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,})).*"
          />
        </div>
        <div className="Field">
          <label>
            Phone number:<sup>*</sup>
          </label>
          <PhoneInput
            value={props.phoneNumber}
            className="required-field"
            onChange={(value) => {
              props.setPhoneNumber(value);
            }}
            onClick={(e) => {
              addTouchedClass(e.target);
            }}
            placeholder="Phone number"
            defaultCountry="GB"
            required
          />
        </div>
        <div className="Field">
          <label>
            Please check here if you would like to receive marketing emails from
            us:
          </label>
          <input
            type="checkbox"
            value={props.promoEmails}
            defaultChecked={props.promoEmails}
            onChange={() => {
              props.setPromoEmails(!props.promoEmails);
            }}
          />
        </div>
        <br />
        <div className="Field">
          <label>
            Please agree to our Privacy Policy:<sup>*</sup>
          </label>
          <input
            name="privacyPolicy"
            className="required-field"
            type="checkbox"
            value={props.privacyPolicy}
            defaultChecked={props.privacyPolicy}
            onChange={() => {
              props.setPrivacyPolicy(!props.privacyPolicy);
            }}
            onClick={(e) => {
              addTouchedClass(e.target);
            }}
            required
          />
        </div>
        <button id="submit-btn" type="submit" disabled={!getIsFormValid()}>
          Reserve
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
