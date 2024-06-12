import Banner from "./Banner";
import { useNavigate } from "react-router-dom";
import Image from '../assets/mario-adrian-b.jpg'

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
            <Banner message={"Booking confirmed!"} imageSrc={Image} altTex={"Banner image of a restaurant"}/>
            <div className="confirmed-container">
            <strong>Thank you, {props.fullName.split(" ", 1)}!</strong>
            <span>Date: {props.dateReserved.getDate()}/{props.dateReserved.getMonth()}/{props.dateReserved.getFullYear()}</span>
            <span>Time: {props.timeReserved}</span>
            <span>Guests: {props.numGuests}</span>
            <span>A confirmation email has been sent to {props.email}</span>
            <span>Please follow the link in the email if you need to make any adjustments</span>
            </div>
            <div className="confirmed-btn-container">
            <button className="submit-btn" onClick={goReservations} style={{fontSize: "16px"}}>Make another reservation</button>
            <button className="submit-btn" onClick={goHome} style={{fontSize: "16px"}}>Go home</button>
            </div>
        </>
    )
}

export default ConfirmedBooking;