import Banner from "./Banner";
import { useNavigate } from "react-router-dom";

const ConfirmedBooking = (props) => {
    const navigate = useNavigate();

    const goHome = () => {
        props.resetForm()
        navigate('/')
    }

    const goReservations = () => {
        props.resetForm()
        navigate('/reservations')
    }

    return (
        <>
            <Banner message={"Booking confirmed!"}/>
            Thank you, {props.fullName.split(" ", 1)}!
            <span>Date: {props.dateReserved.getDate()}/{props.dateReserved.getMonth()}/{props.dateReserved.getFullYear()}</span>
            <span>Time: {props.timeReserved}</span>
            <span>Guests: {props.numGuests}</span>
            <span>A confirmation email has been sent to {props.email}</span>
            <span>Please follow the link in the email if you need to make any adjustments</span>
            <button onClick={goReservations}>Make another reservation</button>
            <button onClick={goHome}>Go home</button>
        </>
    )
}

export default ConfirmedBooking;