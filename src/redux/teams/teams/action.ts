import {errorCase} from '../../../apiServices/statusCode';
import {store} from '../../store/store';
import {allTeamsApi, myTeamsApi} from '../../../apiServices/endPoints/team';
import {
  setAllTeams,
  setIsLoading,
  setMyTeams,
  addToMyTeams,
  setMetaDataMyTeams,
  addToAllTeams,
  setMetaDataAllTeams,
} from './reducer';
export const onMountMyTeams = async () => {
  store.dispatch(setIsLoading(true));
  await fetchMyTeamsData();
  store.dispatch(setIsLoading(false));
};
export const fetchMyTeamsData = async () => {
  const {searchByNameMyTeams} = store.getState().teamsReducer;
  const response = await myTeamsApi({name: searchByNameMyTeams});
  if (response !== errorCase) {
    store.dispatch(setMyTeams(response?.collection));
    store.dispatch(setMetaDataMyTeams(response?.metadata));
  }
};
const fetchAllTeamsData = async () => {
  const {searchByNameAllTeams} = store.getState().teamsReducer;
  const response = await allTeamsApi({name: searchByNameAllTeams});
  if (response !== errorCase) {
    store.dispatch(setAllTeams(response?.collection));
    store.dispatch(setMetaDataAllTeams(response?.metadata));
  }
};
export const onMountAllTeams = async () => {
  store.dispatch(setIsLoading(true));
  await fetchAllTeamsData();
  store.dispatch(setIsLoading(false));
};
export const onLoadMoreMyTeams = async () => {
  const {metadataMyTeams, isLoading, searchByNameMyTeams} =
    store.getState().teamsReducer;
  const {currentPage, totalPages} = metadataMyTeams;
  if (currentPage < totalPages && !isLoading) {
    const page = currentPage + 1;
    const response = await myTeamsApi({page, name: searchByNameMyTeams});
    if (response !== errorCase) {
      store.dispatch(addToMyTeams(response?.collection));
      store.dispatch(setMetaDataMyTeams(response?.metadata));
    }
  }
};
export const onLoadMoreAllTeams = async () => {
  const {metadataAllTeams, isLoading, searchByNameAllTeams} =
    store.getState().teamsReducer;
  const {currentPage, totalPages} = metadataAllTeams;
  if (currentPage < totalPages && !isLoading) {
    const page = currentPage + 1;
    const response = await allTeamsApi({page, name: searchByNameAllTeams});
    if (response !== errorCase) {
      store.dispatch(addToAllTeams(response?.collection));
      store.dispatch(setMetaDataAllTeams(response?.metadata));
    }
  }
};
export const resetStates = () => {
  store.dispatch({type: 'resetGetTeams'});
};
