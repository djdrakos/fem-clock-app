import { ThemeProvider } from 'styled-components';
import themes from './styles/theme'
import { GlobalStyles } from './styles/global'
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import Background from './components/Background';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={themes.day}>
      <GlobalStyles />
      <Background />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
