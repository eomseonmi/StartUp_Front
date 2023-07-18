/* eslint-disable no-restricted-globals */
import React, {useState} from "react";
import { Link, useLocation, useNavigate } from 'react-router-dom';

import StartupHeader from "./StartupHeader";
import '../../css/Layout.css';
import '../../css/SelectImage.css';

interface SelectImageProps {
  imageUrls: string[];
}

const SelectImage: React.FC<SelectImageProps> = ({ imageUrls }) => {
  const navigate = useNavigate();
  const location2 = useLocation();
  const [selectedImg, setSelectedImg] = useState<string>(""); // 선택된 이미지 url 저장할 변수
  const selectedValue = location2?.state?.selectedValue;
  
  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSelectedImg(value);
  }

  const handleShowGiftcard = () => {
    navigate("/showGiftcard", {state: {selectedValue, selectedImg}});
  }

  const reloadImage = () => {location.reload();}
  return (
    <>
      <StartupHeader />
      <div className="imagecontents">    
        <h1 className="message">
          아래와 같은 엽서 이미지가가 생성됐어요, 
           <br/>
           마음에 드는 이미지를 골라주세요!
        </h1>
        <div className="images">
          {imageUrls.map((imageUrl, index) => (
            <label>
              <input 
                type="radio" 
                name="choice" 
                value={imageUrls[index]} 
                checked={selectedImg === imageUrls[index]}
                onChange={handleRadioChange}
              />
              <img key={index} src={imageUrl} alt={`img${index}`} />
            </label>
          ))}
        </div>
      </div>
      <div className="imagebtns">
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
              <i className="redo icon"></i>
              그림 다시 생성하기
            </button>
        </div>
        <div>
          <button className="huge ui right labeled icon button" onClick={handleShowGiftcard}>
            <i className="right arrow icon"></i>
            엽서 최종본 보러가기
          </button>
        </div>
      </div>
    </>
  );
}

export default SelectImage;
