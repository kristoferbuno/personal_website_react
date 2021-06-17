import React, { Component } from 'react';
import { Card, Typography, CardContent, Grid, Container, CardActionArea, Link, CardMedia } from '@material-ui/core';
import "@fontsource/source-code-pro"
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import FaceIcon from '@material-ui/icons/Face';
import BuildIcon from '@material-ui/icons/Build';
import ReceiptIcon from '@material-ui/icons/Receipt';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import './App.css';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Source Code Pro'
    ].join(','),
    fontSize: 24
  },
});

class App extends Component {
  constructor() {
    super()
    this.state = {
      active_panel: null
    }
  }

  handlePanelChange(panel) {
    console.log(panel)
    this.setState({ active_panel: panel });
  }

  fakeFunction() {
    console.log("I am here for debugging purposes.")
  }

  renderMainCards() {
    return <Grid container item md={6} spacing={2}>
      <Grid item xs={6}>
        <Card>
          <CardActionArea onClick={() => {
            this.handlePanelChange('about_me')
          }}>
            <CardContent>
              <Grid container direction="row" alignItems="center">
                <FaceIcon />
                <Typography style={{ marginLeft: '0.5em' }}>
                  about me
                </Typography>
              </Grid>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={6}>
        <Card>
          <CardActionArea onClick={() => {
            this.handlePanelChange('projects')
          }}>
            <CardContent>
              <Grid container direction="row" alignItems="center">
                <BuildIcon />
                <Typography style={{ marginLeft: '0.5em' }}>
                  projects
              </Typography>
              </Grid>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={6}>
        <Card>
          <CardActionArea onClick={() => {
            window.location.href = "/buno_kristofer_resume.pdf"
          }}>
            <CardContent>
              <Grid container direction="row" alignItems="center">
                <ReceiptIcon />
                <Typography style={{ marginLeft: '0.5em' }}>
                  resume
              </Typography>
              </Grid>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={6}>
        <Card>
          <CardActionArea onClick={() => {
            this.handlePanelChange('contact_me')
          }}>
            <CardContent>
              <Grid container direction="row" alignItems="center">
                <ChatBubbleIcon />
                <Typography style={{ marginLeft: '0.5em' }}>
                  contact me
                </Typography>
              </Grid>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </Grid>
  }

  renderAboutMe() {
    return <Grid item md={6}>
      <Grid item xs={12}>
        <Card>
          <CardActionArea onClick={() => { this.handlePanelChange(null) }}>
            <CardContent>
              <Grid container direction="row" alignItems="center">
                <ArrowBackIcon />
                <Typography style={{ marginLeft: '0.5em' }}>
                  back
                </Typography>
              </Grid>
            </CardContent>
          </CardActionArea>
          <CardContent id="about_me_content">
            <Typography>
              hi, i'm <p style={{ color: "#22FF22", display: "inline" }}>kristofer buno</p>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  }

  renderContactMe() {
    return <Grid item md={6}>
      <Grid item xs={12}>
        <Card>
          <CardActionArea onClick={() => { this.handlePanelChange(null) }}>
            <CardContent>
              <Grid container direction="row" alignItems="center">
                <ArrowBackIcon />
                <Typography style={{ marginLeft: '0.5em' }}>
                  back
                </Typography>
              </Grid>
            </CardContent>
          </CardActionArea>
          <CardContent id="about_me_content">
            <Typography>
              <a target="_blank" href="https://www.linkedin.com/in/kristoferbuno/" style={{ color: "#4444FF" }}>
                  linkedin
              </a>
            </Typography>
            <Typography>
              <a target="_blank" href="https://github.com/kristoferbuno/" style={{ color: "#CCCCCC" }}>
                  github
              </a>
            </Typography>
            <Typography>
              <a target="_blank" href="mailto:krisbuno@gmail.com" style={{ color: "#FF2222" }}>
                  email
              </a>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  }

  renderProjects() {
    return <Grid item md={6}>
      <Grid item xs={12}>
        <Card>
          <CardActionArea onClick={() => { this.handlePanelChange(null) }}>
            <CardContent>
              <Grid container direction="row" alignItems="center">
                <ArrowBackIcon />
                <Typography style={{ marginLeft: '0.5em' }}>
                  back
                </Typography>
              </Grid>
            </CardContent>
          </CardActionArea>
          <CardContent id="about_me_content">
            <Typography>
              <a target="_blank" href="https://songs.kristoferbuno.com" style={{ color: "#4444FF" }}>
                [0] song analyzer
            </a>
              &nbsp;
            <a target="_blank" href="https://github.com/kristoferbuno/song-analyzer-webapp" style={{ color: "#4444FF" }}>
                [github]
            </a>
              <Typography variant='body2' className="indented">
                $ analyzes appropriateness of a song in 4 categories
              </Typography>
              <Typography variant='body2' className="indented">
                $ uses machine learning techniques to classify songs
              </Typography>
              <Typography variant='body2' className="indented">
                $ built with react, js, python, docker, aws
              </Typography>
            </Typography>
            <Typography>
              [1] uf ap credit calculator&nbsp;
              <a target="_blank" href="https://github.com/kristoferbuno/uf-apcreditcalculator" style={{ color: "#4444FF" }}>
                [github]
              </a>
              <Typography variant='body2' className="indented">
                $ calculates earned uf credit from ap exams
              </Typography>
              <Typography variant='body2' className="indented">
                $ built with js, html5 and dom manipulation
              </Typography>
            </Typography>
            <Typography>
              [2] stayin' alive&nbsp;
              <a target="_blank" href="https://github.com/kristoferbuno/cpr-training-model" style={{ color: "#4444FF" }}>
                [github]
              </a>
              <Typography variant='body2' className="indented">
                $ educates users on cpr with a Unity3D VR simulation
              </Typography>
              <Typography variant='body2' className="indented">
                $ built with Unity3D and C#
              </Typography>
            </Typography>
            <Typography>
              [3] personal website&nbsp;
              <a target="_blank" href="https://github.com/kristoferbuno/personal_website_react" style={{ color: "#4444FF" }}>
                [github]
              </a>
              <Typography variant='body2' className="indented">
                $ simple website to organize my info
              </Typography>
              <Typography variant='body2' className="indented">
                $ built with react
              </Typography>
              <Typography variant='body2' className="indented">
                $ you're looking at it right now
              </Typography>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  }

  renderActivePanel() {
    switch (this.state.active_panel) {
      case null:
        return;
      case 'about_me':
        return this.renderAboutMe();
      case 'projects':
        return this.renderProjects();
      case 'contact_me':
        return this.renderContactMe();
    }
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Grid container xs={12}>
          <Grid item sm={12} md={6}>
            <Card>
              <Container align="center" id="me_container" style={{ 'height': 'inherit', 'display': 'flex', 'justify-content': 'center', 'align-items': 'center', 'flex-wrap': 'wrap' }}>
                <Typography>
                  $ kristofer buno
                </Typography>
                <img src="kris.jpg" height="400px" width="400px" style={{'borderRadius':'16em'}}></img>
                <Typography>
                  software engineering intern
                  </Typography>
              </Container>
            </Card>
          </Grid>
          {this.state.active_panel ? this.renderActivePanel() : this.renderMainCards()}
        </Grid>
      </MuiThemeProvider>
    );
  }
}

export default App;
