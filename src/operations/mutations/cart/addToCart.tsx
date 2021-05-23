import { ReactiveVar } from '@apollo/client';
import { Cart, Carts } from '../../../models/carts';

const addToCart = (cartsVar: ReactiveVar<Carts>) => {
  const createNewItem = (itemSelected: Cart) => {
    return { ...itemSelected, amount: 1 };
  };

  return (itemSelected: Cart) => {
    const allItems = cartsVar();
    cartsVar(allItems.concat([createNewItem(itemSelected)]));
  };
};

export default addToCart;
