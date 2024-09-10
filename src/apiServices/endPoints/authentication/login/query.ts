export const loginWithEmailQuery: string = `mutation loginWithEmail($email: String, $password: String!){
    login(
        input: {
            email: $email,
            password: $password
        }
    ) {
        success,
        errors {
            field
            message
        }
        user {
            id
            name
            email
            phoneNumber
player{
            avatarUrl
            shareableId
            id
}
        }
        token
    }
}`;
export const loginWithPhoneQuery: string = `mutation loginWithPhoneNumber($phoneNumber: String!, $password: String!, $countryCode: String) {
    login(
        input: {
            phoneNumber: $phoneNumber,
            countryCode: $countryCode,
            password: $password
        }
    ) {
        success,
        errors {
            field
            message
        }
        user {
            id
            name
            email
            phoneNumber     
        },
        token
    }
}`;
export const refreshTokenMutation: string = `mutation refreshUserToken($refresh_token: String!) {
    refreshUserToken(
        input: {token: $refresh_token}
    ) {
        errors {
            field
            message
        }
        success
        user {
            id
            name
            email
        },
        token
    }
}`;
