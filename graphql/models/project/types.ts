import { gql } from 'apollo-server-micro';

const ProjectTypes = gql`
  type Project {
    id: ID
    name: String
    description: String
    price: Float
    document: String
    # dueDate: Date
    # client: Client
    # clientId: String
    # developers: [User]
    # reports: [Report]
    createdAt: Date
    updatedAt: Date
  }

  input ProjectFilterId {
    id: String!
  }

  input ProjectCreateInput {
    name: String!
    description: String!
    price: Float!
    document: String!
    # dueDate: Date!
    # clientId: String!
  }

  input ProjectUpdateInput {
    name: StringEditField
    description: StringEditField
    price: FloatEditField
    dueDate: DateEditField
  }

  type Query {
    getProjects: [Project]
    getProject(where: ProjectFilterId!): Project
  }

  type Mutation {
    createProject(data: ProjectCreateInput!): Project
    updateProject(where: ProjectFilterId!, data: ProjectUpdateInput!): Project
    deleteProject(where: ProjectFilterId!): Project
  }
`;

export { ProjectTypes };
