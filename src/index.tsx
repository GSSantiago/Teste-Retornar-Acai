import React from 'react';
import ReactDOM from 'react-dom';
import OrderProvider from "./context/order"
import {App} from './App';
import './styles/global.css'


ReactDOM.render(
  
  <React.StrictMode>
    <OrderProvider>
        <App />
    </OrderProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


