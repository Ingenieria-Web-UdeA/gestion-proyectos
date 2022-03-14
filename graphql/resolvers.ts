import { UserResolvers } from 'graphql/models/users/resolvers';
import { RoleResolvers } from 'graphql/models/role/resolvers';
import { ClientResolvers } from 'graphql/models/client/resolvers';
import { ProjectResolvers } from './models/project/resolvers';
import { ReportResolvers } from './models/report/resolvers';
import { ProfileResolvers } from './models/profile/resolvers';

export const resolvers = [
  UserResolvers,
  RoleResolvers,
  ClientResolvers,
  ProjectResolvers,
  ReportResolvers,
  ProfileResolvers,
];
