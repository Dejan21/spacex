import {ApolloClient, InMemoryCache} from "@apollo/clinet";

export const apolloClient = new ApolloClient({
    uri: 'https://api.spacex.land/graphql',
    cache: new InMemoryCache().
});