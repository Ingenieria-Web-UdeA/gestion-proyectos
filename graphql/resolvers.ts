import { UserResolvers } from 'graphql/models/users/resolvers';
import { RoleResolvers } from 'graphql/models/role/resolvers';
import { ClientResolvers } from 'graphql/models/client/resolvers';

export const resolvers = [UserResolvers, RoleResolvers, ClientResolvers];
