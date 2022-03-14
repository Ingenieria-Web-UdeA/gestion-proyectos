import { gql } from '@apollo/client';

const UPDATE_PROFILE_IMAGE = gql`
  mutation UpdateProfileImage($user: String, $image: String) {
    updateProfileImage(user: $user, image: $image) {
      id
      profile {
        customImage
      }
    }
  }
`;

export { UPDATE_PROFILE_IMAGE };
