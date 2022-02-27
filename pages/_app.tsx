import "../styles/globals.css";
import type { AppProps } from "next/app";
import Footer from "../components/footer";
import AppHead from "../components/appbar";
import "../locale/i18n";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <AppHead />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
