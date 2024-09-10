import {
  addPlayerToTeam,
  createPlayer,
  updateTeamPlayersApi,
} from '../../../apiServices/endPoints/players';
import { errorCase } from '../../../apiServices/statusCode';
import { store } from '../../store/store';
import { setIsLoading } from './reducer';
import { addMyPlayerToState } from '../getPlayer/reducer';
import {
  OnAddPlayerToTeamProps,
  OnSubmitProps,
} from '../../../modelInterface/redux/players/action';
import { goBack } from '../../../routes/rootNavigation';
import { UpdateTeamPlayersProps } from '../../../modelInterface/apis/players';
import { toastMessage } from '../../../components/toastMessages';
export const onSubmit = async ({ teamId }: OnSubmitProps) => {
  store.dispatch(setIsLoading(true));
  const { name, email, country, city, phoneNumber } =
    store.getState().addPlayerReducer;
  const response = await createPlayer({
    name,
    country,
    email,
    phoneNumber,
    city,
  });
  if (response !== errorCase) {
    await addPlayerTeam({ teamId, player: response?.player });
    goBack();
  }
  store.dispatch(setIsLoading(false));
};

export const addPlayerTeam = async ({
  teamId,
  player,
}: OnAddPlayerToTeamProps) => {
  const response = await addPlayerToTeam({ teamId, playerId: player?.id });
  if (response !== errorCase) {
    store.dispatch(addMyPlayerToState(player));
    resetStates();
  }
};
export const updateTeamPlayerAction = async (props: UpdateTeamPlayersProps) => {
  store.dispatch(setIsLoading(true));
  const response = await updateTeamPlayersApi(props)
  if (response !== errorCase && response?.success) {
    toastMessage('Player Updated successsfully!')
    goBack()
  }
  store.dispatch(setIsLoading(false));
}
export const disableSubmit = () => {
  const { name, email } = store.getState().addPlayerReducer;
  if (name && email) {
    return false;
  } else {
    return true;
  }
};
export const resetStates = () => {
  store.dispatch({ type: 'resetAddPlayer' });
};
