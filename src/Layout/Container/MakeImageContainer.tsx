import React, { useEffect, useState } from "react";
import MakeImage from '../Presentational/MakeImage';
import axios from 'axios';

const MakeImageContainer = () => {

    alert("MakeImageContainer");
  const loadData = async () => {
  //const response = await homeAPI.get();
  console.log('Startup main container load data rse');
}

  return <MakeImage />;
}




export default MakeImageContainer;

