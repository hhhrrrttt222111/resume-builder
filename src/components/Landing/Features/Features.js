import React from 'react';
import Fade from 'react-reveal/Fade';

import './Features.css';

import featuresImg from '../../../assets/images/svg/featuresImg.svg'

function Features() {
    return (
        <div className="features">
            <div className="features-body">
                <div className="features-description">
                    <Fade left>
                        <div className="features-text">
                            <h2>Beautiful Designs</h2>
                            <p>Customize your design to suit your own preferences to create an online portfolio which is truly unique. Preview changes instantly without affecting your live site and without writing any code.</p>
                        </div>
                    </Fade>

                    <Fade left>
                        <div className="features-text">
                            <h2>Beautiful Designs</h2>
                            <p>Customize your design to suit your own preferences to create an online portfolio which is truly unique. Preview changes instantly without affecting your live site and without writing any code.</p>
                        </div>
                    </Fade>                     

                </div>
                <Fade right>
                    <div className="features-img">
                        <img src = {featuresImg} alt=""/>
                    </div>
                </Fade>
            </div>
        </div>
    )
}

export default Features
