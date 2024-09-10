import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AddTeamsState} from '../../../modelInterface/redux/teams/reducer';
const initialState: AddTeamsState = {
  name: '',
  location: '',
  error: '',
  isShowAddTeamModal: false,
  tournament_id: '',
  isLoading: false,
  team_id: '',
};
const slice = createSlice({
  name: 'addTeam',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<AddTeamsState['name']>) => {
      state.name = action.payload;
    },
    setLocation: (state, action: PayloadAction<AddTeamsState['location']>) => {
      state.location = action.payload;
    },
    setError: (state, action: PayloadAction<AddTeamsState['error']>) => {
      state.error = action.payload;
    },
    setTournamentId: (
      state,
      action: PayloadAction<AddTeamsState['tournament_id']>,
    ) => {
      state.tournament_id = action.payload;
    },
    setIsShowAddTeamModal: (
      state,
      action: PayloadAction<AddTeamsState['isShowAddTeamModal']>,
    ) => {
      state.isShowAddTeamModal = action.payload;
    },
    setIsLoading: (
      state,
      action: PayloadAction<AddTeamsState['isLoading']>,
    ) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase('resetAddTeams', () => {
      return initialState;
    });
  },
});
export const {
  setName,
  setLocation,
  setIsLoading,
  setIsShowAddTeamModal,
  setError,
  setTournamentId,
} = slice.actions;
export const addTeamReducer = slice.reducer;
