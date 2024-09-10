import { Alert } from 'react-native';
import {
  addTeamToGroup,
  createTournament,
  createTournamentGroup,
  deleteTeamFromGroup,
  deleteTeamFromTournament,
  deleteTournamentGroup,
  updateTournament,
  updateTournamentGroup,
} from '../../../apiServices/endPoints/tournaments';
import { errorCase } from '../../../apiServices/statusCode';
import { toastMessage } from '../../../components/toastMessages';
import { TournamentIdActionProps } from '../../../modelInterface/redux/tournaments/action';
import { navigate } from '../../../routes/rootNavigation';
import { store } from '../../store/store';
import { GetAllTournamentGroups } from '../getTournament/action';
import {
  removeTeamFromTournament,
  resetTournament,
} from '../getTournament/reducer';
import { setisLoading } from './reducer';

export const submitTournament = async (tournament_id: any) => {
  const {
    name,
    seasonYear,
    playerPerTeam,
    country,
    city,
    startDate,
    endDate,
    tournamentType,
    typeDescription,
    ballType,
    updatedEndDate,
    updatedStartDate,
  } = store.getState().createTournamentReducer;

  const { getTournament } = store.getState().getTournamentReducer;
  let response;
  if (tournament_id) {
    response = await updateTournament({
      id: tournament_id,
      name: getTournament.name,
      seasonYear: getTournament.seasonYear.toString(),
      startDate: updatedStartDate
        ? updatedStartDate.toISOString()
        : getTournament.startDate,
      endDate: updatedEndDate
        ? updatedEndDate.toISOString()
        : getTournament.endDate,
      city: getTournament.city,
      country: getTournament.country,
      playerPerTeam: getTournament?.playerPerTeam,
      tournamentType: getTournament.tournamentType.toLowerCase(),
      ballType: getTournament.ballType,
      typeDescription: getTournament.typeDescription,
    });
  } else {
    response = await createTournament({
      name,
      seasonYear,
      startDate,
      endDate,
      city,
      country,
      playerPerTeam,
      tournamentType: tournamentType.toLowerCase(),
      ballType,
      typeDescription,
    });
  }
  if (response !== errorCase) {
    if (tournament_id) {
      toastMessage('Tournament updated Successfully');
      store.dispatch(resetTournament());
      navigate('Tournaments');
    } else {
      toastMessage('Tournament created Successfully');
      navigate('Tournaments');
    }
  }
};

export const CreateGroup = async (params: TournamentIdActionProps) => {
  const response = await createTournamentGroup(params);
  if (response !== errorCase) {
    toastMessage('Group created Successfully');
    GetAllTournamentGroups(params);
  }
};
export const UpdateGroup = async (params: TournamentIdActionProps) => {
  const response = await updateTournamentGroup(params);
  if (response !== errorCase) {
    toastMessage('Group update Successfully');
    // GetAllTournamentGroups(params);
  }
};

export const AddTeamtoGroup = async (params: TournamentIdActionProps) => {
  store.dispatch(setisLoading(true));
  const response = await addTeamToGroup(params);
  if (response !== errorCase) {
    toastMessage('Team added Successfully');
    GetAllTournamentGroups(params);
  }
  store.dispatch(setisLoading(false));
};

export const DeleteGroup = async (params: TournamentIdActionProps) => {
  const response = await deleteTournamentGroup(params);
  if (response !== errorCase) {
    toastMessage('Group remove from tournament');
  }
};

export const DeleteGroupTeam = async (params: TournamentIdActionProps) => {
  const response = await deleteTeamFromGroup(params);
  if (response !== errorCase) {
    toastMessage('Team remove from group');
    GetAllTournamentGroups(params);
  }
};
export const DeleteTournamentTeam = async (params: TournamentIdActionProps) => {
  const response = await deleteTeamFromTournament(params);
  if (response !== errorCase) {
    toastMessage('Team remove from tournament');
    if (params.team_id) {
      store.dispatch(removeTeamFromTournament({ id: params.team_id }));
    }
  }
};
export const onDeleteTournamentTeamAction = (params: TournamentIdActionProps) => {
  const { name } = params || {}
  Alert.alert(
    `Delete ${name} Team from Tournament`,
    'Are you sure want to delete this team from tournament?',
    [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      { text: 'Delete', onPress: () => DeleteTournamentTeam(params) },
    ],
    { cancelable: false }
  );
}
export const resetCreateTournament = () => {
  store.dispatch({ type: 'resetCreateTournament' });
};