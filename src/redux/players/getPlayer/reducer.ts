import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {PlayerObjProps} from '../../../modelInterface/player';
import {PlayersState} from '../../../modelInterface/redux/players/reducer';
const initialState: PlayersState = {
  myPlayers: [],
  allPlayers: [],
  searchMyPlayerByName: '',
  searchAllPlayerByName: '',
  metadataForMyPlayers: {
    currentPage: 1,
    totalPages: 1,
  },
  metadataForAllPlayers: {
    currentPage: 1,
    totalPages: 1,
  },
  isLoading: false,
};
const slice = createSlice({
  name: 'getPlayers',
  initialState,
  reducers: {
    setMyPlayers: (state, action: PayloadAction<PlayersState['myPlayers']>) => {
      state.myPlayers = action.payload;
    },
    addMyPlayerToState: (state, action: PayloadAction<PlayerObjProps>) => {
      state.myPlayers = [...state.myPlayers, action.payload];
    },
    setAllPlayers: (
      state,
      action: PayloadAction<PlayersState['allPlayers']>,
    ) => {
      state.allPlayers = action.payload;
    },
    addAllPlayerToState: (
      state,
      action: PayloadAction<PlayersState['allPlayers']>,
    ) => {
      state.allPlayers = [...state.allPlayers, ...action.payload];
    },
    setSearchMyPlayerByName: (
      state,
      action: PayloadAction<PlayersState['searchMyPlayerByName']>,
    ) => {
      state.searchMyPlayerByName = action.payload;
    },
    setSearchAllPlayerByName: (
      state,
      action: PayloadAction<PlayersState['searchAllPlayerByName']>,
    ) => {
      state.searchAllPlayerByName = action.payload;
    },
    setMetaDataForMyPlayers: (
      state,
      action: PayloadAction<PlayersState['metadataForMyPlayers']>,
    ) => {
      state.metadataForMyPlayers = action.payload;
    },
    setMetaDataForAllPlayers: (
      state,
      action: PayloadAction<PlayersState['metadataForAllPlayers']>,
    ) => {
      state.metadataForAllPlayers = action.payload;
    },
    setIsLoading: (state, action: PayloadAction<PlayersState['isLoading']>) => {
      state.isLoading = action.payload;
    },
  },
});
export const {
  setAllPlayers,
  setMyPlayers,
  addMyPlayerToState,
  setIsLoading,
  setMetaDataForMyPlayers,
  setMetaDataForAllPlayers,
  setSearchAllPlayerByName,
  setSearchMyPlayerByName,
  addAllPlayerToState,
} = slice.actions;
export const getPlayerReducer = slice.reducer;
