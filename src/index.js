import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals'; // eslint-disable-next-line
import DetailsContextProvider from './contexts/DetailsContext'


ReactDOM.render(
  <DetailsContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </DetailsContextProvider>,
  document.getElementById('root')
);

reportWebVitals();
