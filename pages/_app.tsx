import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import PublicLayout from '../layout/PublicLayout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>Proyectos</title>
      </Head>
      <PublicLayout>
        <Component {...pageProps} />
      </PublicLayout>
    </div>
  );
}

export default MyApp;
