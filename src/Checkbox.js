import './Checkbox.css';

function Checkbox({
  onCheckboxChange,
  targetSetting,
  device,
  checked,
  text
}) {
  return (
    <div className='Checkbox'>
      <input
        type='checkbox'
        data-setting={targetSetting}
        data-device={device}
        checked={checked}
        onChange={onCheckboxChange}
      />
      <label>{text}</label>
    </div>
  )
}

export default Checkbox;