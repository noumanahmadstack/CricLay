import { AxiosResponse } from 'axios';
import { instance, instanceForRefreshToken, instanceFormData } from '../instance';
import { makeRequest } from '../makeRequest';
import { target } from '../target';

export interface PostRequestParams {
  query?: string;
  variables?: object;
}
export const postRequest = async ({
  query,
  variables,
}: PostRequestParams): Promise<AxiosResponse<any> | any> => {
  return makeRequest(() =>
    instance().post(target, {
      query,
      variables,
    }),
  );
};
export const postRequestFormData = async (body: PostRequestParams): Promise<AxiosResponse<any> | any> => {
  return makeRequest(() =>
    instanceFormData().post(target, body),
  );
};
export const postRequestForRefreshToken = async ({
  query,
  variables,
}: PostRequestParams): Promise<AxiosResponse<any> | any> => {
  return makeRequest(() =>
    instanceForRefreshToken().post(target, {
      query,
      variables,
    }),
  );
};
