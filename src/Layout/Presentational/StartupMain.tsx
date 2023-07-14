import React, { useState, ChangeEvent } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import '../../css/Layout.css';
import StartupHeader from './StartupHeader';

const StartupMain = () => {
    const [inputValue, setInputValue] = useState(""); // 입력된 값 상태 관리
    const location = useLocation();
    // location.state에서 description 값을 가져옴
    const { description } = location.state || {};
  
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value); // 입력된 값 업데이트
    };
  
    const navigate = useNavigate();
  
    const handleCreateText = () => {
        if(!inputValue || inputValue === ""){
            alert("설명을 작성해주세요!");
            return;
        }

      const linkToSelectText = `/selectMessage?description=${encodeURIComponent(inputValue)}`;
      navigate(linkToSelectText);
    };


    return (
        <>
            <StartupHeader />
            <div className="contents">
                <h1 className="message">
                    현대백화점의 선물카드 제작 서비스를 이용해주셔서 감사합니다.
                    <br />
                    선물할 상대와의 관계, 상대의 특징, 혹은 선물하는 상황을 간단하게 설명해주세요!
                    <br />
                    <br />
                    (ex) 스승의날의 기념으로 고등학생 시절 담임선생님께 드릴 선물
                </h1>
                <input 
                    type="text" 
                    className="input-box"
                    placeholder="받는 이에 대한 설명 및 보내는 이의 마음을 입력하는 곳" 
                    value={inputValue}
                    onChange={handleInputChange}
                />
            </div>
            <div className="btn">
                <div>
                    <button className="huge ui right labeled icon button" onClick={handleCreateText}>
                        <i className="right arrow icon"></i>
                        다음으로
                    </button>
                </div>
            </div>
        </>
    );
};

export default StartupMain;
