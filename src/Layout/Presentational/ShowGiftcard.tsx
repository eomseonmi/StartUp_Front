import React from 'react';
import { Link, useLocation ,useNavigate} from 'react-router-dom';


import StartupHeader from './StartupHeader';
import '../../css/Layout.css';
import '../../css/ShowGiftCard.css';

const ShowGiftcard = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const selectedValue = location?.state?.selectedValue;
    const selectedImg = location?.state?.selectedImg;
    
    const handleCreateImage = () => {
        navigate("/print", {state: {selectedValue,selectedImg} });
      }

    return (
      <>
        <StartupHeader />
        <div className="giftcard">
          <img className="finalImg" alt="Img" src={selectedImg}/>
        </div>
        <div className="label">
          최종 문구를 편집하실 수 있습니다. 아래의 입력칸에서 수정해보세요.
        </div>
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
              <button className="huge ui right labeled icon button"  onClick={handleCreateImage}>

                <i className="right arrow icon"></i>
                출력하기
              </button>
          </div>
        </div>
      </>
    );
};

export default ShowGiftcard;

