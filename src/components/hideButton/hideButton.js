import React from 'react';
import './hideButton.css';

const HideButton = ({part, hideBtn}) => {
    return (
        <button 
            onClick={hideBtn}
            className='hideButton'
            >{`Hide Random ${part}`}
        </button>
    )
}

export default HideButton;