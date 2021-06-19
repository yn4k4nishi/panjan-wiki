import '../styles/index.css'
import Footer from '@/components/footer'
import Head from 'next/head';
import { Provider } from 'next-auth/client'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="font-mono">
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
