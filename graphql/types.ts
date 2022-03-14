import { gql } from 'apollo-server-micro';
import { UserTypes } from 'graphql/models/users/types';
import { RoleTypes } from 'graphql/models/role/types';
import { ClientTypes } from 'graphql/models/client/types';
import { ProjectTypes } from './models/project/types';
import { ReportTypes } from './models/report/types';
import { ProfileTypes } from './models/profile/types';

const genericTypes = gql`
  scalar Date

  input StringEditField {
    set: String
  }

  input FloatEditField {
    set: Float
  }

  input IntEditField {
    set: Int
  }

  input DateEditField {
    set: Date
  }
`;

export const types = [
  genericTypes,
  UserTypes,
  RoleTypes,
  ClientTypes,
  ProjectTypes,
  ReportTypes,
  ProfileTypes,
];
