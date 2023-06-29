import React, { useState } from 'react';
import SelectMessage from '../Presentational/SelectMessage';

const SelectMessageContainer = () => {
    //const [data, setData] = useState<>([]);
    const loadData = async () => {
        //const response = await homeAPI.get();
        console.log('*** selectMessageContainer Load Data Res ***');
    };

    return <SelectMessage />;
};

export default SelectMessageContainer;
