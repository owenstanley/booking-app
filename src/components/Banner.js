import "../App.css";

const Banner = (props) => {
  return (
    <div className="banner-container">
      <img
        className="banner-img"
        src={props.imageSrc}
        alt={props.altText}
        aria-label={props.ariaLabel}
      ></img>
      <div
        aria-label="banner-message"
        className="banner-text"
        tabIndex="0"
        onClick={() => {
          if (props.scrollID) {
            document.getElementById(props.scrollID).scrollIntoView({behavior: "smooth", block:"start", inline: "start"})
          }
        }}
        onKeyUp={(event) => {
          if (event.key === ' '){
            if (props.scrollID) {
              document.getElementById(props.scrollID).scrollIntoView({behavior: "smooth", block:"start", inline: "start"})
            }
          }
        }}
      >
        {props.message}
      </div>
    </div>
  );
};

export default Banner;
