import { Box, Grid, Typography } from '@material-ui/core';
import { makeStyles, Theme, fade } from '@material-ui/core/styles';
import Link from './Link';
import CustomBox from './CustomBox';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.primary.main,
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
  large: {
    marginTop: 10,
    marginBottom: 10,
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
  control: {
    padding: theme.spacing(2),
  },
  gridIn: {
    padding: 20,
    alignItems: 'center',
  },
}));

interface Props {
  products: any;
  onClick?: any;
}

const Products = (props: Props) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      {props.products &&
        props.products.map((item: any) => (
          <Grid item xs={12} key={item.id}>
            <Box>
              <Box padding={2} className={classes.highlightTitleBox}>
                <Typography className={classes.highlightTitle} variant={'h5'}>
                  {item.name}
                </Typography>
              </Box>
              <Grid container justify={'flex-start'}>
                {item.products.items.length > 1 &&
                  item.products.items.map((items: any) => (
                    <Grid
                      item
                      xs={12}
                      sm={6}
                      lg={4}
                      key={items.id}
                      className={classes.gridIn}
                    >
                      <Link
                        as={`/${items.url_key}`}
                        href={`/[slug]`}
                        passHref
                        key={`/${items.url_key}`}
                      >
                        <CustomBox
                          img={items.small_image.url}
                          // onClick={() => props.onClick(items)}
                        >
                          <Box
                            display={'flex'}
                            flexDirection={'column'}
                            alignItems={'flex-start'}
                          >
                            <Typography className={classes.productTitle}>
                              {items.name}
                            </Typography>
                            <Typography className={classes.productPrice}>
                              {
                                items.price_range.minimum_price.final_price
                                  .currency
                              }{' '}
                              {
                                items.price_range.minimum_price.final_price
                                  .value
                              }
                            </Typography>
                          </Box>
                        </CustomBox>
                      </Link>
                    </Grid>
                  ))}
              </Grid>
            </Box>
          </Grid>
        ))}
    </Grid>
  );
};

export default Products;
