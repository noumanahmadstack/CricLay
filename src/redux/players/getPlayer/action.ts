import {getAllPlayer} from '../../../apiServices/endPoints/players';
import {store} from '../../store/store';
import {errorCase} from '../../../apiServices/statusCode';
import {
  addAllPlayerToState,
  addMyPlayerToState,
  setAllPlayers,
  setIsLoading,
  setMetaDataForMyPlayers,
  setMyPlayers,
  setMetaDataForAllPlayers,
} from './reducer';
import {getTeamPlayersApi} from '../../../apiServices/endPoints/team';
export const onMountMyPlayers = async (id: string) => {
  store.dispatch(setIsLoading(true));
  await fetchMyPlayers(id);
  store.dispatch(setIsLoading(false));
};
const fetchMyPlayers = async (id: string) => {
  const response = await getTeamPlayersApi({id});
  if (response !== errorCase) {
    store.dispatch(setMyPlayers(response?.players.collection));
    store.dispatch(setMetaDataForMyPlayers(response?.players.metadata));
  }
};
export const onLoadMoreMyPlayers = async (id: string) => {
  const {metadataForMyPlayers} = store.getState().getPlayerReducer;
  const {currentPage, totalPages} = metadataForMyPlayers;
  if (currentPage < totalPages) {
    const page = currentPage + 1;
    const response = await getTeamPlayersApi({id, page});
    if (response !== errorCase) {
      store.dispatch(addMyPlayerToState(response?.players.collection));
      store.dispatch(setMetaDataForMyPlayers(response?.players.metadata));
    }
  }
};
export const onLoadMoreAllPlayers = async () => {
  const {metadataForAllPlayers,searchAllPlayerByName} = store.getState().getPlayerReducer;
  const {currentPage, totalPages} = metadataForAllPlayers;
  if (currentPage < totalPages) {
    const page = currentPage + 1;
    const response = await getAllPlayer({page,name:searchAllPlayerByName});
    if (response !== errorCase) {
      store.dispatch(addAllPlayerToState(response?.collection));
      store.dispatch(setMetaDataForAllPlayers(response?.metadata));
    }
  }
};
export const onMountAllPlayers = async () => {
  store.dispatch(setIsLoading(true));
  await fetchAllPlayers();
  store.dispatch(setIsLoading(false));
};
const fetchAllPlayers = async () => {
  const {searchAllPlayerByName} = store.getState().getPlayerReducer;

  const response = await getAllPlayer({name:searchAllPlayerByName});
  if (response !== errorCase) {
    store.dispatch(setAllPlayers(response?.collection));
    store.dispatch(setMetaDataForAllPlayers(response?.metadata));
  }
};
