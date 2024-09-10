import { store } from '../../store/store';
import {
  getAllTournamentGroups,
  getAmatureRules,
  getMyTournaments,
  getOverAllTournaments,
  getTournament,
  getTournamentGroup,
  getTournamentMatches,
  getTournamentRoundMatches,
  tournamentLeaderboard,
  tournamentMVP,
} from '../../../apiServices/endPoints/tournaments';
import {
  addToMyTournaments,
  addToMyUpComingTournaments,
  setAllTournamentGroups,
  setIsLoading,
  setMetadataForMyTournaments,
  setMetadataForMyUpTournaments,
  setMyTournaments,
  setTournament,
  setTournamentGroup,
  setUpComingTournament,
  setMetadataForAllPublicTournaments,
  addToAllPublicTournaments,
  setAllPublicTournaments,
  setTournamentLiveMatches,
  setTournamentResultMatches,
  setTournamentFixtureMatches,
  setMetadataTournamentLiveMatches,
  setMetadataTournamentResulltMatches,
  setMetadataTournamentFixtureMatches,
  addTournamentLiveMatches,
  addTournamentFixtureMatches,
  addTournamentResultMatches,
  addDataToLeaderboard,
  addDataToMVP,
  setLeaderboard,
  setTournamentRoundMatches,
  setRecentTournament,
  setMetadataForMyRecentTournaments,
  addToMyRecentTournaments,
  setTournamentRules,
  resetTournament,
} from './reducer';
import {
  GetTournamentActionProps,
  TournamentIdActionProps,
} from '../../../modelInterface/redux/tournaments/action';
import { errorCase } from '../../../apiServices/statusCode';
import { TournamentMVPTypes } from '../../../modelInterface/tournaments';

export const GetTournamentDetails = async (
  params: GetTournamentActionProps,
) => {
  store.dispatch(setIsLoading(true));
  const response = await getTournament(params);
  if (response !== errorCase) {   
    store.dispatch(setTournament(response));
  }
  store.dispatch(setIsLoading(false));
};
export const getAllTournaments = async () => {
  const {searchByNameAllTournaments} = store.getState().getTournamentReducer;
  // name:searchByNameAllTournaments
  store.dispatch(setIsLoading(true));
  const response = await getOverAllTournaments({name:searchByNameAllTournaments});
  if (response !== errorCase) {
    store.dispatch(setAllPublicTournaments(response?.collection));
    store.dispatch(setMetadataForAllPublicTournaments(response?.metadata));
  }
  store.dispatch(setIsLoading(false));
};
// export const GetAllTournamentTeams = async (
//   params: TournamentIdActionProps,
// ) => {
//   store.dispatch(setIsLoading(true));
//   const response = await getAllTournamentTeams(params);
//   if (response !== errorCase) {
//     store.dispatch(setAllTournamentTeams(response.collection));
//     store.dispatch(setMetadataForAllTournamentTeams(response.metadata));
//   }
//   store.dispatch(setIsLoading(false));
// };

export const GetAllTournamentGroups = async (params:TournamentIdActionProps) => {
  store.dispatch(setIsLoading(true));
  const response = await getAllTournamentGroups(params);
  if (response !== errorCase) {
    store.dispatch(setAllTournamentGroups(response));
  }
  store.dispatch(setIsLoading(false));
};

export const GetTournamentGroup = async (params: TournamentIdActionProps) => {
  store.dispatch(setIsLoading(true));
  const response = await getTournamentGroup(params);
  if (response !== errorCase) {
    store.dispatch(setTournamentGroup(response));
    // store.dispatch(setMetadataForTournamentGroup(response.metadata));
  }
  store.dispatch(setIsLoading(false));
};

