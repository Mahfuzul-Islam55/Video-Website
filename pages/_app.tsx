import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";
import { Fragment } from "react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Script src="https://cdn.tailwindcss.com" />
      <Component {...pageProps} />
    </Fragment>
  );
}
