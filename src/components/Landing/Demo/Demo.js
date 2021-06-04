import React from 'react'
import { Card, CardContent, Grid } from '@material-ui/core'
import Fade from 'react-reveal/Fade';


import './Demo.css';

import demo1 from '../../../assets/images/png/demo1.png';
import demo2 from '../../../assets/images/png/demo2.png';
import demo3 from '../../../assets/images/png/demo3.png';

function Demo() {
    return (
        <div className="demo">
            <Grid className="demo-grid" container direction="row" alignItems="center" justify="center">
                <Fade left>
                    <Card className="demo-card" elevation={10}>
                        <CardContent>
                            <div className="democard-content">
                                <img src={demo1} alt=""/>
                                <h2>Pick a CV template.</h2>
                                <p>Choose a sleek design and layout to get started.</p>
                            </div>
                        </CardContent>
                    </Card>
                </Fade>
                <Fade bottom>
                    <Card className="demo-card" elevation={10}>
                        <CardContent>
                            <div className="democard-content">
                            <img src={demo2} alt=""/>
                                <h2>Pick a CV template.</h2>
                                <p>Choose a sleek design and layout to get started.</p>
                            </div>
                        </CardContent>
                    </Card>
                </Fade>
                <Fade right>
                    <Card className="demo-card" elevation={10}>
                        <CardContent>
                            <div className="democard-content">
                                <img src=
                                {demo3} alt=""/>
                                <h2>Pick a CV template.</h2>
                                <p>Choose a sleek design and layout to get started.</p>
                            </div>
                        </CardContent>
                    </Card>
                </Fade>
                
            </Grid>
        </div>
    )
}

export default Demo
