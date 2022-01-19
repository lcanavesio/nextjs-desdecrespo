import '../styles/index.css'
import '../styles/clicme.css'
import '../styles/social.css'

import { ApolloClient, ApolloProvider } from "@apollo/client";
import { useEffect, useState } from "react";
import clientApollo from '../lib/api';

export default function MyApp({ Component, pageProps }) {
  const [client, setClient] = useState<ApolloClient<any>>();

  useEffect(() => {
    const c = clientApollo();
    setClient(c);
  }, []);

  if (!client) {
    return <div />;
  }

  return (
    <>
      {client && (
        <ApolloProvider client={client}>
          <Component {...pageProps} />
        </ApolloProvider>
      )}
    </>
  );
}

