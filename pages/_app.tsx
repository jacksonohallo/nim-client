import { useEffect, useState } from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { motion } from "framer-motion";
import { Layout, ThemeProvider } from "../components";
import createEmotionCache from "../createEmotionCache";
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const MyApp = (props: MyAppProps) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const [appIsVisible, setAppIsVisible] = useState(false);

  useEffect(() => {
    setAppIsVisible(true);
  }, []);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Nimrod Kibet</title>
        <meta
          name="description"
          content="I’m a Geologist"
        />
        <meta
          name="author"
          content="Niromroad <nimrodmadelakibet@gmail.com>"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.div
        animate={{
          opacity: appIsVisible ? 1 : 0,
        }}
        transition={{ duration: 0.5, delay: 1 }}
        initial={false}
      >
        <ThemeProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </motion.div>
    </CacheProvider>
  );
};
export default MyApp;
