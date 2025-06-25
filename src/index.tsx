import React from 'react';
import ReactDOM from 'react-dom/client';
import Roteador from './componentes/roteador';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <Roteador />
  </React.StrictMode>
);

reportWebVitals();
