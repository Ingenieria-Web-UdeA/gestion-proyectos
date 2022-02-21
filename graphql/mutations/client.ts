import { gql } from '@apollo/client';

const CREATE_CLIENT = gql`
  mutation Mutation($name: String!) {
    createClient(name: $name) {
      id
      name
    }
  }
`;

export { CREATE_CLIENT };
