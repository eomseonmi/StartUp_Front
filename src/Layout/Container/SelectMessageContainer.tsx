import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SelectMessage from "../Presentational/SelectMessage";
import axios from 'axios';

const SelectMessageContainer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [data, setData] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const searchParams = new URLSearchParams(location.search);
        const description = searchParams.get('description');
        
        if (description) {
          const response = await axios.get(`http://127.0.0.1:5000/getText?str=${description}`, { withCredentials: true });
          const data = response.data;
          //const datas = data.split("$$");
          const datas = data.split("$$").filter((item: string) => item !== "");
          setData(datas);
        } else {
          alert("No description provided");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, [location]);

  return <SelectMessage data={data} />;
};

export default SelectMessageContainer;
