import {AxiosResponse} from 'axios';
import {handleGraphQLError} from '../errorHandling';
import {errorCase, multipleChoices, success} from '../statusCode';
export const handleResponse = <T>(response: AxiosResponse<any>): T | string =>
  response?.status >= success && response?.status < multipleChoices
    ? handleGraphQLError(response.data)
    : errorCase;
