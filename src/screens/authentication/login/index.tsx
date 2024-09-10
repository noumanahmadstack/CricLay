import React from 'react';
import { RootState } from '../../../redux/store/store';
import EmailPhone from '../../../views/authentication/emailPhone';
import { useDispatch, useSelector } from 'react-redux';
import {
  onLoginWithEmail,
  onLoginWithPhoneNumber,
} from '../../../redux/authentication/login/action';
import {
  setEmail,
  setPasswordForEmail,
  setPasswordForPhone,
  setErrorsForEmail,
  setErrorsForPhone,
  setPhoneNumber,
  setCountry,
} from '../../../redux/authentication/login/reducer';
const Login: React.FC = () => {
  const dispatch = useDispatch();
  const {
    country,
    email,
    passwordForEmail,
    passwordForPhone,
    isLoading,
    errorsForEmail,
    errorsForPhone,
  } = useSelector((state: RootState) => state.loginReducer);
  return (
    <EmailPhone
      country={country}
      isRegisteration={false}
      email={email}
      isLoading={isLoading}
      passwordForEmail={passwordForEmail}
      passwordForPhone={passwordForPhone}
      errorsForEmail={errorsForEmail}
      errorsForPhone={errorsForPhone}
      onChangeEmail={e => {
        dispatch(setErrorsForEmail(''))
        dispatch(setEmail(e));
      }}
      onSelectCountry={e => {
        dispatch(setErrorsForEmail(''))
        dispatch(setCountry(e));
      }}
      onChangePhone={e => {
        dispatch(setErrorsForEmail(''))
        dispatch(setPhoneNumber(e));
      }}
      onChangePasswordForEmail={e => {
        dispatch(setErrorsForEmail(''))
        dispatch(setPasswordForEmail(e));
      }}
      onChangePasswordForPhone={e => {
        dispatch(setErrorsForPhone(''))
        dispatch(setPasswordForPhone(e));
      }}
      onSubmitEmail={onLoginWithEmail}
      onSubmitPhone={onLoginWithPhoneNumber}
    />
  );
};
export default Login;
