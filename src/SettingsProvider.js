import { useState, createContext } from "react";

const SettingsContext = createContext();

function SettingsProvider({children}) {
  const [settings, setSettings] = useState({
    general: {
      baseFontSize: 16,
      children: 6,
    },
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
  });

  function handleSettingsSliderChange(value, key, targetSetting) {
    setSettings((prevSettings) => ({
      ...prevSettings,
      [key]: {
        ...prevSettings[key],
        [targetSetting]: value
      }
    }));
  }

  function handleSettingsCheckboxChange(e) {
    setSettings((prevSettings) => ({
      ...prevSettings,
      [e.target.dataset.device]: {
        ...prevSettings[e.target.dataset.device],
        [e.target.dataset.setting]: e.target.checked
      }
    }));
  }

  function handleSettingsInputChange(e) {
    setSettings((prevSettings) => ({
      ...prevSettings,
      [e.target.dataset.device]: {
        ...prevSettings[e.target.dataset.device],
        [e.target.dataset.setting]: e.target.type === 'number' ? Number.parseFloat(e.target.value, 10) : e.target.value
      }
    }));
  }

  const value = {
    settings,
    handleSettingsCheckboxChange,
    handleSettingsInputChange,
    handleSettingsSliderChange
  }

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  )
}

export { SettingsContext, SettingsProvider };
