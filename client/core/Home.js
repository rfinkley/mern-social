import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import girlSmiling from '../assets/images/girlSmiling.jpg';

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 600,
    margin: 'auto',
    marginTop: theme.spacing(5),
  },
  title: {
    padding: `${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing(
      2
    )}px`,
    color: theme.palette.openTitle,
  },
  media: {
    minHeight: 400,
  },
  credit: {
    padding: 10,
    textAlign: 'right',
    backgroundColor: '#ededed',
    borderBottom: '1px solid #d0d0d0',
    '& a': {
      color: '#3f4771',
    },
  },
}));

function Home() {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <Typography variant="h6" className={classes.title}>
        Home Page
      </Typography>
      <CardMedia
        className={classes.media}
        image={girlSmiling}
        title="Girl Smiling"
      />
      <Typography
        variant="body2"
        component="p"
        className={classes.credit}
        color="textSecondary"
      >
        Photo by{' '}
        <a href="https://unsplash.com/@skmuse_?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
          Suad Kamardeen
        </a>{' '}
        on{' '}
        <a href="https://unsplash.com/s/photos/laugh?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
          Unsplash
        </a>
      </Typography>
      <CardContent>
        <Typography variant="body2" component="p">
          Welcome to the MERN Skeleton home page.
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Home;
