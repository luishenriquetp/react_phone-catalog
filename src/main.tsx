import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import { GlobalStyles } from './styles/GlobalStyles.ts';
import { Provider } from 'react-redux';
import store from './context/store.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
      <GlobalStyles />
    </BrowserRouter>
  </React.StrictMode>,
);
