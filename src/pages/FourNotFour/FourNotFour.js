import React from 'react'
 
import './FourNotFour.css';
import fof from '../../assets/images/svg/f0f.svg'
import { Button } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import Helmet from 'react-helmet'
 
function FourNotFour() {
    let history = useHistory();
 
    function handleClick1() {
        history.push("/");
      }
    return (
        <div className="fnf">
            <Helmet>
                <title>Oops! Page Not Found</title>
            </Helmet>
            <div className="fnf-imgcontainer">
                <img src={fof} alt=""/>
            </div>
            <div className="fnf-description">
                <h1>404</h1>
                <h2>UH OH! You're lost.</h2>
                <Button onClick={handleClick1}>Home</Button>
            </div>
        </div>
    )
}
 
export default FourNotFour