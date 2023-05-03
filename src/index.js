import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import SearchContextProvider from './context/SearchContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SearchContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </SearchContextProvider>

);

// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

