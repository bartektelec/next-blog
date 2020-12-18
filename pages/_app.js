import '../styles/index.css';
import Container from '../components/container';
import Header from '../components/Header/';
import Layout from '../components/layout';
import Head from 'next/head';
import { TITLE } from '../lib/constants';
import Navigation from '../components/Navigation/';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Head>
          <title>{TITLE}</title>
        </Head>
        <Container>
          <Header />
          <div className='flex items-baseline'>
            <Navigation />
            <Component {...pageProps} />
          </div>
        </Container>
      </Layout>
    </>
  );
}
