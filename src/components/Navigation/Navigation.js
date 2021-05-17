import React from 'react';

const  Navigation = ({ onRouteChange }) => {
    return (
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
            <p onClick={() => onRouteChange('signin')} 
            className="f3 link dim underline pa3 pointer black-60 relative z10">Sign Out</p>
        </nav>
    );
};

export default Navigation;