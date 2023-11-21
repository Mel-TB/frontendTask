/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import ColorSelector from "../ColorSelector/ColorSelector";

import { CiCircleInfo } from "react-icons/ci";
import "./Widget.scss";

function Widget({ type, amount, action, active, linked, selectedColor }) {
  const handleColorChange = (color) => {
    console.log("Badge Color Selected :", color);
  };

  return (
    <div>
      <h3>This product {action}</h3>
      <h3>
        {" "}
        {amount} {type}
      </h3>
      <div>
        <label>
          Link to Public Profile <CiCircleInfo />
          <input type='checkbox' />
        </label>

        <ColorSelector />

        <label>
          Activate Badge
          <input type='checkbox' />
          <span className='toggle'></span>
        </label>
      </div>
    </div>
  );
}

export default Widget;
