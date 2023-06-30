import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

import SelectImage from "../Presentational/SelectImage";

const SelectImageContainer = () => {
  const navigate = useNavigate();
  const [imageUrls, setImageUrls] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:5000/getImage?str=후배에게 주는 선물", { withCredentials: true });
        const data = response.data;
   
        const urls = data.split("##*##*");
        setImageUrls(urls);

        // 이미지 URL을 가져왔을 때 페이지 이동
        navigate("/selectImage");
        
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, [navigate]);
  
  return <SelectImage imageUrls={imageUrls} />;
}

export default SelectImageContainer;
