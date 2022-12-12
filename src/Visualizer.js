import { useState, useContext } from 'react';
import { SettingsContext } from './SettingsProvider';

function Visualizer(props) {
  const [view, setView] = useState('desktop');
  const settingsContext = useContext(SettingsContext);

  function handleViewportButtonClick(e) {
    setView(e.target.dataset.view);
  }

  function getChildren(children) {
    let content = [];
    for (let i = 0; i < children; i++) {
      content.push(
        <div
          className='Visualizer__child'
          key={i + 1}
          style={{
            flexBasis: `calc((100% - ${settingsContext.settings[view].columnGap * (settingsContext.settings[view].columns - 1)}rem) / ${settingsContext.settings[view].columns})`,
            flexGrow: settingsContext.settings[view].fillAvailable ? 1 : 0
          }}></div>
      );
    }
    return content;
  };

  function getViewportWidth(view) {
    return (settingsContext.settings[view].maxWidth / settingsContext.settings.desktop.maxWidth) * 100;
  }

  return (
    <div className='Visualizer'>
      <div className='Visualizer__viewport-container'>
        <div
          className='Visualizer__viewport'
          style={{
            width: getViewportWidth(view) + '%'
          }}
        >
          <div
            className='Visualizer__children'
            style={{
              columnGap: `${settingsContext.settings[view].columnGap}rem`,
              rowGap: `${settingsContext.settings[view].rowGap}rem`
            }}
          >
            {getChildren(settingsContext.settings.general.children)}
          </div>
        </div>
      </div>
      <div className='Visualizer__buttons'>
        <div
          className='Visualizer__current-view'
          style={{
            width: getViewportWidth(view) + '%'
          }}
        >
          {`${view[0].toUpperCase() + view.substring(1)} - ${settingsContext.settings[view].maxWidth * settingsContext.settings.general.baseFontSize}px`}
        </div>
        <button
          data-view='desktop'
          onClick={handleViewportButtonClick}
          className={`Visualizer__button${view === 'desktop' ? ' active' : ''}`}
          style={{
            width: getViewportWidth('desktop') + '%'
          }}
          aria-label='Change view to desktop'
        >
        </button>
        <button
          data-view='tablet'
          onClick={handleViewportButtonClick}
          className={`Visualizer__button${view === 'tablet' ? ' active' : ''}`}
          style={{
            width: getViewportWidth('tablet') + '%'
          }}
          aria-label='Change view to tablet'
        >
        </button>
        <button
          data-view='mobile'
          onClick={handleViewportButtonClick}
          className={`Visualizer__button${view === 'mobile' ? ' active' : ''}`}
          style={{
            width: getViewportWidth('mobile') + '%'
          }}
          aria-label='Change view to mobile'
        >
        </button>
      </div>
    </div>
  )
}

export default Visualizer;