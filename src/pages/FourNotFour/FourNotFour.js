import React from 'react'

import './FourNotFour.css';
import fof from '../../assets/images/svg/f0f.svg'
import { Button } from '@material-ui/core';
import { useHistory } from "react-router-dom";

function FourNotFour() {
    let history = useHistory();

    function handleClick1() {
        history.push("/");
      }
    return (
        <div className="fnf">
            <div className="fnf-imgcontainer">
                <img src={fof} alt=""/>
            </div>
            <div className="fnf-description">
                <h1>404</h1>
                <h2>UH OH! You're lost.</h2>
                <p>The page you are looking for does not exist. How you got here is a mystery.<br/>But you can click the button below to go back to homepage</p>
                <Button onClick={handleClick1}>Home</Button>
            </div>
        </div>
    )
}

export default FourNotFour
