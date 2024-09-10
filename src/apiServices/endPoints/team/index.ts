import {
  CreateTeamProps,
  GetPlayingStatusOfPlayerInMatchProps,
  GetTeamProps,
  GetTeamsProps,
} from '../../../modelInterface/apis/teams';
import {PageNoProps} from '../../../modelInterface/commonProps';
import {SearchByNameProps} from '../../../modelInterface/searchFields';
import {postRequest} from '../../methods';
import {
  createTeamQuery,
  getMyTeamsQuery,
  getAllTeamsQuery,
  getTeamQuery,
  getTeamPlayersQuery,
  addTeamQuery,
  getTeamMatchesQuery,
} from './query';
export const createTeam = async (variables: CreateTeamProps) => {
  const response = await postRequest({
    query: createTeamQuery,
    variables,
  });
  return response;
};
export const addTeamApi = async (variables: CreateTeamProps) => {
  const response = await postRequest({
    query: addTeamQuery,
    variables,
  });
  return response;
};
export const myTeamsApi = async (variables?: GetTeamsProps) => {
  const response = await postRequest({
    query: getMyTeamsQuery,
    variables,
  });
  return response;
};
export const allTeamsApi = async (variables?: GetTeamsProps) => {
  const response = await postRequest({
    query: getAllTeamsQuery,
    variables,
  });
  return response;
};
export const getTeam = async (variables: GetTeamProps) => {
  const response = await postRequest({
    query: getTeamQuery,
    variables,
  });
  return response;
};
export const getTeamMatches = async (variables: GetTeamProps) => {
  const response = await postRequest({
    query: getTeamMatchesQuery,
    variables,
  });
  return response;
};
export const getTeamPlayers = async (variables: GetTeamProps) => {
  const response = await postRequest({
    query: getTeamMatchesQuery,
    variables,
  });
  return response;
};
export const getTeamPlayersApi = async (
  variables: GetTeamProps &
    PageNoProps &
    GetPlayingStatusOfPlayerInMatchProps &
    SearchByNameProps,
) => {
  const response = await postRequest({
    query: getTeamPlayersQuery,
    variables,
  });
  return response;
};
