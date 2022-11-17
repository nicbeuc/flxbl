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
      content.push(<div className='Visualizer__child' key={i + 1}></div>);
    }
    return content;
  };

  const getViewportWidth = view => {
    const basePx = generalSettings.baseFontSize;
    const denom = 1920;
    let nom = null;
    if (view !== 'desktop') {
      nom = basePx * deviceSettings[view].maxWidth;
    }
    return ((nom ?? 1920) / denom) * 100;
  }

  return (
    <div className='Visualizer'>
      <div className='Visualizer__buttons'>
        <button data-view='desktop' onClick={onButtonClick} className='Visualizer__button'>Desktop</button>
        <button data-view='tablet' onClick={onButtonClick} className='Visualizer__button'>Tablet</button>
        <button data-view='mobile' onClick={onButtonClick} className='Visualizer__button'>Mobile</button>
      </div>
      <div
        className='Visualizer__viewport'
        style={{
          width: getViewportWidth(view) + '%'
        }}
      >
        <div className='Visualizer__children'>
          {getChildren(generalSettings.children)}
        </div>
      </div>
    </div>
  )
}

export default Visualizer;