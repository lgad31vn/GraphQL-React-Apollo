import Form from './Components/Form';
import './App.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from '@apollo/client';

import { onError } from '@apollo/client/link/error';

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, localtion, path }) => {
      alert(`GraphQL Error: ${message}`);
    });
  }
});
const graphQLLink = from([
  errorLink, // need this to catch errors
  new HttpLink({ uri: 'http://localhost:4000/graphql' }),
]);

// actual Apollo Client
const graphQLClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: graphQLLink, // this is the link to backend server
});

const App = () => {
  return (
    <ApolloProvider client={graphQLClient}>
      {/* <GetUsers /> */}
      <Form />
    </ApolloProvider>
  );
};

export default App;
