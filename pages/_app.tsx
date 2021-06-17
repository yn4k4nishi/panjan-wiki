import '../styles/index.css'
import Footer from '@/components/footer'
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/logo.svg" />
      </Head>
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
