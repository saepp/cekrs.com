import Router from "next/router";
import nProgress from "nprogress";
import { ThemeProvider } from "next-themes";

import Layout from "../components/Layout";
import "../styles/globals.css";
import "../styles/nprogress.css";

Router.events.on("routeChangeStart", () => nProgress.start());
Router.events.on("routeChangeComplete", () => nProgress.done());
Router.events.on("routeChangeError", () => nProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Layout>
        <Component {...pageProps} />{" "}
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
