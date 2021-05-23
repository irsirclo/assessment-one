import { Box, Typography } from '@material-ui/core';
import { useQuery, useLazyQuery } from '@apollo/client';
import { useEffect } from 'react';
import QueryCategories from '../../operations/queries/categories.graphql';
import FeaturedProduct from '../../operations/queries/featuredProduct.graphql';
import Layout from '../../components/Layout';
import RecursiveTreeView from '../../components/Trees';
import Products from '../../components/Products';
import useStyles from './CategoryStyles';
import CartQuery from '../../operations/queries/cart.graphql';

interface RenderTree {
  id: string;
  name: string;
  children?: RenderTree[];
}

const initialCategory: RenderTree = {
  id: 'all_categories',
  name: 'All Categories',
  children: [],
};

const CategoryContainer = () => {
  const classes = useStyles();

  const { data, loading, error } = useQuery(QueryCategories);
  const [loadByQuery, productQuery] = useLazyQuery(FeaturedProduct);
  const cartQuery = useQuery(CartQuery);

  useEffect(() => {
    loadByQuery({
      variables: { url_key: 'homepage-featured-products' },
    });
  }, []);

  const onClickCategory = (category: any) => {
    if (category.id !== 'all_categories') {
      loadByQuery({
        variables: { url_key: category.url_key },
      });
    }
  };

  const listProduct = productQuery?.data?.categoryList;

  if (loading) {
    return <p>loading...</p>;
  }

  if (error) {
    return <p>:( an error happened</p>;
  }

  if (data && data.categoryList) {
    let datas = initialCategory;
    datas.children = data.categoryList[0].children;
    return (
      <Layout dataCart={cartQuery.data.carts} title={'Categories'}>
        <Box className={classes.root}>
          <Box className={classes.left}>
            <RecursiveTreeView
              categories={datas}
              onClick={onClickCategory}
              rootName={['all_categories']}
            />
          </Box>
          <Box className={classes.right}>
            {listProduct && listProduct[0].children.length > 0 ? (
              <Products products={listProduct[0].children} />
            ) : (
              <Typography>
                {productQuery.loading
                  ? 'Searching...'
                  : 'There are no products that match the selected category'}
              </Typography>
            )}
          </Box>
        </Box>
      </Layout>
    );
  }
};

export default CategoryContainer;
