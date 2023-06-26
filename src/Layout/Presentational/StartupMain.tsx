import React from "react";
import { Link } from 'react-router-dom';

import '../../css/Layout.css';

const StartupMain = () => {
  return (
    <>
      <div className="contents">    
        <h1 className="message">
          현대백화점의 선물카드 제작 서비스를 이용해주셔서 감사합니다.
          <br/>
          선물할 상대와의 관계, 상대의 특징, 혹은 선물하는 상황을 간단하게 설명해주세요!
          <br/>
          <br/>
          (ex) 스승의날의 기념으로 고등학생 시절 담임선생님께 드릴 선물
        </h1>
        <div className="ui massive input">
          <input type="text" placeholder="받는 이에 대한 설명 및 보내는 이의 마음을 입력하는 곳" />
        </div>
      </div>
      <div className="buttons">
        {/* <div>
          <button className="massive ui left labeled icon button">
            <i className="left arrow icon"></i>
            이전으로
          </button>
        </div> */}
        <div>
          <button className="massive ui right labeled icon button">
            <i className="right arrow icon"></i>
            다음으로
          </button>
        </div>
      </div>
    </>
  )
}

export default StartupMain;
