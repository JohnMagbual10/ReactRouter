import React from 'react';
import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom'; // Import ReactDOM

import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

createRoot(document.getElementById('root')).render( // Use createRoot directly
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
