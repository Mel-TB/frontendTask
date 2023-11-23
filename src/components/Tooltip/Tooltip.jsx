/* eslint-disable react/prop-types */
import { useState } from "react";
import { CiCircleInfo } from "react-icons/ci";

import "./Tooltip.scss";

function Tooltip({ linked }) {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className='tooltip_container'>
      <CiCircleInfo
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      />
      {showTooltip && (
        <div className='tooltip'>
          This widget links directly to your public profile so that you can
          easily share your impact with your customers. Turn it off here if you
          do not want the badge to link to it.
          {linked && <a href='/your-profile-link'>Link to Profile</a>}
        </div>
      )}
    </div>
  );
}

export default Tooltip;
