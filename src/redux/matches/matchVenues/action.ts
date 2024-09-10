import { createVenue, getVenues } from '../../../apiServices/endPoints/venues';
import { errorCase } from '../../../apiServices/statusCode';
import { toastMessage } from '../../../components/toastMessages';
import { goBack } from '../../../routes/rootNavigation';
import { store } from '../../store/store';
import { addToData, setData, setIsLoading, setMetaData } from './reducer';

export const onCreateVenue = async () => {
  const { title, subTitle, lat, long, fullAddress } = store.getState().matchVenuesReducer;
  store.dispatch(setIsLoading(true));
  const response = await createVenue({
    title,
    subTitle,
    lat: lat,
    long: long,
    fullAddress,
  });
  if (response !== errorCase) {
    toastMessage('Venue created Successfully');
    goBack();
    await onMount();
  }
  store.dispatch(setIsLoading(false));
};
export const onMount = async () => {
  const { searchForVenueByName } = store.getState().matchVenuesReducer;
  store.dispatch(setIsLoading(true));
  const response = await getVenues({ title: searchForVenueByName });
  if (response !== errorCase) {
    store.dispatch(setData(response?.collection));
    store.dispatch(setMetaData(response?.metadata));
  }
  store.dispatch(setIsLoading(false));
};
export const onRefresh = async () => {
  const { searchForVenueByName } = store.getState().matchVenuesReducer;
  const response = await getVenues({ title: searchForVenueByName });
  if (response !== errorCase) {
    store.dispatch(setData(response?.collection));
  }
};
export const onLoadMoreVenue = async () => {
  const { metadata, searchForVenueByName } = store.getState().matchVenuesReducer;
  const { currentPage, totalPages } = metadata;
  if (currentPage < totalPages) {
    const page = currentPage + 1;
    const response = await getVenues({ page, title: searchForVenueByName });
    if (response !== errorCase) {
      store.dispatch(addToData(response?.collection));
      store.dispatch(setMetaData(response?.metadata));
    }
  }
};
