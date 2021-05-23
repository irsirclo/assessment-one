import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import CategoryIcon from '@material-ui/icons/Category';
import { IconButton } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      backgroundColor: theme.palette.primary.main,
      display: 'flex',
      paddingTop: 20,
      paddingBottom: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    menuButton: {},
  })
);

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <IconButton edge="start" className={classes.menuButton} color="inherit">
        <CategoryIcon />
      </IconButton>
    </div>
  );
}
