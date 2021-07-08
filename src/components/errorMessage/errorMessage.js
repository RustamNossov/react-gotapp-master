import React from 'react';
import './errorMessage.css';

const ErrorMessage = ({message='Something went wrong!'}) => {

    return (

        <div > 
            {/* className="random-block rounded" */}
            <img className='errorMessage-img' src={process.env.PUBLIC_URL+'img/error.jpeg'} alt='error'></img>
            <span>{message}</span>
        </div>
    )

}

export default ErrorMessage;