import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {SignUpState} from '../../../modelInterface/redux/authentication/reducer';
const initialState: SignUpState = {
  nameForEmail: '',
  nameForPhone: '',
  email: '',
  passwordForEmail: '',
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
  name: 'signUp',
  initialState,
  reducers: {
    setNameForEmail: (
      state,
      action: PayloadAction<SignUpState['nameForEmail']>,
    ) => {
      state.nameForEmail = action.payload;
    },
    setNameForPhone: (
      state,
      action: PayloadAction<SignUpState['nameForPhone']>,
    ) => {
      state.nameForPhone = action.payload;
    },
    setEmail: (state, action: PayloadAction<SignUpState['email']>) => {
      state.email = action.payload;
    },
    setPhoneNumber: (
      state,
      action: PayloadAction<SignUpState['phoneNumber']>,
    ) => {
      state.phoneNumber = action.payload;
    },
    setPasswordForEmail: (
      state,
      action: PayloadAction<SignUpState['passwordForEmail']>,
    ) => {
      state.passwordForEmail = action.payload;
    },
    setPasswordForPhone: (
      state,
      action: PayloadAction<SignUpState['passwordForPhone']>,
    ) => {
      state.passwordForPhone = action.payload;
    },
    setIndex: (state, action: PayloadAction<SignUpState['index']>) => {
      state.index = action.payload;
    },
    setCountry: (state, action: PayloadAction<SignUpState['country']>) => {
      state.country = action.payload;
    },
    setRoutes: (state, action: PayloadAction<SignUpState['routes']>) => {
      state.routes = action.payload;
    },
    setErrorsForEmail: (
      state,
      action: PayloadAction<SignUpState['errorsForEmail']>,
    ) => {
      state.errorsForEmail = action.payload;
    },
    setErrorsForPhone: (
      state,
      action: PayloadAction<SignUpState['errorsForPhone']>,
    ) => {
      state.errorsForPhone = action.payload;
    },
    setIsLoading: (state, action: PayloadAction<SignUpState['isLoading']>) => {
      state.isLoading = action.payload;
    },
  },
});
export const {
  setEmail,
  setPasswordForEmail,
  setErrorsForEmail,
  setErrorsForPhone,
  setIndex,
  setIsLoading,
  setRoutes,
  setCountry,
  setPasswordForPhone,
  setPhoneNumber,
  setNameForPhone,
  setNameForEmail,
} = slice.actions;
export const signUpReducer = slice.reducer;
