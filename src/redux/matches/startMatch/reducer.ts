import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StartMatchState } from '../../../modelInterface/redux/startMatch/reducer';
const initialState: StartMatchState = {
  index: 0,
  overlayUrl: '',
  playersIndex: 0,
  categoryType:'',
  subCategory:'',
  isOpenCalendar: false,
  isTossModalOpen: false,
  isStartingLiveMatch: false,
  isStartingFixtureMatch: false,
  routes: [
    { key: 'MyTeams', title: 'My Teams' },
    { key: 'Teams', title: 'Teams' },
  ],
  playersRoutes: [
    { key: 'MyPlayers', title: 'My Players' },
    { key: 'Players', title: 'Players' },
  ],
  teamA: {
    id: '',
    name: '',
    location: '',
  },
  teamB: {
    id: '',
    name: '',
    location: '',
  },
  scorerId: '',
  scheduled_datetime: '',
  overs: 0,
  venue: {
    id: '',
    title: '',
    subTitle: '',
    lat: '',
    long: '',
    fullAddress: '',
  },
  formate: '',
  wickets: 0,
  ball_type: '',
  match_type: '',
  tossWinningTeam: {
    id: '',
    name: '',
    location: '',
  },
  toss_decision: '',
  toss_winning_team_id: '',
  tossDecisions: [
    {
      name: 'Bat',
      toss_decision: 'bating',
    },
    {
      name: 'Bowl',
      toss_decision: 'bowling',
    },
  ],
  error: '',
  oversData: [
    {
      key: '0',
      value: '10',
    },
    {
      key: '1',
      value: '20',
    },
    {
      key: '2',
      value: '30',
    },
    {
      key: '3',
      value: '40',
    },
    {
      key: '4',
      value: '50',
    },
  ],
  matchFromat: [
    {
      key: 't10',
      value: 'T10',
    },
    {
      key: 't20',
      value: 'T20',
    },
    {
      key: 'hundred',
      value: '100 Balls',
    },
    {
      key: 'one_day',
      value: 'One Day',
    },
    {
      key: 'test_match',
      value: 'Test Match',
    },
  ],
  matchType: [
    {
      key: 'normal',
      value: 'Friendly',
    },
    {
      key: 'series',
      value: 'Series',
    },
    {
      key: 'tournament',
      value: 'Tournament',
    },
    {
      key: 'amateur',
      value: 'Amateur',
    },
    {
      key: 'club',
      value: 'Club',
    },
  ],
category: [
    {
      key: "match",
      value: "League Match"
    },
    {
      key: 'knockout',
      value: 'Knockout',
    },
    {
      key: 'playoffs',
      value: 'Play Offs',
    },
  
  ],
 subCategories:{
    knockout: [
      {
        key: "quarter_final",
        value: 'Quarter Final'
      },
      {
        key: "semi_final",
        value: "Semi Final"
      },
      {
        key: "final",
        value: "Final"
      }
    ],
    playoffs: [
      {
        key: "qualifier",
        value: 'Qualifier'
      },
      {
        key: 'eliminator',
        value: 'Eliminator',
      },
      {
        key: "final",
        value: "Final"
      }
    ]
  }
};
const slice = createSlice({
  name: 'startMatch',
  initialState,
  reducers: {
    setOverlayURL: (state, action: PayloadAction<StartMatchState['overlayUrl']>) => {
      state.overlayUrl = action.payload;
    },
    setTeamA: (state, action: PayloadAction<StartMatchState['teamA']>) => {
      state.teamA = action.payload;
    },
    setTeamB: (state, action: PayloadAction<StartMatchState['teamB']>) => {
      state.teamB = action.payload;
    },
    setDate: (
      state,
      action: PayloadAction<StartMatchState['scheduled_datetime']>,
    ) => {
      state.scheduled_datetime = action.payload;
    },
    setOvers: (state, action: PayloadAction<StartMatchState['overs']>) => {
      state.overs = action.payload;
    },
    setScorerId: (
      state,
      action: PayloadAction<StartMatchState['scorerId']>,
    ) => {
      state.scorerId = action.payload;
    },
    setVenue: (state, action: PayloadAction<StartMatchState['venue']>) => {
      state.venue = action.payload;
    },
    setFormat: (state, action: PayloadAction<StartMatchState['formate']>) => {
      state.formate = action.payload;
    },
    setWickets: (state, action: PayloadAction<StartMatchState['wickets']>) => {
      state.wickets = action.payload;
    },
    setBallType: (
      state,
      action: PayloadAction<StartMatchState['ball_type']>,
    ) => {
      state.ball_type = action.payload;
    },
    setMatchType: (
      state,
      action: PayloadAction<StartMatchState['match_type']>,
    ) => {
      state.match_type = action.payload;
    },
    setIndex: (state, action: PayloadAction<StartMatchState['index']>) => {
      state.index = action.payload;
    },
    setPlayersIndex: (
      state,
      action: PayloadAction<StartMatchState['playersIndex']>,
    ) => {
      state.playersIndex = action.payload;
    },
    setRoutes: (state, action: PayloadAction<StartMatchState['routes']>) => {
      state.routes = action.payload;
    },
    setPlayersRoutes: (
      state,
      action: PayloadAction<StartMatchState['playersRoutes']>,
    ) => {
      state.playersRoutes = action.payload;
    },

    setIsTossModalOpen: (
      state,
      action: PayloadAction<StartMatchState['isTossModalOpen']>,
    ) => {
      state.isTossModalOpen = action.payload;
    },
    setIsStartingFixture: (
      state,
      action: PayloadAction<StartMatchState['isStartingFixtureMatch']>,
    ) => {
      state.isStartingFixtureMatch = action.payload;
    },
    setIsStartingLiveMatch: (
      state,
      action: PayloadAction<StartMatchState['isStartingLiveMatch']>,
    ) => {
      state.isStartingLiveMatch = action.payload;
    },
    setIsOpenCalendar: (
      state,
      action: PayloadAction<StartMatchState['isOpenCalendar']>,
    ) => {
      state.isOpenCalendar = action.payload;
    },
    setTossWinningTeam: (
      state,
      action: PayloadAction<StartMatchState['tossWinningTeam']>,
    ) => {
      state.tossWinningTeam = action.payload;
    },
    setTossDecision: (
      state,
      action: PayloadAction<StartMatchState['toss_decision']>,
    ) => {
      state.toss_decision = action.payload;
    },
    setTossWinningTeamId: (
      state,
      action: PayloadAction<StartMatchState['toss_winning_team_id']>,
    ) => {
      state.toss_winning_team_id = action.payload;
    },
    setErrors: (state, action: PayloadAction<StartMatchState['error']>) => {
      state.error = action.payload;
    },
    setCategory: (state, action: PayloadAction<StartMatchState['categoryType']>) => {
      state.categoryType = action.payload;
    },
    setSubCategory: (state, action: PayloadAction<StartMatchState['subCategory']>) => {
      state.subCategory = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase('resetStartMatch', () => {
      return initialState;
    });
  },
});
export const {
  setOverlayURL,
  setIndex,
  setTeamA,
  setPlayersIndex,
  setRoutes,
  setPlayersRoutes,
  setBallType,
  setDate,
  setScorerId,
  setFormat,
  setMatchType,
  setOvers,
  setTeamB,
  setWickets,
  setIsTossModalOpen,
  setTossDecision,
  setTossWinningTeam,
  setTossWinningTeamId,
  setVenue,
  setIsOpenCalendar,
  setErrors,
  setIsStartingFixture,
  setIsStartingLiveMatch,
  setCategory,
  setSubCategory
} = slice.actions;
export const startMatchReducer = slice.reducer;
