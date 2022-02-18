import { gql } from 'apollo-server-micro';

const RoleTypes = gql`
  enum Enum_RoleName {
    Admin
    Dev
  }
  type Role {
    id: ID!
    name: Enum_RoleName!
    users: [User]
    # page:[Page]
    createdAt: Date
    updatedAt: Date
  }
  type Query {
    getRole(id: String): Role
    getRoles: [Role]
  }
`;

export { RoleTypes };
