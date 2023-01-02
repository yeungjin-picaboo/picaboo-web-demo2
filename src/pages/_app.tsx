import GlobalStyle from '../styles/globalStyle';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { theme } from '../styles/theme';
import { ThemeProvider } from 'styled-components';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Picasso</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
