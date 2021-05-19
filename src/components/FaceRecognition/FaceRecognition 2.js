import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageURL, box }) => {
    return (
        <div className="absolute justify-center items-center flex z10 ma w-100">
            <div className="relative mt2">
                <img className="relative" id="inputimage" src={ imageURL } alt="" width= '500px' height='auto' />
                <div className="bounding-box z12" style={{top: box.topRow, right:box.rightCol, left:box.leftCol, bottom:box.bottomRow }}></div>
            </div>
        </div>
    );
};

export default FaceRecognition;