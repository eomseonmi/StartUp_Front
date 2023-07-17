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
            <div className="giftcard">
                <img
                    className="finalImg"
                    alt="Img"
                    src={selectedImg}
                />
                <h1>{selectedValue}</h1>
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
                            출력하기
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default ShowGiftcard;
