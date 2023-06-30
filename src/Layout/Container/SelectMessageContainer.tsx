import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import SelectMessage from '../Presentational/SelectMessage';

const SelectMessageContainer = () => {
    const navigate = useNavigate();
    const [messages, setMessages] = useState<string[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const respone = await axios.get("http://127.0.0.1:5000/getText?str=후배에게 주는 선물", {withCredentials: true});
                const data = respone.data;

                const str =  data.split("##*##*");
                setMessages(str);
                
                console.log('Startup main container load data rse');

                navigate("/selectMessage");
            } catch (error) {
                console.error("Error", error);
            }
        };

    fetchData();
    }, [navigate]);

    return <SelectMessage messages={messages}/>;
};

export default SelectMessageContainer;
