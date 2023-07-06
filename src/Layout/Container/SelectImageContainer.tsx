import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SelectImage from "../Presentational/SelectImage";
import axios from 'axios';

const SelectImageContainer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const searchParams = new URLSearchParams(location.search);
        const description = searchParams.get('description');
        
        if (description) {
          alert(description);
         // const response = await axios.get(`http://127.0.0.1:5000/getImage?str=${description}`, { withCredentials: true });
          const response = await axios.get(`http://127.0.0.1:5000/getImageTest?str=${description}`, { withCredentials: true });
          const data = response.data;
          const urls = data.split("##*##*");
          setImageUrls(urls);
        } else {
          alert("No description provided");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, [location]);

  return <SelectImage imageUrls={imageUrls} />;
};

export default SelectImageContainer;
