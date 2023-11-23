import { logo, greenspark } from "../../assets";
import "./BadgeHeader.scss";
/* eslint-disable react/prop-types */
function BadgeHeader({ action, amount, type, selectedColor }) {
  const greenColor = "green";

  const isLightBackground =
    selectedColor === "beige" || selectedColor === "white";

  const textStyle = isLightBackground
    ? { color: greenColor }
    : { color: "white" };

  const logoStyle = isLightBackground
    ? { filter: "invert(1) sepia(1) saturate(500) hue-rotate(110deg)" }
    : {};

  return (
    <div
      className='badge'
      style={{ backgroundColor: selectedColor }}
    >
      <div
        className='logo'
        style={logoStyle}
      >
        <img
          src={logo}
          alt='Greenspark logo'
          className='substract'
        />
        <img
          src={greenspark}
          alt='Greenspark logo'
          className='greenspark'
        />
      </div>

      <div
        className='badge_text_container'
        style={textStyle}
      >
        <p>This product {action}</p>
        <p>
          {amount} {type}
        </p>
      </div>
    </div>
  );
}

export default BadgeHeader;
