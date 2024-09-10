import {store} from '../../redux/store/store';
export const jwtDecoder = async () => {
  const userData = store.getState().userReducer.userData;
  if (userData?.token) {
    return {success: false, token: ''};
  } else {
    return {success: false, token: ''};
  }
};
