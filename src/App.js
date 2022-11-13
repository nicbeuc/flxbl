import { useState } from 'react';
import ControlForm from './ControlForm';
import Header from './Header';

// Default Parameters
const defGeneralSettings = {
  baseFontSize: 16,
  children: 6,
}

const defDeviceSettings = {
  mobile: {
    maxWidth: 400,
    units: 'rem',
    columns: 2,
    columnGap: 1,
    rowGap: 1,
    fillAvailable: false,
  },
  tablet: {
    maxWidth: 1000,
    units: 'rem',
    columns: 3,
    columnGap: 2,
    rowGap: 2,
    fillAvailable: false,
  },
  desktop: {
    maxWidth: null,
    units: 'rem',
    columns: 4,
    columnGap: 2,
    rowGap: 2,
    fillAvailable: false,
  }
}

function App() {
  const [generalSettings, setGeneralSettings] = useState(defGeneralSettings);
  const [deviceSettings, setDeviceSettings] = useState(defDeviceSettings);

  function handleGeneralSliderChange(value, targetSetting) {
    console.log('here');
    setGeneralSettings((prevSettings) => ({
      ...prevSettings,
      [targetSetting]: value
    }));
  }

  function handleDeviceSliderChange(value, device, targetSetting) {
    setDeviceSettings((prevSettings) => ({
      ...prevSettings,
      [device]: {
        ...prevSettings[device],
        [targetSetting]: value
      }
    }));
  }

  function handleDeviceCheckboxChange(e) {
    setDeviceSettings((prevSettings) => ({
      ...prevSettings,
      [e.target.dataset.device]: {
        ...prevSettings[e.target.dataset.device],
        [e.target.dataset.setting]: e.target.checked
      }
    }));
  }

  return (
    <div className='App'>
      <Header />
      <div className='Controls'>
        <ControlForm
          generalSettings={generalSettings}
          deviceSettings={deviceSettings}
          deviceHandlers={[handleDeviceSliderChange, handleDeviceCheckboxChange]}
          onSliderChange={handleGeneralSliderChange}
        />
      </div>
      <div className='Output'></div>
    </div>
  );
}

export default App;
