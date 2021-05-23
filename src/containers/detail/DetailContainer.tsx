import { useQuery } from '@apollo/client';
import { Typography, Box, Grid } from '@material-ui/core';
import { Markup } from 'interweave';
import { useRouter } from 'next/router';
import CustomBox from '../../components/CustomBox';
import ImageSlider from '../../components/ImageSlider';
import Layout from '../../components/Layout';
import ProductDetail from '../../operations/queries/productDetail.graphql';
import Link from '../../components/Link';
import useStyles from './DetailStyles';
import CartQuery from '../../operations/queries/cart.graphql';
import { cartMutation } from '../../operations/mutations';
import { Cart } from '../../models/carts';

const DetailContainer = () => {
  const classes = useStyles();
  const router = useRouter();
  const { slug } = router.query;

  const { data, loading, error } = useQuery(ProductDetail, {
    variables: { url_key: slug },
  });
  const cartQuery = useQuery(CartQuery);

  if (loading) {
    return <p>loading...</p>;
  }

  if (error) {
    return <p>:( an error happened</p>;
  }

  const itemProduct = data.products.items[0];

  const onAddToCart = () => {
    const cart: Cart = {
      name: itemProduct.name,
      amount: 1,
      price: itemProduct.price_range.minimum_price.final_price.value,
      url_key: itemProduct.url_key,
      image: itemProduct.image.url,
    };
    cartMutation.addItemToCart(cart);
  };

  // console.log(itemProduct);

  return (
    <Layout dataCart={cartQuery.data.carts} title={itemProduct.name}>
      <Box>
        <Box className={classes.boxHeader}>
          <Typography variant={'h4'} className={classes.title}>
            {itemProduct.name}
          </Typography>
          <Typography variant={'h6'} className={classes.price}>
            {itemProduct.price_range.minimum_price.final_price.currency}{' '}
            {itemProduct.price_range.minimum_price.final_price.value}
          </Typography>
        </Box>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <ImageSlider media={itemProduct.media_gallery} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box className={classes.description}>
              <Markup content={itemProduct.description.html} />
            </Box>
          </Grid>
        </Grid>
        <Box className={classes.containerCart}>
          <Typography>Get yours now</Typography>
          <Box className={classes.buttonCart} onClick={() => onAddToCart()}>
            <Typography variant={'button'}>Add to Cart</Typography>
          </Box>
        </Box>
        {itemProduct.related_products.length > 1 ? (
          <Box padding={2} className={classes.highlightTitleBox}>
            <Typography className={classes.highlightTitle} variant={'h5'}>
              Related Products
            </Typography>
          </Box>
        ) : null}
        <Grid container justify={'flex-start'}>
          {itemProduct.related_products.length > 1 &&
            itemProduct.related_products.map((items: any) => (
              <Grid
                item
                xs={12}
                sm={6}
                lg={3}
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
                        {items.price_range.minimum_price.final_price.currency}{' '}
                        {items.price_range.minimum_price.final_price.value}
                      </Typography>
                    </Box>
                  </CustomBox>
                </Link>
              </Grid>
            ))}
        </Grid>
      </Box>
    </Layout>
  );
};

export default DetailContainer;
