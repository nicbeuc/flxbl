import Slider from './Slider'
import Checkbox from './Checkbox';

function ControlForm({
  settings,
  onSliderChange,
  onCheckboxChange
}) {
  return (
    <form id='controlForm' className='ControlForm'>
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
      <Slider
        onSliderChange={onSliderChange}
        currentValue={settings.columns}
        range={[1, 10]}
        targetSetting='columns'
        label='Columns'
      />
      <Slider
        onSliderChange={onSliderChange}
        currentValue={settings.columnGap}
        range={[0, 5]}
        targetSetting='columnGap'
        label='Column gap'
        unit='rem'
      />
      <Slider
        onSliderChange={onSliderChange}
        currentValue={settings.rowGap}
        range={[0, 5]}
        targetSetting='rowGap'
        label='Row gap'
        unit='rem'
      />
      <Checkbox
        onCheckboxChange={onCheckboxChange}
        checked={settings.fillAvailable}
        targetSetting='fillAvailable'
      />
    </form>
  )
}

export default ControlForm;