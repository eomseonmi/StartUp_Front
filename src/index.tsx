import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './css/index.css';
import 'semantic-ui-css/semantic.min.css';

import StartupMainContainer from '../src/Layout/Container/StartupMainContainer';
import SelectMessageContainer from './Layout/Container/SelectMessageContainer';
import MakeImageContainer from './Layout/Container/MakeImageContainer';
import SelectImageContainer from './Layout/Container/SelectImageContainer';
import ShowGiftcardContainer from './Layout/Container/ShowGiftcardContainer';
import PrintGiftcardContainer from './Layout/Container/PrintGiftcardContainer';

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" Component={StartupMainContainer} />
            <Route path="/selectMessage" Component={SelectMessageContainer}/>{' '}
            <Route path="/makeImage" Component={MakeImageContainer} />
            <Route path="/selectImage" Component={SelectImageContainer} />
            <Route path="/showGiftcard" Component={ShowGiftcardContainer} />{' '}
            <Route path="/print" Component={PrintGiftcardContainer} />{' '}
        </Routes>
    </BrowserRouter>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
