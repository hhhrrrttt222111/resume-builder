import { Grid, Card, CardContent } from '@material-ui/core'
import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import Fade from 'react-reveal/Fade';
import Helmet from 'react-helmet'


import './Contributors.css';
import img1 from '../../assets/images/png/anjali.png'
import img2 from '../../assets/images/png/gayathry.png'
import img3 from '../../assets/images/png/hemanth.png'
import img4 from '../../assets/images/png/shimil.png'


const contribData = [
    {
        id: 1,
        name: 'Hemanth R',
        github: 'https://github.com/hhhrrrttt222111',
        image: img3,
    },
    {
        id: 2,
        name: 'Shimil Shaji Abraham',
        github: 'https://github.com/ShimilSAbraham',
        image: img4,
    },
    {
        id: 3,
        name: 'Gayathry S',
        github: 'https://github.com/Gayathry17',
        image: img2,
    },
    {
        id: 4,
        name: 'Anjali Rajendran',
        github: 'https://github.com/Anjali-28',
        image: img1,
    },
]

function Contributors() {

    var contributors = contribData
        .map((a) => ({sort: Math.random(), value: a}))
        .sort((a, b) => a.sort - b.sort)
        .map((a) => a.value)

    return (
        <div className="contributors">
            <Helmet>
                <title>Rzume - Contributors</title>
            </Helmet>

            <h1>CONTRIBUTORS</h1>

            <div className="contrib_container">
                <Grid className="contrib-grid" container direction="row" alignItems="center" justify="center">
                    {contributors.map((contrib) => (
                        <Fade bottom>
                            <Card className="contrib-card" elevation={10} >
                                <CardContent>
                                <div className="contrib-cardcontent">
                                    
                                    <h1>{contrib.name}</h1>
                                    <div className="contrib-description">
                                        <img src={contrib.image} alt="" />
                                        <a href={contrib.github} className="contrib-icon" target="_blank" rel="noreferrer">
                                            <GitHubIcon />
                                        </a>
                                    </div>
                                </div>
                                </CardContent>
                            </Card>
                        </Fade>
                    ))}
                </Grid>
            </div>
        </div>
    )
}

export default Contributors
