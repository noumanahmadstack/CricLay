import {Keyboard} from 'react-native';
import {store} from '../../store/store';
import {
  loginWithEmailMutation,
  loginWithPhoneMutation,
} from '../../../apiServices/endPoints/authentication/login';
import {replace} from '../../../routes/rootNavigation';
import {
  setErrorsForEmail,
  setErrorsForPhone,
  setIsLoading,
  setShowLoginModal,
} from './reducer';
import {loginValidation} from '../../../utilis/formValidations/login';
import {errorCase} from '../../../apiServices/statusCode';
import {setUserData} from '../../user/reducer';
export const onLoginWithEmail = async () => {
  const {email, passwordForEmail: password} = store.getState().loginReducer;
  const {valid, error} = loginValidation({email, password});
  store.dispatch(setErrorsForEmail(error));
  if (valid) {
    store.dispatch(setIsLoading(true));
    const response = await loginWithEmailMutation({email, password});
    Keyboard.dismiss();
    if (response !== errorCase) {
      store.dispatch(setUserData(response));
      replace('Drawer', {isRegisteration: true});
    }
    store.dispatch(setIsLoading(false));
  }
};
export const onLoginWithPhoneNumber = async () => {
  const {
    phoneNumber,
    passwordForPhone: password,
    country,
  } = store.getState().loginReducer;
  const {valid, error} = loginValidation({phoneNumber, password});
  store.dispatch(setErrorsForPhone(error));
  if (valid) {
    store.dispatch(setIsLoading(true));
    const response = await loginWithPhoneMutation({
      phoneNumber,
      password,
      countryCode: country?.code,
    });
    Keyboard.dismiss();
    if (response !== errorCase) {
      replace('Drawer', {isRegisteration: true});
      store.dispatch(setUserData(response));
    }
    store.dispatch(setIsLoading(false));
  }
};

export const checkUserLogined = (e?: any) => {
  const {userData} = store.getState().userReducer;
  if (!userData.user) {
    if (e) {
      e.preventDefault();
    }
    store.dispatch(setShowLoginModal(true));
    return true;
  } else {
    return false;
  }
};
