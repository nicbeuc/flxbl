import { useState } from 'react';
import ControlForm from './ControlForm';
import Header from './Header';
import Visualizer from './Visualizer';
import OutputTabs from './OutputTabs';
import CodeOutput from './CodeOutput';

// Default Parameters
const defGeneralSettings = {
  baseFontSize: 16,
  children: 6,
}

const defDeviceSettings = {
  mobile: {
    maxWidth: 32,
    columns: 2,
    columnGap: 1,
    rowGap: 1,
    fillAvailable: false,
  },
  tablet: {
    maxWidth: 60,
    columns: 3,
    columnGap: 1,
    rowGap: 1,
    fillAvailable: false,
  },
  desktop: {
    maxWidth: 120,
    columns: 4,
    columnGap: 1,
    rowGap: 1,
    fillAvailable: false,
  }
}

function App() {
  const [generalSettings, setGeneralSettings] = useState(defGeneralSettings);
  const [deviceSettings, setDeviceSettings] = useState(defDeviceSettings);
  const [view, setView] = useState('desktop');
  const [tab, setTab] = useState('visualizer');
  const [theme, setTheme] = useState('dark');

  function handleGeneralSliderChange(value, targetSetting) {
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

  function handleDevicesCheckboxChange(e) {
    setDeviceSettings((prevSettings) => ({
      ...prevSettings,
      [e.target.dataset.device]: {
        ...prevSettings[e.target.dataset.device],
        [e.target.dataset.setting]: e.target.checked
      }
    }));
  }

  function handleDevicesInputChange(e) {
    setDeviceSettings((prevSettings) => ({
      ...prevSettings,
      [e.target.dataset.device]: {
        ...prevSettings[e.target.dataset.device],
        [e.target.dataset.setting]: e.target.type === 'number' ? Number.parseFloat(e.target.value, 10) : e.target.value
      }
    }));
  }

  function handleViewportButtonClick(e) {
    setView(e.target.dataset.view);
  }

  function handleTabClick(e) {
    setTab(e.target.dataset.content);
  }

  return (
    <div className={`App ${theme}`}>
      <Header />
      <div className='Controls'>
        <ControlForm
          generalSettings={generalSettings}
          deviceSettings={deviceSettings}
          deviceHandlers={[handleDeviceSliderChange, handleDevicesCheckboxChange, handleDevicesInputChange]}
          onSliderChange={handleGeneralSliderChange}
        />
      </div>
      <div className='Output'>
        <OutputTabs
          activeTab={tab}
          onTabClick={handleTabClick}
        />
        { tab === 'visualizer' ?
          <Visualizer
            generalSettings={generalSettings}
            deviceSettings={deviceSettings}
            onButtonClick={handleViewportButtonClick}
            view={view}
          />
        :
          <CodeOutput
            deviceSettings={deviceSettings}
          />
        }
      </div>
    </div>
  );
}

export default App;
