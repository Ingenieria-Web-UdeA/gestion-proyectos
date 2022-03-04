import { gql } from '@apollo/client';

const CREATE_CLIENT = gql`
  mutation CreateClient($data: ClientCreateInput) {
    createClient(data: $data) {
      id
    }
  }
`;

const EDIT_CLIENT = gql`
  mutation UpdateClient($updateClientId: String!, $name: String!) {
    updateClient(id: $updateClientId, name: $name) {
      id
    }
  }
`;

const DELETE_CLIENT = gql`
  mutation DeleteClient($deleteClientId: String!) {
    deleteClient(id: $deleteClientId) {
      id
    }
  }
`;

export { CREATE_CLIENT, EDIT_CLIENT, DELETE_CLIENT };
