import React from 'react';
import ReactDOM from 'react-dom/client';
//import TodoList from './pages/TodoList';
import Home from './pages/Home/index'
import { GlobalStyle } from './GlobalStyles';
//<TodoList />

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <Home />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

