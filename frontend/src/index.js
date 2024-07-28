import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeContextProvider } from './context/ThemeContext';
import { WorkoutContextProvider } from './context/WorkoutContext';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WorkoutContextProvider>
      <ThemeContextProvider>
      <App />
      </ThemeContextProvider>
    </WorkoutContextProvider>
  </React.StrictMode>
);

