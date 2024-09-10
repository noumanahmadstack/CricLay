import { postRequest } from '../../methods';
import { createBallMutation, updateBallMutation, updateInningLineupMutation } from './query';
import {
  CreateBallsApiProps,
  UpdateInningLineupApiProps,
  UpdatedBallApiProps,
} from '../../../modelInterface/apis/scoring';

export const createBall = async (variables: CreateBallsApiProps) => {
  const response = await postRequest({
    query: createBallMutation,
    variables,
  });
  return response;
};

export const updateBall = async (variables: UpdatedBallApiProps) => {
  const response = await postRequest({
    query: updateBallMutation,
    variables
  });

  return response
}
export const updateInningLineupApi = async (
  variables: UpdateInningLineupApiProps,
) => {
  const response = await postRequest({
    query: updateInningLineupMutation,
    variables,
  });
  return response;
};
