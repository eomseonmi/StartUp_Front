/* eslint-disable no-restricted-globals */
import React from "react";
import { Link } from 'react-router-dom';

import StartupHeader from "./StartupHeader";
import '../../css/Layout.css';
import '../../css/SelectImage.css';

interface SelectImageProps {
  imageUrls: string[];
}

const SelectImage: React.FC<SelectImageProps> = ({ imageUrls }) => {
  const reloadImage = () => {location.reload();}
  return (
    <>
      <StartupHeader />
      <div className="contents">    
        <h1 className="message">
          아래와 같은 엽서 이미지가가 생성됐어요, 
           <br/>
           마음에 드는 이미지를 골라주세요!
        </h1>
        <div className="images">
          {imageUrls.map((imageUrl, index) => (
            <label>
              <input type="radio" name="choice" value={index} />
              <img key={index} src={imageUrl} alt={`img${index}`} />
            </label>
          ))}
        </div>
      </div>
      <div className="btns">
        <div>
          <Link to="/makeImage">
            <button className="huge ui left labeled icon button">
              <i className="left arrow icon"></i>
              설명 다시 작성하기
            </button>
          </Link>
        </div>
        <div>
            <button className="huge ui left labeled icon button" onClick={reloadImage}>
              <i className="left arrow icon"></i>
              그림 다시 생성하기
            </button>
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
