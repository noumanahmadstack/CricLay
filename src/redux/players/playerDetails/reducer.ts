import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {
  PlayerDetailsState,
  PlayersState,
} from '../../../modelInterface/redux/players/reducer';
const initialState: PlayerDetailsState = {
  id: '',
  name: '',
  age: 0,
  country: '',
  city: '',
  specialityType: '',
  isVerified:false,
  avatarUrl:'',
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
    dotBalls:0
  },
  fielderStat:{
    catches: 0,    
    stumpings: 0,   
    runOuts: 0,    
    points: 0 
  },
  teams: [],
  allMatches:[],
  metadataplayerAllMatches: {
    totalPages: 1,
    currentPage: 1,
  },
  liveMatches: [],
  fixtureMatches: [],
  resultsMatches: [],
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
  metadataTeam: {
    totalPages: 1,
    currentPage: 1,
  },
  isLoading: false,
};
const slice = createSlice({
  name: 'playersDetail',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<PlayerDetailsState['name']>) => {
      state.name = action.payload;
    },
    setVerfication: (state, action: PayloadAction<PlayerDetailsState['isVerified']>) => {
      state.isVerified = action.payload;
    },
    
    setId: (state, action: PayloadAction<PlayerDetailsState['id']>) => {
      state.id = action.payload;
    },
    setAge: (state, action: PayloadAction<PlayerDetailsState['age']>) => {
      state.age = action.payload;
    },
    setAvatarUrl:(state, action: PayloadAction<PlayerDetailsState['avatarUrl']>) => {
      state.avatarUrl = action.payload;
    },
    setCountry: (
      state,
      action: PayloadAction<PlayerDetailsState['country']>,
    ) => {
      state.country = action.payload;
    },
    setCity: (state, action: PayloadAction<PlayerDetailsState['city']>) => {
      state.city = action.payload;
    },
    setTeams: (state, action: PayloadAction<PlayerDetailsState['teams']>) => {
      state.teams = action.payload;
    },
    setAllMatches: (state, action: PayloadAction<PlayerDetailsState['allMatches']>) => {
      state.allMatches = action.payload;
    },
    setBattingStat: (state, action: PayloadAction<PlayerDetailsState['battingStat']>) => {
      state.battingStat = action.payload;
    },
    setBowlingStat: (state, action: PayloadAction<PlayerDetailsState['bowlingStat']>) => {
      state.bowlingStat = action.payload;
    },
    setFieldingStat: (state, action: PayloadAction<PlayerDetailsState['fielderStat']>) => {
      state.fielderStat = action.payload;
    },
    setSpecialityType: (
      state,
      action: PayloadAction<PlayerDetailsState['specialityType']>,
    ) => {
      state.specialityType = action.payload;
    },
    setMetaDataPlayerAllMatches: (
      state,
      action: PayloadAction<PlayerDetailsState['metadataplayerAllMatches']>,
    ) => {
      state.metadataplayerAllMatches = action.payload;
    },
    addToPlayerAlMatches: (
      state,
      action: PayloadAction<PlayerDetailsState['allMatches']>,
    ) => {
      state.allMatches = [...state.allMatches, ...action.payload];
    },
    setTeamLiveMatches: (
      state,
      action: PayloadAction<PlayerDetailsState['liveMatches']>,
    ) => {
      state.liveMatches = action.payload;
    },
    setTeamFixtureMatches: (
      state,
      action: PayloadAction<PlayerDetailsState['fixtureMatches']>,
    ) => {
      state.fixtureMatches = action.payload;
    },
    setTeamResultsMatches: (
      state,
      action: PayloadAction<PlayerDetailsState['resultsMatches']>,
    ) => {
      state.resultsMatches = action.payload;
    },
    addToTeamMatches: (
      state,
      action: PayloadAction<PlayerDetailsState['teams']>,
    ) => {
      state.teams = [...state.teams, ...action.payload];
    },
    addToTeamLiveMatches: (
      state,
      action: PayloadAction<PlayerDetailsState['liveMatches']>,
    ) => {
      state.liveMatches = [...state.liveMatches, ...action.payload];
    },
    addToTeamFixtureMatches: (
      state,
      action: PayloadAction<PlayerDetailsState['fixtureMatches']>,
    ) => {
      state.fixtureMatches = [...state.fixtureMatches, ...action.payload];
    },
    addToTeamResultsMatches: (
      state,
      action: PayloadAction<PlayerDetailsState['resultsMatches']>,
    ) => {
      state.resultsMatches = [...state.resultsMatches, ...action.payload];
    },
    setMetaDataLiveMatches: (
      state,
      action: PayloadAction<PlayerDetailsState['metadataTeamLiveMatches']>,
    ) => {
      state.metadataTeamLiveMatches = action.payload;
    },
    setMetaDataFixtureMatches: (
      state,
      action: PayloadAction<PlayerDetailsState['metadataTeamFixtureMatches']>,
    ) => {
      state.metadataTeamFixtureMatches = action.payload;
    },
    setMetaDataResults: (
      state,
      action: PayloadAction<PlayerDetailsState['metadataTeamResultsMatches']>,
    ) => {
      state.metadataTeamResultsMatches = action.payload;
    },
    setMetaDataTeams: (
      state,
      action: PayloadAction<PlayerDetailsState['metadataTeam']>,
    ) => {
      state.metadataTeam = action.payload;
    },
    setIsLoading: (state, action: PayloadAction<PlayersState['isLoading']>) => {
      state.isLoading = action.payload;
    },
    setPlayerDetails: (
      state,
      action: PayloadAction<Partial<PlayerDetailsState>>,
    ) => {
      Object.assign(state, action.payload);
    },
  },
});
export const {
  setAge,
  setCity,
  setVerfication,
  setAllMatches,
  setCountry,
  setAvatarUrl,
  setId,
  setIsLoading,
  setMetaDataPlayerAllMatches,
  setMetaDataFixtureMatches,
  setMetaDataLiveMatches,
  setMetaDataResults,
  setName,
  setBattingStat,
  setBowlingStat,
  setFieldingStat,
  setSpecialityType,
  setTeamFixtureMatches,
  setTeamLiveMatches,
  setTeamResultsMatches,
  setTeams,
  addToTeamFixtureMatches,
  addToTeamLiveMatches,
  addToTeamMatches,
  addToTeamResultsMatches,
  setMetaDataTeams,
  setPlayerDetails,
  addToPlayerAlMatches,
} = slice.actions;
export const playerDetailReducer = slice.reducer;
