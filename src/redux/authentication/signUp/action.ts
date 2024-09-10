import {Keyboard} from 'react-native';
import {store} from '../../store/store';
import {replace} from '../../../routes/rootNavigation';
import {setErrorsForEmail, setErrorsForPhone, setIsLoading} from './reducer';
import {
  signUpWithEmailMutation,
  signUpWithPhoneMutation,
} from '../../../apiServices/endPoints/authentication/signUp';
import {signUpValidation} from '../../../utilis/formValidations/signUp';
import {errorCase} from '../../../apiServices/statusCode';
import {setUserData} from '../../user/reducer';
export const onSignUpWithEmail = async () => {
  const {
    nameForEmail: name,
    email,
    passwordForEmail: password,
  } = store.getState().signUpReducer;
  const {valid, error} = signUpValidation({name, email, password});
  store.dispatch(setErrorsForEmail(error));
  if (valid) {
    store.dispatch(setIsLoading(true));
    const response = await signUpWithEmailMutation({name, password, email});
    Keyboard.dismiss();
    if (response !== errorCase) {
      store.dispatch(setUserData(response));
      replace('Drawer', {isRegisteration: true});
    }
    store.dispatch(setIsLoading(false));
  }
};
export const onSignUpWithPhoneNumber = async () => {
  const {
    nameForPhone: name,
    phoneNumber,
    passwordForPhone: password,
    country,
  } = store.getState().signUpReducer;
  const {valid, error} = signUpValidation({name, phoneNumber, password});
  store.dispatch(setErrorsForPhone(error));
  if (valid) {
    store.dispatch(setIsLoading(true));
    const response = await signUpWithPhoneMutation({
      name,
      phoneNumber,
      password,
      countryCode: country?.code,
    });
    Keyboard.dismiss();
    if (response !== errorCase) {
      store.dispatch(setUserData(response));
      replace('Drawer', {isRegisteration: true});
    }
    store.dispatch(setIsLoading(false));
  }
};
