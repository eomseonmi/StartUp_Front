import React from 'react';
import { Routes, Route } from 'react-router-dom';
import StartupMainContainer from '../src/Layout/Container/StartupMainContainer';
import SelectMessageContainer from './Layout/Container/SelectMessageContainer';
import MakeImageContainer from './Layout/Container/MakeImageContainer';
import SelectImageContainer from './Layout/Container/SelectImageContainer';
import ShowGiftcardContainer from './Layout/Container/ShowGiftcardContainer';

const Main = () => {
    return (
        <div className="total-main">
            <Routes>
                <Route path="/" Component={StartupMainContainer} />
                <Route path="/selectMessage" Component={SelectMessageContainer} />
                <Route path="/makeImage" Component={MakeImageContainer} />
                <Route path="/selectImage" Component={SelectImageContainer} />
                <Route path="/showGiftcard" Component={ShowGiftcardContainer} />
            </Routes>
        </div>
    );
};

export default Main;
