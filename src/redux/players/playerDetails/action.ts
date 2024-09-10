import {
  getPlayerAndTeamApi,
  getPlayerMatchesApi,
} from '../../../apiServices/endPoints/players';
import {store} from '../../store/store';
import {errorCase} from '../../../apiServices/statusCode';
import {
  setIsLoading,
  setId,
  setName,
  setAge,
  setCity,
  setCountry,
  setSpecialityType,
  setMetaDataFixtureMatches,
  setMetaDataLiveMatches,
  setMetaDataResults,
  setMetaDataTeams,
  setTeamFixtureMatches,
  setTeamLiveMatches,
  setTeamResultsMatches,
  setTeams,
  addToTeamFixtureMatches,
  addToTeamLiveMatches,
  addToTeamMatches,
  addToTeamResultsMatches,
  setBattingStat,
  setBowlingStat,
  setFieldingStat,
  setAllMatches,
  setMetaDataPlayerAllMatches,
  addToPlayerAlMatches,
  setVerfication,
  setAvatarUrl,
} from './reducer';
import {MatchStatus} from '../../../modelInterface/match';
export const onMountPlayer = async (id: string) => {
  store.dispatch(setIsLoading(true));
  await fetchPlayerDetails(id);
  store.dispatch(setIsLoading(false));
};
const fetchPlayerDetails = async (id: string) => {
  const response = await getPlayerAndTeamApi({id});
  if (response !== errorCase) {
    if (response !== errorCase) { 
      store.dispatch(setVerfication(response?.isVerified))    
      store.dispatch(setId(response?.id));
      store.dispatch(setAvatarUrl(response?.avatarUrl));
      store.dispatch(setName(response?.name));
      store.dispatch(setAge(response?.age));
      store.dispatch(setCity(response?.city));
      store.dispatch(setCountry(response?.country));
      store.dispatch(setSpecialityType(response?.specialityType));
      store.dispatch(setBattingStat(response?.battingStat));
      store.dispatch(setBowlingStat(response?.bowlingStat));
      store.dispatch(setFieldingStat(response?.fielderStat))
      store.dispatch(setTeams(response?.teams?.collection));
      store.dispatch(setMetaDataTeams(response?.teams?.metadata));
      // store.dispatch(setAllMatches(response?.matches?.collection));
    }
  }
};
export const fetchPlayersMatchesData = async ({
  id
}: {
  id: string
}) => {
  const response = await getPlayerMatchesApi({id});
  if (response !== errorCase) {
    if (response !== errorCase) {
      store.dispatch(setAllMatches(response?.matches?.collection));
      store.dispatch(setMetaDataPlayerAllMatches(response?.matches?.metadata));
    }
  }
};
export const onLoadMoreAllMatches = async (id: string) => {
  const {metadataplayerAllMatches} = store.getState().playerDetailReducer;
  const {currentPage, totalPages} = metadataplayerAllMatches;
  if (currentPage < totalPages) {
    const page = currentPage + 1;
    const response = await getPlayerMatchesApi({page, id});
    if (response !== errorCase) {
      store.dispatch(addToPlayerAlMatches(response?.matches?.collection));
      store.dispatch(setMetaDataPlayerAllMatches(response?.matches?.metadata));
    }
  }
};
export const onLoadMoreLiveMatches = async (id: string) => {
  const {metadataTeamLiveMatches} = store.getState().playerDetailReducer;
  const {currentPage, totalPages} = metadataTeamLiveMatches;
  if (currentPage < totalPages) {
    const page = currentPage + 1;
    const response = await getPlayerMatchesApi({status: 'started', page, id});
    if (response !== errorCase) {
      store.dispatch(addToTeamLiveMatches(response?.matches?.collection));
      store.dispatch(setMetaDataLiveMatches(response?.matches?.metadata));
    }
  }
};
export const onLoadMoreFixtureMatches = async (id: string) => {
  const {metadataTeamFixtureMatches} = store.getState().playerDetailReducer;
  const {currentPage, totalPages} = metadataTeamFixtureMatches;
  if (currentPage < totalPages) {
    const page = currentPage + 1;
    const response = await getPlayerMatchesApi({status: 'fixture', page, id});
    if (response !== errorCase) {
      store.dispatch(addToTeamFixtureMatches(response?.matches?.collection));
      store.dispatch(setMetaDataFixtureMatches(response?.matches?.metadata));
    }
  }
};
export const onLoadMoreResultsMatches = async (id: string) => {
  const {metadataTeamLiveMatches} = store.getState().playerDetailReducer;
  const {currentPage, totalPages} = metadataTeamLiveMatches;
  if (currentPage < totalPages) {
    const page = currentPage + 1;
    const response = await getPlayerMatchesApi({status: 'completed', page, id});
    if (response !== errorCase) {
      store.dispatch(addToTeamResultsMatches(response?.matches?.collection));
      store.dispatch(setMetaDataResults(response?.matches?.metadata));
    }
  }
};
export const onLoadMorePlayerTeams = async (id: string) => {
  const {metadataTeam} = store.getState().playerDetailReducer;
  const {currentPage, totalPages} = metadataTeam;
  if (currentPage < totalPages) {
    const page = currentPage + 1;
    const response = await getPlayerAndTeamApi({page, id});
    if (response !== errorCase) {
      store.dispatch(addToTeamMatches(response?.teams?.collection));
      store.dispatch(setMetaDataTeams(response?.teams?.metadata));
    }
  }
};
