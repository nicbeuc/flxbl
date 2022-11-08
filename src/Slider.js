import ReactSlider from 'react-slider';
import './Slider.css';

function Slider({
  onSliderChange,
  currentValue,
  targetParam,
  range,
  label
}) {
  return (
    <div className='ParamForm__slider--container'>
      <label>{label}</label>
      <ReactSlider
        className='ParamForm__slider'
        thumbClassName='ParamForm__slider--thumb'
        trackClassName='ParamForm__slider--track'
        markClassName='ParamForm__slider--mark'
        marks
        min={range[0]}
        max={range[1]}
        onAfterChange={value => onSliderChange(value, targetParam)}
        value={currentValue}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
      />
    </div>
  )
}

export default Slider;