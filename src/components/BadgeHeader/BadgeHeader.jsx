import PropTypes from "prop-types";
import { logo, greenspark } from "../../assets";

import "./BadgeHeader.scss";

/**
 * Renders a badge header component.
 *
 * @param {Object} action - The action to be displayed on the badge.
 * @param {number} amount - The amount to be displayed on the badge.
 * @param {string} type - The type of badge.
 * @param {string} selectedColor - The selected color for the badge background.
 * @return {JSX.Element} The rendered badge header component.
 */
function BadgeHeader({ action, amount, type, selectedColor }) {
  const greenColor = "#3B755F";

  const isLightBackground =
    selectedColor === "#F2EBDB" || selectedColor === "#FFFFFF";

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

BadgeHeader.propTypes = {
  action: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  selectedColor: PropTypes.string.isRequired,
};

export default BadgeHeader;
