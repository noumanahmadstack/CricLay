import {nameValidation, passwordValidation} from '..';
import {ValidationResultProps} from '../../../modelInterface/utilis/formValidations';
export const updateProfileValidation = ({
  name,
  password,
  newPassword,
  passwordConfirmation,
}: {
  name: string;
  password: string;
  newPassword?: string;
  passwordConfirmation?: string;
  phoneNumber?: string;
}): ValidationResultProps => {
  const nameValidate = nameValidation({name});
  if (!nameValidate.valid) {
    return {
      valid: false,
      error: nameValidate.error,
    };
  } else if (
    !!newPassword &&
    !passwordValidation({password: newPassword}).valid
  ) {
    return {
      valid: false,
      error: passwordValidation({password: newPassword}).error,
    };
  } else if (!!newPassword && passwordConfirmation !== newPassword) {
    return {
      valid: false,
      error: "Password doesn't match",
    };
  } else if (password === '') {
    return {
      valid: false,
      error: 'Please enter your current password to save changes',
    };
  } else {
    return {valid: true, error: null};
  }
};
