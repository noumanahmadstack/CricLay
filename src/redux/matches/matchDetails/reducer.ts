import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  GetMatchesState,
  MatchDetailsStateProps,
} from '../../../modelInterface/redux/matches/reducer';
export const initialState: MatchDetailsStateProps = {
  isLoading: false,
  matchDetail: {
    id: '',
    overlayUrl: '',
    actionStatus: '',
    message: '',
    tossDecision: '',
    tickerToggleStatus: 'regular',
    shareableId: '',
    liveStreamingUrl: '',
    matchCategoryType: '',
    matchSubCategoryType: '',
    scheduledDatetime: '',
    formate: '',
    streamingLinks: [],
    stats: {
      manOfTheMatch: {
        name: '',
        batingStat: {
          name: '',
          batsmanId: '',
          runs: '',
          fours: '',
          sixers: '',
          strikeRate: '',
          ballsCount: 0,
        },
        bowlingStat: {
          name: '',
          bowlerId: '',
          overs: '',
          runs: 0,
          economyRate: '',
        },
      },
    },
    teamOne: {
      id: '',
      name: '',
      location: '',
      runs: 0,
      wickets: 0,
      yetToBat: false,
      overs: 0,
    },
    scorer: {
      player: {
        shareableId: '',
      },
    },
    teamTwo: {
      id: '',
      name: '',
      location: '',
      runs: 0,
      wickets: 0,
      yetToBat: false,
      overs: 0,
    },
    organizer: {
      id: '',
      name: '',
    },
    winningTeam: {
      name: '',
      id: '',
    },
    venue: {
      id: '',
      title: '',
      subTitle: '',
      lat: '',
      long: '',
      fullAddress: '',
    },
    isTie: false,
    winningStats: {
      winByRuns: false,
      byRuns: '',
      winByWickets: false,
      byWickets: '',
    },
    overs: 0,
    ballType: '',
    wickets: 0,
    matchId: '',
    matchType: '',
    tournament: {
      id: '',
      name: '',
    },
    summary: {
      matchSummaryUrl:'',
      teamOne: {
        id: '',
        name: '',
        location: '',
      },
      teamTwo: {
        id: '',
        name: '',
        location: '',
      },
    },
    currentInning: {
      id: '',
      status: '',
      ballsCount: 0,
      matchId: '',
      bowlingTeam: {
        id: '',
        name: '',
      },
      currentWickets: 0,
      batingTeamId: '',
      bowlingTeamId: '',
      inningNumber: 1,
      totalOvers: 0,
      currentOvers: 0,
      currentRunRate: '',
      runs: 0,
      totalWickets: 0,
      ballsPerOver: 0,
      extrasTotal: 0,
      extrasWides: 0,
      extrasByes: 0,
      extrasLegByes: 0,
      extrasNoBalls: 0,
      extrasPenalty: 0,
      batingTeamPlayers: [],
      bowlingTeamPlayers: [],
      duration: 0,
      balls: [],
      batingTeam: {
        id: '',
        name: '',
      },
      currentPartnership: {
        id: ' ',
        batsmanOneId: ' ',
        batsmanTwoId: ' ',
        runs: 0,
        normalBalls: 0,
        extraBalls: 0,
        ballsCount: 0,
        batsmanOneRuns: 0,
        batsmanTwoRuns: 0,
        batsmanOneBalls: 0,
        batsmanTwoBalls: 0,
      },
      inningLineup: {
        strikerId: '',
        nonStrikerId: '',
        bowlerId: '',
        striker: {
          name: '',
          id: '',
          shareableId: '',
          batsmanId: '',
        },
        nonStriker: {
          name: '',
          id: '',
          shareableId: '',
          batsmanId: '',
        },
        bowler: {
          name: '',
          bowlerId: '',
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
          ballsCount: 0,
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
      partnerships: [],
      overs: [],
    },
    innings: [],
  },
  matchMvps: []
};
const slice = createSlice({
  name: 'matchDetails',
  initialState,
  reducers: {
    setMatchDetail: (
      state,
      action: PayloadAction<GetMatchesState['matchDetail']>,
    ) => {
      state.matchDetail = action.payload;
    },
    setStatusCode: (
      state,
      action: PayloadAction<GetMatchesState['matchDetail']['tickerToggleStatus']>,
    ) => {
      state.matchDetail.tickerToggleStatus = action.payload;
    },
    setMatchMvps: (
      state,
      action: PayloadAction<MatchDetailsStateProps['matchMvps']>,
    ) => {
      state.matchMvps = action.payload
    },
    setUpdateManOfMatch: (
      state,
      action: PayloadAction<
        GetMatchesState['matchDetail']['stats']['manOfTheMatch']
      >,
    ) => {
      state.matchDetail.stats.manOfTheMatch = action.payload;
    },
    setIsLoading: (
      state,
      action: PayloadAction<GetMatchesState['isLoading']>,
    ) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase('resetMatchDetails', () => {
      return initialState;
    });
  },
});
export const { setIsLoading, setMatchDetail, setUpdateManOfMatch, setMatchMvps, setStatusCode } =
  slice.actions;
export const matchDetailsReducer = slice.reducer;
