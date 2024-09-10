import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../redux/store/store';
import {
  setEmail,
  setPasswordForEmail,
  setPasswordForPhone,
  setPhoneNumber,
  setErrorsForEmail,
  setErrorsForPhone,
  setNameForEmail,
  setNameForPhone,
  setCountry,
} from '../../../redux/authentication/signUp/reducer';
import {
  onSignUpWithEmail,
  onSignUpWithPhoneNumber,
} from '../../../redux/authentication/signUp/action';
import EmailPhone from '../../../views/authentication/emailPhone';
const SignUp: React.FC = () => {
  const dispatch = useDispatch();
  const {
    nameForEmail,
    nameForPhone,
    country,
    email,
    phoneNumber,
    passwordForEmail,
    passwordForPhone,
    isLoading,
    errorsForEmail,
    errorsForPhone,
  } = useSelector((state: RootState) => state.signUpReducer);
  return (
    <EmailPhone
      country={country}
      isRegisteration={true}
      email={email}
      isLoading={isLoading}
      phone={phoneNumber}
      passwordForEmail={passwordForEmail}
      passwordForPhone={passwordForPhone}
      errorsForEmail={errorsForEmail}
      errorsForPhone={errorsForPhone}
      nameForEmail={nameForEmail}
      nameForPhoneNumber={nameForPhone}
      onChangeNameForEmail={e => {
        dispatch(setErrorsForEmail(''))
        dispatch(setNameForEmail(e));
      }}
      onChangeNameForPhone={e => {
        dispatch(setErrorsForEmail(''))
        dispatch(setNameForPhone(e));
      }}
      onSelectCountry={e => {
        dispatch(setErrorsForEmail(''))
        dispatch(setCountry(e));
      }}
      onChangeEmail={e => {
        dispatch(setErrorsForEmail(''))
        dispatch(setEmail(e));
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
      onSubmitEmail={onSignUpWithEmail}
      onSubmitPhone={onSignUpWithPhoneNumber}
    />
  );
};
export default SignUp;
