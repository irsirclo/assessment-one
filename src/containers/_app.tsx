import { ApolloProvider } from '@apollo/client';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { AppProps } from 'next/app';
import { Fragment, useEffect } from 'react';
import client from '../conf/client';
import theme from '../conf/theme';

const Entry = (props: AppProps) => {
  const { Component, pageProps } = props;

  useEffect(() => {
    const jssStyle = document.querySelector('#jss-server-side');

    if (jssStyle) {
      jssStyle.parentElement!.removeChild(jssStyle);
    }
  }, []);

  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ApolloProvider client={client}>
          <Component {...pageProps} />
        </ApolloProvider>
      </ThemeProvider>
    </Fragment>
  );
};

export default Entry;
