import {
  CreateTournamentProps,
  GetTournamentProps,
} from '../../../modelInterface/apis/tournaments';
import {TournamentIdActionProps} from '../../../modelInterface/redux/tournaments/action';
import {postRequest} from '../../methods';
import {
  addTeamToTournamentGroupMutation,
  createTournamentMutation,
  getAllTournamentTeamsQuery,
  getMyTournamentsQuery,
  getTournamentDetailsQuery,
  getTournamentMatchesQuery,
  removeTeamFromTournamentGroupMutation,
  removeTeamFromTournamentMutation,
  removeTournamentGroupMutation,
  tournamentGroup,
  updateTournamentMutation,
  getAllPublictournamentQuery,
  getAllTournamentGroupQuery,
  getToutnamentGroupQuery,
  tournamentLeaderboardQuery,
  tournamentMVPQuery,
  updateTournamentGroupMutation,
  getRoundMatches,
  amatureQuery,
} from './query';

export const getAllTournaments = async () => {
  const response = await postRequest({
    query: getMyTournamentsQuery,
  });
  return response;
};

export const getOverAllTournaments = async (variables: GetTournamentProps) => {
  const response = await postRequest({
    query: getAllPublictournamentQuery,
    variables,
  });
  return response;
};

export const getTournament = async (variables: TournamentIdActionProps) => {
  const response = await postRequest({
    query: getTournamentDetailsQuery,
    variables,
  });
  return response;
};

// export const getAllTournamentTeams = async (
//   variables: TournamentIdActionProps,
// ) => {
//   const response = await postRequest({
//     query: getAllTournamentTeamsQuery,
//     variables
//   });

//   return response;
// };

export const getAllTournamentGroups = async (
  variables: GetTournamentProps,
) => {
  const response = await postRequest({
    query: getAllTournamentGroupQuery,
    variables
  });
  return response;
};

export const getTournamentGroup = async (variables: TournamentIdActionProps) => {
  const response = await postRequest({
    query: getToutnamentGroupQuery,
    variables
  });
return response;
};

export const getTournamentMatches = async (variables: GetTournamentProps) => {
  const response = await postRequest({
    query: getTournamentMatchesQuery,
    variables,
  });
  return response;
};
export const getTournamentRoundMatches = async (variables:TournamentIdActionProps) =>{
  const response = await postRequest({
    query: getRoundMatches,
    variables,
  });
  return response;
}
export const tournamentLeaderboard = async(variables: GetTournamentProps) => {  
  const response = await postRequest({
    query: tournamentLeaderboardQuery,
    variables,
  });
  return response;
}
export const tournamentMVP = async(variables: GetTournamentProps) => {
  const response = await postRequest({
    query: tournamentMVPQuery,
    variables,
  });
  return response;
}
export const getMyTournaments = async (variables: GetTournamentProps) => {
  const response = await postRequest({
    query: getMyTournamentsQuery,
    variables,
  });
  return response;
};
export const createTournament = async (variables: CreateTournamentProps) => {
  const response = await postRequest({
    query: createTournamentMutation,
    variables,
  });
  return response;
};

export const updateTournament = async (variables: CreateTournamentProps) => {
  const response = await postRequest({
    query: updateTournamentMutation,
    variables,
  });
  return response;
};

export const createTournamentGroup = async (
  variables: GetTournamentProps,
) => {
  const response = await postRequest({
    query: tournamentGroup,
    variables
  });
  return response;
};
export const updateTournamentGroup = async (
  variables:GetTournamentProps,
)=> {
    const response = await postRequest({
      query: updateTournamentGroupMutation,
      variables
    });
    return response;
  };

export const deleteTournamentGroup = async (variables: TournamentIdActionProps) => {
  const response = await postRequest({
    query: removeTournamentGroupMutation,
    variables,
  });
  return response;
};

export const addTeamToGroup = async (variables: GetTournamentProps) => {
  const response = await postRequest({
    query: addTeamToTournamentGroupMutation,
    variables,
  });
  return response;
};

export const deleteTeamFromGroup = async (variables: GetTournamentProps) => {
  const response = await postRequest({
    query: removeTeamFromTournamentGroupMutation,
    variables,
  });
  return response;
};

export const deleteTeamFromTournament = async (
  variables: TournamentIdActionProps,
) => {
  const response = await postRequest({
    query: removeTeamFromTournamentMutation,
    variables,
  });
  return response;
};

export const getAmatureRules = async (
  variables:any
)=>{
  const response = await postRequest({
    query: amatureQuery,
    variables
  });
  return response;
}
