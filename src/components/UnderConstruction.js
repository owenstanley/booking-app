import "../App.css";
import Image from "../assets/construction.png";

const UnderConstruction = () => {
  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
      <img src={Image}  width="20%" alt="Under construction graphic"/>
      <a href="https://www.freepik.com/icon/construction_15255461#fromView=keyword&page=3&position=25&uuid=e5ea9131-965b-4d84-bcc4-c09324d48e0c" style={{textDecoration: "none", color: "lightgrey"}}>
        Icon by SBTS2018
      </a>
      <h3 style={{fontSize: "3vw", color: "grey"}}>Page under construction...</h3>
    </div>
  );
};

export default UnderConstruction;
