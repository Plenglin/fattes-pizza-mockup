import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { FaPizzaSlice } from 'react-icons/fa';
import { useStyles } from './util';
import Link from '@material-ui/core/Link';
import './App.css';
import { Menu } from './menu.js';

function App() {
  const classes = useStyles();
  
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            <FaPizzaSlice/>{' '}
            Fatte's Pizza SLO
          </Typography>
        </Toolbar>
      </AppBar>

      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Fatte's Pizza SLO
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              SLO's Finest Pizza
            </Typography>
          </Container>
        </div>

        <Menu/>
      </main>
      
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </footer>
    </React.Fragment>
  );
}

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default App;
