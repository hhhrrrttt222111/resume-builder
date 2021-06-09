import React from 'react'
import { Card, CardContent, Grid } from '@material-ui/core'
import Fade from 'react-reveal/Fade';


import './Demo.css';

// import card1Opened from '../../../assets/images/svg/card1_opened.svg';
// import card2Opened from '../../../assets/images/svg/card2_opened.svg';
// import card3Opened from '../../../assets/images/svg/card3_opened.svg';

// import card1Closed from '../../../assets/images/svg/card1_closed.svg';
// import card2Closed from '../../../assets/images/svg/card2_closed.svg';
// import card3Closed from '../../../assets/images/svg/card3_closed.svg';



function Demo() {
    return (
        <div className="demo">
            <Grid className="demo-grid" container direction="row" alignItems="center" justify="center">
                <Fade left>
                    <Card className="demo-card" elevation={10}>
                        <CardContent>
                            <div className="democard-content">
                                <div className="cardTop">
                                    <div className="demoCardImg1"></div>
                                    <h2 className="demoCardHead1">Choose your template. </h2>
                                </div>
                                <div className="cardBottom">
                                    <p>Take your pick from our beautiful templates that are designed to impress. You can personalize it and give it your own unique touch.</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </Fade>
                <Fade bottom>
                    <Card className="demo-card" elevation={10}>
                        <CardContent>
                        <div className="democard-content">
                                <div className="cardTop">
                                    <div className="demoCardImg2"></div>
                                    <h2 className="demoCardHead2">Fill in your details</h2>
                                </div>
                                <div className="cardBottom">
                                    <p>Fill in your skills, previous experiences and educational qualifications.</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </Fade>
                <Fade right>
                    <Card className="demo-card" elevation={10}>
                        <CardContent>
                        <div className="democard-content">
                                <div className="cardTop">
                                    <div className="demoCardImg3"></div>
                                    <h2  className="demoCardHead3">Download pdf</h2>
                                </div>
                                <div className="cardBottom">
                                    <p>Download the remarkable resume you have created and send it to your potential employers with confidence.</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </Fade>
                
            </Grid>
        </div>
    )
}

export default Demo
