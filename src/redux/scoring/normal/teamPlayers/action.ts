import { store } from '../../../store/store';
import { errorCase } from '../../../../apiServices/statusCode';
import {
  addAllPlayerToState,
  addPlayingToBattingState,
  addPlayingToBowlingState,
  addPlayingToState,
  changeStatusOfPlaying,
  removeBattingPlaying,
  removeBowlerPlaying,
  setAllPlayers,
  setBattingPlaying,
  setBowlerPlaying,
  setIsLoading,
  setMetadataForPlaying,
} from './reducer';
import { getTeamPlayersApi } from '../../../../apiServices/endPoints/team';
import {
  GetPlayingStatusOfPlayerInMatchProps,
  GetTeamProps,
} from '../../../../modelInterface/apis/teams';
import {
  addImpactPlayer,
  addPlayerToMatchApi,
  addSubsitutePlayer,
  getBattingTeamMatchPlayersApi,
  getBowlingTeamMatchPlayersApi,
  removePlayerFromMatch,
} from '../../../../apiServices/endPoints/players';
import {
  AddPlayerToMatchProps,
  GetMatchPlayerProps,
  RemoveMatchPlayerProps,
  UpdateTeamPlayersProps,
} from '../../../../modelInterface/apis/players';
import { toastMessage } from '../../../../components/toastMessages';
import { Alert } from 'react-native';
export const onMountMatchAllPlayers = async (
  props: GetTeamProps & GetPlayingStatusOfPlayerInMatchProps,
) => {
  store.dispatch(setIsLoading(true));
  await fetchMatchAllPlayers(props);
  store.dispatch(setIsLoading(false));
};
export const fetchMatchAllPlayers = async (
  props: GetTeamProps & GetPlayingStatusOfPlayerInMatchProps,
) => {
  const { searchKeywordsTab2 } = store.getState().teamPlayerReducer;
  const response = await getTeamPlayersApi({
    ...props,
    name: searchKeywordsTab2,
  });
  if (response !== errorCase) {
    store.dispatch(setAllPlayers(response?.players.collection));
    store.dispatch(setMetadataForPlaying(response?.players.metadata));
  }
};
export const onLoadMoreMatchAllPlayers = async ({
  id,
  playerMatchId,
}: GetTeamProps & GetPlayingStatusOfPlayerInMatchProps) => {
  const { metadataForAllPlayers, searchKeywordsTab2 } =
    store.getState().teamPlayerReducer;
  const { currentPage, totalPages } = metadataForAllPlayers;
  if (currentPage < totalPages) {
    const page = currentPage + 1;
    const response = await getTeamPlayersApi({
      id,
      page,
      playerMatchId,
      name: searchKeywordsTab2,
    });
    if (response !== errorCase) {
      store.dispatch(addAllPlayerToState(response?.players.collection));
      store.dispatch(setMetadataForPlaying(response?.players.metadata));
    }
  }
};
export const onMountBowlingPlaying = async (props: GetMatchPlayerProps) => {
  store.dispatch(setIsLoading(true));
  await fetchBowlingPlaying(props);
  store.dispatch(setIsLoading(false));
};
export const onMountBattingPlaying = async (props: GetMatchPlayerProps) => {
  store.dispatch(setIsLoading(true));
  await fetchBattingPlaying(props);
  store.dispatch(setIsLoading(false));
};
export const fetchBowlingPlaying = async (props: GetMatchPlayerProps) => {
  const response = await getBowlingTeamMatchPlayersApi(props);
  if (response !== errorCase) {
    store.dispatch(setBowlerPlaying(response));
  }
};
export const fetchBattingPlaying = async (props: GetMatchPlayerProps) => {
  const response = await getBattingTeamMatchPlayersApi(props);
  if (response !== errorCase) {
    store.dispatch(setBattingPlaying(response));
  }
};
export const onAddToPlaying = async (props: AddPlayerToMatchProps) => {
  const response = await addPlayerToMatchApi(props);
  if (response !== errorCase) {
    store.dispatch(
      addPlayingToState({
        data: response?.matchPlayer,
        isBatsman: props.isBatsman,
      }),
    );
    store.dispatch(changeStatusOfPlaying(props.players[0]));
  }
};
export const onAddToBattingPlaying = async (props: AddPlayerToMatchProps) => {
  const response = await addPlayerToMatchApi(props);
  if (response !== errorCase) {
    store.dispatch(
      addPlayingToBattingState({
        data: response?.matchPlayer,
        isBatsman: props.isBatsman,
      }),
    );
    store.dispatch(changeStatusOfPlaying(props.players[0]));
  }
};
export const onAddToBowlingPlaying = async (props: AddPlayerToMatchProps) => {
  const response = await addPlayerToMatchApi(props);
  if (response?.success) {
    store.dispatch(
      addPlayingToBowlingState({
        data: response?.matchPlayer,
        isBatsman: props.isBatsman,
      }),
    );
    store.dispatch(changeStatusOfPlaying(props.players[0]));
  }
};
export const onImpact = (props: UpdateTeamPlayersProps) => {
  Alert.alert(
    'Impact Player',
    'Are you sure you want to make this player as impact player?',
    [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => onAddImpactPlayer(props),
      },
    ],
  );
};
export const onAddImpactPlayer = async (props: UpdateTeamPlayersProps) => {
  if (props) {
    const response = await addImpactPlayer(props);
    if (response?.success) {
      toastMessage("Impact player created successfully");
    }
  }
};
export const removeMatchPlayerAction = async ({ match_players, isBatsman }: RemoveMatchPlayerProps & { isBatsman?: boolean }) => {
  if (match_players) {
  store.dispatch(setIsLoading(true));
    const response = await removePlayerFromMatch({ match_players });
    if (response?.success) {
      toastMessage("Player remove successfully");
      if (isBatsman) {
        store.dispatch(removeBattingPlaying(match_players[0]))
      } else {
        store.dispatch(removeBowlerPlaying(match_players[0]))
      }
    }
  store.dispatch(setIsLoading(false));
  }
};
export const onSubsitute = (props: UpdateTeamPlayersProps) => {
  Alert.alert(
    'Subsitute Player',
    'Are you sure you want to make this player as Subsitute player?',
    [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => onAddSubsitutePlayer(props),
      },
    ],
  );
};
export const onAddSubsitutePlayer = async (props: UpdateTeamPlayersProps) => {
  if (props.playerId) {
    const response = await addSubsitutePlayer(props);
    if (response?.success) {
      toastMessage("Player Subsitute successfully");
    }
  }
};
export const resetState = () => {
  store.dispatch({ type: 'resetTeamPlayerReducer' });
};
