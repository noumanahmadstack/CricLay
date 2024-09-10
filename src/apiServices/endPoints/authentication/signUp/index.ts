import {
  SignUpWithEmailProps,
  SignUpWithPhoneProps,
} from '../../../../modelInterface/apis/authentication';
import {postRequest} from '../../../methods';
import {signUpWithEmailQuery, signUpWithPhoneQuery} from './query';
export const signUpWithPhoneMutation = async (
  variables: SignUpWithPhoneProps,
) => {
  const response = await postRequest({
    query: signUpWithPhoneQuery,
    variables,
  });
  return response;
};
export const signUpWithEmailMutation = async (
  variables: SignUpWithEmailProps,
) => {
  const response = await postRequest({
    query: signUpWithEmailQuery,
    variables,
  });
  return response;
};
