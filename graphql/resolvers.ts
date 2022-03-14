import { UserResolvers } from 'graphql/models/users/resolvers';
import { RoleResolvers } from 'graphql/models/role/resolvers';
import { ClientResolvers } from 'graphql/models/client/resolvers';
import { ProjectResolvers } from 'graphql/models/project/resolvers';
import { ReportResolvers } from 'graphql/models/report/resolvers';
import { ProfileResolvers } from 'graphql/models/profile/resolvers';

export const resolvers = [
  UserResolvers,
  RoleResolvers,
  ClientResolvers,
  ProjectResolvers,
  ReportResolvers,
  ProfileResolvers,
];
