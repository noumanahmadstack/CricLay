import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GetMatchesState } from '../../../modelInterface/redux/matches/reducer';
export const initialState: GetMatchesState = {
  liveMatches: [],
  myLiveMatches: [],
  fixtureMatches: [],
  myFixtureMatches: [],
  myMatches: [],
  results: [],
  myResults: [],
  index: 0,
  routes: [
    { key: 'Live', title: 'Live' },
    { key: 'Fixtures', title: 'Fixtures' },
    { key: 'Results', title: 'Results' },
  ],
  metadataLiveMatches: {
    totalPages: 1,
    currentPage: 1,
  },
  metadataMyLiveMatches: {
    totalPages: 1,
    currentPage: 1,
  },
  metadataFixtureMatches: {
    totalPages: 1,
    currentPage: 1,
  },
  metadataMyFixtureMatches: {
    totalPages: 1,
    currentPage: 1,
  },
  metadataResultsMatches: {
    totalPages: 1,
    currentPage: 1,
  },
  metadataMyResultsMatches: {
    totalPages: 1,
    currentPage: 1,
  },
  isRefreshing: false,
  isLoading: false,
  matchDetail: {
    id: '',
    liveStreamingUrl: '',
    streamingLinks: [],
    stats: {
      manOfTheMatch: {
        name: '',
        batingStat: {
          name: '',
          batsmanId: '',
        },
        bowlingStat: {
          name: '',
          bowlerId: '',
        },
      },
    },
    shareableId: '',
    wickets: 0,
    venue: {
      id: '',
      title: '',
      lat: '0',
      long: '0',
    },
    overlayUrl: '',
    overs: 0,
    ballType: '',
    formate: '',
    matchType: '',
    scheduledDatetime: '',
    winningStats: {
      winByRuns: false,
      byRuns: '',
      winByWickets: false,
      byWickets: '',
    },
    matchId: '',
    tournament: {
      name: '',
      id: ''
    },
    isTie: false,
    innings: [],
    winningTeam: {
      id: '',
      name: '',
    },
    scorer: {
      player: {
        shareableId: '',
      },
    },
    scorerId: '',

    organizer: {
      name: '',
      id: '',
    },
    tossDecision: '',
    teamOne: {
      id: '',
      name: '',
      location: '',
      netRunRate: 0,
    },
    teamTwo: {
      id: '',
      name: '',
      location: '',
      netRunRate: 0,
    },
    currentInning: {
      id: '',
      matchId: '',
      currentWickets: 0,
      batingTeamId: '',
      bowlingTeamId: '',
      inningNumber: 1,
      totalOvers: 0,
      runs: 0,
      totalWickets: 0,
      ballsPerOver: 6,
      extrasTotal: 0,
      extrasWides: 0,
      extrasByes: 0,
      extrasLegByes: 0,
      extrasNoBalls: 0,
      extrasPenalty: 0,
      currentOvers: 0,
      batingTeamPlayers: [],
      bowlingTeamPlayers: [],
      balls: [],
      batingTeam: {
        id: '',
        name: '',
      },
      bowlingTeam: {
        id: '',
        name: '',
      },
      partnerships: [],
      overs: [],
      currentPartnership: {
        id: '',
        batsmanOneId: '',
        batsmanTwoId: '',
        runs: 0,
        normalBalls: 0,
        extraBalls: 0,
        ballsCount: 0,
        batsmanOneRuns: 0,
        batsmanTwoRuns: 0,
        batsmanOneBalls: 0,
        batsmanTwoBalls: 0,
      },
      currentRunRate: '0',
      inningLineup: {
        strikerId: '',
        nonStrikerId: '',
        bowlerId: '',
        striker: {
          batsmanId: '',
          name: '',
        },
        nonStriker: {
          batsmanId: '',
          name: '',
        },
        bowler: {
          bowlerId: '',
          name: '',
        },
        strikerStat: {
          batsmanId: '',
          name: '',
          runs: '0',
          fours: '0',
          sixers: '0',
          strikeRate: '0.0',
          retiredHurt: false,
          retiredHurtStatus: 0,
          ballsCount: '0',
          isOut: false,
        },
        nonStrikerStat: {
          batsmanId: '',
          name: '',
          runs: '0',
          fours: '0',
          sixers: '0',
          strikeRate: '0.0',
          retiredHurt: false,
          retiredHurtStatus: 0,
          ballsCount: '0',
          isOut: false,
        },
        bowlerStat: {
          bowlerId: '',
          name: '',
          ballsCount: '0',
          overs: '0',
          runs: '0',
          wide: '0',
          wicket: '0',
          maiden: '0',
          retiredHurt: false,
          retiredHurtStatus: 0,
          economyRate: ' 0.0',
          isBowling: false,
          maidenOvers: 0,
          wicketsCount: 0,
        },
      },
    },
  },
  metadataMyMatches: {
    totalPages: 1,
    currentPage: 1,
  },
};
const slice = createSlice({
  name: 'getMatches',
  initialState,
  reducers: {
    setLiveMatches: (
      state,
      action: PayloadAction<GetMatchesState['liveMatches']>,
    ) => {
      state.liveMatches = action.payload;
    },
    setMyLiveMatches: (
      state,
      action: PayloadAction<GetMatchesState['myLiveMatches']>,
    ) => {
      state.myLiveMatches = action.payload;
    },
    addDataToLiveMatches: (
      state,
      action: PayloadAction<GetMatchesState['liveMatches']>,
    ) => {
      state.liveMatches = [...state.liveMatches, ...action.payload];
    },
    addDataToMyLiveMatches: (
      state,
      action: PayloadAction<GetMatchesState['myLiveMatches']>,
    ) => {
      state.myLiveMatches = [...state.myLiveMatches, ...action.payload];
    },
    setMyMatches: (
      state,
      action: PayloadAction<GetMatchesState['myMatches']>,
    ) => {
      state.myMatches = action.payload;
    },
    addToMyMatches: (
      state,
      action: PayloadAction<GetMatchesState['myMatches']>,
    ) => {
      state.myMatches = [...state.myMatches, ...action.payload];
    },
    setFixtureMatches: (
      state,
      action: PayloadAction<GetMatchesState['fixtureMatches']>,
    ) => {
      state.fixtureMatches = action.payload;
    },
    setMyFixtureMatches: (
      state,
      action: PayloadAction<GetMatchesState['myFixtureMatches']>,
    ) => {
      state.myFixtureMatches = action.payload;
    },
    addDataToFixtureMatches: (
      state,
      action: PayloadAction<GetMatchesState['fixtureMatches']>,
    ) => {
      state.fixtureMatches = [...state.fixtureMatches, ...action.payload];
    },
    addDataToMyFixtureMatches: (
      state,
      action: PayloadAction<GetMatchesState['fixtureMatches']>,
    ) => {
      state.myFixtureMatches = [...state.myFixtureMatches, ...action.payload];
    },
    setResults: (state, action: PayloadAction<GetMatchesState['results']>) => {
      state.results = action.payload;
    },
    setMyResults: (
      state,
      action: PayloadAction<GetMatchesState['myResults']>,
    ) => {
      state.myResults = action.payload;
    },
    addDataToResultsMatches: (
      state,
      action: PayloadAction<GetMatchesState['results']>,
    ) => {
      state.results = [...state.results, ...action.payload];
    },
    addDataToMyResultsMatches: (
      state,
      action: PayloadAction<GetMatchesState['myResults']>,
    ) => {
      state.myResults = [...state.myResults, ...action.payload];
    },
    setMetaDataLiveMatches: (
      state,
      action: PayloadAction<GetMatchesState['metadataLiveMatches']>,
    ) => {
      state.metadataLiveMatches = action.payload;
    },
    setMetaDataMyLiveMatches: (
      state,
      action: PayloadAction<GetMatchesState['metadataMyLiveMatches']>,
    ) => {
      state.metadataMyLiveMatches = action.payload;
    },
    setMetaDataFixtureMatches: (
      state,
      action: PayloadAction<GetMatchesState['metadataFixtureMatches']>,
    ) => {
      state.metadataFixtureMatches = action.payload;
    },
    setMetaDataMyFixtureMatches: (
      state,
      action: PayloadAction<GetMatchesState['metadataMyFixtureMatches']>,
    ) => {
      state.metadataMyFixtureMatches = action.payload;
    },
    setMetaDataResultsMatches: (
      state,
      action: PayloadAction<GetMatchesState['metadataResultsMatches']>,
    ) => {
      state.metadataResultsMatches = action.payload;
    },
    setMetaDataMyResultsMatches: (
      state,
      action: PayloadAction<GetMatchesState['metadataMyResultsMatches']>,
    ) => {
      state.metadataMyResultsMatches = action.payload;
    },
    setMetaDataMyMatches: (
      state,
      action: PayloadAction<GetMatchesState['metadataMyMatches']>,
    ) => {
      state.metadataMyMatches = action.payload;
    },
    setIsRefreshing: (
      state,
      action: PayloadAction<GetMatchesState['isRefreshing']>,
    ) => {
      state.isRefreshing = action.payload;
    },
    setIndex: (state, action: PayloadAction<GetMatchesState['index']>) => {
      state.index = action.payload;
    },
    setRoutes: (state, action: PayloadAction<GetMatchesState['routes']>) => {
      state.routes = action.payload;
    },
    setMatchDetail: (
      state,
      action: PayloadAction<GetMatchesState['matchDetail']>,
    ) => {
      state.matchDetail = action.payload;
    },
    setIsLoading: (
      state,
      action: PayloadAction<GetMatchesState['isLoading']>,
    ) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase('resetGetMatches', () => {
      return initialState;
    });
  },
});
export const {
  setLiveMatches,
  addDataToLiveMatches,
  setFixtureMatches,
  addDataToFixtureMatches,
  setResults,
  addDataToResultsMatches,
  setMetaDataLiveMatches,
  setMetaDataResultsMatches,
  setMetaDataFixtureMatches,
  setIsLoading,
  setIsRefreshing,
  setIndex,
  setRoutes,
  setMatchDetail,
  setMyMatches,
  setMetaDataMyMatches,
  addToMyMatches,
  setMetaDataMyFixtureMatches,
  setMetaDataMyLiveMatches,
  setMetaDataMyResultsMatches,
  setMyFixtureMatches,
  setMyLiveMatches,
  setMyResults,
  addDataToMyFixtureMatches,
  addDataToMyLiveMatches,
  addDataToMyResultsMatches,
} = slice.actions;
export const getMatchesReducer = slice.reducer;
