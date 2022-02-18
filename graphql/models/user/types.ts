import { gql } from 'apollo-server-micro';

const UserTypes = gql`
  type User {
    id: ID!
    email: String!
    name: String!
    image: String
    emailVerified: Date
    # profile: Profile
    role: Role!
    # isDeveloperOf: [Project]
    # reports: [Report]
    createdAt: Date
    updatedAt: Date
  }

  type Query {
    getUser(id: String): User
    getUsers: [User]
  }
`;

export { UserTypes };
