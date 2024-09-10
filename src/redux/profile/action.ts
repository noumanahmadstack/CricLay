import {Alert} from 'react-native';
import {
  claimProfileApi,
  deleteAccountApi,
  updateAccountApi,
} from '../../apiServices/endPoints/profile';
import {errorCase} from '../../apiServices/statusCode';
import {toastMessage} from '../../components/toastMessages';
import {goBack, replace} from '../../routes/rootNavigation';
import {updateProfileValidation} from '../../utilis/formValidations/updateProfile';
import {store} from '../store/store';
import {resetUserData, setUpdateProfile} from '../user/reducer';
import {setErrors, setIsLoading, setIsUpdating} from './reducer';
import { claimProfileMutation } from '../../apiServices/endPoints/profile/query';
export const onDelete = () => {
  Alert.alert(
    'Delete Account',
    'Are you sure you want to delete this account?',
    [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => onDeleteAccount(),
      },
    ],
  );
};
export const onDeleteAccount = async () => {
  store.dispatch(setIsLoading(true));
  const response = await deleteAccountApi();
  if (response !== errorCase) {
    toastMessage('Account deleted Successfully');
    store.dispatch(resetUserData());
    replace('Drawer');
    return;
  }
};
export const onUpdateProfile = async () => {
  store.dispatch(setIsUpdating(true));
  const {name, password, phoneNumber, newPassword, passwordConfirmation} =
    store.getState().profileReducer;
  const {valid, error} = updateProfileValidation({
    name,
    password,
    newPassword,
    passwordConfirmation,
    phoneNumber,
  });
  store.dispatch(setErrors(error));
  if (valid) {
    const response = await updateAccountApi({
      name,
      newPassword: newPassword || null,
      password,
      passwordConfirmation: passwordConfirmation || null,
    });
    if (response !== errorCase) {
      store.dispatch(setUpdateProfile(response?.user));
      toastMessage('Updated Successfully!');
      goBack();
    }
  }
  store.dispatch(setIsUpdating(false));
};
export const claimProfile = async (playerId:string) => {
  store.dispatch(setIsLoading(true));
  const {name, email, phoneNumber, countryCode,message,profilePicture,idCardPicture} =
  store.getState().profileReducer;
  const formData = new FormData();
  formData.append(
      'query',
      claimProfileMutation
  );
  formData.append('variables[playerId]', playerId);
  formData.append('variables[name]', name);
  formData.append('variables[email]', email);
  formData.append('variables[phoneNumber]', phoneNumber);
  formData.append('variables[countryCode]', countryCode.code);
  formData.append('variables[message]', message);
  formData.append('variables[profilePicture]', {
      uri: profilePicture?.uri,
      name: profilePicture?.fileName,
      type: profilePicture?.type
  });
  formData.append('variables[idCardPicture]', {
      uri: idCardPicture?.uri,
      name: idCardPicture?.fileName,
      type: idCardPicture?.type
  });
  const response = await claimProfileApi(formData)
  if (response !== errorCase) {
    resetStates()
    toastMessage("Your Profile claim successfully");
  }
  store.dispatch(setIsLoading(false));

};
export const disableSubmit = ({
  mainName,
  name,
  password,
  newPassword,
  passwordConfirmation,
}: {
  mainName?: string;
  name: string;
  password: string;
  newPassword?: string;
  passwordConfirmation?: string;
}) => {
  if (
    name === mainName &&
    (!newPassword || !passwordConfirmation) &&
    !password
  ) {
    return true;
  }
  return false;
};

export const disableClaim = () => {
  const {name, email, phoneNumber, countryCode,message,profilePicture,idCardPicture} =
  store.getState().profileReducer;
  if (name && email && phoneNumber && countryCode && message && profilePicture && idCardPicture) {
    return false;
  } else {
    return true;
  }
};
export const resetStates = () => {
  store.dispatch({ type: 'resetClaimPlayer' });
};
