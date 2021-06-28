import '../styles/index.css';
import {useRequireLogin} from "../lib/useRequireLogin";
import Head from 'next/head';
import { Provider } from 'next-auth/client';

function MyApp({ Component, pageProps, router }) {
  useRequireLogin()

  return (
    <>
      <div className="font-sans">
        <Head>
          <title>Panjan Wiki</title>
          <link rel="shortcut icon" href="/favicon.svg" />
        </Head>
        <Provider session={pageProps.session}>
          <Component {...pageProps} />
          {/* <Footer /> */}
        </Provider>
      </div>
    </>
  )
}

export default MyApp
