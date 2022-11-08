import { useState } from 'react';
import ParamForm from './ParamForm';
import './App.css';

// Default Parameters
const defaultParams = {
  baseFontSize: 16,
  children: 3,
  columns: 1,
  columnGap: 1,
  rowGap: 1,
  fillAvailable: true,
}

// Default Breakpoints
const defaultBreakpoints = {
  mobile: [0, 499],
  tablet: [500, 999],
  desktop: [1000, 9999]
}

function App() {
  const [params, setParams] = useState(defaultParams);
  const [breakpoints, setBreakpoints] = useState(defaultBreakpoints);

  function handleSliderChange(value, targetParam) {
    setParams((prevParams) => ({
      ...prevParams,
      [targetParam]: value
    }));
  }

  console.log(params);

  return (
    <div className='App'>
      <h1>Flxbl</h1>
      <ParamForm params={params} breakpoints={breakpoints} onSliderChange={handleSliderChange}/>
    </div>
  );
}

export default App;
