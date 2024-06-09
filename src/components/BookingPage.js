import "../App.css";
import BookingForm from "./BookingForm";
import Banner from "./Banner";

const Booking = (props) => {

  return (
    <>
      <Banner message="Reserve a table"/>
      <BookingForm
        today={props.today}
        maxDate={props.maxDate}
        dateReserved={props.dateReserved}
        setDateReserved={props.setDateReserved}
        availableTimes={props.availableTimes}
        dispatch={props.dispatch}
        timeReserved={props.timeReserved}
        setTimeReserved={props.setTimeReserved}
        numGuests={props.numGuests}
        setNumGuests={props.setNumGuests}
        occasion={props.occasion}
        setOccasion={props.setOccasion}
        addInfo={props.addInfo}
        setAddInfo={props.setAddInfo}
        fullName={props.fullName}
        setFullName={props.setFullName}
        email={props.email}
        setEmail={props.setEmail}
        phoneNumber={props.phoneNumber}
        setPhonenNumber={props.setPhonenNumber}
        promoEmails={props.promoEmails}
        setPromoEmails={props.setPromoEmails}
        privacyPolicy={props.privacyPolicy}
        setPrivacyPolicy={props.setPrivacyPolicy}
      />
    </>
  );
};

export default Booking;
