function OutputTabs({
  activeTab,
  onTabClick
}) {
  return (
    <div className='OutputTabs'>
      <button
        onClick={onTabClick}
        data-content='visualizer'
        className={`OutputTabs__tab ${activeTab === 'visualizer' ? 'active' : ''}`}
      >
        <span className='OutputTabs__tab-text'>Visualizer</span>
      </button>
      <button
        onClick={onTabClick}
        data-content='code'
        className={`OutputTabs__tab ${activeTab === 'code' ? 'active' : ''}`}
      >
        <span className='OutputTabs__tab-text'>Code</span>
      </button>
    </div>
  )
}

export default OutputTabs;