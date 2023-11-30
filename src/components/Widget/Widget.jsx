import { useCallback, useState } from "react";
import PropTypes from "prop-types";
import { FiInfo } from "react-icons/fi";

import Tooltip from "../Tooltip/Tooltip";
import BadgeHeader from "../BadgeHeader/BadgeHeader";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import ColorSelector from "../ColorSelector/ColorSelector";

import "./Widget.scss";

/**
 * Renders a Widget component.
 *
 * @param {object} props - The props object.
 * @param {string} props.type - The type of the widget.
 * @param {number} props.amount - The amount of the widget.
 * @param {string} props.action - The action of the widget.
 * @param {boolean} props.isActive - Indicates if the widget is active or not.
 * @param {function} props.onToggle - The function to toggle the widget.
 * @param {boolean} props.linked - Indicates if the widget is linked or not.
 * @param {string} props.selectedColor - The selected color of the widget.
 * @return {JSX.Element} The rendered Widget component.
 */

function Widget({
  type,
  amount,
  action,
  isActive,
  onToggle,
  linked,
  selectedColor,
}) {
  const [onSelectColor, setOnSelectColor] = useState(selectedColor);
  const [isLinked, setIsLinked] = useState(linked);
  const handleColorChange = useCallback(
    (selectedColor) => {
      setOnSelectColor(selectedColor);
    },
    [setOnSelectColor]
  );

  const handleLinkedChange = (e) => {
    setIsLinked(e.target.checked);
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
          <label>Link to Public Profile</label>
          <span className='tooltip_container'>
            <Tooltip linked={true}>
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
          <p>Activate Badge</p>
          <ToggleSwitch
            isActive={isActive}
            onToggle={onToggle}
          />
        </div>
      </div>
    </div>
  );
}

Widget.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  action: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  linked: PropTypes.bool.isRequired,
  selectedColor: PropTypes.string.isRequired,
};

export default Widget;
