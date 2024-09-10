import axios, { AxiosRequestConfig } from 'axios';
import crashlytics from '@react-native-firebase/crashlytics';
import { store } from '../../redux/store/store';
import { setUserData } from '../../redux/user/reducer';
import { refreshToken } from '../endPoints/authentication/login';
import { errorCase, tokenExpireCase } from '../statusCode';

const baseURL = "https://api.criclay.com/";
export const shareableInstanceBaseURL = "https://www.criclay.com/"

// export const baseURL = 'https://staging.criclay.com/';
// export const shareableInstanceBaseURL = 'https://front-staging.criclay.com/';
interface InstanceOptions {
  headers?: AxiosRequestConfig['headers'];
  transformRequest?: AxiosRequestConfig['transformRequest'];
}

const createInstance = ({ headers, transformRequest }: InstanceOptions) => {
  const { token } = store.getState().userReducer.userData || {};
  const instance = axios.create({
    baseURL,
    headers: {
      ...headers,
      Authorization: token,
    },
    transformRequest,
  });
  instance.interceptors.request.use(
    async config => {
      return config;
    },
    error => {
      return Promise.reject(error);
    },
  );

  instance.interceptors.response.use(
    response => {
      return response;
    },
    async error => {
      crashlytics().recordError(error);
      const originalRequest = error.config;
      if (token && error.response && error.response.status == tokenExpireCase) {
        const response = await refreshToken({ refresh_token: token });
        if (response !== errorCase) {
          if (response?.success) {
            originalRequest.headers.Authorization = response?.token;
            store.dispatch(setUserData(response));
          }
        }
      }
      return axios(originalRequest);
    },
  );
  return instance;
};
export const instanceForRefreshToken = () => {
  return axios.create({
    baseURL,
  });
};

export const instance = () => createInstance({});

export const instanceWithoutHeader = () =>
  axios.create({
    baseURL,
  });
export const instanceFormData = () =>
  createInstance({
    headers: {
      'Content-type': 'multipart/form-data',
    },
    transformRequest: data => {
      return data;
    },
  });
