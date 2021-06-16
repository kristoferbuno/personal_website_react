import React, { Component } from 'react';
import { Card, Typography, CardContent, Grid } from '@material-ui/core';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Grid container xs={12}>
        <Grid item lg={6}>
          <Card>
            <CardContent>
              <Typography>
                kristofer buno
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid container item lg={6} spacing={2}>
          <Grid item lg={6}>
            <Card>
              <CardContent>
                <Typography>
                  kristofer buno
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item lg={6}>
            <Card>
            <CardContent>
                <Typography>
                  kristofer buno
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item lg={6}>
            <Card>
            <CardContent>
                <Typography>
                  kristofer buno
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item lg={6}>
            <Card>
            <CardContent>
                <Typography>
                  kristofer buno
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default App;
