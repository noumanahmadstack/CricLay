import { Alert } from 'react-native';
import {
  allMatches,
  getMatchDetail,
  myMatches,
  updateMatch,
} from '../../../apiServices/endPoints/match';
import { toastMessage } from '../../../components/toastMessages';
import {
  OnHandleOnClickMatchProps,
  onMountMatchesProps,
  OnStartScoringFromFixtureProps,
} from '../../../modelInterface/redux/matches/action';
import { navigate } from '../../../routes/rootNavigation';
import { store } from '../../store/store';
import { setIsTossModalOpen } from '../startMatch/reducer';
import {
  addDataToFixtureMatches,
  addDataToLiveMatches,
  addDataToMyFixtureMatches,
  addDataToMyLiveMatches,
  addDataToMyResultsMatches,
  addDataToResultsMatches,
  addToMyMatches,
  initialState,
  setFixtureMatches,
  setIsLoading,
  setLiveMatches,
  setMatchDetail,
  setMetaDataFixtureMatches,
  setMetaDataLiveMatches,
  setMetaDataMyFixtureMatches,
  setMetaDataMyLiveMatches,
  setMetaDataMyMatches,
  setMetaDataMyResultsMatches,
  setMetaDataResultsMatches,
  setMyFixtureMatches,
  setMyLiveMatches,
  setMyResults,
  setResults,
} from './reducer';
import { matchViewDetail as matchViewDetailOnPage } from '../matchDetails/action';
import { MatchStatus } from '../../../modelInterface/match';
import { errorCase } from '../../../apiServices/statusCode';

export const onMountAllMatches = async ({ status }: onMountMatchesProps) => {
  store.dispatch(setIsLoading(true));
  const response = await allMatches({ status });
  if (response !== errorCase) {
    switch (status) {
      case 'started':
        store.dispatch(setLiveMatches(response?.collection));
        store.dispatch(setMetaDataLiveMatches(response?.metadata));
        break;
      case 'completed':
        store.dispatch(setResults(response?.collection));
        store.dispatch(setMetaDataResultsMatches(response?.metadata));
        break;
      case 'fixture':
        store.dispatch(setFixtureMatches(response?.collection));
        store.dispatch(setMetaDataFixtureMatches(response?.metadata));
        break;
    }
  }
  store.dispatch(setIsLoading(false));
};

export const onLoadMoreLiveMatches = async () => {
  const { metadataLiveMatches } = store.getState().getMatchesReducer;
  const { currentPage, totalPages } = metadataLiveMatches;
  if (currentPage < totalPages) {
    const page = currentPage + 1;
    const response = await allMatches({ status: 'started', page });
    if (response !== errorCase) {
      store.dispatch(addDataToLiveMatches(response?.collection));
      store.dispatch(setMetaDataLiveMatches(response?.metadata));
    }
  }
};
export const onLoadMoreMyLiveMatches = async () => {
  const { metadataMyLiveMatches } = store.getState().getMatchesReducer;
  const { currentPage, totalPages } = metadataMyLiveMatches;
  if (currentPage < totalPages) {
    const page = currentPage + 1;
    const response = await myMatches({ status: 'started', page });
    if (response !== errorCase) {
      store.dispatch(addDataToMyLiveMatches(response.collection));
      store.dispatch(setMetaDataMyLiveMatches(response.metadata));
    }
  }
};
export const onLoadMoreMyFixtureMatches = async () => {
  const { metadataMyFixtureMatches } = store.getState().getMatchesReducer;
  const { currentPage, totalPages } = metadataMyFixtureMatches;
  if (currentPage < totalPages) {
    const page = currentPage + 1;
    const response = await myMatches({ status: 'fixture', page });
    if (response !== errorCase) {
      store.dispatch(addDataToMyFixtureMatches(response.collection));
      store.dispatch(setMetaDataMyFixtureMatches(response.metadata));
    }
  }
};
export const onLoadMoreMyResultsMatches = async () => {
  const { metadataMyResultsMatches } = store.getState().getMatchesReducer;
  const { currentPage, totalPages } = metadataMyResultsMatches;
  if (currentPage < totalPages) {
    const page = currentPage + 1;
    const response = await myMatches({ status: 'completed', page });
    if (response !== errorCase) {
      store.dispatch(addDataToMyResultsMatches(response.collection));
      store.dispatch(setMetaDataMyResultsMatches(response.metadata));
    }
  }
};
export const onLoadMoreFixtureMatches = async () => {
  const { metadataFixtureMatches } = store.getState().getMatchesReducer;
  const { currentPage, totalPages } = metadataFixtureMatches;
  if (currentPage < totalPages) {
    const page = currentPage + 1;
    const response = await allMatches({ status: 'fixture', page });
    if (response !== errorCase) {
      store.dispatch(addDataToFixtureMatches(response?.collection));
      store.dispatch(setMetaDataFixtureMatches(response?.metadata));
    }
  }
};
export const onLoadMoreResultsMatches = async () => {
  const { metadataResultsMatches } = store.getState().getMatchesReducer;
  const { currentPage, totalPages } = metadataResultsMatches;
  if (currentPage < totalPages) {
    const page = currentPage + 1;
    const response = await allMatches({ status: 'completed', page });
    if (response !== errorCase) {
      store.dispatch(addDataToResultsMatches(response?.collection));
      store.dispatch(setMetaDataResultsMatches(response?.metadata));
    }
  }
};

