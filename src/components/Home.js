import "../App.css"
import Banner from "./Banner";
import Image from '../assets/restaurant-banner.png'

const Home = () => {
  return <>
    <Banner message="Homepage" imageSrc={Image} alt="Banner image of the inside of a restaurant"/>
  </>;
};
export default Home;
