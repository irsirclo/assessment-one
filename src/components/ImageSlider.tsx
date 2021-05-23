import { IconButton, makeStyles, Theme, fade } from '@material-ui/core';
import { ArrowBack, ArrowForward } from '@material-ui/icons';
import { useState } from 'react';
import CustomBox from './CustomBox';

interface Props {
  media?: any;
}

const useStyles = makeStyles((theme: Theme) => ({
  menuButton: {
    color: theme.palette.primary.main,
    backgroundColor: fade(theme.palette.secondary.main, 1),
    '&:hover': {
      backgroundColor: fade(theme.palette.info.light, 1),
      color: theme.palette.secondary.main,
    },
  },
}));

const ImageSlider = (props: Props) => {
  const classes = useStyles();

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const previousSlide = () => {
    const lastIndex = props.media.length - 1;
    const shouldResetIndex = currentImageIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;

    setCurrentImageIndex(index);
  };

  const nextSlide = () => {
    const lastIndex = props.media.length - 1;
    const shouldResetIndex = currentImageIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentImageIndex + 1;

    setCurrentImageIndex(index);
  };

  return (
    <CustomBox img={props.media[currentImageIndex].url} padding={2}>
      <IconButton
        className={classes.menuButton}
        onClick={previousSlide}
        aria-label="prev slide"
      >
        <ArrowBack color="inherit" />
      </IconButton>
      <IconButton
        className={classes.menuButton}
        onClick={nextSlide}
        aria-label="next slide"
      >
        <ArrowForward color="inherit" />
      </IconButton>
    </CustomBox>
  );
};

export default ImageSlider;
