import {
  ApolloClient,
  InMemoryCache,
  makeVar,
  NormalizedCacheObject,
  ReactiveVar,
} from '@apollo/client';
import { Carts } from '../models/carts';

const cartInitialValue: Carts = [];

export const cartsVar: ReactiveVar<Carts> = makeVar<Carts>(cartInitialValue);

const cache: InMemoryCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        carts: {
          read() {
            return cartsVar();
          },
        },
      },
    },
  },
});

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  uri: 'https://swiftpwa-be.testingnow.me/graphql',
  cache,
});

export default client;
