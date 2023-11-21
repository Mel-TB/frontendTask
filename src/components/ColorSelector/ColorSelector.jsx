/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import "./ColorSelector.scss";

function ColorSelector() {
  const hardcodedColorOptions = [
    { label: "Blue", value: "#2E3A8C" },
    { label: "Green", value: "#3B755F" },
    { label: "Beige", value: "#F2EBDB" },
  ];

  const handleColorChange = (color) => {
    console.log("Badge Color Selected :", color);
  };

  return (
    <div className='color-selector'>
      Badge Color
      {hardcodedColorOptions.map((option) => (
        <label
          key={option.value}
          className='color-option'
          title={option.label}
        >
          <input
            type='checkbox'
            name='badgeColor'
            value={option.value}
            onChange={() => handleColorChange(option.label)}
          />
          <span
            style={{ backgroundColor: option.value }}
            onClick={() => handleColorChange(option.value)}
          ></span>
        </label>
      ))}
    </div>
  );
}

export default ColorSelector;
