import { gql, useMutation } from '@apollo/client';
export const deleteAccountMutation: string = `mutation deleteAcccount{
    deleteAcccount(
        input: {}
    ){
        success,
        errors {
            field
            message
        }
    }
}`;
export const updateAccountMutation: string = `mutation updateUser(
    $password: String!,
    $name: String,
    $email: String,
    $phoneNumber: String,
    $countryCode: String,
    $newPassword: String,
    $passwordConfirmation: String
) {
    updateUser(
        input: {
            password: $password
            name: $name
            email: $email
            phoneNumber: $phoneNumber
            countryCode: $countryCode
            newPassword: $newPassword
            passwordConfirmation: $passwordConfirmation
        }
    ){
        success,
        errors {
            field
            message
        }
        user {
            name
            email
            phoneNumber
            countryCode
        }
    }
}`;

export const claimProfileMutation: string = `mutation createClaimProfile(
  $name: String!,
  $email: String!,
  $phoneNumber: String!,
  $countryCode: String!,
  $profilePicture: ImageType!,
  $idCardPicture: ImageType!,
  $playerId: ID!,
  $message: String!
) {
  createClaimProfile(
    input: {
      name: $name,
      email: $email,
      phoneNumber: $phoneNumber,
      countryCode: $countryCode,
      profilePicture: $profilePicture,
      idCardPicture: $idCardPicture,
      playerId: $playerId,
      message: $message
    }
  ) {
    success,
    errors {
      field
      message
    }
  }
}`
// export const claimProfileMutation = gql`mutation createClaimProfile(
//     $name: String!,
//     $email: String!,
//     $phoneNumber: String!,
//     $countryCode: String!,
//     $profilePicture: ImageType!,
//     $idCardPicture: ImageType!,
//     $playerId: ID!,
//     $message: String!   
// ) {
//     createClaimProfile(
//         input: {
//             name: $name
//             email: $email
//             phoneNumber: $phoneNumber
//             countryCode: $countryCode
//             profilePicture: $profilePicture
//             idCardPicture: $idCardPicture
//             playerId: $playerId
//             message: $message
//         }
//     ){
//         success,
//         errors {
//             field
//             message
//         }
//         message
//     }
// }`
