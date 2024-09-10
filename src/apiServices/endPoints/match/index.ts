import {
  GetInningProps,
  GetMatchesProps,
  GetMatchProps,
  ManOfMatchProps,
  SetGoldenBallProps,
  StartMatchProps,
  UpdateMatchProps,
} from '../../../modelInterface/apis/match';
import { postRequest } from '../../methods';
import {
  startMatchMutation,
  allMatchesQuery,
  endInningMutation,
  getMatchQuery,
  matchViewQuery,
  myMatchesQuery,
  updateMatchMutation,
  manOfMatchMutation,
  drawMatchMutation,
  mostValuablePlayer,
  tickerToogle,
  viewMatchQuery,
  setGoldenBallNumberMutation,
} from './query';
export const startMatch = async (variables: StartMatchProps) => {
  const response = await postRequest({
    query: startMatchMutation,
    variables,
  });
  return response;
};
export const ManOfMatch = async (variables: ManOfMatchProps) => {
  const response = await postRequest({
    query: manOfMatchMutation,
    variables,
  });
  return response;
};
export const allMatches = async (variables: GetMatchesProps) => {
  const response = await postRequest({
    query: allMatchesQuery,
    variables,
  });
  return response;
};
export const endInning = async (variables: GetInningProps) => {
  const response = await postRequest({
    query: endInningMutation,
    variables,
  });
  return response;
};
export const drawMatch = async (variables: GetInningProps) => {
  const response = await postRequest({
    query: drawMatchMutation,
    variables,
  });
  return response;
};
export const getMatch = async (variables: GetMatchProps) => {
  const response = await postRequest({
    query: getMatchQuery,
    variables,
  });
  return response;
};
export const getMatchToggleSummaryStatus = async (variables: GetMatchProps) => {
  const response = await postRequest({
    query: viewMatchQuery,
    variables,
  });
  return response;

}
export const myMatches = async (variables: GetMatchesProps) => {
  const response = await postRequest({
    query: myMatchesQuery,
    variables,
  });
  return response;
};
export const getMatchDetail = async (variables: GetMatchProps) => {
  const response = await postRequest({
    query: matchViewQuery,
    variables,
  });

  return response;
};
export const updateMatch = async (
  variables: StartMatchProps | UpdateMatchProps,
) => {
  const response = await postRequest({
    query: updateMatchMutation,
    variables,
  });
  return response;
};
export const setGoldenBall = async (
  variables: SetGoldenBallProps,
) => {
  const response = await postRequest({
    query: setGoldenBallNumberMutation,
    variables,
  });
  return response;
};

export const matchMvps = async (variables: GetMatchProps) => {
  const response = await postRequest({
    query: mostValuablePlayer,
    variables
  })
  return response;
}
export const ticker = async (variables: GetInningProps) => {
  const response = await postRequest({
    query: tickerToogle,
    variables
  })
  return response;
}
