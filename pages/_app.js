import Head from "next/head";
import { SSRProvider } from "react-bootstrap";
import "../scss/kpaparid.scss";
import "../styles/global.css";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta name="color-scheme" content="light dark" />
      </Head>
      <SSRProvider>
        <Component {...pageProps} />
      </SSRProvider>
    </>
  );
};
export default App;
