export const signUpWithPhoneQuery: string = `mutation signUpWithPhoneNumber($name: String!, $phoneNumber: String, $password: String!, $countryCode: String) {
    signUp(
        input: {
            name: $name,
            phoneNumber: $phoneNumber,
            countryCode: $countryCode,
            password: $password
        }
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
            phoneNumber
        },
        token
    }
}`;
export const signUpWithEmailQuery: string = `mutation signUpWithEmail($name: String!, $email: String, $password: String!) {
    signUp(
        input: {
            name: $name,
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
        },
        token
    }
}`;
