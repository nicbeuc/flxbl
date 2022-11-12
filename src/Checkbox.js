import './Checkbox.css';

function Checkbox({
  onCheckboxChange,
  targetSetting,
  device,
  checked
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
      <label>Children should fill available space</label>
    </div>
  )
}

export default Checkbox;