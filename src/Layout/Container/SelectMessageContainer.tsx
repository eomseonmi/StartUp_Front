import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SelectMessage from "../Presentational/SelectMessage";
import axios from 'axios';
import LoadingModalContainer from './LoadingModalContainer';

const SelectMessageContainer: React.FC = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const searchParams = new URLSearchParams(location.search);
        const description = searchParams.get('description');
        
        if (description) {
          const response = await axios.get(`http://127.0.0.1:5000/getText?str=${description}`, { withCredentials: true });
          const data = response.data;
          const datas = data.split("$$").filter((item: string) => item !== "");
          setData(datas);
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

  // if (loading) return  <LoadingBarContainer />;
  // return <SelectMessage data={data} />;

  return (
    loading ? <LoadingModalContainer /> : <SelectMessage data={data} />
  );
};

export default SelectMessageContainer;
