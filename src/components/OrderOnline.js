import '../App.css';
import Banner from "./Banner";
import Image from '../assets/bruschetta.jpg'
import UnderConstruction from './UnderConstruction';

const OrderOnline = () => {
  return (
    <>
    <Banner message="Order Online" imageSrc={Image} alt="Banner image of the inside of a restaurant"/>
    <UnderConstruction/>
    </>
  );
}

export default OrderOnline;