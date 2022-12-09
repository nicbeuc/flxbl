import Slider from './Slider';

function GeneralSettings(props) {
  return (
    <div className='GeneralSettings'>
      <h3>General</h3>
      <Slider
        range={[10, 24]}
        device='general'
        targetSetting='baseFontSize'
        label='Base font size'
        unit='px'
      />
      <Slider
        range={[2, 10]}
        device='general'
        targetSetting='children'
        label='Child elements'
      />
    </div>
  )
}

export default GeneralSettings;