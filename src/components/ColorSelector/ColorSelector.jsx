import PropTypes from "prop-types";
import { colorOptions } from "../../constant/colorOptions";

import "./ColorSelector.scss";

/**
 * Renders a color selector widget.
 *
 * @param {Object} props - The properties object.
 * @param {function} props.onColorChange - The callback function to be called when the color changes.
 * @param {string} props.selectedColor - The currently selected color.
 * @return {JSX.Element} The color selector widget.
 */
function ColorSelector({ onColorChange, selectedColor }) {
  const handleColorChange = (color) => {
    onColorChange(color);
  };

  return (
    <>
      <div className='widget_options'>
        <p htmlFor='badgeColor'>Badge Color</p>
      </div>
      <div className='color-selector'>
        {colorOptions.map((option) => (
          <div
            key={option.value}
            className='color-checkbox'
          >
            <input
              className='color-input'
              type='checkbox'
              id={option.value}
              name='badgeColor'
              value={option.value}
              checked={selectedColor === option.value}
              onChange={() => handleColorChange(selectedColor)}
              style={{ display: "none" }}
            />
            <label
              htmlFor={option.value}
              className='color-box'
              style={{ backgroundColor: option.value }}
              onClick={() => handleColorChange(option.value)}
            />
          </div>
        ))}
      </div>
    </>
  );
}

ColorSelector.propTypes = {
  onColorChange: PropTypes.func.isRequired,
  selectedColor: PropTypes.string.isRequired,
};
export default ColorSelector;
