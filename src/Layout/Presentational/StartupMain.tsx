import React from "react";
import { Link } from 'react-router-dom';
import { Segment } from 'semantic-ui-react';

import '../../css/Layout.css';

const StartupMain = () => {
  return (
    <div>
      <Segment 
        className='header-bar' 
        inverted 
        vertical 
        style={{ padding: '2em' }}>
          <Link className="startup-link" to="/">
            <div className="startup-logo">Hyundai GiftCard Service</div>
          </Link>
      </Segment>
      <div>AAA</div>
    </div>
  )
}

export default StartupMain;
