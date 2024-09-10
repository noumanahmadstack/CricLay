import {errorCase} from '../../../apiServices/statusCode';
import {store} from '../../store/store';
import {
  getTeam,
  getTeamMatches,
  getTeamPlayersApi,
} from '../../../apiServices/endPoints/team';
import {
  setTeamPlayers,
  setMetaDataTeamPlayers,
  setIsLoading,
  setTeamLiveMatches,
  setTeamFixtureMatches,
  setTeamResultsMatches,
  setMetaDataFixtureMatches,
  setMetaDataLiveMatches,
  setMetaDataResults,
  addToTeamLiveMatches,
  addToTeamFixtureMatches,
  addToTeamResultsMatches,
  addToTeamPlayers,
  setCreatorId,
  setOverAllStat,
  setBattingStat,
  setFieldingStat,
  setBowlingStat,
} from './reducer';
import {MatchStatus} from '../../../modelInterface/match';
export const onMountTeamProfile = async (id: string) => {
  store.dispatch(setIsLoading(true));
  await fetchTeamsPlayersData({id});
  store.dispatch(setIsLoading(false));
};
export const fetchTeamsPlayersData = async ({id}: {id: string}) => {
  const response = await getTeam({id});
  if (response !== errorCase) {
    store.dispatch(setCreatorId(response?.creatorId));
    store.dispatch(setOverAllStat(response?.overAllStat));
    store.dispatch(setBattingStat(response?.battingStat));
    store.dispatch(setFieldingStat(response?.fielderStat));
    store.dispatch(setBowlingStat(response?.bowlingStat));
    store.dispatch(setTeamPlayers(response?.players?.collection));
    store.dispatch(setMetaDataTeamPlayers(response?.players?.metadata));
  }
};
export const fetchTeamsMatchesData = async ({
  id,
  status,
}: {
  id: string;
  status?: MatchStatus;
}) => {
  const response = await getTeamMatches({id, status});
  if (response !== errorCase) {
    if (response?.matches?.collection) {
      switch (status) {
        case 'started':
          store.dispatch(setTeamLiveMatches(response?.matches?.collection));
          store.dispatch(setMetaDataLiveMatches(response?.matches?.metadata));
          break;
        case 'completed':
          store.dispatch(setTeamResultsMatches(response?.matches?.collection));
          store.dispatch(setMetaDataResults(response?.matches?.metadata));
          break;
        case 'fixture':
          store.dispatch(setTeamFixtureMatches(response?.matches?.collection));
          store.dispatch(
            setMetaDataFixtureMatches(response?.matches?.metadata),
          );
          break;
      }
    }
  }
};
export const onLoadMoreTeamPlayers = async (id: string) => {
  const {metadataTeamPlayer} = store.getState().teamProfileReducer;
  const {currentPage, totalPages} = metadataTeamPlayer;
  if (currentPage < totalPages) {
    const page = currentPage + 1;
    const response = await getTeamPlayersApi({id, page});
    if (response?.players?.collection) {
      store.dispatch(addToTeamPlayers(response?.players?.collection));
      store.dispatch(setMetaDataTeamPlayers(response?.players?.metadata));
    }
  }
};
export const onLoadMoreLiveMatches = async (id: string) => {
  const {metadataTeamLiveMatches} = store.getState().teamProfileReducer;
  const {currentPage, totalPages} = metadataTeamLiveMatches;
  if (currentPage < totalPages) {
    const page = currentPage + 1;
    const response = await getTeamMatches({status: 'started', page, id});
    if (response?.matches?.collection) {
      store.dispatch(addToTeamLiveMatches(response?.matches?.collection));
      store.dispatch(setMetaDataLiveMatches(response?.matches?.metadata));
    }
  }
};
export const onLoadMoreFixtureMatches = async (id: string) => {
  const {metadataTeamFixtureMatches} = store.getState().teamProfileReducer;
  const {currentPage, totalPages} = metadataTeamFixtureMatches;
  if (currentPage < totalPages) {
    const page = currentPage + 1;
    const response = await getTeamMatches({status: 'fixture', page, id});
    if (response?.matches?.collection) {
      store.dispatch(addToTeamFixtureMatches(response?.matches?.collection));
      store.dispatch(setMetaDataFixtureMatches(response?.matches?.metadata));
    }
  }
};
export const onLoadMoreResultsMatches = async (id: string) => {
  const {metadataTeamLiveMatches} = store.getState().teamProfileReducer;
  const {currentPage, totalPages} = metadataTeamLiveMatches;
  if (currentPage < totalPages) {
    const page = currentPage + 1;
    const response = await getTeamMatches({status: 'completed', page, id});
    if (response?.matches?.collection) {
      store.dispatch(addToTeamResultsMatches(response?.matches?.collection));
      store.dispatch(setMetaDataResults(response?.matches?.metadata));
    }
  }
};
export const resetStates = () => {
  store.dispatch({type: 'resetTeamProfile'});
};
