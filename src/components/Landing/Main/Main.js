import { Button } from '@material-ui/core'
import React from 'react';
import { useHistory } from "react-router-dom";

import './Main.css';


function Main() {
  let history = useHistory();

  function handleClick() {
    history.push("/create");
  }
    return (
        <div className="main">
            <h1>LOGO</h1>
            <div className="main-container">
                <div className="main-description">
                    <h1>Digital flipbook maker for stunning magazines</h1>
                    <p>Create, share and embed online magazines, transforming your PDFs into online flipping books.</p>
                    <Button onClick={handleClick}>Get Started</Button>
                </div>
                <div className="img-container">
                    <img src="https://images.unsplash.com/photo-1622557875141-e431587c0d28?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3MXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
                </div>
            </div>  
                       
        </div>
    )
}

export default Main
