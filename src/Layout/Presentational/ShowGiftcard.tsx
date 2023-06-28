import React from "react";
import { Link } from 'react-router-dom';

import StartupHeader from "./StartupHeader";
import '../../css/Layout.css';

const ShowGiftcard = () => {
  return (
    <>
    <StartupHeader/>
      <div className="contents">    
        <h1 className="message">
          아래와 같은 엽서 이미지가가 생성됐어요, 
          <br/>
          마음에 드는 이미지를 골라주세요!
        </h1>
      </div>
      <div className="btns">
        <div>
          <Link to = '/'>
            <button className="huge ui left labeled icon button">
              <i className="left arrow icon"></i>
              새로 만들기
            </button>
          </Link>
        </div>
        <div>
          <Link to='/'> 
            <button className="huge ui right labeled icon button">
              <i className="right arrow icon"></i>
              출력하기
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default ShowGiftcard;
