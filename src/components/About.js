import '../App.css';
import Banner from "./Banner";
import Image from '../assets/restaurant-banner.png'

const About = () => {
  return (
    <>
    <Banner message="About Us" imageSrc={Image} alt="Banner image of the inside of a restaurant"/>
    </>
  );
}

export default About;