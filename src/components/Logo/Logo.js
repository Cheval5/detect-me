import React from 'react';
import Tilt from 'react-tilt';
import DetectLogo from '../../assets/logo/detective.svg'
import './Logo.css';

const Logo = () => {
    return (
        <div className="ma4 mt0">
            <Tilt className="Tilt br2 shadow-2 relative z10" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner pa3">
                    <img className="w5" src={DetectLogo} alt="logo" />
                </div>
            </Tilt>
        </div>
    );
};

export default Logo;