export const GetMyTournament = async (params: TournamentIdActionProps) => {
  store.dispatch(setIsLoading(true));
  const response = await getMyTournaments(params);  
  if (response !== errorCase) {       
    switch (params.status) {
      case 'ongoing':
        store.dispatch(setMyTournaments(response?.collection));
        store.dispatch(setMetadataForMyTournaments(response?.metadata));
        break;
      case 'upcoming':
        store.dispatch(setUpComingTournament(response?.collection));
        store.dispatch(setMetadataForMyUpTournaments(response?.metadata));
        break;
        case 'completed':
          store.dispatch(setRecentTournament(response?.collection));
          store.dispatch(setMetadataForMyRecentTournaments(response?.metadata));
          break;
    }
  }
  store.dispatch(setIsLoading(false));
};

export const onLoadMoreMyUpComingTournament = async () => {
  const time_zone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const { metadataForMyUpTournaments } = store.getState().getTournamentReducer;
  const { currentPage, totalPages } = metadataForMyUpTournaments;
  if (currentPage < totalPages) {
    const page = currentPage + 1;
    const response = await getMyTournaments({
      status: 'upcoming',
      page,
      time_zone,
    });
    if (response !== errorCase) {
      store.dispatch(addToMyUpComingTournaments(response?.collection));
      store.dispatch(setMetadataForMyUpTournaments(response?.metadata));
    }
  }
};
export const onLoadMoreMyRecentTournament = async () => {
  const time_zone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const { metadataForMyRecentTournaments } = store.getState().getTournamentReducer;
  const { currentPage, totalPages } = metadataForMyRecentTournaments;
  if (currentPage < totalPages) {
    const page = currentPage + 1;
    const response = await getMyTournaments({
      status: 'completed',
      page,
      time_zone,
    });
    if (response !== errorCase) {
      store.dispatch(addToMyRecentTournaments(response?.collection));
      store.dispatch(setMetadataForMyRecentTournaments(response?.metadata));
    }
  }
};
export const onLoadMoreMyTournament = async () => {
  const time_zone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const { metadataForMyTournaments } = store.getState().getTournamentReducer;
  const { currentPage, totalPages } = metadataForMyTournaments;
  if (currentPage < totalPages) {
    const page = currentPage + 1;
    const response = await getMyTournaments({
      status: 'ongoing',
      page,
      time_zone,
    });
    if (response !== errorCase) {
      store.dispatch(addToMyTournaments(response?.collection));
      store.dispatch(setMetadataForMyTournaments(response?.metadata));
    }
  }
};
export const onLoadMoreAllPublicTournament = async () => {
  const { metadataForAllPublicTournaments } =
    store.getState().getTournamentReducer;
  const { currentPage, totalPages } = metadataForAllPublicTournaments;
  if (currentPage < totalPages) {
    const page = currentPage + 1;
    const response = await getOverAllTournaments({ page });
    if (response !== errorCase) {
      store.dispatch(addToAllPublicTournaments(response?.collection));
      store.dispatch(setMetadataForAllPublicTournaments(response?.metadata));
    }
  }
};

export const GetTournamentGroupMathces = async (params: TournamentIdActionProps) => {
  store.dispatch(setIsLoading(true));
  const response = await getTournamentRoundMatches(params);
  if (response !== errorCase) {  
    store.dispatch(setTournamentRoundMatches(response.collection));
    // store.dispatch(setMetadataTournamentLiveMatches(response.metadata));
  }
  store.dispatch(setIsLoading(false));
};
export const GetTournamentMatch = async (params: TournamentIdActionProps) => {
  store.dispatch(setIsLoading(true));
  const response = await getTournamentMatches(params);
  if (response !== errorCase) {
    switch (params.status) {
      case 'started':
        store.dispatch(setTournamentLiveMatches(response.collection));
        store.dispatch(setMetadataTournamentLiveMatches(response.metadata));
        break;
      case 'completed':
        store.dispatch(setTournamentResultMatches(response.collection));
        store.dispatch(setMetadataTournamentResulltMatches(response.metadata));
        break;
      case 'fixture':
        store.dispatch(setTournamentFixtureMatches(response.collection));
        store.dispatch(setMetadataTournamentFixtureMatches(response.metadata));
        break;
    }
  }
  store.dispatch(setIsLoading(false));
};

