import React from 'react';

import {Typography, Grid} from '@material-ui/core';

export default class Welcome extends React.Component {
    render() {
        return(
            <Grid container>
                <Grid item xs={2}></Grid>
                <Grid item xs={8}>
                    <Typography variant="h1" style={{textAlign: 'center', padding: "40px"}}>Microservices Architecture</Typography>
                </Grid>
                <Grid item xs={2}></Grid>
                <Grid item xs={2}></Grid>
                <Grid item xs={2}>
                    <img src="/images/docker.png" width="100%"/>
                </Grid>
                
                <Grid item xs={2}>
                    <img src="/images/node.png" width="100%"/>
                </Grid>
                <Grid item xs={2}>
                    <img src="/images/js.png" width="100%"/>
                </Grid>
                <Grid item xs={2}>
                    <img src="/images/react.png" width="100%"/>
                </Grid>
                <Grid item xs={2}></Grid>
                <Grid item xs={2}></Grid>
                <Grid item xs={2}>
                    <img src="/images/docker-compose.png" width="100%"/>
                </Grid>
                <Grid item xs={2}>
                    <img src="/images/python.png" width="100%"/>
                </Grid>
                <Grid item xs={2}>
                    <img src="/images/mongo.png" width="100%"/>
                </Grid>
            </Grid>
        );
    }
}