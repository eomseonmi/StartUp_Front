import React from 'react';
import { Route } from 'react-router-dom';
import StartupHeader from '../src/Layout/Presentational/StartupHeader';
import StartupMainContainer from '../src/Layout/Container/StartupMainContainer';

const Main = () => {
  return (
  <div>
    <StartupHeader />
    <div className='total-main'>
      {/* <Route path='/' Component={StartupMainContainer} /> */}
    </div>
    <div>AAA</div>
  </div>
  )
}

export default Main;
