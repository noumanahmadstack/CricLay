import {GetVenueProps, VenuesProps} from '../../../modelInterface/apis/venues';
import {postRequest} from '../../methods';
import {createVenueMutation, getVenuesQuery} from './query';
export const createVenue = async (variables: VenuesProps) => {
  const response = await postRequest({
    query: createVenueMutation,
    variables,
  });
  return response;
};
export const getVenues = async (variables?: GetVenueProps) => {
  const response = await postRequest({
    query: getVenuesQuery,
    variables,
  });
  return response;
};
