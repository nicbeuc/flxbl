import { useState } from 'react';
import ControlForm from './ControlForm';
import Header from './Header';

// Default Parameters
const defaultSettings = {
  baseFontSize: 16,
  children: 3,
  columns: 1,
  columnGap: 1,
  rowGap: 1,
  fillAvailable: true,
}

// Default Breakpoints
// const defaultBreakpoints = {
//   mobile: [0, 499],
//   tablet: [500, 999],
//   desktop: [1000, 9999]
// }

function App() {
  const [settings, setSettings] = useState(defaultSettings);
  // const [breakpoints, setBreakpoints] = useState(defaultBreakpoints);

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
