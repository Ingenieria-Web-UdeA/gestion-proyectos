import { gql } from '@apollo/client';

const GET_USER_PROFILE = gql`
  query GetUser($email: String!) {
    getUser(email: $email) {
      id
      email
      name
      image
      profile {
        customImage
        address
        phone
      }
    }
  }
`;

export { GET_USER_PROFILE };
