import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
// import Root from './Root';
import Main from './Main';
import './css/index.css';
import 'semantic-ui-css/semantic.min.css';

ReactDOM.render(
  // <React.StrictMode>
    // <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />  
          <Route path='/' element={<Main />} />
        </Routes>
      </BrowserRouter>,
    // </RecoilRoot>
  // </React.StrictMode>
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();