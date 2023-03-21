import "../css/style.css";
import Head from "next/head";
import { imagesPath } from "../src/config";
import { NavbarPrimary } from "../src/components/commons";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Airbnb</title>
        <link rel="icon" sizes="192x192" href={imagesPath.logo} />
      </Head>
      <div className="grid wrapper">
        <NavbarPrimary />
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
