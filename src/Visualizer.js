import './Visualizer.css';

function Visualizer({
  settings
}) {
  const getChildren = children => {
    let content = [];
    for (let i = 0; i < children; i++) {
      content.push(<div className='Visualizer__child' key={i + 1}>{i + 1}</div>);
    }
    return content;
  };

  return (
    <div className='Visualizer'>
      <div className='Visualizer__viewport'>
        <div className='Visualizer__children'>
          {getChildren(settings.children)}
        </div>
      </div>
    </div>
  )
}

export default Visualizer;