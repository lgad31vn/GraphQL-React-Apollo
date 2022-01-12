import React, { useEffect } from 'react';
import {
  useQuery, // allows us to get the information from the query
  gql, // shorts for graphql
} from '@apollo/client';

import { LOAD_USERS } from '../GraphQL/Mutations';

const GetUsers = () => {
  const {
    error, // errors
    loading, // loading true ? true : false
    data, // actual data from query
  } = useQuery(LOAD_USERS); // works like a react hook

  useEffect(() => {
    console.log(data);
  }, [data]); // this hook will run once when the page loads, and re-run every time there is a change in {data}

  return <div></div>;
};

export default GetUsers;
