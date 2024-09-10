import {
  LoginWithEmailProps,
  LoginWithPhoneProps,
  RefreshTokenApiProps,
} from '../../../../modelInterface/apis/authentication';
import {postRequest, postRequestForRefreshToken} from '../../../methods';
import {
  loginWithEmailQuery,
  loginWithPhoneQuery,
  refreshTokenMutation,
} from './query';
export const loginWithEmailMutation = async (
  variables: LoginWithEmailProps,
) => {
  const response = await postRequest({
    query: loginWithEmailQuery,
    variables,
  });
  return response;
};
export const loginWithPhoneMutation = async (
  variables: LoginWithPhoneProps,
) => {
  const response = await postRequest({
    query: loginWithPhoneQuery,
    variables,
  });
  return response;
};
export const refreshToken = async (variables: RefreshTokenApiProps) => {
  const response = await postRequestForRefreshToken({
    query: refreshTokenMutation,
    variables,
  });
  return response;
};
