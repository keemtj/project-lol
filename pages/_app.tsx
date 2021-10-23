import type { AppProps } from "next/app";
import Head from "next/head";
import GlobalStyle from "../styles/globalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="YOUR.GG에서 소환사를 검색하고 전적을 확인하세요!"
        />
        <meta property="og:image" content="%PUBLIC_URL%/thumb.png" />
        <meta property="og:url" content="https://your.gg/" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
        <title>YOUR.GG</title>
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;
