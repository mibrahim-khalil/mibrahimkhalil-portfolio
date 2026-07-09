import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './Router';
import { ThemeProvider } from './providers';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Router />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;