import {
  EmailProps,
  NameProps,
  PasswordProps,
  PhoneNumberProps,
} from '../../authentication';
export interface LoginWithEmailProps extends PasswordProps {
  email?: EmailProps['email'];
}
export interface LoginWithPhoneProps extends PasswordProps {
  phoneNumber?: PhoneNumberProps['phoneNumber'];
  countryCode?: string;
}
export interface RefreshTokenApiProps {
  refresh_token: string;
}
export interface SignUpWithPhoneProps extends LoginWithPhoneProps, NameProps {}
export interface SignUpWithEmailProps extends LoginWithEmailProps, NameProps {}
