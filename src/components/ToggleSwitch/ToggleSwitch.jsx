import "./ToggleSwitch.scss";

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
export default ToggleSwitch;
