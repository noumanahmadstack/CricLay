import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {PlayerObjProps} from '../../../../modelInterface/player';
import {TeamPlayerStateProps} from '../../../../modelInterface/redux/teamPlayers/reducer';
const initialState: TeamPlayerStateProps = {
  playing: [],
  battingPlaying: [],
  bowlerPlaying: [],
  allPlayers: [],
  searchKeywordsTab1: '',
  searchKeywordsTab2: '',
  metadataForPlaying: {
    currentPage: 1,
    totalPages: 1,
  },
  metadataForAllPlayers: {
    currentPage: 1,
    totalPages: 1,
  },
  addDataToPlaying: {
    data: [],
    isBatsman: false,
  },
  isLoading: false,
};
const slice = createSlice({
  name: 'teamPlayerReducer',
  initialState,
  reducers: {
    setPlaying: (
      state,
      action: PayloadAction<TeamPlayerStateProps['playing']>,
    ) => {
      state.playing = action.payload;
    },
    setBattingPlaying: (
      state,
      action: PayloadAction<TeamPlayerStateProps['battingPlaying']>,
    ) => {
      state.battingPlaying = action.payload;
    },
    addPlayingToBattingState: (
      state,
      action: PayloadAction<TeamPlayerStateProps['addDataToPlaying']>,
    ) => {
      const {data} = action.payload;
      const newData = data.map((item: PlayerObjProps) => ({
        ...item,
        batsmanId: item.id,
      }));
      state.battingPlaying = [...newData, ...state.battingPlaying];
    },
    setBowlerPlaying: (
      state,
      action: PayloadAction<TeamPlayerStateProps['bowlerPlaying']>,
    ) => {
      state.bowlerPlaying = action.payload;
    },
    removeBattingPlaying: (
      state,
      action: PayloadAction<string>,
    ) => {
      state.battingPlaying = state.battingPlaying.filter((item) => item.id !== action.payload);
    },
    addPlayingToState: (
      state,
      action: PayloadAction<TeamPlayerStateProps['addDataToPlaying']>,
    ) => {
      const {data, isBatsman} = action.payload;
      const newData = data.map((item: PlayerObjProps) => ({
        ...item,
        batsmanId: isBatsman ? item.id : undefined,
        bowlerId: !isBatsman ? item.id : undefined,
      }));
      state.playing = [...state.playing, ...newData];
    },
    addPlayingToBowlingState: (
      state,
      action: PayloadAction<TeamPlayerStateProps['addDataToPlaying']>,
    ) => {
      const {data} = action.payload;
      const newData = data.map((item: PlayerObjProps) => ({
        ...item,
        bowlerId: item.id,
      }));
      state.bowlerPlaying = [...newData, ...state.bowlerPlaying];
    },
    removeBowlerPlaying: (
      state,
      action: PayloadAction<string>,
    ) => {
      state.bowlerPlaying = state.bowlerPlaying.filter((item) => item.id !== action.payload);
    },
    setAllPlayers: (
      state,
      action: PayloadAction<TeamPlayerStateProps['allPlayers']>,
    ) => {
      state.allPlayers = action.payload;
    },
    changeStatusOfPlaying: (
      state,
      action: PayloadAction<PlayerObjProps['id']>,
    ) => {
      state.allPlayers = state.allPlayers.map(item => {
        if (item.id === action.payload) {
          return {...item, isPlayingInMatch: true};
        } else {
          return item;
        }
      });
    },
    addAllPlayerToState: (state, action: PayloadAction<PlayerObjProps>) => {
      state.allPlayers = [...state.allPlayers, action.payload];
    },
    setMetadataForPlaying: (
      state,
      action: PayloadAction<TeamPlayerStateProps['metadataForPlaying']>,
    ) => {
      state.metadataForPlaying = action.payload;
    },
    setSearchKeywordTab1: (
      state,
      action: PayloadAction<TeamPlayerStateProps['searchKeywordsTab1']>,
    ) => {
      state.searchKeywordsTab1 = action.payload;
    },
    setSearchKeywordTab2: (
      state,
      action: PayloadAction<TeamPlayerStateProps['searchKeywordsTab2']>,
    ) => {
      state.searchKeywordsTab2 = action.payload;
    },
    setMetadataForAllPlayers: (
      state,
      action: PayloadAction<TeamPlayerStateProps['metadataForAllPlayers']>,
    ) => {
      state.metadataForAllPlayers = action.payload;
    },
    setIsLoading: (
      state,
      action: PayloadAction<TeamPlayerStateProps['isLoading']>,
    ) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase('resetTeamPlayerReducer', () => {
      return initialState;
    });
  },
});
export const {
  setPlaying,
  setAllPlayers,
  addAllPlayerToState,
  addPlayingToState,
  setMetadataForAllPlayers,
  setMetadataForPlaying,
  setIsLoading,
  changeStatusOfPlaying,
  setSearchKeywordTab1,
  setSearchKeywordTab2,
  setBattingPlaying,
  setBowlerPlaying,
  addPlayingToBattingState,
  addPlayingToBowlingState,
  removeBattingPlaying,
  removeBowlerPlaying
} = slice.actions;
export const teamPlayerReducer = slice.reducer;
