import ReactSlider from 'react-slider';
import './Slider.css';

function Slider({
  onSliderChange,
  currentValue,
  targetSetting,
  device,
  range,
  label,
  unit
}) {
  let marksArray = Array.from({length: range[1] - range[0] + 1}, (_, index) => index + range[0]);

  return (
    <div className='Slider'>
      <label className='Slider__label--container'>
        <span className='Slider__label'>{label}</span>
        <span className='Slider__value'>{unit ? currentValue + ' ' + unit : currentValue}</span>
      </label>
      <ReactSlider
        className='Slider__control'
        thumbClassName='Slider__thumb'
        trackClassName='Slider__track'
        markClassName='Slider__mark'
        marks={marksArray}
        min={range[0]}
        max={range[1]}
        onAfterChange={value => device ? onSliderChange(value, device, targetSetting) : onSliderChange(value, targetSetting)}
        value={currentValue}
      />
      <div className='Slider__bounds'>
        <span className='Slider__bound'>{range[0]}</span>
        <span className='Slider__bound'>{range[1]}</span>
      </div>
    </div>
  )
}

export default Slider;