import React from 'react';

const  Navigation = ({ onRouteChange, isSignedIn }) => {
    if(isSignedIn){
        return(
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
            <p onClick={() => onRouteChange('signout')} 
            className="f3 link dim underline pa3 pointer black-60 relative z10">Sign Out</p>
        </nav>
        )
    }
    else{
        return(
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
            <p onClick={() => onRouteChange('register')} 
            className="f3 link dim underline pa3 pointer black-60 relative z10">Register</p>
            <p onClick={() => onRouteChange('signin')} 
            className="f3 link dim underline pa3 pointer black-60 relative z10">SignIn</p>
        </nav>
        )
    }
};

export default Navigation;