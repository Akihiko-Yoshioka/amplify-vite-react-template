import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Hello from './components/Hello'
import Name from './components/Name'
import Message from './components/Message'
import ContainerSample from './components/ContainerSample'
import ContainerSample_Context from './components/ContainerSample_Context'
// import Parent from './components/Parent'
import UseCallback_sample from './components/UseCallback_sample'
import UseMemo_sample from './components/UseMemo_sample'
import Clock from './components/Clock'
import UseContext from './components/UseContext'
import UseRef from './components/UseRef'
import UseImperativeHandle from './components/UseImperativeHandle'
import CostumHook from './components/CostumHook'


import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
<React.StrictMode>
<CostumHook />
</React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
