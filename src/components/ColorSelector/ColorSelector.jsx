/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import "./ColorSelector.scss";
import { colorOptions } from "../../constant/colorOptions";

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

export default ColorSelector;
