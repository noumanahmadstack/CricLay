import {Alert} from 'react-native';
import {store} from '../store/store';
import {resetUserData} from './reducer';
export const onLogout = () => {
  Alert.alert('Logout', 'Are you sure you want to logout?', [
    {
      text: 'Cancel',
      onPress: () => console.log('Cancel Pressed'),
      style: 'cancel',
    },
    {text: 'OK', onPress: () => store.dispatch(resetUserData())},
  ]);
};
export const onExpireToken = () => {};
