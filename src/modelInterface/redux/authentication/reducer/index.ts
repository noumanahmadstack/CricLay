import {
  AuthenticationProps,
  EmailProps,
  ErrorsProps,
  NameProps,
  PasswordProps,
} from '../../../authentication';
import {TabRoutesProps} from '../../../tabRoutes';
export interface AuthenticationCommonProps
  extends AuthenticationProps,
    TabRoutesProps {
  passwordForEmail: PasswordProps['password'];
  passwordForPhone: PasswordProps['password'];
  errorsForEmail: ErrorsProps['error'] | null;
  errorsForPhone: ErrorsProps['error'] | null;
  isLoading: boolean;
  index: number;
}
export interface LoginState extends AuthenticationCommonProps {
  email: EmailProps['email'];
  showLoginModal: boolean;
  isShowActionModal: boolean;
}
export interface SignUpState extends AuthenticationCommonProps {
  nameForEmail: NameProps['name'];
  nameForPhone: NameProps['name'];
}
