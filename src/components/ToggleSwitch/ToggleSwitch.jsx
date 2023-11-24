import "./ToggleSwitch.scss";
import Proptypes from "prop-types";

/**
 * Renders a toggle switch component.
 *
 * @param {object} props - The properties passed to the component.
 * @param {boolean} props.isActive - Indicates whether the switch is active.
 * @param {function} props.onToggle - The event handler for when the switch is toggled.
 * @return {JSX.Element} The toggle switch component.
 */
function ToggleSwitch({ isActive, onToggle }) {
  return (
    <label className='switch'>
      <input
        type='checkbox'
        checked={isActive}
        onChange={onToggle}
      />
      <span className='slider round'></span>
    </label>
  );
}

ToggleSwitch.propTypes = {
  isActive: Proptypes.bool.isRequired,
  onToggle: Proptypes.func.isRequired,
};
export default ToggleSwitch;
