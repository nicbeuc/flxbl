function BreakpointInput(props) {
  return (
    <div className='BreakpointInput'>
      <label>Max viewport width</label>
      <div className='BreakpointInput__controls'>
        <input type='number' />
        <select>
          <option value='rem'>rem</option>
          <option value='px'>px</option>
          <option value='%'>%</option>
        </select>
      </div>
    </div>
  )
}

export default BreakpointInput;