import { Button } from '@material-ui/core'
import React from 'react';
import { useHistory } from "react-router-dom";

import './Main.css';

import mainImg from '../../../assets/images/svg/landingImg.svg'
import logo from '../../../assets/images/svg/logo_with_text.svg'


function Main() {
  let history = useHistory();

  function handleClick() {
    history.push("/create");
  }
  
    return (
        <div className="main">
            <img src={logo} alt="Rzume"/>
            <div className="main-container">
                <div className="main-description">
                    <h1>The ultimate tool for an exceptional resume.</h1>
                    <p>Create nothing but the best with us.</p>
                    <Button onClick={handleClick}>Create Resume</Button>
                </div>
                <div className="img-container">
                    <img src={mainImg} alt="Rzume"/>
                </div>
            </div>  
                       
        </div>
    )
}

export default Main
