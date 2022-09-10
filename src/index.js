import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider } from './components/ThemeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <body className='bg-white dark:bg-slate-700 transition-all'>
        <App />
      </body>
    </ThemeProvider>
  </React.StrictMode>
);
