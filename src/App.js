import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { FaPhoneAlt, FaPizzaSlice } from 'react-icons/fa';
import './App.css';
import { Menu } from './menu.js';
import { useStyles, theme } from './util';
import { ThemeProvider } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';

function App() {
  const classes = useStyles();
  
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
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
                2-for-1 pizzas, every day!
              </Typography>
              <Grid container justify="center" spacing={5} className={classes.heroButtons}>
                <Grid item>
                  <Button variant="outlined" href="">
                    <FaPhoneAlt title="Phone" /> (805) 543-2457
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="contained" href="https://www.doordash.com/store/fatte-s-pizza-san-luis-obispo-352459/en-US">Order on DoorDash</Button>
                </Grid>
              </Grid>
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
      </ThemeProvider>
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
