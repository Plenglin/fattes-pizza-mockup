import { Container, Paper, Table, TableContainer, TableHead, TableBody, TableCell, TableRow } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { fattesFavorites, salads, sides, subs, buildYourOwnPrices, toppings, doubleExtraToppings } from './menu-data';
import { useStyles } from './util';

function Price({data}) {
  if (Array.isArray(data)) {
    const [sm, md, lg] = data
    return <Typography gutterBottom>S: ${sm / 100} | M: ${md / 100} | L: ${lg / 100}</Typography>
  }
  return <Typography gutterBottom>${data / 100}</Typography>
}

function MenuItemCard({item}) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      {item.image 
        ? <CardMedia
            className={classes.cardMedia}
            image={item.image}
          /> 
        : null}
      
      <CardContent className={classes.cardContent}>
        <Typography variant="h5" component="h2">
          {item.name}
        </Typography>
        <Price data={item.price}/>
        <Typography>
          {item.desc}
        </Typography>
      </CardContent>
    </Card>
  )
}

function MenuCategory({title, items}) {
  const classes = useStyles();
  return (
    <>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid>
          <Typography gutterBottom variant="h4" component="h4">{title}</Typography>
        </Grid>
        <Grid container spacing={4}>
          {items.map((item) => (
            <Grid item key={item} xs={12} sm={6} md={4}>
              <MenuItemCard item={item}/>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  )
}

function BuildYourOwnCategory() {
  const classes = useStyles();
  return (
    <>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid>
          <Typography gutterBottom variant="h4" component="h4">Build Your Own Pizza!</Typography>
        </Grid>
        <Grid>
          <Paper className={classes.paper}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <TableContainer>
                  <Table className={classes.table} size="small">
                    <TableHead>
                      <TableRow>
                        <TableCell># of Toppings</TableCell>
                        <TableCell>Small</TableCell>
                        <TableCell>Medium</TableCell>
                        <TableCell>Large</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {
                        buildYourOwnPrices.map(([sm, md, lg], n) => (
                          <TableRow>
                            <TableCell>{n}</TableCell>
                            <TableCell>{sm / 100}</TableCell>
                            <TableCell>{md / 100}</TableCell>
                            <TableCell>{lg / 100}</TableCell>
                          </TableRow>
                        ))
                      }
                      <TableRow>
                        <TableCell>Double/Extra</TableCell>
                        <TableCell>{doubleExtraToppings[0] / 100}</TableCell>
                        <TableCell>{doubleExtraToppings[1] / 100}</TableCell>
                        <TableCell>{doubleExtraToppings[2] / 100}</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography gutterBottom variant="h6" component="h6">Select from the following toppings:</Typography>
                <Grid grid container>
                  {
                    toppings.map(({name}) => (
                      <Grid xs={4} md={3}>
                        <Typography variant="body2" component="p">{name}</Typography>
                      </Grid>
                    ))
                  }
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Container>
    </>
  )
}

export function Menu() {
  return (
    <>
      <BuildYourOwnCategory/>
      <MenuCategory title="Fatte's Favorites" items={fattesFavorites}/>
      <MenuCategory title="Salads" items={salads}/>
      <MenuCategory title="Sides" items={sides}/>
      <MenuCategory title="Subs" items={subs}/>
    </>
  );
}
