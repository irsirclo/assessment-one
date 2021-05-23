import { makeStyles, Theme, fade } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  title: {
    padding: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    [theme.breakpoints.up('sm')]: {
      textAlign: 'start',
    },
  },
  price: {
    padding: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    [theme.breakpoints.up('sm')]: {
      padding: 20,
    },
  },
  boxHeader: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  },
  description: {
    display: 'flex',
    overflow: 'hidden',
    padding: 10,
    fontWeight: 'bold',
    minHeight: 300,
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.secondary.main,
    textTransform: 'uppercase',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerCart: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
  },
  buttonCart: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 30,
    paddingRight: 30,
    marginLeft: 10,
    backgroundColor: theme.palette.secondary.main,
    color: fade(theme.palette.primary.main, 1),
    '&:hover': {
      backgroundColor: fade(theme.palette.info.light, 1),
      color: theme.palette.secondary.main,
    },
  },
  productTitle: {
    fontWeight: 'bold',
    marginTop: 2,
    padding: 5,
    color: theme.palette.primary.main,
    backgroundColor: fade(theme.palette.secondary.main, 1),
    '&:hover': {
      backgroundColor: fade(theme.palette.info.light, 1),
      color: theme.palette.secondary.main,
    },
  },
  productPrice: {
    marginTop: 2,
    padding: 5,
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.secondary.main,
  },
  gridIn: {
    padding: 20,
    alignItems: 'center',
  },
  highlightTitleBox: {
    backgroundColor: theme.palette.primary.main,
    justifyContent: 'center',
  },
  highlightTitle: {
    textAlign: 'center',
    color: theme.palette.secondary.main,
    fontWeight: 'bold',
  },
}));

export default useStyles;
