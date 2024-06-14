import "../App.css";
import BookingForm from "./BookingForm";
import Banner from "./Banner";
import Image from'../assets/restaurant-chef.jpg'

const Booking = (props) => {

  return (
    <>
      <Banner message="Reserve a table" imageSrc={Image} alt="Banner image of the inside of a restaurant" ariaLabel="banner image" scrollID="form-container"/>
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
        setPhoneNumber={props.setPhoneNumber}
        defaultCountry={props.defaultCountry}
        promoEmails={props.promoEmails}
        setPromoEmails={props.setPromoEmails}
        privacyPolicy={props.privacyPolicy}
        setPrivacyPolicy={props.setPrivacyPolicy}
        onSubmit={props.onSubmit}
      />
    </>
  );
};

export default Booking;
