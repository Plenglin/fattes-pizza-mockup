import { Container } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { fattesFavorites, salads, sides, subs } from './menu-data';
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
          <Typography variant="h4" component="h4">{title}</Typography>
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

export function Menu() {
  return (
    <>
      <MenuCategory title="Fatte's Favorites" items={fattesFavorites}/>
      <MenuCategory title="Salads" items={salads}/>
      <MenuCategory title="Sides" items={sides}/>
      <MenuCategory title="Subs" items={subs}/>
    </>
  );
}
