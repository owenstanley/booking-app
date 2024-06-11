import '../App.css';
import Banner from "./Banner";
import Image from '../assets/restaurant-banner.png'

const Menu = () => {
  return (
    <>
    <Banner message="Menu" imageSrc={Image} alt="Banner image of the inside of a restaurant"/>
    </>
  );
}

export default Menu;