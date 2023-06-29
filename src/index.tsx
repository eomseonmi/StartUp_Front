import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './css/index.css';
import 'semantic-ui-css/semantic.min.css';
import SelectMessage from './Layout/Presentational/SelectMessage';
import StartupMain from './Layout/Presentational/StartupMain';
import MakeImage from './Layout/Presentational/MakeImage';
import SelectImage from './Layout/Presentational/SelectImage';
import ShowGiftcard from './Layout/Presentational/ShowGiftcard';

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<StartupMain />} />
            <Route path="/selectMessage" element={<SelectMessage />} />
            <Route path="/makeImage" element={<MakeImage />} />
            <Route path="/selectImage" element={<SelectImage />} />
            <Route path="/showGiftCard" element={<ShowGiftcard />} />
        </Routes>
    </BrowserRouter>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
