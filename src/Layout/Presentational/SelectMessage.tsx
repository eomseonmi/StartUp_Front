/* eslint-disable no-restricted-globals */
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import StartupHeader from './StartupHeader';
import '../../css/Layout.css';
import '../../css/SelectMessage.css';

type SelectMessageProps = {
  data: string[];
};

const SelectMessage: React.FC<SelectMessageProps> = ({ data }) => {
  const navigate = useNavigate();
  const [selectedValue,setSelectedValue] = useState<string>(""); // 선택된 값을 저장할 상태]
  
  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSelectedValue(value);
  }
  
  const handleCreateImage = () => {
    navigate("/makeImage", {state: {selectedValue} });
  }

  const reloadMessage = () => {
    location.reload();
  }

  return (
    <>
      <StartupHeader />
      <div className="contents">
        <h1 className="message">아래와 같은 문구가 나왔네요, 마음에 드는 문구를 골라주세요!<br></br>문구는 최종 단계에서 편집할 수 있어요.</h1>        
        <fieldset>
          {data.map((item, index) => (
            <label>
              <input 
                type="radio" 
                name="choice" 
                value={data[index]} 
                checked={selectedValue === data[index]} 
                onChange={handleRadioChange} // 라디오 버튼 선택 시 이벤트 핸들러 호출
              />
              <span>{item}</span>
            </label>
          ))}
        </fieldset>
      </div>
      <div className="btns">
      <div>
          <Link to="/">
            <button className="huge ui left labeled icon button">
              <i className="left arrow icon"></i>
              설명 다시 작성하기
            </button>
          </Link>
        </div>
        <div>
            <button className="huge ui left labeled icon button" onClick={reloadMessage}>
              <i className="redo icon"></i>
              문구 다시 생성하기
            </button>
        </div>
        <div>
            <button className="huge ui right labeled icon button" onClick={handleCreateImage}>
              <i className="right arrow icon"></i>
              그림 만들러 가기
            </button>
        </div>
      </div>
    </>
  );
};

export default SelectMessage;
