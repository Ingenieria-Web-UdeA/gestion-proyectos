import { gql } from '@apollo/client';

const GET_PROFILE = gql`
  query Query($email: String!) {
    getUser(email: $email) {
      id
      email
      name
      profile {
        address
        phone
        customImage
      }
    }
  }
`;

export { GET_PROFILE };
