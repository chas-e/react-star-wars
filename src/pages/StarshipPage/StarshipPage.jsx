import React from 'react';
import { Link } from 'react-router-dom';


const StarshipPage = (props) => {
    return (
        props.location.state.name ?
            <div className="StarShips">
                <h3>NAME: {props.location.state.name}</h3>
                <h3> MODEL: {props.location.state.model}</h3>
                <h3><Link to="/">HOME</Link></h3>
            </div>
            :
            <div>{props.LoadingMessage}</div>
    );
}

export default StarshipPage;
