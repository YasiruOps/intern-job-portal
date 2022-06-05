import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/CSS/index.css';
import App from './App';
import Home  from './components/home'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();