import { gql, useMutation } from '@apollo/client';
import { AccountUpdateApiProps } from '../../../modelInterface/apis/profile';
import { postRequest, postRequestFormData } from '../../methods';
import { claimProfileMutation, deleteAccountMutation, updateAccountMutation } from './query';

export const deleteAccountApi = async () => {
  const response = await postRequest({
    query: deleteAccountMutation,
  });
  return response;
};
export const updateAccountApi = async (variables: AccountUpdateApiProps) => {
  const response = await postRequest({
    query: updateAccountMutation,
    variables,
  });
  return response;
};

export const claimProfileApi = async (body: any) => {
  const response = await postRequestFormData(body);
  return response;
}
