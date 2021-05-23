import addToCart from './cart/addToCart';
import deleteFromCart from './cart/deleteFromCart';

import { cartsVar } from '../../conf/client';

export const cartMutation = {
  addItemToCart: addToCart(cartsVar),
  deleteItemFromCart: deleteFromCart(cartsVar),
};
