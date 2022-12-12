import { useContext } from 'react';
import { SettingsContext } from './SettingsProvider';

function Checkbox({
  targetSetting,
  device,
  text
}) {
  const settingsContext = useContext(SettingsContext);
  const checked = settingsContext.settings[device][targetSetting];

  return (
    <div className='Checkbox'>
      <input
        type='checkbox'
        data-setting={targetSetting}
        data-device={device}
        checked={checked}
        onChange={settingsContext.handleSettingsCheckboxChange}
      />
      <label>{text}</label>
    </div>
  )
}

export default Checkbox;