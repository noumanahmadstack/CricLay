import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import { blacklist, whitelist } from './constants';
import { userReducer } from '../user/reducer';
import { loginReducer } from '../authentication/login/reducer';
import { signUpReducer } from '../authentication/signUp/reducer';
import { startMatchReducer } from '../matches/startMatch/reducer';
import { addPlayerReducer } from '../players/addPlayer/reducer';
import { addTeamReducer } from '../teams/addTeam/reducer';
import { teamsReducer } from '../teams/teams/reducer';
import { getPlayerReducer } from '../players/getPlayer/reducer';
import { matchVenuesReducer } from '../matches/matchVenues/reducer';
import { getMatchesReducer } from '../matches/getMatches/reducer';
import { teamPlayerReducer } from '../scoring/normal/teamPlayers/reducer';
import { scoreReducer } from '../scoring/normal/score/reducer';
import { getTournamentReducer } from '../tournaments/getTournament/reducer';
import { createTournamentReducer } from '../tournaments/createTournament/reducer';
import { matchDetailsReducer } from '../matches/matchDetails/reducer';
import { profileReducer } from '../profile/reducer';
import { teamProfileReducer } from '../teams/teamProfile/reducer';
import { playerDetailReducer } from '../players/playerDetails/reducer';
import { amateurScoreReducer } from '../scoring/amateur/score/reducer';
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist,
  blacklist,
};
const appReducer = combineReducers({
  userReducer,
  loginReducer,
  startMatchReducer,
  signUpReducer,
  addPlayerReducer,
  addTeamReducer,
  teamsReducer,
  getPlayerReducer,
  matchVenuesReducer,
  getMatchesReducer,
  teamPlayerReducer,
  scoreReducer,
  getTournamentReducer,
  createTournamentReducer,
  matchDetailsReducer,
  profileReducer,
  teamProfileReducer,
  playerDetailReducer,
  amateurScoreReducer
});
const rootReducer = (state?: any, action?: any) => {
  if (action.type === 'userLogout') {
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
export type RootState = ReturnType<typeof appReducer>;
export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});
export const persistor = persistStore(store);
