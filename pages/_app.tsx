import Head from "next/head";
import type { AppProps } from "next/app";
import { Layout, ThemeProvider } from "../components";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <div className="app">
      <Head>
        <title>Nathan S. Santos</title>
        <meta name="description" content="My personal projects portfolio." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </div>
  );
};
export default MyApp;
