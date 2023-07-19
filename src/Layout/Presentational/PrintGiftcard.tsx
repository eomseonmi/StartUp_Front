import React from 'react';
import {useLocation} from 'react-router-dom';


import StartupHeader from './StartupHeader';
import '../../css/Layout.css';
import '../../css/PrintGiftcard.css';


const PrintGiftcard = () => {
    const location = useLocation();

    const selectedValue = location?.state?.selectedValue;
    const selectedImg = location?.state?.selectedImg;

    return (
      <>
        <StartupHeader />

        <div className="ui people shape" style={{ display: 'flex',marginTop : '50px', justifyContent: 'center', alignItems: 'center'}}>
        <div className="sides">
         <div className="active side">
            <div className="ui card" style={{width:'600px', height:'700px'}}>
            <div className="image" style={{height:'60%'}}>
                <img src={selectedImg} style={{width:'100%', height : '100%', marginLeft : '-0.25px'}}/> 
            </div> 
            <div className="content" style={{height:'30%'}}>
                 <div className="description" style={{fontSize:'22px' , display: 'flex',alignItems: 'center', height: '100%'}}><p>{selectedValue}</p></div>
            </div>
            <div className="extra content" style={{height:'10%',fontSize:'20px', fontStyle : 'oblique' ,color:'darkgreen'}}>
                <span className="right floated"></span> <span> 
                <i className="gift icon"/>The Hyundai GiftCard</span> 

            </div> 
            </div>
        </div> 
        <div className="side"> 
            <div className="ui card"> 
                <div className="image"> 
                     <img src={selectedImg}/>
                </div>
                <div className="content"> 
                    <a className="header">Stevie Feliciano</a> 
                    <div className="meta">
                         <span className="date">Joined in 2014</span>
                    </div> 
                    <div className="description">{selectedValue}</div>
                </div>
                <div className="extra content">
                    <a><i className="gift icon" />The Hyundai GiftCard</a>
                </div> 
            </div> 
        </div>
        </div>
        </div>

        <div className="printbtn">

                <div>

                    <button className="huge ui right labeled icon button" >

                        <i className="right arrow icon"></i>

                        출력하기

                    </button>

                </div>

        </div>



      </>
    );
  
    };

export default PrintGiftcard;
