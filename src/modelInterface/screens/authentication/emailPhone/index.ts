// import { CountryProps } from "../../../components/countriesPicker";
import {
  ErrorsProps,
  NameProps,
  PasswordProps,
  PhoneNumberProps,
  EmailProps as EmailProp,
} from '../../../authentication';
import {CountryProps} from '../../../country';

export interface RenderSceneProps {
  route: {key: string};
}
export interface CommonProps {
  isLoading?: boolean;
  disableSubmit?: boolean;
  isRegisteration?: boolean;
}
export interface EmailProps extends CommonProps {
  onChangeEmail?: (email: EmailProp['email']) => void;
  onChangePasswordForEmail?: (password: PasswordProps['password']) => void;
  onChangeNameForEmail?: (name: NameProps['name']) => void;
  onSubmitEmail?: () => void;
  onErrorsOnEmail?: (error: ErrorsProps['error']) => void;
  nameForEmail?: NameProps['name'];
  email?: EmailProp['email'];
  passwordForEmail?: PasswordProps['password'];
  errorsForEmail?: ErrorsProps['error'] | null;
}
export interface PhoneProps extends CommonProps {
  onChangePhone?: (phoneNumber: PhoneNumberProps['phoneNumber']) => void;
  onChangePasswordForPhone?: (password: PasswordProps['password']) => void;
  onSelectCountry: (data: CountryProps) => void;
  onChangeNameForPhone?: (name: NameProps['name']) => void;
  onSubmitPhone: () => void;
  onErrorsOnPhone?: (error: ErrorsProps['error']) => void;
  errorsForPhone?: ErrorsProps['error'] | null;
  nameForPhoneNumber?: ErrorsProps['error'];
  phone?: PhoneNumberProps['phoneNumber'];
  passwordForPhone?: PasswordProps['password'];
  country?: CountryProps;
}
