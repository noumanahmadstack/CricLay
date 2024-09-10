import {emailValidation, nameValidation, passwordValidation} from '..';
import {ValidationResultProps} from '../../../modelInterface/utilis/formValidations';
export const signUpValidation = ({
  name,
  email,
  password,
  phoneNumber,
}: {
  name: string;
  email?: string;
  password: string;
  phoneNumber?: string;
}): ValidationResultProps => {
  const nameValidate = nameValidation({name});
  const emailValidate = emailValidation({email});
  const passwordValidate = passwordValidation({password});
  if (!nameValidate.valid) {
    return {
      valid: false,
      error: nameValidate.error,
    };
  } else if (email !== undefined && !emailValidate.valid) {
    return {
      valid: false,
      error: emailValidate.error,
    };
  } else if (phoneNumber !== undefined && phoneNumber === '') {
    return {
      valid: false,
      error: 'Please enter your Phone Number',
    };
  } else if (!!phoneNumber && phoneNumber.length < 10) {
    return {
      valid: false,
      error: 'Your Phone number must should be greater than 10',
    };
  } else if (!passwordValidate.valid) {
    return {
      valid: false,
      error: passwordValidate.error,
    };
  } else {
    return {valid: true, error: null};
  }
};
