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
            <img src={logo} alt=""/>
            <div className="main-container">
                <div className="main-description">
                    <h1>Digital flipbook maker for stunning magazines</h1>
                    <p>Create, share and embed online magazines, transforming your PDFs into online flipping books.</p>
                    <Button onClick={handleClick}>Create Resume</Button>
                </div>
                <div className="img-container">
                    <img src={mainImg} alt=""/>
                </div>
            </div>  
                       
        </div>
    )
}

export default Main
