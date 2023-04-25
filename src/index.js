import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import ChangeTheme from './components/ChangeTheme/ChangeTheme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChangeTheme>
      <App /> 
    </ChangeTheme>
  </React.StrictMode>
);