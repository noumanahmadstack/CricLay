import Toast from 'react-native-simple-toast';
export const toastMessage = (message: string) => {
  Toast.show(message, Toast.LONG);
};
