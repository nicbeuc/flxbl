import { useState, useContext } from 'react';
import ControlForm from './ControlForm';
import Header from './Header';
import Visualizer from './Visualizer';
import OutputTabs from './OutputTabs';
import CodeOutput from './CodeOutput';
import { ThemeContext } from './ThemeProvider';
import { SettingsProvider } from './SettingsProvider';

function App() {
  const [tab, setTab] = useState('visualizer');

  const themeContext = useContext(ThemeContext);

  function handleTabClick(e) {
    setTab(e.target.dataset.content);
  }

  return (
    <div className={`App ${themeContext.darkMode ? 'dark' : 'light'}`}>
      <Header />
      <SettingsProvider>
        <ControlForm />
        <section className='Output'>
          <OutputTabs
            activeTab={tab}
            onTabClick={handleTabClick}
          />
          { tab === 'visualizer' ? <Visualizer /> : <CodeOutput /> }
        </section>
      </SettingsProvider>
    </div>
  );
}

export default App;
