import { AxiosError, AxiosResponse } from 'axios';
import crashlytics from '@react-native-firebase/crashlytics';
import { toastMessage } from '../../components/toastMessages';
import { errorCase } from '../statusCode';
import { handleErrorProps } from '../../modelInterface/apis/handleGraphError';
export const handleError = (error: AxiosError): string => {
  crashlytics().recordError(error);
  toastMessage(error?.message);
  if (error?.response) {
    console.log('Response Error:', JSON.stringify(error?.response));
  } else if (error.request) {
    console.log('Request Error:', error?.request);
  } else {
    console.log('Error:', error?.message);
  }
  return errorCase;
};

export const handleGraphQLError = <T>(
  response: AxiosResponse<any>,
): T | string => {
  const dataKeys = Object.keys(response?.data);
  for (const key of dataKeys) {
    const responseData = response?.data[key];
    if (responseData && responseData?.errors?.length > 0) {
      responseData?.errors?.map((item: handleErrorProps) =>
      
        toastMessage(item?.message),
      );
      return errorCase;
    }
    if (responseData) {
      return responseData;
    }
  }
  return errorCase;
};
