import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import PrintGiftcard from '../Presentational/PrintGiftcard';

const PrintGiftcardContainer = () => {
  const loadData = async () => {
    //const response = await homeAPI.get();
    console.log('Startup main container load data rse');
  }
  
  return <PrintGiftcard />
}

export default PrintGiftcardContainer;
