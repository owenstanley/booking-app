import '../App.css';
import Banner from "./Banner";
import Image from '../assets/mario-adrian.jpg'
import UnderConstruction from './UnderConstruction';

const About = () => {
  return (
    <>
    <Banner message="About Us" imageSrc={Image} alt="Banner image of the inside of a restaurant"/>
    <UnderConstruction/>
    </>
  );
}

export default About;