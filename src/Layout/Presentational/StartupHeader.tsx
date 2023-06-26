import React from "react";
import { Link } from 'react-router-dom';
import { Segment } from 'semantic-ui-react';

import '../../css/Layout.css';

const StartupHeader = () => {
  return (
    <div className='header-bar'>
      <Segment 
        //className='header-bar' 
        //inverted 
        //vertical 
        style={{ padding: '2em' }}>
          <Link className="startup-link" to="/">
            <i className="gift icon"></i>
            <div>Hyundai GiftCard Service</div>
          </Link>
      </Segment>
    </div>
  )
}

export default StartupHeader;
