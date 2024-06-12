import "../App.css"
import Banner from "./Banner";
import Image from '../assets/pasta.jpg'
import UnderConstruction from './UnderConstruction'

const Home = () => {
  return <>
    <Banner message="Little Lemon" imageSrc={Image} alt="Banner image of the inside of a restaurant"/>
    <UnderConstruction/>
  </>;
};
export default Home;
