function ParamForm({
  params,
  breakpoints,
  onParamFormChange
}) {
  return (
    <div className='ParamForm'>
      <form id='paramForm' className='ParamForm__form'>
        <label htmlFor='paramInputFontSize'>Base font size</label>
        <input
          id='paramInputFontSize'
          type='number'
          data-changes='baseFontSize'
          value={params.baseFontSize}
          onChange={onParamFormChange}
        />
        <label htmlFor='paramInputChildren'>Number of inner elements</label>
        <input
          id='paramInputChildren'
          type='number'
          data-changes='children'
          value={params.children}
          onChange={onParamFormChange}
        />
        <label htmlFor='paramInputColumns'>Number of columns</label>
        <input
          id='paramInputColumns'
          type='number'
          data-changes='columns'
          value={params.columns}
          onChange={onParamFormChange}
        />
        <label htmlFor='paramInputColumnGap'>Column gap size</label>
        <input
          id='paramInputColumnGap'
          type='number'
          data-changes='columnGap'
          value={params.columnGap}
          onChange={onParamFormChange}
        />
        <label htmlFor='paramInputRowGap'>Row gap size</label>
        <input
          id='paramInputRowGap'
          type='number'
          data-changes='rowGap'
          value={params.rowGap}
          onChange={onParamFormChange}
        />
        <label htmlFor='paramInputFill'>Children should fill available space</label>
        <input
          id='paramInputFill'
          type='checkbox'
          data-changes='fillAvailable'
          checked={params.fillAvailable}
          onChange={onParamFormChange}
        />
      </form>
    </div>
  )
}

export default ParamForm;