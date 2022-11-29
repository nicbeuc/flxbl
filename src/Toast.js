import { forwardRef } from 'react';
import './Toast.css';

const Toast = forwardRef(({type, text}, ref) => {
  const icons = {
    success: <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' className='icon icon-success' viewBox='0 0 24 24'><path d='M22 11.08V12a10 10 0 1 1-5.93-9.14'/><path d='M22 4 12 14.01l-3-3'/></svg>,
    error: <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' stroke='cur`rentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' className='icon icon-error' viewBox='0 0 24 24'><circle cx='12' cy='12' r='10'/><path d='m15 9-6 6M9 9l6 6'/></svg>
  }

  return (
    <div className='Toast' ref={ref}>
      <div className='Toast__icon'>
        {icons[type]}
      </div>
      <div className='Toast__text'>
        {text}
      </div>
    </div>
  )
});

export default Toast;