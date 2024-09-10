import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {TeamProfileState} from '../../../modelInterface/redux/teams/reducer';
const initialState: TeamProfileState = {
  teamPlayers: [],
  creatorId: '',
  overAllStat:{
    potmAward: 0,
    lowestRuns: 0,
    wonMatches: 0,
    highestRuns: 0,
    lossMatches: 0,
    drawnMatches: 0,
    playedMatches: 0,
    tournamentCount: 0
  },
  battingStat:{
    innings:0,
    playedMatches:0,
    runs: "",
    ballsCount: 0,
    fours: "",
    sixers: "",
    strikeRate: "",
    normalBalls: 0,
    averageRate: 0,
    points: 0,
    ballsFaced: 0,
    fifties:0,
    hundreds:0,
    hundredsPartnership:0,
    fiftiesPartnership:0,
    highestPartnership:0,
    highestScore:0
  },
  bowlingStat:{
    innings:0,
    playedMatches:0,
    runs: "",    
    ballsCount: "",   
    overs: "0.0",   
    wide: 0,          
    economyRate: 0,   
    isBowling: false, 
    maidenOvers: 0,   
    normalBalls: 0, 
    wicketsCount: 0,  
    extraBalls: 0,    
    averageRate: 0,   
    points: 0,  
    ballsFaced: 0 ,
    dotBalls:0,
    fiveWickets:0,
    threeWickets:0,
    totalWickets:0
  },
  fielderStat:{
    catches: 0,    
    stumpings: 0,   
    runOuts: 0,    
    points: 0 ,
    totalWickets:0
  },
  liveMatches: [],
  fixtureMatches: [],
  resultsMatches: [],
  metadataTeamPlayer: {
    totalPages: 1,
    currentPage: 1,
  },
  metadataTeamLiveMatches: {
    totalPages: 1,
    currentPage: 1,
  },
  metadataTeamFixtureMatches: {
    totalPages: 1,
    currentPage: 1,
  },
  metadataTeamResultsMatches: {
    totalPages: 1,
    currentPage: 1,
  },
  isLoading: false,
};
const slice = createSlice({
  name: 'teamProfile',
  initialState,
  reducers: {
    setTeamPlayers: (
      state,
      action: PayloadAction<TeamProfileState['teamPlayers']>,
    ) => {
      state.teamPlayers = action.payload;
    },
    setOverAllStat: (state, action: PayloadAction<TeamProfileState['overAllStat']>) => {
      state.overAllStat = action.payload;
    },
    setBattingStat: (state, action: PayloadAction<TeamProfileState['battingStat']>) => {
      state.battingStat = action.payload;
    },
    setBowlingStat: (state, action: PayloadAction<TeamProfileState['bowlingStat']>) => {
      state.bowlingStat = action.payload;
    },
    setFieldingStat: (state, action: PayloadAction<TeamProfileState['fielderStat']>) => {
      state.fielderStat = action.payload;
    },
    setCreatorId: (
      state,
      action: PayloadAction<TeamProfileState['creatorId']>,
    ) => {
      state.creatorId = action.payload;
    },
    addToTeamPlayers: (
      state,
      action: PayloadAction<TeamProfileState['teamPlayers']>,
    ) => {
      state.teamPlayers = [...state.teamPlayers, ...action.payload];
    },
    setTeamLiveMatches: (
      state,
      action: PayloadAction<TeamProfileState['liveMatches']>,
    ) => {
      state.liveMatches = action.payload;
    },
    setTeamFixtureMatches: (
      state,
      action: PayloadAction<TeamProfileState['fixtureMatches']>,
    ) => {
      state.fixtureMatches = action.payload;
    },
    setTeamResultsMatches: (
      state,
      action: PayloadAction<TeamProfileState['resultsMatches']>,
    ) => {
      state.resultsMatches = action.payload;
    },
    addToTeamLiveMatches: (
      state,
      action: PayloadAction<TeamProfileState['liveMatches']>,
    ) => {
      state.liveMatches = [...state.liveMatches, ...action.payload];
    },
    addToTeamFixtureMatches: (
      state,
      action: PayloadAction<TeamProfileState['fixtureMatches']>,
    ) => {
      state.fixtureMatches = [...state.fixtureMatches, ...action.payload];
    },
    addToTeamResultsMatches: (
      state,
      action: PayloadAction<TeamProfileState['resultsMatches']>,
    ) => {
      state.resultsMatches = [...state.resultsMatches, ...action.payload];
    },
    setMetaDataTeamPlayers: (
      state,
      action: PayloadAction<TeamProfileState['metadataTeamPlayer']>,
    ) => {
      state.metadataTeamPlayer = action.payload;
    },
    setMetaDataLiveMatches: (
      state,
      action: PayloadAction<TeamProfileState['metadataTeamLiveMatches']>,
    ) => {
      state.metadataTeamLiveMatches = action.payload;
    },
    setMetaDataFixtureMatches: (
      state,
      action: PayloadAction<TeamProfileState['metadataTeamFixtureMatches']>,
    ) => {
      state.metadataTeamFixtureMatches = action.payload;
    },
    setMetaDataResults: (
      state,
      action: PayloadAction<TeamProfileState['metadataTeamResultsMatches']>,
    ) => {
      state.metadataTeamResultsMatches = action.payload;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase('resetTeamProfile', () => {
      return initialState;
    });
  },
});
export const {
  setCreatorId,
  setOverAllStat,
  setBattingStat,
  setBowlingStat,
  setFieldingStat,
  setTeamPlayers,
  setMetaDataTeamPlayers,
  setTeamFixtureMatches,
  setTeamLiveMatches,
  setTeamResultsMatches,
  addToTeamPlayers,
  addToTeamFixtureMatches,
  addToTeamLiveMatches,
  addToTeamResultsMatches,
  setIsLoading,
  setMetaDataFixtureMatches,
  setMetaDataLiveMatches,
  setMetaDataResults,
} = slice.actions;
export const teamProfileReducer = slice.reducer;
