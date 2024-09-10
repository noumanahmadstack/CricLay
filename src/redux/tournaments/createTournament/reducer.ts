import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {CreateTournamentState} from '../../../modelInterface/redux/tournaments/reducer';

const initialState: CreateTournamentState = {
  name: '',
  seasonYear: '',
  playerPerTeam: 0,
  country: '',
  city: '',
  startDate: '',
  endDate: '',
  tournamentType: '',
  typeDescription: '',
  ballType: '',
  updatedStartDate: '',
  updatedEndDate: '',
  isLoading: false,
};

const slice = createSlice({
  name: 'createTournament',
  initialState,
  reducers: {
    setTournamentName: (
      state,
      action: PayloadAction<CreateTournamentState['name']>,
    ) => {
      state.name = action.payload;
    },
    setSeasonYear: (
      state,
      action: PayloadAction<CreateTournamentState['seasonYear']>,
    ) => {
      state.seasonYear = action.payload;
    },
    setPlayerPerTeam: (
      state,
      action: PayloadAction<CreateTournamentState['playerPerTeam']>,
    ) => {
      state.playerPerTeam = action.payload;
    },
    setCountryName: (
      state,
      action: PayloadAction<CreateTournamentState['country']>,
    ) => {
      state.country = action.payload;
    },
    setCityName: (
      state,
      action: PayloadAction<CreateTournamentState['city']>,
    ) => {
      state.city = action.payload;
    },
    setStartDate: (
      state,
      action: PayloadAction<CreateTournamentState['startDate']>,
    ) => {
      state.startDate = action.payload;
    },
    setEndDate: (
      state,
      action: PayloadAction<CreateTournamentState['endDate']>,
    ) => {
      state.endDate = action.payload;
    },
    setUpdatedStartDate: (
      state,
      action: PayloadAction<CreateTournamentState['updatedStartDate']>,
    ) => {
      state.updatedStartDate = action.payload;
    },
    setUpdatedEndDate: (
      state,
      action: PayloadAction<CreateTournamentState['updatedEndDate']>,
    ) => {
      state.updatedEndDate = action.payload;
    },
    setTournamentType: (
      state,
      action: PayloadAction<CreateTournamentState['tournamentType']>,
    ) => {
      state.tournamentType = action.payload;
    },
    setTypeDescription: (
      state,
      action: PayloadAction<CreateTournamentState['typeDescription']>,
    ) => {
      state.typeDescription = action.payload;
    },
    setBallType: (
      state,
      action: PayloadAction<CreateTournamentState['ballType']>,
    ) => {
      state.ballType = action.payload;
    },
    setisLoading: (
      state,
      action: PayloadAction<CreateTournamentState['isLoading']>,
    ) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase('resetCreateTournament', () => {
      return initialState;
    });
  },
});

export const {
  setTournamentName,
  setSeasonYear,
  setPlayerPerTeam,
  setCountryName,
  setCityName,
  setStartDate,
  setEndDate,
  setTournamentType,
  setTypeDescription,
  setBallType,
  setUpdatedStartDate,
  setUpdatedEndDate,
  setisLoading,
} = slice.actions;

export const createTournamentReducer = slice.reducer;
