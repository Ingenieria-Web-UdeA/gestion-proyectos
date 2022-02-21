import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ApolloClient, InMemoryCache, from, HttpLink, ApolloProvider } from '@apollo/client';
import PublicLayout from '../layout/PublicLayout';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([
    new HttpLink({
      uri: 'http://localhost:3000/api/graphql',
    }),
  ]),
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <div>
        <Head>
          <title>Proyectos</title>
        </Head>
        <PublicLayout>
          <Component {...pageProps} />
        </PublicLayout>
      </div>
    </ApolloProvider>
  );
}

export default MyApp;
