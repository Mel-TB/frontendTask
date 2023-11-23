/* eslint-disable react/prop-types */
import { useState } from "react";

import "./Tooltip.scss";

function Tooltip({ children, linked }) {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      className='tooltip_wrapper'
    >
      {children}
      {showTooltip && (
        <div className='tooltip'>
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

export default Tooltip;
