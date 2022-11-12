import { useState } from 'react';
import ControlForm from './ControlForm';
import Header from './Header';

// Default Parameters
const defGeneralSettings = {
  baseFontSize: 16,
  children: 3,
}

const defDeviceSettings = {
  mobile: {
    maxWidth: 400,
    units: 'px',
    columns: 1,
    columnGap: 1,
    rowGap: 1,
    fillAvailable: true,
  },
  tablet: {
    maxWidth: 1000,
    units: 'px',
    columns: 1,
    columnGap: 1,
    rowGap: 1,
    fillAvailable: true,
  },
  desktop: {
    maxWidth: null,
    units: 'px',
    columns: 1,
    columnGap: 1,
    rowGap: 1,
    fillAvailable: true,
  }
}

function App() {
  const [generalSettings, setGeneralSettings] = useState(defGeneralSettings);
  const [deviceSettings, setDeviceSettings] = useState(defDeviceSettings);

  function handleGeneralSliderChange(value, targetSetting) {
    setGeneralSettings((prevSettings) => ({
      ...prevSettings,
      [targetSetting]: value
    }));
  }

  function handleDeviceSliderChange(value, device, targetSetting) {
    console.log(device);
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
