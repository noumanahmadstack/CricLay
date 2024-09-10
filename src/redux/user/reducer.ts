import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {UserObjProps, UserState} from '../../modelInterface/redux/user/reducer';
const initialState: UserState = {
  userData: {},
  isDark: false,
};
const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<UserState['userData']>) => {
      state.userData = action.payload;
    },
    setIsDark: (state, action: PayloadAction<boolean>) => {
      state.isDark = action.payload;
    },
    resetUserData: state => {
      state.userData = initialState.userData;
    },
    setUpdateProfile: (state, action: PayloadAction<UserObjProps>) => {
      state.userData = {...state.userData, user: action.payload};
    },
  },
});
export const {setUserData, setIsDark, resetUserData, setUpdateProfile} =
  slice.actions;
export const userReducer = slice.reducer;
