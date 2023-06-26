import React from 'react';
import { Routes, Route } from 'react-router-dom';
import StartupHeader from '../src/Layout/Presentational/StartupHeader';
import StartupMainContainer from '../src/Layout/Container/StartupMainContainer';

const Main = () => {
    return (
        <div>
            <StartupHeader />
            <div className="total-main">
                <Routes>
                    <Route path="/" Component={StartupMainContainer} />
                </Routes>
            </div>
        </div>
    );
};

export default Main;
