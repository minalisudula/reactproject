import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Functional from './components/Functional';
import Componentclass from './Componentclass';
import Andhrabank from './components/Andhrabank';
import Corporatebank from './components/Corporatebank';
import Unionbank from './components/Unionbank';
import Stateclass from './components/Stateclass';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Functional/>
    <Componentclass/>
    <Unionbank/>
    <Stateclass/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
