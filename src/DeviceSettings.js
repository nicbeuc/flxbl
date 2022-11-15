import Slider from './Slider';
import Checkbox from './Checkbox';
import Breakpoint from './Breakpoint';

function DeviceSettings({
  device,
  onSliderChange,
  onCheckboxChange,
  onInputChange,
  settings
}) {
  return (
    <div className='DeviceSettings'>
      <h3>{device[0].toUpperCase() + device.slice(1).toLowerCase()}</h3>
      {device === 'desktop' ? null : (
        <Breakpoint
          currentValue={settings.maxWidth}
          device={device}
          targetSetting='maxWidth'
          onInputChange={onInputChange}
        />
      )}
      <Slider
        onSliderChange={onSliderChange}
        currentValue={settings.columns}
        range={[1, 10]}
        targetSetting='columns'
        label='Columns'
        device={device}
      />
      <Slider
        onSliderChange={onSliderChange}
        currentValue={settings.columnGap}
        range={[0, 5]}
        targetSetting='columnGap'
        label='Column gap'
        unit='rem'
        device={device}
      />
      <Slider
        onSliderChange={onSliderChange}
        currentValue={settings.rowGap}
        range={[0, 5]}
        targetSetting='rowGap'
        label='Row gap'
        unit='rem'
        device={device}
      />
      <Checkbox
        onCheckboxChange={onCheckboxChange}
        checked={settings.fillAvailable}
        targetSetting='fillAvailable'
        device={device}
      />
    </div>
  )
}

export default DeviceSettings;