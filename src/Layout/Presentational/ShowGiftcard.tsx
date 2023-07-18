import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import StartupHeader from './StartupHeader';
import '../../css/Layout.css';
import '../../css/ShowGiftCard.css';

const ShowGiftcard = () => {
    const location = useLocation();
    const selectedValue = location?.state?.selectedValue;
    const selectedImg = location?.state?.selectedImg;
    
    return (
      <>
        <StartupHeader />
        <div className="giftcardcontents">
          <h1 className="message">아래 이미지를 선택하셨어요!</h1> 
          <div className="giftcard">
            <img className="finalImg" alt="Img" src={selectedImg}/>
          </div>
          <h1 className="message">최종 문구를 편집하실 수 있어요. 아래의 입력칸에서 수정해보세요!</h1> 
          <div className="finalTxt">
            <input
              type="text"
              className="input-box"
              defaultValue={selectedValue}
            />
          </div>
          <div className="btns">
            <div>
              <Link to="/">
                <button className="huge ui left labeled icon button">
                  <i className="left arrow icon"></i>
                  새로 만들기
                </button>
              </Link>
            </div>
            <div>
              <Link to="/">
                <button className="huge ui right labeled icon button">
                  <i className="right arrow icon"></i>
                  최종 시안보기
                </button>
              </Link>
            </div>
          </div>
        </div>
      </>
    );
};

export default ShowGiftcard;
