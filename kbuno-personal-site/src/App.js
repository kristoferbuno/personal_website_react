import React, { Component } from 'react';
import { Card, Typography, CardContent, Grid, Container } from '@material-ui/core';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  renderMainCards() {
    return <Grid container item md={6} spacing={2}>
    <Grid item md={6}>
      <Card>
        <CardContent>
          <Typography>
            about me
          </Typography>
        </CardContent>
      </Card>
    </Grid>
    <Grid item md={6}>
      <Card>
      <CardContent>
          <Typography>
            projects
          </Typography>
        </CardContent>
      </Card>
    </Grid>
    <Grid item md={6}>
      <Card>
      <CardContent>
          <Typography>
            resume download
          </Typography>
        </CardContent>
      </Card>
    </Grid>
    <Grid item md={6}>
      <Card>
      <CardContent>
          <Typography>
            hi
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  </Grid>
  }

  render() {
    return (
      <Grid container xs={12}>
        <Grid item sm={6} xs={12}>
          <Card>
            <CardContent>
              <Container align="center">
                <Typography align="center">
                  kristofer buno
                </Typography>
              </Container>
            </CardContent>
          </Card>
        </Grid>
        {this.renderMainCards()}
      </Grid>
    );
  }
}

export default App;
