import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { GetTournamentState } from '../../../modelInterface/redux/tournaments/reducer';

const initialState: GetTournamentState = {
  mvpCategory: 'all',
  leaderboardCategory: 'batting',
  searchByNameAllTournaments: '',
  tournamentRule: [],
  allTournaments: [],
  allPublicTournament: [],
  allTournamentTeams: [],
  allTournamentGroups: [],
  tournamentGroup: [],
  tournamentRoundMatches: [],
  tournamentLiveMatches: [],
  tournamentFixtureMatches: [],
  touranamentResultMatches: [],
  myTournaments: [],
  upComingTournament: [],
  recentTournament: [],
  getTournament: {
    id: '',
    name: '',
    groups: [],
    startDate: '',
    endDate: '',
    playerPerTeam: 0,
    country: '',
    city: '',
    tournamentType: '',
    ballType: '',
    shareableUrl: '',
    organizer: {
      id: '',
      name: ''
    },
    topPerformances: {
      batter: {
        id: '',
        player: {
          name: '',
          avatarUrl: ''
        },
        batingStat: {
          runs: 0
        },
        team: {
          name: ''
        }
      },
      bowler: {
        id: '',
        player: {
          name: '',
          avatarUrl: ''
        },
        bowlingStat: {
          wicketsCount: 0
        },
        team: {
          name: ''
        }
      }
    },
    stats: {
      playedMatchesCount: 0,
      inningsCount: 0,
      runsCount: 0,
      wicketsCount: 0,
      extrasBallsCount: 0,
      ballsCount: 0,
      foursCount: 0,
      sixersCount: 0,
      fiftiesCount: 0,
      hundredsCount: 0,
      fiftiesPartnershipCount: 0,
      hundredsPartnershipCount: 0,
      maidenCount: 0,
      dotBallsCount: 0,
      catchesCount: 0,
      stumpsCount: 0,
      ballsFacedCount: 0,
      economy: 0.0
    },
    mostValuablePlayers: {
      collection: [],
      metadata: {
        totalPages: 0,
        currentPage: 0
      }
    },
    leaderboard: {
      collection: [],
      metadata: {
        totalPages: 0,
        currentPage: 0
      }
    },
    winningTeams: [],
    teams: {
      collection: [],
    },
    tournamentTeams: {
      collection: [],
    },
    seasonYear: '',
  },
  metadataForAllPublicTournaments: {
    totalPages: 1,
    currentPage: 1,
  },
  metadataForAllTournaments: {
    totalPages: 1,
    currentPage: 1,
  },
  metadataForAllTournamentTeams: {
    totalPages: 1,
    currentPage: 1,
  },
  metadataForAllTournamentGroups: {
    totalPages: 1,
    currentPage: 1,
  },
  metadataForTournamentGroup: {
    currentPage: 1,
    totalPages: 1,
  },
  metadataTournamentLiveMatches: {
    currentPage: 1,
    totalPages: 1,
  },
  metadataTournamentFixtureMatches: {
    currentPage: 1,
    totalPages: 1,
  },
  metadataTournamentResultMatches: {
    currentPage: 1,
    totalPages: 1,
  },
  metadataForMyTournaments: {
    currentPage: 1,
    totalPages: 1,
  },
  metadataForMyUpTournaments: {
    currentPage: 1,
    totalPages: 1,
  },
  metadataForMyRecentTournaments: {
    currentPage: 1,
    totalPages: 1,
  },
  metadataForGetTournament: {
    currentPage: 1,
    totalPages: 1,
  },
  isLoading: true,
  routes: [
    { key: 'Ongoing', title: 'Ongoing' },
    { key: 'Upcoming', title: 'Upcoming' },
    { key: 'Recent', title: 'Recent' }
  ],
  index: 0,
  isRefreshing: false,
};

