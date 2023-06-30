import React from "react";
import { Link } from 'react-router-dom';

import StartupHeader from "./StartupHeader";
import '../../css/Layout.css';

interface SelectImageProps {
  imageUrls: string[];
}

const SelectImage: React.FC<SelectImageProps> = ({ imageUrls }) => {
  return (
    <>
      <StartupHeader />
      <div className="contents">    
        <h1 className="message">
          아래와 같은 엽서 이미지가가 생성됐어요, 
           <br/>
           마음에 드는 이미지를 골라주세요!
        </h1>
        <div className="choices">
          <label className="choice">
            <div className="image-container">
              {imageUrls.map((imageUrl, index) => (              
                <div className="choice">
                <input type="radio" name={`choice ${index}`}  />
                <label>{`choice ${index}`}</label>
                <img key={index} src={imageUrl} alt={`Image ${index}`} />
                </div>
              ))}
            </div>
          </label>
        </div>
      </div>
      <div className="btns">
        <div>
          <Link to="/makeImage">
            <button className="huge ui left labeled icon button">
              <i className="left arrow icon"></i>
              다시 만들기
            </button>
          </Link>
        </div>
        <div>
          <Link to="/showGiftcard"> 
            <button className="huge ui right labeled icon button">
              <i className="right arrow icon"></i>
              엽서 최종본 보러가기
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default SelectImage;
