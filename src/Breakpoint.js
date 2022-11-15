import './Breakpoint.css';

function Breakpoint({
  currentValue,
  device,
  targetSetting,
  onInputChange
}) {
  return (
    <div className='Breakpoint'>
      <label className='Breakpoint__label'>Max viewport width</label>
      <div className='Breakpoint__input'>
        <input
          type='number'
          step='0.25'
          data-device={device}
          data-setting={targetSetting}
          value={currentValue}
          onChange={onInputChange}
        />
        <span className='Breakpoint__units'>rem</span>
      </div>
    </div>
  )
}

export default Breakpoint;