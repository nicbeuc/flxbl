import { useState } from 'react';
import ControlForm from './ControlForm';
import Header from './Header';

// Default Parameters
const defaultBaseSettings = {
  baseFontSize: 16,
  children: 3,
  columns: 1,
  columnGap: 1,
  rowGap: 1,
  fillAvailable: true,
}

function App() {
  const [settings, setSettings] = useState(defaultBaseSettings);

  function handleSliderChange(value, targetSetting) {
    setSettings((prevSettings) => ({
      ...prevSettings,
      [targetSetting]: value
    }));
  }

  function handleCheckboxChange(e) {
    setSettings((prevSettings) => ({
      ...prevSettings,
      [e.target.dataset.setting]: e.target.checked
    }));
  }

  return (
    <div className='App'>
      <Header />
      <div className='Controls'>
        <ControlForm
          settings={settings}
          onSliderChange={handleSliderChange}
          onCheckboxChange={handleCheckboxChange}
        />
      </div>
      <div className='Output'></div>
    </div>
  );
}

export default App;
