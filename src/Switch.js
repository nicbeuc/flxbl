import './Switch.css';

function Switch({
  darkMode,
  onSwitchChange
}) {
  return (
    <div className='Switch'>
      <input
        type='checkbox'
        checked={darkMode}
        onChange={onSwitchChange}
      />
      <div className='Switch__track'>
        <div className='Switch__thumb'></div>
      </div>
    </div>
  )
}

export default Switch;