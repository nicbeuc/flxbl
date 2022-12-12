import { useContext } from 'react';
import { ThemeContext } from './ThemeProvider';

function Switch() {
  const context = useContext(ThemeContext);

  return (
    <div className='Switch'>
      <input
        type='checkbox'
        checked={context.darkMode}
        onChange={context.toggleTheme}
      />
      <div className='Switch__track'>
        <div className='Switch__thumb'></div>
      </div>
    </div>
  )
}

export default Switch;