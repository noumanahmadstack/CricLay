import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {MatchVenuesState} from '../../../modelInterface/redux/matchVenues/reducer';
const initialState: MatchVenuesState = {
  data: [],
  lat: '31.520370',
  long: '74.358749',
  title: '',
  subTitle: '',
  isLoading: false,
  isRefreshing: false,
  fullAddress: '',
  metadata: {
    currentPage: 1,
    totalPages: 1,
  },
  searchForVenueByName: '',
  error: '',
};
const slice = createSlice({
  name: 'matchVenues',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<MatchVenuesState['data']>) => {
      state.data = action.payload;
    },
    addToData: (state, action: PayloadAction<MatchVenuesState['data']>) => {
      state.data = [...state.data, ...action.payload];
    },
    setLatitude: (state, action: PayloadAction<MatchVenuesState['lat']>) => {
      state.lat = action.payload;
    },
    setLongitude: (state, action: PayloadAction<MatchVenuesState['long']>) => {
      state.long = action.payload;
    },
    setTitle: (state, action: PayloadAction<MatchVenuesState['title']>) => {
      state.title = action.payload;
    },
    setSubTitle: (
      state,
      action: PayloadAction<MatchVenuesState['subTitle']>,
    ) => {
      state.subTitle = action.payload;
    },
    setFullAddress: (
      state,
      action: PayloadAction<MatchVenuesState['fullAddress']>,
    ) => {
      state.fullAddress = action.payload;
    },
    setSearchForVenueByName: (
      state,
      action: PayloadAction<MatchVenuesState['searchForVenueByName']>,
    ) => {
      state.searchForVenueByName = action.payload;
    },
    setError: (state, action: PayloadAction<MatchVenuesState['error']>) => {
      state.error = action.payload;
    },
    setIsLoading: (
      state,
      action: PayloadAction<MatchVenuesState['isLoading']>,
    ) => {
      state.isLoading = action.payload;
    },
    setMetaData: (
      state,
      action: PayloadAction<MatchVenuesState['metadata']>,
    ) => {
      state.metadata = action.payload;
    },
    setIsRefreshing: (
      state,
      action: PayloadAction<MatchVenuesState['isRefreshing']>,
    ) => {
      state.isRefreshing = action.payload;
    },
  },
});
export const {
  setData,
  setLatitude,
  setLongitude,
  setTitle,
  setFullAddress,
  setError,
  setSubTitle,
  setIsLoading,
  setIsRefreshing,
  setMetaData,
  addToData,
  setSearchForVenueByName,
} = slice.actions;
export const matchVenuesReducer = slice.reducer;
