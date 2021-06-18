import '../styles/index.css'
import Footer from '@/components/footer'
<<<<<<< HEAD
import Head from 'next/head';
=======
import { Provider } from 'next-auth/client'
>>>>>>> dev

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Panjan Wiki</title>
        <link rel="shortcut icon" href="/logo.svg" />
      </Head>
      <Provider session={pageProps.session}>
        <Component {...pageProps} />
        {/* <Footer /> */}
      </Provider>
>>>>>>> dev
    </>
  )
}

export default MyApp
