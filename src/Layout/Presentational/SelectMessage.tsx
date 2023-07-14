/* eslint-disable no-restricted-globals */
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import StartupHeader from './StartupHeader';
import '../../css/Layout.css';
import '../../css/SelectMessage.css';

type SelectMessageProps = {
  data: string[];
};

const SelectMessage: React.FC<SelectMessageProps> = ({ data }) => {
  const navigate = useNavigate();
  const handleCreateImage = () => {navigate("/makeImage");};
  const reloadMessage = () => {location.reload();}
  return (
    <>
      <StartupHeader />
      <div className="contents">
        <h1 className="message">아래와 같은 문구가 나왔네요, 마음에 드는 문구를 골라주세요!</h1>
        <fieldset>
          {data.map((item, index) => (
            <label>
              <input type="radio" name="choice" value={index} />
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
