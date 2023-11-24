import { useState } from "react";
import PropTypes from "prop-types";
import "./Tooltip.scss";

/**
 * Renders a tooltip component that appears when the user hovers over it.
 *
 * @param {Object} props - The properties for the tooltip.
 * @param {ReactNode} props.children - The content to be displayed inside the tooltip.
 * @param {boolean} props.linked - Determines whether the tooltip is linked to a public profile.
 * @return {JSX.Element} The rendered tooltip component.
 */

function Tooltip({ children, linked }) {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className='tooltip_wrapper'
    >
      {children}
      {showTooltip && (
        <div className={`tooltip ${showTooltip ? "tooltip-visible" : ""}`}>
          This widget links directly to your public profile so that you can
          easily share your impact with your customers. Turn it off here if you
          do not want the badge to link to it.
          <div className='link'>
            {linked && <a href='/your-profile-link'>View Public Profile</a>}
          </div>
        </div>
      )}
    </div>
  );
}

Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
  linked: PropTypes.bool,
};

export default Tooltip;