const slice = createSlice({
  name: 'getTournament',
  initialState,
  reducers: {
    setSearchByNameAllTournament: (
      state,
      action: PayloadAction<GetTournamentState['searchByNameAllTournaments']>,
    ) => {
      state.searchByNameAllTournaments = action.payload;
    },
    setTournamentMVPCategory: (
      state,
      action: PayloadAction<GetTournamentState['mvpCategory']>,
    ) => {
      state.mvpCategory = action.payload;
    },
    setTournamentLeaderboardCategory: (
      state,
      action: PayloadAction<GetTournamentState['leaderboardCategory']>,
    ) => {
      state.leaderboardCategory = action.payload;
    },
    setAllTournaments: (
      state,
      action: PayloadAction<GetTournamentState['allTournaments']>,
    ) => {
      state.allTournaments = action.payload;
    },
    setAllPublicTournaments: (
      state,
      action: PayloadAction<GetTournamentState['allPublicTournament']>,
    ) => {
      state.allPublicTournament = action.payload;
    },
    setTournament: (
      state,
      action: PayloadAction<GetTournamentState['getTournament']>,
    ) => {
      state.getTournament = action.payload;
    },
    resetTournament: state => {
      state.getTournament = initialState.getTournament;
    },

    setMyTournaments: (
      state,
      action: PayloadAction<GetTournamentState['myTournaments']>,
    ) => {
      state.myTournaments = action.payload;
    },
    addToMyTournaments: (
      state,
      action: PayloadAction<GetTournamentState['myTournaments']>,
    ) => {
      state.myTournaments = [...state.myTournaments, ...action.payload];
    },
    addToAllPublicTournaments: (
      state,
      action: PayloadAction<GetTournamentState['allPublicTournament']>,
    ) => {
      state.allPublicTournament = [
        ...state.allPublicTournament,
        ...action.payload,
      ];
    },
    setUpComingTournament: (
      state,
      action: PayloadAction<GetTournamentState['upComingTournament']>,
    ) => {
      state.upComingTournament = action.payload;
    },
    setRecentTournament: (
      state,
      action: PayloadAction<GetTournamentState['recentTournament']>,
    ) => {
      state.recentTournament = action.payload;
    },
    setMetadataForMyTournaments: (
      state,
      action: PayloadAction<GetTournamentState['metadataForMyUpTournaments']>,
    ) => {
      state.metadataForMyUpTournaments = action.payload;
    },
    addToMyUpComingTournaments: (
      state,
      action: PayloadAction<GetTournamentState['upComingTournament']>,
    ) => {
      state.upComingTournament = [
        ...state.upComingTournament,
        ...action.payload,
      ];
    },
    addToMyRecentTournaments: (
      state,
      action: PayloadAction<GetTournamentState['recentTournament']>,
    ) => {
      state.recentTournament = [
        ...state.recentTournament,
        ...action.payload,
      ];
    },
    setMetadataForMyUpTournaments: (
      state,
      action: PayloadAction<GetTournamentState['metadataForMyUpTournaments']>,
    ) => {
      state.metadataForMyUpTournaments = action.payload;
    },
    setAllTournamentTeams: (
      state,
      action: PayloadAction<GetTournamentState['allTournamentTeams']>,
    ) => {
      state.allTournamentTeams = action.payload;
    },
    setAllTournamentGroups: (
      state,
      action: PayloadAction<GetTournamentState['allTournamentGroups']>,
    ) => {
      state.allTournamentGroups = action.payload;
    },
    setTournamentGroup: (
      state,
      action: PayloadAction<GetTournamentState['tournamentGroup']>,
    ) => {
      state.tournamentGroup = action.payload;
    },
    addDataToMVP: (
      state,
      action: PayloadAction<GetTournamentState['getTournament']['mostValuablePlayers']>,
    ) => {
      state.getTournament.mostValuablePlayers.collection = [...state.getTournament.mostValuablePlayers.collection, ...action.payload?.collection]
      state.getTournament.mostValuablePlayers.metadata = action.payload?.metadata
    },
    addDataToLeaderboard: (
      state,
      action: PayloadAction<GetTournamentState['getTournament']['leaderboard']>,
    ) => {
      state.getTournament.leaderboard.collection = [...state.getTournament.leaderboard.collection, ...action.payload?.collection]
      state.getTournament.leaderboard.metadata = action.payload?.metadata
    },
    setMVP: (
      state,
      action: PayloadAction<GetTournamentState['getTournament']['mostValuablePlayers']>,
    ) => {
      state.getTournament.mostValuablePlayers = action.payload
    },
    setLeaderboard: (
      state,
      action: PayloadAction<GetTournamentState['getTournament']['leaderboard']>,
    ) => {
      state.getTournament.leaderboard = action.payload
    },
    setIndex: (state, action: PayloadAction<GetTournamentState['index']>) => {
      state.index = action.payload;
    },
    setMetadataForAllTournaments: (
      state,
      action: PayloadAction<GetTournamentState['metadataForAllTournaments']>,
    ) => {
      state.metadataForAllTournaments = action.payload;
    },
    setMetadataForAllPublicTournaments: (
      state,
      action: PayloadAction<
        GetTournamentState['metadataForAllPublicTournaments']
      >,
    ) => {
      state.metadataForAllPublicTournaments = action.payload;
    },
    setMetadataForAllTournamentTeams: (
      state,
      action: PayloadAction<
        GetTournamentState['metadataForAllTournamentTeams']
      >,
    ) => {
      state.metadataForAllTournamentTeams = action.payload;
    },
    setMetadataForAllTournamentGroups: (
      state,
      action: PayloadAction<
        GetTournamentState['metadataForAllTournamentGroups']
      >,
    ) => {
      state.metadataForAllTournamentGroups = action.payload;
    },
    setMetadataForTournamentGroup: (
      state,
      action: PayloadAction<GetTournamentState['metadataForTournamentGroup']>,
    ) => {
      state.metadataForTournamentGroup = action.payload;
    },
    setMetadataForMyRecentTournaments: (
      state,
      action: PayloadAction<GetTournamentState['metadataForMyRecentTournaments']>,
    ) => {
      state.metadataForMyRecentTournaments = action.payload;
    },
    setMetadataForGetTournament: (
      state,
      action: PayloadAction<GetTournamentState['metadataForGetTournament']>,
    ) => {
      state.metadataForGetTournament = action.payload;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setTournamentLiveMatches: (
      state,
      action: PayloadAction<GetTournamentState['tournamentLiveMatches']>,
    ) => {
      state.tournamentLiveMatches = action.payload;
    },
    setTournamentFixtureMatches: (
      state,
      action: PayloadAction<GetTournamentState['tournamentFixtureMatches']>,
    ) => {
      state.tournamentFixtureMatches = action.payload;
    },
    setTournamentResultMatches: (
      state,
      action: PayloadAction<GetTournamentState['touranamentResultMatches']>,
    ) => {
      state.touranamentResultMatches = action.payload;
    },
    setMetadataTournamentLiveMatches: (
      state,
      action: PayloadAction<
        GetTournamentState['metadataTournamentLiveMatches']
      >,
    ) => {
      state.metadataTournamentLiveMatches = action.payload;
    },
    setTournamentRoundMatches: (
      state,
      action: PayloadAction<GetTournamentState['tournamentRoundMatches']>,
    ) => {
      state.tournamentRoundMatches = action.payload;
    },
    addTournamentLiveMatches: (
      state,
      action: PayloadAction<GetTournamentState['tournamentLiveMatches']>,
    ) => {
      state.tournamentLiveMatches = [
        ...state.tournamentLiveMatches,
        ...action.payload,
      ];
    },
    setMetadataTournamentFixtureMatches: (
      state,
      action: PayloadAction<
        GetTournamentState['metadataTournamentFixtureMatches']
      >,
    ) => {
      state.metadataTournamentFixtureMatches = action.payload;
    },
    addTournamentFixtureMatches: (
      state,
      action: PayloadAction<GetTournamentState['tournamentFixtureMatches']>,
    ) => {
      state.tournamentFixtureMatches = [
        ...state.tournamentFixtureMatches,
        ...action.payload,
      ];
    },
    setMetadataTournamentResulltMatches: (
      state,
      action: PayloadAction<
        GetTournamentState['metadataTournamentResultMatches']
      >,
    ) => {
      state.metadataTournamentResultMatches = action.payload;
    },
    addTournamentResultMatches: (
      state,
      action: PayloadAction<GetTournamentState['touranamentResultMatches']>,
    ) => {
      state.touranamentResultMatches = [
        ...state.touranamentResultMatches,
        ...action.payload,
      ];
    },
    removeTeamFromTournament: (state, action: PayloadAction<{ id: string }>) => {
      state.getTournament = {
        ...state.getTournament,
        teams: {
          ...state.getTournament.teams,
          collection: state.getTournament.teams.collection.filter(
            item => item.id !== action.payload.id,
          ),
        },
      };
    },
    setTournamentRules: (
      state,
      action: PayloadAction<
        GetTournamentState['tournamentRule']
      >,
    ) => {
      state.tournamentRule = action.payload;
    },
  },

  extraReducers: builder => {
    builder.addCase('resetTournament', () => {
      return initialState;
    });
  },
});

export const {
  setSearchByNameAllTournament,
  setTournamentMVPCategory,
  setTournamentLeaderboardCategory,
  setAllTournaments,
  setAllTournamentTeams,
  setAllTournamentGroups,
  setTournamentGroup,
  setMyTournaments,
  setUpComingTournament,
  setMetadataForMyUpTournaments,
  addToMyTournaments,
  addToMyUpComingTournaments,
  addToMyRecentTournaments,
  setTournament,
  resetTournament,
  setIsLoading,
  setIndex,
  setMetadataForAllTournaments,
  setAllPublicTournaments,
  setMetadataForAllTournamentTeams,
  setMetadataForAllTournamentGroups,
  setMetadataForTournamentGroup,
  setMetadataForMyTournaments,
  setMetadataForGetTournament,
  setTournamentLiveMatches,
  setTournamentFixtureMatches,
  setTournamentResultMatches,
  setMetadataTournamentLiveMatches,
  addTournamentLiveMatches,
  setMetadataTournamentFixtureMatches,
  addTournamentFixtureMatches,
  setMetadataTournamentResulltMatches,
  addTournamentResultMatches,
  removeTeamFromTournament,
  setMetadataForAllPublicTournaments,
  addToAllPublicTournaments,
  addDataToLeaderboard,
  addDataToMVP,
  setLeaderboard,
  setMVP,
  setTournamentRoundMatches,
  setRecentTournament,
  setMetadataForMyRecentTournaments,
  setTournamentRules
} = slice.actions;

export const getTournamentReducer = slice.reducer;
