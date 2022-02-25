import { gql } from 'apollo-server-micro';

const ReportTypes = gql`
  type Report {
    id: ID
    timeSpent: Int
    date: Date
    comment: String
    project: Project
    projectId: String
    user: User
    userId: String
    createdAt: Date
    updatedAt: Date
  }

  input ReportFilterId {
    id: String!
  }

  input ReportCreateInput {
    timeSpent: Int!
    date: Date!
    comment: String!
    projectId: String!
    userId: String!
  }

  input ReportUpdateInput {
    timeSpent: IntEditField
    date: DateEditField
    comment: StringEditField
    projectId: StringEditField
    userId: StringEditField
  }

  type Query {
    getReports: [Report]
    getReport(where: ReportFilterId!): Report
  }

  type Mutation {
    createReport(data: ReportCreateInput!): Report
    updateReport(where: ReportFilterId!, data: ReportUpdateInput!): Report
    deleteReport(where: ReportFilterId!): Report
  }
`;

export { ReportTypes };
