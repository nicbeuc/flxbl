function Checkbox({
  onCheckboxChange,
  targetSetting,
  checked
}) {
  return (
    <div className='Checkbox'>
      <label>Children should fill available space</label>
      <input
        type='checkbox'
        data-setting={targetSetting}
        checked={checked}
        onChange={onCheckboxChange}
      />
    </div>
  )
}

export default Checkbox;