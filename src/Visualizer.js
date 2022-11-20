import './Visualizer.css';

function Visualizer({
  generalSettings,
  deviceSettings,
  onButtonClick,
  view
}) {
  const getChildren = children => {
    let content = [];
    for (let i = 0; i < children; i++) {
      content.push(
        <div
          className='Visualizer__child'
          key={i + 1}
          style={{
            flexBasis: `calc((100% - ${deviceSettings[view].columnGap * (deviceSettings[view].columns - 1)}rem) / ${deviceSettings[view].columns})`,
            flexGrow: deviceSettings[view].fillAvailable ? 1 : 0
          }}></div>
      );
    }
    return content;
  };

  const getViewportWidth = view => {
    return (deviceSettings[view].maxWidth / deviceSettings.desktop.maxWidth) * 100;
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
              columnGap: `${deviceSettings[view].columnGap}rem`,
              rowGap: `${deviceSettings[view].rowGap}rem`
            }}
          >
            {getChildren(generalSettings.children)}
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
          {`${view[0].toUpperCase() + view.substring(1)} - ${deviceSettings[view].maxWidth * generalSettings.baseFontSize}px`}
        </div>
        <button
          data-view='desktop'
          onClick={onButtonClick}
          className={`Visualizer__button${view === 'desktop' ? ' active' : ''}`}
          style={{
            width: getViewportWidth('desktop') + '%'
          }}
        >
        </button>
        <button
          data-view='tablet'
          onClick={onButtonClick}
          className={`Visualizer__button${view === 'tablet' ? ' active' : ''}`}
          style={{
            width: getViewportWidth('tablet') + '%'
          }}
        >
        </button>
        <button
          data-view='mobile'
          onClick={onButtonClick}
          className={`Visualizer__button${view === 'mobile' ? ' active' : ''}`}
          style={{
            width: getViewportWidth('mobile') + '%'
          }}
        >
        </button>
      </div>
    </div>
  )
}

export default Visualizer;