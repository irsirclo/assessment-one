import { makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.palette.primary.main,
  },
  left: {
    display: 'flex',
    width: '100%',
  },
  right: {
    display: 'flex',
    width: '100%',
  },
  highlightTitleBox: {
    backgroundColor: theme.palette.primary.main,
  },
  highlightTitle: {
    color: theme.palette.secondary.main,
    fontWeight: 'bold',
  },
  productTitle: {
    fontWeight: 'bold',
    marginTop: 2,
    padding: 5,
    backgroundColor: theme.palette.common.white,
  },
  productPrice: {
    marginTop: 2,
    padding: 5,
    backgroundColor: theme.palette.common.white,
  },
  large: {
    marginTop: 10,
    marginBottom: 10,
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default useStyles;
