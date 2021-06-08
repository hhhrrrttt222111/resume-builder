import { Grid, Card, CardContent } from '@material-ui/core'
import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import Fade from 'react-reveal/Fade';
import Helmet from 'react-helmet'


import './Contributors.css';
import one from '../../assets/images/svg/avatars/ten.svg'


const contributors = [
    {
        id: 1,
        name: 'Hemanth R',
        github: 'https://github.com/hhhrrrttt222111',
        image: one,
    },
    {
        id: 2,
        name: 'Shimil Shaji ',
        github: 'https://github.com/ShimilSAbraham',
        image: one,
    },
    {
        id: 3,
        name: 'Gayathry S',
        github: 'https://github.com/Gayathry17',
        image: one,
    },
    {
        id: 4,
        name: 'Anjali Rajendran',
        github: 'https://github.com/Anjali-28',
        image: one,
    },
]

function Contributors() {
    return (
        <div className="contributors">
            <Helmet>
                <title>Rzume - Contributors</title>
            </Helmet>

            <h1>Contributors</h1>

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
