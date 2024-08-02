import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeContextProvider } from './context/ThemeContext';
import { WorkoutContextProvider } from './context/WorkoutContext';
import { AuthContextProvider } from './context/AuthContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <WorkoutContextProvider>
        <ThemeContextProvider>
        <App />
        </ThemeContextProvider>
      </WorkoutContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);

