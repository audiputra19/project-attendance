import React, { FC } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './Routers/Router';
import { ThemeProvider } from './Context/ThemeContext';
import { AlertProvider } from './Context/AlertContext';
import { ModalProvider } from './Context/ModalContext';

const App: FC = () => {
  return (
    <ThemeProvider>
      <ModalProvider>
        <AlertProvider>
          <BrowserRouter>
            <Router/>
          </BrowserRouter>
        </AlertProvider>
      </ModalProvider>
    </ThemeProvider>
  )
}

export default App;
