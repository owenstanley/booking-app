import "../App.css";

const Banner = (props) => {
  return (
    <div className="banner-container">
      <img
        className="banner-img"
        src={props.imageSrc}
        alt={props.altText}
      ></img>
      <div
        className="banner-text"
        onClick={() => {
          if (props.scrollID) {
            document.getElementById(props.scrollID).scrollIntoView({behavior: "smooth", block:"start", inline: "start"})
          }
        }}
      >
        {props.message}
      </div>
    </div>
  );
};

export default Banner;
