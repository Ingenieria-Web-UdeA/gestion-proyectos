import { gql } from 'apollo-server-micro';
import { RoleTypes } from './models/role/types';
import { UserTypes } from './models/user/types';

const genericTypes = gql`
  scalar Date
`;

export const types = [genericTypes, UserTypes, RoleTypes];
