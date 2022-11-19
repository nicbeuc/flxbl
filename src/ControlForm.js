import DeviceSettings from './DeviceSettings';
import GeneralSettings from './GeneralSettings';

function ControlForm({
  generalSettings,
  onSliderChange,
  deviceHandlers,
  deviceSettings
}) {
  return (
    <form id='controlForm' className='ControlForm'>
      <GeneralSettings
        settings={generalSettings}
        onSliderChange={onSliderChange}
      />
      <DeviceSettings
        device='desktop'
        onSliderChange={deviceHandlers[0]}
        onCheckboxChange={deviceHandlers[1]}
        onInputChange={deviceHandlers[2]}
        settings={deviceSettings.desktop}
      />
      <DeviceSettings
        device='tablet'
        onSliderChange={deviceHandlers[0]}
        onCheckboxChange={deviceHandlers[1]}
        onInputChange={deviceHandlers[2]}
        settings={deviceSettings.tablet}
      />
      <DeviceSettings
        device='mobile'
        onSliderChange={deviceHandlers[0]}
        onCheckboxChange={deviceHandlers[1]}
        onInputChange={deviceHandlers[2]}
        settings={deviceSettings.mobile}
      />
    </form>
  )
}

export default ControlForm;