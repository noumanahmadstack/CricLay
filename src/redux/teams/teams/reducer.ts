import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {TeamsState} from '../../../modelInterface/redux/teams/reducer';
const initialState: TeamsState = {
  myTeams: [],
  allTeams: [],
  metadataMyTeams: {
    totalPages: 1,
    currentPage: 1,
  },
  metadataAllTeams: {
    totalPages: 1,
    currentPage: 1,
  },
  searchByNameAllTeams: '',
  searchByNameMyTeams: '',
  isLoading: false,
};
const slice = createSlice({
  name: 'teams',
  initialState,
  reducers: {
    setMyTeams: (state, action: PayloadAction<TeamsState['myTeams']>) => {
      state.myTeams = action.payload;
    },
    addToMyTeams: (state, action: PayloadAction<TeamsState['myTeams']>) => {
      state.myTeams = [...state.myTeams, ...action.payload];
    },
    setAllTeams: (state, action: PayloadAction<TeamsState['allTeams']>) => {
      state.allTeams = action.payload;
    },
    addToAllTeams: (state, action: PayloadAction<TeamsState['allTeams']>) => {
      state.allTeams = [...state.allTeams, ...action.payload];
    },
    setSearchByNameAllTeams: (
      state,
      action: PayloadAction<TeamsState['searchByNameAllTeams']>,
    ) => {
      state.searchByNameAllTeams = action.payload;
    },
    setSearchByNameMyTeams: (
      state,
      action: PayloadAction<TeamsState['searchByNameMyTeams']>,
    ) => {
      state.searchByNameMyTeams = action.payload;
    },
    setMetaDataMyTeams: (
      state,
      action: PayloadAction<TeamsState['metadataMyTeams']>,
    ) => {
      state.metadataMyTeams = action.payload;
    },
    setMetaDataAllTeams: (
      state,
      action: PayloadAction<TeamsState['metadataAllTeams']>,
    ) => {
      state.metadataAllTeams = action.payload;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase('resetGetTeams', () => {
      return initialState;
    });
  },
});
export const {
  setMyTeams,
  setAllTeams,
  addToAllTeams,
  addToMyTeams,
  setMetaDataAllTeams,
  setMetaDataMyTeams,
  setIsLoading,
  setSearchByNameAllTeams,
  setSearchByNameMyTeams,
} = slice.actions;
export const teamsReducer = slice.reducer;
