import {ApolloClient, InMemoryCache, HttpLink, ApolloLink} from "@apollo/client";

import {onError} from "@apollo/client/link/error";

const GITHUB_GRAPHQL_API = "https://api.github.com/graphql";

const errorLink = onError(({graphQLErrors, networkError}) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({message, locations, path}) => {
      console.error(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`);
    });
  }
  if (networkError) {
    console.error(`[Network Error]: ${networkError}`);
  }
});

const httpLink = new HttpLink({
  uri: GITHUB_GRAPHQL_API,
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
  },
});

// Create new link instance
const link = ApolloLink.from([errorLink, httpLink]);
// Read instance
const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

export default client;
