import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {LoginState} from '../../../modelInterface/redux/authentication/reducer';
const initialState: LoginState = {
  email: '',
  passwordForEmail: '',
  showLoginModal: false,
  isShowActionModal: false,
  passwordForPhone: '',
  phoneNumber: '',
  errorsForEmail: '',
  errorsForPhone: '',
  country: {
    name: 'Pakistan',
    code: 'PK',
    emoji: '🇵🇰',
    unicode: 'U+1F1F5 U+1F1F0',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PK.svg',
  },
  index: 0,
  routes: [
    {key: 'Email', title: 'Email'},
    {key: 'Phone', title: 'Phone No'},
  ],
  isLoading: false,
};
const slice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<LoginState['email']>) => {
      state.email = action.payload;
    },
    setShowLoginModal: (
      state,
      action: PayloadAction<LoginState['showLoginModal']>,
    ) => {
      state.showLoginModal = action.payload;
    },
    setIsShowActionModal: (
      state,
      action: PayloadAction<LoginState['isShowActionModal']>,
    ) => {
      state.isShowActionModal = action.payload;
    },
    setPhoneNumber: (
      state,
      action: PayloadAction<LoginState['phoneNumber']>,
    ) => {
      state.phoneNumber = action.payload;
    },
    setPasswordForEmail: (
      state,
      action: PayloadAction<LoginState['passwordForEmail']>,
    ) => {
      state.passwordForEmail = action.payload;
    },
    setPasswordForPhone: (
      state,
      action: PayloadAction<LoginState['passwordForPhone']>,
    ) => {
      state.passwordForPhone = action.payload;
    },
    setIndex: (state, action: PayloadAction<LoginState['index']>) => {
      state.index = action.payload;
    },
    setCountry: (state, action: PayloadAction<LoginState['country']>) => {
      state.country = action.payload;
    },
    setRoutes: (state, action: PayloadAction<LoginState['routes']>) => {
      state.routes = action.payload;
    },
    setErrorsForEmail: (
      state,
      action: PayloadAction<LoginState['errorsForEmail']>,
    ) => {
      state.errorsForEmail = action.payload;
    },
    setErrorsForPhone: (
      state,
      action: PayloadAction<LoginState['errorsForPhone']>,
    ) => {
      state.errorsForPhone = action.payload;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});
export const {
  setEmail,
  setPasswordForEmail,
  setErrorsForPhone,
  setErrorsForEmail,
  setIndex,
  setIsLoading,
  setRoutes,
  setCountry,
  setPasswordForPhone,
  setPhoneNumber,
  setShowLoginModal,
  setIsShowActionModal,
} = slice.actions;
export const loginReducer = slice.reducer;
