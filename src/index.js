import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './base.css';
import { ThemeProvider } from './ThemeProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