export const onLoadMoreTournamentLiveMatches = async (tournament_id: string) => {
  const { metadataTournamentLiveMatches } = store.getState().getTournamentReducer;
  const { currentPage, totalPages } = metadataTournamentLiveMatches;
  if (currentPage < totalPages) {
    const page = currentPage + 1;
    const response = await getTournamentMatches({ tournament_id, status: 'started', page });
    if (response !== errorCase) {
      store.dispatch(addTournamentLiveMatches(response.collection));
      store.dispatch(setMetadataTournamentLiveMatches(response.metadata));
    }
  }
};
export const onLoadMoreTournamentFixtureMatches = async (tournament_id: string) => {
  const { metadataTournamentFixtureMatches } =
    store.getState().getTournamentReducer;
  const { currentPage, totalPages } = metadataTournamentFixtureMatches;
  if (currentPage < totalPages) {
    const page = currentPage + 1;
    const response = await getTournamentMatches({ tournament_id, status: 'fixture', page });
    if (response !== errorCase) {
      store.dispatch(addTournamentFixtureMatches(response.collection));
      store.dispatch(setMetadataTournamentFixtureMatches(response.metadata));
    }
  }
};
export const onLoadMoreTournamentLeaderboard = async ({ id }: { id: string }) => {
  const { getTournament, leaderboardCategory } = store.getState().getTournamentReducer || {};
  const { leaderboard } = getTournament || {};
  const { metadata } = leaderboard || {};
  const { currentPage, totalPages } = metadata || {};
  if (currentPage < totalPages) {
    const page = currentPage + 1;    
    const response = await tournamentLeaderboard({ id, category: leaderboardCategory, page });
    if (response !== errorCase) {
      store.dispatch(addDataToLeaderboard(response?.leaderboard))
    }
  }
};
export const onMountTournamentLeaderboard = async ({ id }: { id: string }) => {
  const { leaderboardCategory } = store.getState().getTournamentReducer || {};
  const response = await tournamentLeaderboard({ id, category: leaderboardCategory });
  if (response !== errorCase) {
    store.dispatch(setLeaderboard(response?.leaderboard))
  }
};
export const onLoadMoreTournamentMVP = async ({ id }: { id: string }) => {
  const { getTournament, mvpCategory } = store.getState().getTournamentReducer || {};
  const { mostValuablePlayers } = getTournament || {};
  const { metadata } = mostValuablePlayers
  const { currentPage, totalPages } = metadata || {};
  if (currentPage && totalPages && (currentPage < totalPages)) {
    const page = currentPage + 1;
    const response = await tournamentMVP({ id, page, mvpCategory });
    if (response !== errorCase) {
      store.dispatch(addDataToMVP(response?.mostValuablePlayers))
    }
  }
};
export const onMountTournamentMVP = async ({ id }: { id: string }) => {
  const { mvpCategory } = store.getState().getTournamentReducer || {};
  const response = await tournamentMVP({ id, mvpCategory });
  if (response !== errorCase) {
    store.dispatch(addDataToMVP(response?.mostValuablePlayers))
  }
};
export const onLoadMoreTournamentResultsMatches = async (tournament_id: string) => {
  const { metadataTournamentResultMatches } =
    store.getState().getTournamentReducer;
  const { currentPage, totalPages } = metadataTournamentResultMatches;
  if (currentPage < totalPages) {
    const page = currentPage + 1;
    const response = await getTournamentMatches({ tournament_id, status: 'completed', page });
    if (response !== errorCase) {
      store.dispatch(addTournamentResultMatches(response.collection));
      store.dispatch(setMetadataTournamentResulltMatches(response.metadata));
    }
  }
};
export const GetAmatureTournament = async () => {
  store.dispatch(setIsLoading(true));
  const response = await getAmatureRules({category:"amateur"});
  if (response !== errorCase) {   
    store.dispatch(setTournamentRules(response));
  }
  store.dispatch(setIsLoading(false));
};
export const resetTournamentStates = () => {
    store.dispatch(resetTournament())
}
