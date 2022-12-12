import { useContext } from 'react';
import { SettingsContext } from './SettingsProvider';

function Breakpoint({
  device,
  targetSetting
}) {
  const settingsContext = useContext(SettingsContext);
  const currentValue = settingsContext.settings[device][targetSetting];

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
          onChange={settingsContext.handleSettingsInputChange}
        />
        <span className='Breakpoint__units'>rem</span>
      </div>
    </div>
  )
}

export default Breakpoint;