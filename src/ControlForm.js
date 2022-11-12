import DeviceSettings from './DeviceSettings';
import Slider from './Slider';

function ControlForm({
  generalSettings,
  onSliderChange,
  deviceHandlers,
  deviceSettings
}) {
  return (
    <form id='controlForm' className='ControlForm'>
      <Slider
        onSliderChange={onSliderChange}
        currentValue={generalSettings.baseFontSize}
        range={[10, 24]}
        targetSetting='baseFontSize'
        label='Base font size'
        unit='px'
      />
      <Slider
        onSliderChange={onSliderChange}
        currentValue={generalSettings.children}
        range={[2, 10]}
        targetSetting='children'
        label='Child elements'
      />
      <DeviceSettings
        device='mobile'
        onSliderChange={deviceHandlers[0]}
        onCheckboxChange={deviceHandlers[1]}
        settings={deviceSettings.mobile}
      />
    </form>
  )
}

export default ControlForm;