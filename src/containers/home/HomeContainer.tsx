import { useQuery } from '@apollo/client';
import FeaturedProduct from '../../operations/queries/featuredProduct.graphql';
import Layout from '../../components/Layout';
import Products from '../../components/Products';
import CartQuery from '../../operations/queries/cart.graphql';

const HomeContainer = () => {
  const { data, loading, error } = useQuery(FeaturedProduct, {
    variables: { url_key: 'homepage-featured-products' },
  });
  const cartQuery = useQuery(CartQuery);

  if (loading) {
    return <p>loading...</p>;
  }

  if (error) {
    return <p>:( an error happened</p>;
  }

  const onClickProduct = (item: any) => {
    console.log(item);
  };

  const highlightedParent = data.categoryList[0].children;

  return (
    <Layout dataCart={cartQuery.data.carts} title={'Home'}>
      <Products products={highlightedParent} onClick={onClickProduct} />
    </Layout>
  );
};

export default HomeContainer;
