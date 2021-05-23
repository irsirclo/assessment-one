import { makeStyles, SwipeableDrawer, Theme } from '@material-ui/core';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  open: boolean;
  onClose: any;
  onOpen: any;
}

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    width: '100%',
    flexShrink: 0,
    [theme.breakpoints.up('sm')]: {
      width: '40%',
    },
    [theme.breakpoints.up('md')]: {
      width: '30%',
    },
  },
}));

const DrawerCart = (props: Props) => {
  const classes = useStyles();
  return (
    <SwipeableDrawer
      className={classes.container}
      anchor={'right'}
      classes={{
        paper: classes.container,
      }}
      open={props.open}
      onClose={props.onClose}
      onOpen={props.onOpen}
    >
      {props.children}
    </SwipeableDrawer>
  );
};

export default DrawerCart;
