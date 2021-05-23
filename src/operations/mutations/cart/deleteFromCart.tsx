import { ReactiveVar } from '@apollo/client';
import { Cart, Carts } from '../../../models/carts';

const deleteFromCart = (cartsVar: ReactiveVar<Carts>) => {
  return (url_key: string) => {
    const allCarts = cartsVar();
    const filteredCarts = allCarts.filter(
      (cart: Cart) => cart.url_key !== url_key
    );

    cartsVar(filteredCarts);
  };
};

export default deleteFromCart;
