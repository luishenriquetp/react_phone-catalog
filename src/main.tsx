import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App.tsx';
import { GlobalStyles } from './styles/GlobalStyles.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <App />
      <GlobalStyles />
    </HashRouter>
  </React.StrictMode>,
);
