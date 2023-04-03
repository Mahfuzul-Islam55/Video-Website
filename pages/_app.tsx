import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { store } from "@/redux/Store";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";
import { Fragment } from "react";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Script src="https://cdn.tailwindcss.com" />
      <Provider store={store}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </Provider>
    </Fragment>
  );
}
