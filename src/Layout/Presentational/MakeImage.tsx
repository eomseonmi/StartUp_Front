import React, { useState, ChangeEvent } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { Link } from 'react-router-dom';

import StartupHeader from './StartupHeader';
import '../../css/Layout.css';

const MakeImage = () => {  
  const navigate = useNavigate();
  const location = useLocation();
  const selectedValue = location?.state?.selectedValue; // 선택한 메시지가 담긴 변수

  const [inputValue, setInputValue] = useState(""); // 입력된 값 상태 관리

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value); // 입력된 값 업데이트
  };

  const handleCreateImage = () => {
    if(!inputValue || inputValue === ""){
      alert("설명을 작성해주세요!");
      return;
    }
    const linkToSelectImage = `/selectImage?description=${encodeURIComponent(inputValue)}`;
    navigate(linkToSelectImage, {state: {selectedValue} });
  };

  return (
    <>
      <StartupHeader />
      <div className="contents">
        <h1 className="message">
          문구를 골랐으니 이제 엽서에 들어갈 그림을 만들어볼까요?
          <br />
          만들고 싶은 그림에 대한 설명을 적어주세요!
          <br />
          <br />
          (ex) 꽃을 들고 있는 부부를 그려줘
        </h1>
        <input 
          type="text" 
          className="input-box"
          placeholder="엽서에 넣고 싶은 그림에 대한 설명을 입력하는 곳" 
          value={inputValue}
          onChange={handleInputChange}
        />
      </div>
      <div className="btns">
        <div>
          <Link to="/">
            <button className="huge ui left labeled icon button">
              <i className="left arrow icon"></i>
              이전으로
            </button>
          </Link>
        </div>
        <div>
          <button className="huge ui right labeled icon button" onClick={handleCreateImage}>
            <i className="right arrow icon"></i>
            그림 만들기
          </button>
        </div>
      </div>
    </>
  );
};

export default MakeImage;
