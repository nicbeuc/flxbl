import { useState } from 'react';
import ParamForm from './ParamForm.js';
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

const defaultBreakpoints = {
  mobile: [0, 499],
  tablet: [500, 999],
  desktop: [1000, 9999]
}

function App() {
  const [params, setParams] = useState(defaultParams);
  const [breakpoints, setBreakpoints] = useState(defaultBreakpoints);

  return (
    <div className="App">
      <h1>Flxbl</h1>
      <ParamForm params={params} breakpoints={breakpoints}/>
    </div>
  );
}

export default App;
