import React, { useRef, useState } from 'react';
import { Link, useLocation ,useNavigate} from 'react-router-dom';


import StartupHeader from './StartupHeader';
import '../../css/Layout.css';
import '../../css/ShowGiftCard.css';

const ShowGiftcard = () => {
    const location = useLocation();
    const navigate = useNavigate();
    var inputValue = "" ;
    const selectedValue = location?.state?.selectedValue;
    const selectedImg = location?.state?.selectedImg;
    const inputRef = useRef<HTMLInputElement>(null);
    
    const handleCreateImage = () => {
      if (inputRef.current) {
        inputValue = inputRef.current.value;
        // 변수에 값이 담겼습니다.
        console.log('입력 값:', inputValue);
      }
        navigate("/print", {state: {inputValue,selectedImg} });
      }

    return (
      <>
        <StartupHeader />
        <div className="giftcardcontents">
        <div className="message">
            아래 이미지를 선택하셨네요!
          </div>
          <div className="giftcard">
            <img className="finalImg" alt="Img" src={selectedImg}/>
          </div>
          <div className="message">
            최종 문구를 편집하실 수 있습니다. 아래의 입력칸에서 수정해보세요.
          </div>
          <div className="finalTxt">
            <input
              ref={inputRef}
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
                <button className="huge ui right labeled icon button"  onClick={handleCreateImage}>

                  <i className="right arrow icon"></i>
                  최종 시안 보기
                </button>
            </div>
          </div>
        </div>
      </>
    );
};

export default ShowGiftcard;

