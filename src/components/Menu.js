import '../App.css';
import Banner from "./Banner";
import Image from '../assets/greek salad.jpg'
import UnderConstruction from './UnderConstruction';

const Menu = () => {
  return (
    <>
    <Banner message="Menu" imageSrc={Image} alt="Banner image of the inside of a restaurant"/>
    <UnderConstruction/>
    </>
  );
}

export default Menu;