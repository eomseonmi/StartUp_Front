import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from 'axios';
import LoadingModalContainer from './LoadingModalContainer';

import SelectImage from "../Presentational/SelectImage";

const SelectImageContainer = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const searchParams = new URLSearchParams(location.search);
        const description = searchParams.get('description');
        
        if (description) {
           const response = await axios.get(`http://127.0.0.1:5000/getImage?str=${description}`, { withCredentials: true });
          // const response = await axios.get(`http://127.0.0.1:5000/getImageTest?str=${description}`, { withCredentials: true });
          const data = response.data;
          const urls = data.split("##*##*");
          setImageUrls(urls);
        } else {
          alert("No description provided");
        }
        setLoading(false);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, [location]);

  return (
    loading ? <LoadingModalContainer /> : <SelectImage imageUrls={imageUrls} />
  );
};

export default SelectImageContainer;
