import Slider from './Slider'

function ParamForm({
  params,
  breakpoints,
  onSliderChange
}) {
  return (
    <div className='ParamForm'>
      <form id='paramForm' className='ParamForm__form'>
        <Slider
          onSliderChange={onSliderChange}
          currentValue={params.baseFontSize}
          range={[10, 24]}
          targetParam='baseFontSize'
          label='Base font size'
        />
        <Slider
          onSliderChange={onSliderChange}
          currentValue={params.children}
          range={[2, 20]}
          targetParam='children'
          label='Number of inner elements'
        />
        <Slider
          onSliderChange={onSliderChange}
          currentValue={params.columns}
          range={[1, 10]}
          targetParam='columns'
          label='Number of columns'
        />
        <Slider
          onSliderChange={onSliderChange}
          currentValue={params.columnGap}
          range={[0, 5]}
          targetParam='columnGap'
          label='Gap size between columns'
        />
        <Slider
          onSliderChange={onSliderChange}
          currentValue={params.rowGap}
          range={[0, 5]}
          targetParam='rowGap'
          label='Gap size between rows'
        />
        <label htmlFor='paramInputFill'>Children should fill available space</label>
        <input
          id='paramInputFill'
          type='checkbox'
          data-changes='fillAvailable'
        />
      </form>
    </div>
  )
}

export default ParamForm;