import React, { ReactNode, useState } from 'react';
import Head from 'next/head';
import AppBarCustom from './AppBarCustom';
import Footer from './Footer';
import {
  Box,
  Divider,
  IconButton,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core';
import DrawerCart from './DrawerCart';
import { CloseOutlined, DeleteOutline } from '@material-ui/icons';

type Props = {
  children?: ReactNode;
  title?: string;
  dataCart?: any;
};

const useStyles = makeStyles((theme: Theme) => ({
  offset: theme.mixins.toolbar,
  boxDrawer: {
    flexGrow: 1,
  },
  titleCart: {
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 10,
  },
  divider: {
    marginTop: 10,
    marginBottom: 10,
  },
  itemBox: {
    padding: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  itemTitleBox: {
    marginLeft: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  deleteBox: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
  itemName: {
    fontWeight: 'bold',
  },
  deleteIcon: {
    alignSelf: 'flex-end',
  },
  img: {
    width: 100,
    height: 100,
    backgroundColor: theme.palette.secondary.main,
    objectFit: 'cover',
  },
  totalBox: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    padding: 20,
  },
  button: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.main,
    textAlign: 'center',
    padding: 20,
    marginTop: 10,
  },
}));

const Layout = ({
  children,
  title = 'This is the default title',
  dataCart,
}: Props) => {
  const classes = useStyles();
  const [cartVisibility, setCartVisible] = useState(false);

  const onDrawer = () => {
    setCartVisible(!cartVisibility);
  };
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <AppBarCustom
        totalItems={dataCart && dataCart.length}
        onCart={() => onDrawer()}
      />
      <DrawerCart
        open={cartVisibility}
        onClose={() => onDrawer()}
        onOpen={() => onDrawer()}
      >
        <Box className={classes.boxDrawer}>
          <IconButton onClick={() => onDrawer()}>
            <CloseOutlined />
          </IconButton>
          <Typography variant={'h5'} className={classes.titleCart}>
            Your Bag
          </Typography>
          <Divider className={classes.divider} />
          <Box>
            {dataCart &&
              dataCart.map((item: any) => (
                <Box className={classes.itemBox}>
                  <img src={item.image} className={classes.img} />
                  <Box>
                    <Box className={classes.itemTitleBox}>
                      <Typography
                        variant={'button'}
                        className={classes.itemName}
                      >
                        {item.name}
                      </Typography>
                      <Typography>{item.price}</Typography>
                    </Box>
                    <Box className={classes.deleteBox}>
                      <IconButton color={'inherit'}>
                        <DeleteOutline />
                      </IconButton>
                    </Box>
                  </Box>
                </Box>
              ))}
          </Box>
          <Divider className={classes.divider} />
          <Box className={classes.totalBox}>
            <Typography variant={'button'} className={classes.itemName}>
              Total
            </Typography>
            <Typography>Total</Typography>
          </Box>
          <Box className={classes.button}>
            <Typography variant={'button'}>Proceed to checkout</Typography>
          </Box>
        </Box>
      </DrawerCart>
      <div className={classes.offset} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
