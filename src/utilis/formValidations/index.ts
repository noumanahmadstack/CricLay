import {ValidationResultProps} from '../../modelInterface/utilis/formValidations';
export const emailValidation = ({
  email,
}: {
  email?: string;
}): ValidationResultProps => {
  const reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === undefined || email === '') {
    return {
      valid: false,
      error: 'Please Enter Your Email',
    };
  } else if (!reg.test(email)) {
    return {
      valid: false,
      error: 'Please Enter a Valid Email',
    };
  } else {
    return {
      valid: true,
      error: null,
    };
  }
};
export const passwordValidation = ({
  password,
}: {
  password: string;
}): ValidationResultProps => {
  if (password === '') {
    return {
      valid: false,
      error: 'Please Enter Your Password',
    };
  } else if (password.length < 8) {
    return {
      valid: false,
      error: 'Password Must be atleast 8 Characters Long',
    };
  } else {
    return {
      valid: true,
      error: null,
    };
  }
};
export const confirmPasswordValidation = ({
  password,
  confirmPassword,
}: {
  password: string;
  confirmPassword: string;
}): ValidationResultProps => {
  const {valid, error} = passwordValidation({password});
  if (!valid) {
    return {
      valid: false,
      error: error,
    };
  } else if (password.length < 8) {
    return {
      valid: false,
      error: 'Password Must be atleast 8 Characters Long',
    };
  } else if (confirmPassword === '') {
    return {
      valid: false,
      error: 'Please Enter Your Confirm Password',
    };
  } else if (password !== confirmPassword) {
    return {
      valid: false,
      error: "Passwords Doesn't Match",
    };
  } else {
    return {
      valid: true,
      error: null,
    };
  }
};

export const nameValidation = ({
  name,
}: {
  name: string;
}): ValidationResultProps => {
  if (name === '') {
    return {
      valid: false,
      error: 'Please Enter Your Name',
    };
  } else if (name?.length < 3) {
    return {
      valid: false,
      error: 'Name must should contain 3 letters',
    };
  } else {
    return {
      valid: true,
      error: null,
    };
  }
};
