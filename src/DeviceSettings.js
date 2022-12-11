import Slider from './Slider';
import Checkbox from './Checkbox';
import Breakpoint from './Breakpoint';

function DeviceSettings({
  device
}) {
  return (
    <div className='DeviceSettings'>
      <h3>{device[0].toUpperCase() + device.slice(1).toLowerCase()}</h3>
      {device === 'desktop' ? null : (
        <Breakpoint
          device={device}
          targetSetting='maxWidth'
        />
      )}
      <Slider
        range={[1, 10]}
        targetSetting='columns'
        label='Columns'
        device={device}
      />
      <Slider
        range={[0, 5]}
        targetSetting='columnGap'
        label='Column gap'
        unit='rem'
        device={device}
      />
      <Slider
        range={[0, 5]}
        targetSetting='rowGap'
        label='Row gap'
        unit='rem'
        device={device}
      />
      <Checkbox
        targetSetting='fillAvailable'
        device={device}
        text='Children should fill available space'
      />
    </div>
  )
}

export default DeviceSettings;