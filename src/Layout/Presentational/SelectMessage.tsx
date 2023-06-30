import React from 'react';
import { Link } from 'react-router-dom';

import StartupHeader from './StartupHeader';
import '../../css/Layout.css';

interface SelectMessageProps {
    messages: string[];
}

const SelectMessage: React.FC<SelectMessageProps> = ({ messages }) => {
    return (
        <>
            <StartupHeader />
            <div className="contents">
                <h1 className="message">아래와 같은 문구가 나왔네요, 마음에 드는 문구를 골라주세요!</h1>
                <div className="choices">
                    {messages.map((message, index) => (
                        <div className="ui radio checkbox choice">
                        <input type="radio" name={`choice ${index}`} />
                        <label>{message}</label>
                    </div>
                    ))}
                </div>
            </div>
            <div className="btns">
                <div>
                    <Link to="/">
                        <button className="huge ui left labeled icon button">
                            <i className="left arrow icon"></i>
                            다시 만들기
                        </button>
                    </Link>
                </div>
                <div>
                    <Link to="/makeImage">
                        <button className="huge ui right labeled icon button">
                            <i className="right arrow icon"></i>
                            그림 만들러 가기
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default SelectMessage;
