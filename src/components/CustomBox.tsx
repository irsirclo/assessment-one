import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box, { BoxProps as MuiBoxProps } from '@material-ui/core/Box';
import { Omit } from '@material-ui/types';

interface Props {
  color?: 'red' | 'blue';
  img?: string;
}

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    backgroundImage: (props: Props) => `url(${props.img})`,
    minHeight: 300,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    // background: (props: Props) =>
    //   props.color === 'red'
    //     ? 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
    //     : 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
  },
});

export default function CustomBox(
  props: Props & Omit<MuiBoxProps, keyof Props>
) {
  const { img, ...other } = props;
  const classes = useStyles(props);
  return (
    <Box
      display={'flex'}
      flexDirection={'row'}
      justifyContent={'space-between'}
      alignItems={'center'}
      className={classes.root}
      {...other}
    />
  );
}
