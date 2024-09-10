import {
  AddPlayerToMatchProps,
  AddRemovePlayerProps,
  CreatePlayerProps,
  GetMatchPlayerProps,
  RemoveMatchPlayerProps,
  UpdateTeamPlayersProps,
} from '../../../modelInterface/apis/players';
import {GetTeamProps} from '../../../modelInterface/apis/teams';
import {postRequest} from '../../methods';
import {
  addPlayersToMatchQuery,
  addPlayerToTeamMutation,
  createPlayerMutation,
  getAllPlayersQuery,
  getBattingTeamMatchPlayerQuery,
  getBowlingTeamMatchPlayerQuery,
  getMatchPlayerQuery,
  getMyPlayersQuery,
  getPlayerMatchesQuery,
  getPlayerNdTeamQuery,
  getPlayerQuery,
 updateTeamPlayersMutation,
  removePlayerFromTeamMutation,
  impactPlayerMutation,
  subsituatedPlayerMutation,
  removePlayersToMatchQuery,
} from './query';
export const createPlayer = async (variables: CreatePlayerProps) => {
  const response = await postRequest({
    query: createPlayerMutation,
    variables,
  });
  return response;
};
export const addPlayerToTeam = async (variables: AddRemovePlayerProps) => {
  const response = await postRequest({
    query: addPlayerToTeamMutation,
    variables,
  });
  return response;
};
export const removePlayerFromTeam = async (variables: AddRemovePlayerProps) => {
  const response = await postRequest({
    query: removePlayerFromTeamMutation,
    variables,
  });
  return response;
};
export const removePlayerFromMatch = async (variables: RemoveMatchPlayerProps) => {
  const response = await postRequest({
    query: removePlayersToMatchQuery,
    variables,
  });
  return response;
};
export const getPlayerAndTeamApi = async (variables: GetTeamProps) => {
  const response = await postRequest({
    query: getPlayerNdTeamQuery,
    variables,
  });
  return response;
};
export const getPlayerMatchesApi = async (variables: GetTeamProps) => {
  const response = await postRequest({
    query: getPlayerMatchesQuery,
    variables,
  });
  return response;
};
export const getPlayerApi = async ({id}: {id: string}) => {
  const response = await postRequest({
    query: getPlayerQuery,
    variables: {
      id,
    },
  });
  return response;
};
export const getAllPlayer = async (variables: {page?: number,name?:string}) => {
  const response = await postRequest({
    query: getAllPlayersQuery,
    variables,
  });
  return response;
};
export const getMyPlayer = async ({id}: {id: string}) => {
  const response = await postRequest({
    query: getMyPlayersQuery,
    variables: {
      id,
    },
  });
  return response;
};
export const addPlayerToMatchApi = async (variables: AddPlayerToMatchProps) => {
  const response = await postRequest({
    query: addPlayersToMatchQuery,
    variables,
  });
  return response;
};
export const getMatchPlayersApi = async (variables: GetMatchPlayerProps) => {
  const response = await postRequest({
    query: getMatchPlayerQuery,
    variables,
  });
  return response;
};
export const getBattingTeamMatchPlayersApi = async (
  variables: GetMatchPlayerProps,
) => {
  const response = await postRequest({
    query: getBattingTeamMatchPlayerQuery,
    variables,
  });
  return response;
};
export const getBowlingTeamMatchPlayersApi = async (
  variables: GetMatchPlayerProps,
) => {
  const response = await postRequest({
    query: getBowlingTeamMatchPlayerQuery,
    variables,
  });
  return response;
};
export const updateTeamPlayersApi = async (
  variables: UpdateTeamPlayersProps,
) => {  
  const response = await postRequest({
    query: updateTeamPlayersMutation,
    variables,
  });
  return response;
}
export const addImpactPlayer = async (
  variables:UpdateTeamPlayersProps,
)=>{  
  const response = await postRequest({
    query:impactPlayerMutation,
    variables
  })
  return response;
}

export const addSubsitutePlayer = async (
  variables:UpdateTeamPlayersProps,
)=>{
  const response = await postRequest({
    query:subsituatedPlayerMutation,
    variables
  })
  return response;
}


// export const playerStats = async (variables: AddPlayerToMatchProps) => {
//   const response = await postRequest({
//     query: getPlayerStatsQuery,
//     variables,
//   });
//   return response;
// };
