import {toastMessage} from '../../../components/toastMessages';
import {errorCase} from '../../../apiServices/statusCode';
import {store} from '../../store/store';
import {addTeamApi, createTeam} from '../../../apiServices/endPoints/team';
import {setIsLoading} from './reducer';
import {goBack} from '../../../routes/rootNavigation';
import {setTeamA, setTeamB} from '../../matches/startMatch/reducer';
import {TeamObjProps} from '../../../modelInterface/team';
import {GetTournamentDetails} from '../../tournaments/getTournament/action';
import {onMountMyTeams} from '../teams/action';
export const onSubmits = async ({
  tournament_id,
  team_id,
}: {
  tournament_id?: string;
  team_id?: string;
}) => {
  store.dispatch(setIsLoading(true));
  const {name, location} = store.getState().addTeamReducer;
  const response = await addTeamApi({
    name,
    location,
    tournament_id,
    team_id: team_id,
  });
  if (response !== errorCase) {
    if (response?.success && tournament_id) {
      resetStates();
      GetTournamentDetails({id: tournament_id});
    }
  }
  store.dispatch(setIsLoading(false));
};
export const onSubmit = async () => {
  const {name, location} = store.getState().addTeamReducer;
  store.dispatch(setIsLoading(true));
  const response = await createTeam({name, location});
  if (response !== errorCase) {
    if (response?.success) {
      resetStates();
      onMountMyTeams();
    }
  }
  store.dispatch(setIsLoading(false));
};
export const resetStates = () => {
  store.dispatch({type: 'resetAddTeams'});
};
export const disableSubmit = () => {
  const {name, location} = store.getState().addTeamReducer;
  if (name && location) {
    return false;
  } else {
    return true;
  }
};
export const onSelectTeam = (props: TeamObjProps) => {
  const {teamA, teamB} = store.getState().startMatchReducer;
  if (props.selectTeam == 'A') {
    const {selectTeam, ...propsForNextScreen} = props;
    if (JSON.stringify(propsForNextScreen) === JSON.stringify(teamB)) {
      toastMessage('This team is already taken, Please take another team');
    } else {
      store.dispatch(setTeamA(propsForNextScreen));
    }
  } else if (props.selectTeam == 'B') {
    const {selectTeam, ...propsForNextScreen} = props;
    if (JSON.stringify(propsForNextScreen) === JSON.stringify(teamA)) {
      toastMessage('This team is already taken, Please take another team');
    } else {
      store.dispatch(setTeamB(propsForNextScreen));
    }
  }
  goBack();
};