export const onMountMyMatches = async ({ status }: onMountMatchesProps) => {
  store.dispatch(setIsLoading(true));
  const response = await myMatches({ status });
  if (response !== errorCase) {
    switch (status) {
      case 'started':
        store.dispatch(setMyLiveMatches(response.collection));
        store.dispatch(setMetaDataMyLiveMatches(response.metadata));
        break;
      case 'completed':
        store.dispatch(setMyResults(response.collection));
        store.dispatch(setMetaDataMyResultsMatches(response.metadata));
        break;
      case 'fixture':
        store.dispatch(setMyFixtureMatches(response.collection));
        store.dispatch(setMetaDataMyFixtureMatches(response.metadata));
        break;
    }
  }
  store.dispatch(setIsLoading(false));
};

export const onLoadMoreMyMatches = async () => {
  const { metadataMyMatches } = store.getState().getMatchesReducer;
  const { currentPage, totalPages } = metadataMyMatches;
  if (currentPage < totalPages) {
    const page = currentPage + 1;
    const response = await myMatches({ page });
    if (response !== errorCase) {
      store.dispatch(addToMyMatches(response?.collection));
      store.dispatch(setMetaDataMyMatches(response?.metadata));
    }
  }
};
export const matchViewDetail = async (
  id: any,
): Promise<MatchStatus | undefined> => {
  store.dispatch(setIsLoading(true));
  const response = await getMatchDetail(id);
  store.dispatch(setIsLoading(false));
  if (response !== errorCase) {
    store.dispatch(setMatchDetail(response?.getMatch));
    return response as MatchStatus;
  }
};

export const onHandleOnClickMatch = async ({
  id,
  scorerId,
  userId,
  status,
  name,
  isPrivate,
  liveStreamingUrl,
  organizer,
  isTie,
  isStreaming,
  streamingLinks,
  matchType
}: OnHandleOnClickMatchProps) => {
  if (isStreaming && streamingLinks) {
    navigate('StreamingList', { streamingLinks, id, isAmateur: matchType == "amateur" });
    return;
  } else {
    if (status == 'started') {
      if (scorerId == userId || organizer?.id == userId) {
        Alert.alert(
          name,
          'You can view or do scoring of this Match',
          [
            {
              text: 'Do scoring',
              onPress: () => matchType == 'amateur' ? navigate('AmateurScoring', { id }) : navigate('Scoring', { id }),
              style: 'cancel',
            },
            {
              text: 'View Match',
              onPress: () => navigate('LiveMatchDetails', { id, isAmateur: matchType == "amateur" }),
            },
          ],
          { cancelable: false },
        );
        return;
      } else {
        navigate('LiveMatchDetails', { id });
        return;
      }
    } else if (status == 'fixture') {
      if (organizer?.id == userId || scorerId == userId) {
        matchViewDetailOnPage(id);
        navigate('StartMatch', { id, isAmateur: matchType == "amateur" });
        return;
      } else if (isPrivate) {
        navigate('FixtureDetail', { id, isAmateur: matchType == "amateur" });
        return;
      }
      navigate('FixtureDetail', { id, isAmateur: matchType == "amateur" });
    } else if (status == 'completed') {
      navigate('CompletedMatchDetails', { id, isTie, isAmateur: matchType == "amateur" });
      // if (isTie) {
      //   Alert.alert(
      //     name,
      //     message,
      //     [
      //       {
      //         text: 'OK',
      //         onPress: () => { },
      //       },
      //     ],
      //     { cancelable: false },
      //   );
      // } else {
      //   navigate('CompletedMatchDetails', { id });
      // }
    }
  }
};

export const startScoring = async ({
  toss_decision,
  toss_winning_team_id,
  id
}: OnStartScoringFromFixtureProps) => {
  const response = await updateMatch({
    toss_decision,
    toss_winning_team_id,
    id,
    status: 'started',
  });
  if (response !== errorCase) {
    store.dispatch(setIsTossModalOpen(false));
    if (response?.match?.matchType == "amateur") {
      navigate('AmateurScoring', { id, isFromStartScreen: true })
    } else {
      navigate('Scoring', { id, isFromStartScreen: true });
    }
    toastMessage('Match started Successfully!');
  }
};
export const resetStatesMyMatches = () => {
  store.dispatch(setMyLiveMatches(initialState.myLiveMatches));
  store.dispatch(setMetaDataMyLiveMatches(initialState.metadataMyLiveMatches));
  store.dispatch(setMyResults(initialState.myResults));
  store.dispatch(setMetaDataMyResultsMatches(initialState.metadataMyResultsMatches));
  store.dispatch(setMyFixtureMatches(initialState.myFixtureMatches));
  store.dispatch(setMetaDataMyFixtureMatches(initialState.metadataMyFixtureMatches));
};