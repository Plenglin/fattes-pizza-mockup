import { Button } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import { ThemeProvider } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { FaPhoneAlt, FaPizzaSlice } from 'react-icons/fa';
import './App.css';
import { headerPizza } from './assets';
import { Menu } from './menu.js';
import { StoreHoursTable } from './store-hours';
import { theme, useStyles } from './util';

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
          <div className={classes.heroContent} style={{
            backgroundImage: `linear-gradient( rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5) ), url(${headerPizza})`
          }}>
            <Container maxWidth="sm">
              <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                Fatte's Pizza SLO
              </Typography>
              <Typography variant="h4" align="center" color="textSecondary" paragraph>
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

          <Container maxWidth="md" className={classes.cardGrid}>
            <Grid container spacing={2} alignItems="stretch" justify="center">
              <Grid item>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2739.18322238564!2d-120.65893245224929!3d35.269782802769654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80ecf1185e0947d5%3A0x345dc557b8e0dc8c!2sFatte&#39;s%20Pizza!5e0!3m2!1sen!2sus!4v1604186530181!5m2!1sen!2sus" 
                  title="Fatte's Pizza Location" 
                  height="300" 
                  frameborder="0" 
                  style={{border: 0}} 
                  allowfullscreen="" 
                  aria-hidden="false" 
                  tabindex="0"/>
              </Grid>
              <Grid item>
                <Typography component="h2" variant="h5">
                  Store Hours
                </Typography>
                <StoreHoursTable/>
              </Grid>
            </Grid>
          </Container>

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
