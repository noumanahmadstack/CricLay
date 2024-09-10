import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AddPlayersState} from '../../../modelInterface/redux/players/reducer';
const initialState: AddPlayersState = {
  name: '',
  email: '',
  country: '',
  city: '',
  phoneNumber: '',
  error: '',
  isLoading: false,
};
const slice = createSlice({
  name: 'addPlayers',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<AddPlayersState['name']>) => {
      state.name = action.payload;
    },
    setEmail: (state, action: PayloadAction<AddPlayersState['email']>) => {
      state.email = action.payload;
    },
    setCountry: (state, action: PayloadAction<AddPlayersState['country']>) => {
      state.country = action.payload;
    },
    setCity: (state, action: PayloadAction<AddPlayersState['city']>) => {
      state.city = action.payload;
    },
    setError: (state, action: PayloadAction<AddPlayersState['error']>) => {
      state.error = action.payload;
    },
    setPhoneNumber: (
      state,
      action: PayloadAction<AddPlayersState['phoneNumber']>,
    ) => {
      state.phoneNumber = action.payload;
    },
    setIsLoading: (
      state,
      action: PayloadAction<AddPlayersState['isLoading']>,
    ) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase('resetAddPlayer', () => {
      return initialState;
    });
  },
});
export const {
  setName,
  setEmail,
  setCity,
  setCountry,
  setPhoneNumber,
  setIsLoading,
  setError,
} = slice.actions;
export const addPlayerReducer = slice.reducer;
