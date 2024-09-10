import {AxiosError, AxiosResponse} from 'axios';
import {handleError} from '../errorHandling';
import {handleResponse} from '../handleResponse';
export const makeRequest = async <T>(
  requestMethod: () => Promise<AxiosResponse<T> | any>,
): Promise<T | string> => {
  try {
    const response = await requestMethod().catch((e: AxiosError) =>
      handleError(e),
    );
    return handleResponse(response);
  } catch (error: any) {
    return handleError(error);
  }
};
