import React from 'react';
import { Link } from 'react-router-dom';

import '../../css/Layout.css';

const StartupHeader = () => {
    return (
        <div className="header-bar">
            <Link className="startup-link" to="/">
                <i className="gift icon"></i>
                <div>Hyundai GiftCard Service</div>
            </Link>
        </div>
    );
};

export default StartupHeader;
