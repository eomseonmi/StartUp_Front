import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import StartupMain from '../Presentational/StartupMain';

const StartupMainContainer = () => {
  const loadData = async () => {
    //const response = await homeAPI.get();
    console.log('Startup main container load data rse');
  }
  
  return <StartupMain />
}

export default StartupMainContainer;
