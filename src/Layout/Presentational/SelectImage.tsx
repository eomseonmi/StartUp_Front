import React from "react";
import { Link } from 'react-router-dom';

import StartupHeader from "./StartupHeader";
import '../../css/Layout.css';

interface SelectImageProps {
  imageUrl: string;
}

const SelectImage: React.FC<SelectImageProps> = ({ imageUrl }) => {
  return (
    <>
      <StartupHeader />
      <div className="contents">    
        <h1 className="message">
          The following postcard images have been generated,
          <br />
          Please choose the image you like!
        </h1>
        <div className="choices">
          <label className="choice">
            <input type="radio" />
            <div><img src={imageUrl} alt="Selected Image" /></div>
          </label>
          <div className="choice">
            <input type="radio" name="choice1" />
            <label>choice1</label>
          </div>
          <div className="ui radio checkbox choice">
            <input type="radio" name="choice1" />
            <label>choice2</label>
          </div>
          <div className="ui radio checkbox choice">
            <input type="radio" name="choice1" />
            <label>choice3</label>
          </div>
          <div className="ui radio checkbox choice">
            <input type="radio" name="choice1" />
            <label>choice4</label>
          </div>
        </div>
      </div>
      <div className="btns">
        <div>
          <Link to="/makeImage">
            <button className="huge ui left labeled icon button">
              <i className="left arrow icon"></i>
              Create Again
            </button>
          </Link>
        </div>
        <div>
          <Link to="/showGiftcard"> 
            <button className="huge ui right labeled icon button">
              <i className="right arrow icon"></i>
              View Final Postcard
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default SelectImage;
