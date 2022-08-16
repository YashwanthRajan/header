import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {HashRouter,unstable_HistoryRouter,BrowserRouter,MemoryRouter} from "react-router-dom";
import {StaticRouter} from 'react-router-dom/server'
ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter >
    <App />  
    </BrowserRouter >
    
  </React.StrictMode>,
    document.getElementById('root')
  );