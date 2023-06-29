import React from 'react';
import { Link } from 'react-router-dom';

import StartupHeader from './StartupHeader';
import '../../css/Layout.css';

const ShowGiftcard = () => {
    return (
        <>
            <StartupHeader />
            <div className="contents">
                <img
                    alt="Img"
                    src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-bbagKC4X3yawNt0tPYEb8DMD/user-D4ziDLI0eR4ZQQNdJFFqiWsj/img-HB3sRBXx3falVPnF1VwuBYkS.png?st=2023-06-29T00%3A36%3A46Z&se=2023-06-29T02%3A36%3A46Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-06-28T20%3A54%3A30Z&ske=2023-06-29T20%3A54%3A30Z&sks=b&skv=2021-08-06&sig=rnth%2BMMpbttWwl7ugxqk8t0uHjyZwcg5QSsu3qZooOI%3D"
                />
                <h1>예시문구</h1>
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
