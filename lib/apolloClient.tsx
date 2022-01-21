import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

export default function clientApollo() {
    return new ApolloClient({
      link: new HttpLink({
        uri: process.env.NEXT_PUBLIC_WORDPRESS_API_URL,
        fetch,
      }),
      cache: new InMemoryCache(),
    });
  }
  