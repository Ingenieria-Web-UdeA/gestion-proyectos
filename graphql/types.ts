import { gql } from 'apollo-server-micro';
import { UserTypes } from 'graphql/models/users/types';
import { RoleTypes } from 'graphql/models/role/types';
import { ClientTypes } from 'graphql/models/client/types';

const genericTypes = gql`
  scalar Date
`;

export const types = [genericTypes, UserTypes, RoleTypes, ClientTypes];
