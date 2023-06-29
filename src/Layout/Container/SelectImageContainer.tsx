import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const [imageUrl, setImageUrl] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:5000/getImage?str=후배에게 주는 선물", { withCredentials: true });
        const data = response.data;
        
        console.log(data);
        // 이미지 URL을 받아와서 상태 업데이트
        setImageUrl(data);

        // 이미지 URL을 가져왔을 때 페이지 이동
        navigate("/selectImage");
        
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, [navigate]);
  
  return <SelectImage imageUrl={imageUrl} />;
}



export default SelectImageContainer;
