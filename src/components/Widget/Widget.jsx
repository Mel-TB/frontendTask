/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { FiInfo } from "react-icons/fi";

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

  const handleColorChange = (selectedColor) => {
    setOnSelectColor(selectedColor);
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
          <label htmlFor='checkbox'>Link to Public Profile</label>
          <span className='tooltip_container'>
            <Tooltip linked={isLinked}>
              <FiInfo />
            </Tooltip>
          </span>
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
