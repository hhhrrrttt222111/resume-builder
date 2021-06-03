import { Card, CardContent, Grid } from '@material-ui/core'
import React from 'react'

import './Demo.css'

function Demo() {
    return (
        <div className="demo">
            <Grid className="demo-grid">
                <Card className="demo-card">
                    <CardContent>
                        <div className="democard-content">
                            <img src="https://images.unsplash.com/photo-1622557875141-e431587c0d28?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3MXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt=""/>
                            <h2>Pick a CV template.</h2>
                            <p>Choose a sleek design and layout to get started.</p>
                        </div>
                    </CardContent>
                </Card>
                <Card className="demo-card">
                    <CardContent>
                        <div className="democard-content">
                         <img src="https://images.unsplash.com/photo-1622557875141-e431587c0d28?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3MXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt=""/>
                            <h2>Pick a CV template.</h2>
                            <p>Choose a sleek design and layout to get started.</p>
                        </div>
                    </CardContent>
                </Card>
                <Card className="demo-card">
                    <CardContent>
                        <div className="democard-content">
                            <img src="https://images.unsplash.com/photo-1622557875141-e431587c0d28?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3MXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt=""/>
                            <h2>Pick a CV template.</h2>
                            <p>Choose a sleek design and layout to get started.</p>
                        </div>
                    </CardContent>
                </Card>
            </Grid>
        </div>
    )
}

export default Demo
