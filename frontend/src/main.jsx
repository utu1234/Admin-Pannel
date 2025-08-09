import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // CSS import yahan ho
import { BrowserRouter } from 'react-router-dom';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
