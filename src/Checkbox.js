import './Checkbox.css';

function Checkbox({
  onCheckboxChange,
  targetSetting,
  checked
}) {
  return (
    <div className='Checkbox'>
      <input
        type='checkbox'
        data-setting={targetSetting}
        checked={checked}
        onChange={onCheckboxChange}
      />
      <label>Children should fill available space</label>
    </div>
  )
}

export default Checkbox;