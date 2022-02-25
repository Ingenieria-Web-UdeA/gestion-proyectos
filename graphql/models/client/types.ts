import { gql } from 'apollo-server-micro';

const ClientTypes = gql`
  type Client {
    id: ID
    name: String
    projects: [Project]
    createdAt: Date
    updatedAt: Date
  }

  type Query {
    getClients: [Client]
  }

  type Mutation {
    createClient(name: String!): Client
    updateClient(id: String!, name: String!): Client
    deleteClient(id: String!): Client
  }
`;

export { ClientTypes };
