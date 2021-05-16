import React from 'react';
import './ImageFormLink.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
        <div className=" flex flex-column">
            <p className="f3 black-60 center">
                {'Detect the face from the picture. Give it a try'}
            </p>
            <div className="flex">
                <div className="form relative z10 center pa4 br3 shadow-5">
                    <input className="f4 pa2 w-70 center" type="text" onChange={onInputChange}/>
                    <button onClick={onButtonSubmit} className="w-30 grow f4 link ba ph3 pv2 dib black-60 bg-washed-red center"> Detect</button>
                </div>
            </div>
        </div>
    );
};

export default ImageLinkForm;