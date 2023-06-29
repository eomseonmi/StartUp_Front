import React from 'react';
import { Link } from 'react-router-dom';

import StartupHeader from './StartupHeader';
import '../../css/Layout.css';

const MakeImage = () => {
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
                <div className="ui massive input">
                    <input type="text" placeholder="엽서에 넣고 싶은 그림에 대한 설명을 입력하는 곳" />
                </div>
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
                    <Link to="/selectImage">
                        <button className="huge ui right labeled icon button">
                            <i className="right arrow icon"></i>
                            그림 만들기
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default MakeImage;
