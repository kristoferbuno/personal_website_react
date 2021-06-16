import React, { Component } from 'react';
import { Card, Typography, CardContent, Grid, Container } from '@material-ui/core';
import "@fontsource/source-code-pro"
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import './App.css';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Source Code Pro'
    ].join(','),
    fontSize: '24'
  },
});

class App extends Component {
  renderMainCards() {
    return <Grid container item md={6} spacing={2}>
    <Grid item xs={6}>
      <Card>
        <CardContent>
          <Typography>
            about me
          </Typography>
        </CardContent>
      </Card>
    </Grid>
    <Grid item xs={6}>
      <Card>
      <CardContent>
          <Typography>
            projects
          </Typography>
        </CardContent>
      </Card>
    </Grid>
    <Grid item xs={6}>
      <Card>
      <CardContent>
          <Typography>
            resume download
          </Typography>
        </CardContent>
      </Card>
    </Grid>
    <Grid item xs={6}>
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
      <MuiThemeProvider theme={theme}>
        <Grid container xs={12}>
          <Grid item sm={12} md={6}>
            <Card>
              <CardContent>
                <Container align="center">
                  <Typography align="center">
                    kristofer buno
                  </Typography>
                  <Typography align="center">
                    software engineering intern
                  </Typography>
                </Container>
              </CardContent>
            </Card>
          </Grid>
          {this.renderMainCards()}
        </Grid>
      </MuiThemeProvider>
    );
  }
}

export default App;
