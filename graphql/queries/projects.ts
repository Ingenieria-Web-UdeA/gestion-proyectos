import { gql } from '@apollo/client';

const GET_PROJECTS = gql`
  query GetProjects {
    getProjects {
      id
      name
      description
      price
      document
    }
  }
`;

export { GET_PROJECTS };
