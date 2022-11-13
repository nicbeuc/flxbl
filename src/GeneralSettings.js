import Slider from './Slider';

function GeneralSettings({
  settings,
  onSliderChange
}) {
  return (
    <div className='GeneralSettings'>
      <h3>General</h3>
      <Slider
        onSliderChange={onSliderChange}
        currentValue={settings.baseFontSize}
        range={[10, 24]}
        targetSetting='baseFontSize'
        label='Base font size'
        unit='px'
      />
      <Slider
        onSliderChange={onSliderChange}
        currentValue={settings.children}
        range={[2, 10]}
        targetSetting='children'
        label='Child elements'
      />
    </div>
  )
}

export default GeneralSettings;