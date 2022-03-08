import { gql } from '@apollo/client';

const GET_CLIENTES = gql`
  query Query {
    getClients {
      id
      name
      updatedAt
      createdAt
    }
  }
`;

export { GET_CLIENTES };
