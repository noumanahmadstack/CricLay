import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ProfileState} from '../../modelInterface/redux/profile/reducer';
const initialState: ProfileState = {
  name: '',
  email:'',
  countryCode: {
    name: 'Pakistan',
    code: 'PK',
    emoji: '🇵🇰',
    unicode: 'U+1F1F5 U+1F1F0',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PK.svg',
  },
  message:'',
  profilePicture:{
    uri:'',
    fileName:'',
    type:""
  },
  idCardPicture:{
    uri:'',
    fileName:'',
    type:''
  },
  password: '',
  newPassword: '',
  passwordConfirmation: '',
  phoneNumber: '',
  errors: '',
  isLoading: false,
  isUpdating: false,
};
const slice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<ProfileState['name']>) => {
      state.name = action.payload;
    },
    setEmail: (state, action: PayloadAction<ProfileState['email']>) => {
      state.email = action.payload;
    },
    setMessage: (state, action: PayloadAction<ProfileState['message']>) => {
      state.message = action.payload;
    },
    setCountryCode: (state, action: PayloadAction<ProfileState['countryCode']>) => {
      state.countryCode = action.payload;
    },
    setPhoneNumber: (
      state,
      action: PayloadAction<ProfileState['phoneNumber']>,
    ) => {
      state.phoneNumber = action.payload;
    },
    setProfilePicture: (
      state,
      action: PayloadAction<ProfileState['profilePicture']>,
    ) => {
      state.profilePicture = action.payload;
    },
    setCnicPicture: (
      state,
      action: PayloadAction<ProfileState['idCardPicture']>,
    ) => {
      state.idCardPicture = action.payload;
    },
    setCurrentPassword: (
      state,
      action: PayloadAction<ProfileState['password']>,
    ) => {
      state.password = action.payload;
    },
    setNewPassword: (
      state,
      action: PayloadAction<ProfileState['newPassword']>,
    ) => {
      state.newPassword = action.payload;
    },
    setConfirmPassword: (
      state,
      action: PayloadAction<ProfileState['passwordConfirmation']>,
    ) => {
      state.passwordConfirmation = action.payload;
    },
    setErrors: (state, action: PayloadAction<ProfileState['errors']>) => {
      state.errors = action.payload;
    },
    setIsLoading: (state, action: PayloadAction<ProfileState['isLoading']>) => {
      state.isLoading = action.payload;
    },
    setIsUpdating: (
      state,
      action: PayloadAction<ProfileState['isUpdating']>,
    ) => {
      state.isUpdating = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase('resetClaimPlayer', () => {
      return initialState;
    });
  },
});
export const {
  setName,
  setEmail,
  setMessage,
  setCountryCode,
  setProfilePicture,
  setCnicPicture,
  setConfirmPassword,
  setCurrentPassword,
  setErrors,
  setIsLoading,
  setNewPassword,
  setPhoneNumber,
  setIsUpdating,
} = slice.actions;
export const profileReducer = slice.reducer;
