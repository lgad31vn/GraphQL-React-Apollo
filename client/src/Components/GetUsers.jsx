import { useEffect, useState } from 'react';
import {
  useQuery, // allows us to get the information from the query
  gql, // shorts for graphql
} from '@apollo/client';

import { LOAD_USERS } from '../GraphQL/Queries';

const GetUsers = () => {
  const {
    error, // errors
    loading, // loading true ? true : false
    data, // actual data from query
  } = useQuery(LOAD_USERS); // works like a react hook

  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (data) {
      setUsers(data.getAllUsers); // getAllUsers is a field in the graphql schema
    }
  }, [data]); // this hook will run once when the page loads, and re-run every time there is a change in {data}

  console.log(data);
  return (
    <div>
      {/* {users.map((val) => {
        return <h2> {val.firstName} </h2>;
      })} */}
    </div>
  );
};

export default GetUsers;
