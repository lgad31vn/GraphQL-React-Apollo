import { gql } from '@apollo/client';

// this query will be used in the Graphiql UI on localhost:4000/graphql
export const LOAD_USERS = gql`
  query {
    getAllUsers {
      id
      firstName
      email
      password
    }
  }
`;
