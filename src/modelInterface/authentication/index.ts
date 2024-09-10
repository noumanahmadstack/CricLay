import {CountryProps} from '../country';

export interface AuthenticationProps {
  country?: CountryProps;
  email?: EmailProps['email'];
  phoneNumber?: PhoneNumberProps['phoneNumber'];
}

export interface PhoneNumberProps {
  phoneNumber: string;
}
export interface EmailProps {
  email: string;
}
export interface PasswordProps {
  password: string;
}
export interface NameProps {
  name: string;
}
export interface ErrorsProps {
  error: string;
}
