import React, { useEffect, useState } from "react";

import SelectImage from "../Presentational/SelectImage";
import axios from 'axios';

// const SelectImageContainer = () => {
//   const loadData = async () => {
//     // const response = await homeAPI.get();
//     console.log('Startup main container load data rse');
//   }

//   return <SelectImage />
// }

const SelectImageContainer = () => {
 alert('Startup SelectImageContainer');
  const [imageUrl, setImageUrl] = useState('');
  alert('Startup main container load data rse');
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:5000/getText?str=후배에게 주는 선물", { withCredentials: true });
        const data = response.data;
        
        console.log(data);
        // 이미지 URL을 받아와서 상태 업데이트
        setImageUrl(data);
        
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);
  
  return <SelectImage imageUrl={imageUrl} />;
}



export default SelectImageContainer;
