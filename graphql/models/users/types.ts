import { gql } from 'apollo-server-micro';

const UserTypes = gql`
  type User {
    id: ID
    name: String
    email: String
    image: String
    role: Role
    emailVerified: Date
    isDeveloperOf: [Project]
    profile: Profile
    createdAt: Date
    updatedAt: Date
  }

  type Query {
    getUsers: [User]
    getUser(email: String!): User
  }

  input CreateUserAccountInput {
    email: String!
    name: String!
    image: String!
    auth0Id: String!
    role: String!
  }

  type Mutation {
    createUserAccount(data: CreateUserAccountInput!): User
  }
`;

export { UserTypes };
