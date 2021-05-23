export interface Cart {
  url_key: string;
  name: string;
  price: number;
  amount: number;
  image: string;
}

export type Carts = Cart[];
