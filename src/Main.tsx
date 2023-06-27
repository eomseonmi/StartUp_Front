import React from 'react';
import { Routes, Route } from 'react-router-dom';
import StartupHeader from '../src/Layout/Presentational/StartupHeader';
import StartupMainContainer from '../src/Layout/Container/StartupMainContainer';
import SelectMessageContainer from './Layout/Container/SelectMessageContainer';

const Main = () => {
  return (
    <div className='total-main'>
      <Routes>
        <Route path='/' Component={StartupMainContainer} />
        <Route path='/selectMessage' Component={SelectMessageContainer} />
      </Routes>      
    </div>
  )
}

export default Main;
