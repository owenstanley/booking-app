import "../App.css";

const Banner = (props) => {
  return (
    <div className="banner-container">
      <img
        className="banner-img"
        src={props.imageSrc}
        alt={props.altText}
        aria-label="banner image"
      ></img>
      <div
        aria-label="banner-message"
        className="banner-text"
      >
        {props.message}
      </div>
    </div>
  );
};

export default Banner;
