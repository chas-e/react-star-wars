import React from 'react';

const LoadingMessage = (props) => {
    return (
        <div classname="LoadingMessage">
            <h1>Loading...</h1>
            <span role="img" aria-label="hourglass">⏳</span>
        </div>
    );
}

export default LoadingMessage;