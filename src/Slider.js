import { useRef, useEffect, useContext } from 'react';
import ReactSlider from 'react-slider';
import { SettingsContext } from './SettingsProvider';
import './Slider.css';

function useSliderGrab(targetRef) {
  useEffect(() => {
    const sliderEl = targetRef.current.querySelector('.Slider__control');
    const handleSliderGrab = e => {
      e.currentTarget.classList.add('grabbing');
    }
    const handleSliderRelease = e => {
      e.currentTarget.classList.remove('grabbing');
    }

    if (sliderEl) {
      sliderEl.addEventListener('mousedown', handleSliderGrab);
      sliderEl.addEventListener('mouseup', handleSliderRelease);
    }

    return () => {
      if (sliderEl) {
        sliderEl.removeEventListener('mousedown', handleSliderGrab);
        sliderEl.removeEventListener('mouseup', handleSliderRelease);
      }
    };
  }, [targetRef]);
}

function Slider({
  targetSetting,
  device,
  range,
  label,
  unit
}) {
  const sliderRef = useRef(null);
  const settingsContext = useContext(SettingsContext);
  const marksArray = Array.from({length: range[1] - range[0] + 1}, (_, index) => index + range[0]);
  const currentValue = settingsContext.settings[device][targetSetting]

  useSliderGrab(sliderRef);

  return (
    <div className='Slider' ref={sliderRef}>
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
        onAfterChange={value => settingsContext.handleSettingsSliderChange(value, device, targetSetting)}
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