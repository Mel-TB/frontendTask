/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { CiCircleInfo } from "react-icons/ci";

import Tooltip from "../Tooltip/Tooltip";
import BadgeHeader from "../BadgeHeader/BadgeHeader";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import ColorSelector from "../ColorSelector/ColorSelector";

import "./Widget.scss";

function Widget({
  type,
  amount,
  action,
  isActive,
  onToggle,
  linked,
  selectedColor,
  onColorChange,
}) {
  const [onSelectColor, setOnSelectColor] = useState(selectedColor);
  const [isLinked, setIsLinked] = useState(linked);

  const handleColorChange = (color) => {
    setOnSelectColor(color);
  };

  const handleLinkedChange = (event) => {
    setIsLinked(event.target.checked);
  };

  return (
    <div className='widget_container'>
      <BadgeHeader
        action={action}
        amount={amount}
        type={type}
        selectedColor={onSelectColor}
      />

      <div className='widget'>
        <div className='widget_options'>
          <label htmlFor='checkbox'>
            Link to Public Profile
            <span className='tooltip_container'>
              <Tooltip linked={isLinked}>
                <CiCircleInfo />
              </Tooltip>
            </span>
          </label>
          <input
            className='checkbox'
            type='checkbox'
            id='publicView'
            name='publicView'
            checked={isLinked}
            onChange={handleLinkedChange}
          />
        </div>

        <div className='widget_options'>
          <ColorSelector
            onColorChange={handleColorChange}
            selectedColor={onSelectColor}
          />
        </div>

        <div className='widget_options'>
          <label>Activate Badge</label>
          <ToggleSwitch
            isActive={isActive}
            onToggle={onToggle}
          />
        </div>
      </div>
    </div>
  );
}
export default Widget;
