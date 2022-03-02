import "../styles/Banner.css";
import icon from "../assets/icon.png";

function Banner() {
    const title = " GROUPOMANIA"
  return (
    <div className="mania-banner">
        <img src={icon} alt = 'logo groupomania' className="groupomania-icon-banner"/>
      <h1 className="groupomania-title">{title}</h1>
    </div>
  );
}

export default Banner;
