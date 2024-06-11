import '../App.css';
import Banner from "./Banner";
import Image from '../assets/restaurant-banner.png'

const OrderOnline = () => {
  return (
    <>
    <Banner message="Order Online" imageSrc={Image} alt="Banner image of the inside of a restaurant"/>
    </>
  );
}

export default OrderOnline;