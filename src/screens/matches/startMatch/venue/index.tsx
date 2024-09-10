import {FC, useEffect} from 'react';
import {View} from 'react-native';
import FloatingTabBtn from '../../../../components/floatingAddBtn';
import {SimpleScreenContainer} from '../../../../components/screensContainers/screenContainers';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../../redux/store/store';
import VenueView from '../../../../views/venue';
import styles from './styles';
import {
  onLoadMoreVenue,
  onMount,
  onRefresh,
} from '../../../../redux/matches/matchVenues/action';
import {navigate} from '../../../../routes/rootNavigation';
import SearchBar from '../../../../components/searchBar';
import {setSearchForVenueByName} from '../../../../redux/matches/matchVenues/reducer';
import SimpleLoader from '../../../../components/loaders/simpleLoader';
import Pagination from '../../../../components/pagination';
import EmptyText from '../../../../components/emptyText';
const Venue: FC<any> = ({route}) => {
  const dispatch = useDispatch();
  const {data, searchForVenueByName, isLoading, metadata} = useSelector(
    (state: RootState) => state.matchVenuesReducer,
  );
  const {isAmateur} = route?.params
  const {currentPage, totalPages} = metadata;
  useEffect(() => {
    if (searchForVenueByName == '') {
      onMount();
    }
  }, [searchForVenueByName]);
  return (
    <SimpleScreenContainer isBlue={true}>
      <SimpleLoader isLoading={isLoading} />
      <View style={styles.container}>
        <SearchBar
          onSubmitEditing={onMount}
          onChangeText={(e: string) => dispatch(setSearchForVenueByName(e))}
          value={searchForVenueByName}
        />
        <Pagination
          data={data}
          onRefreshing={onRefresh}
          contentContainerStyle={styles.contentContainerStyle}
          onLoadMore={onLoadMoreVenue}
          ListEmptyComponent={<EmptyText title="No Venues" />}
          isLoadingPagination={currentPage < totalPages}
          renderItem={({item}) => <VenueView {...item} />}
        />
        <FloatingTabBtn isAmateur={isAmateur} onPress={() => navigate('AddVenue',{isAmateur})} />
      </View>
    </SimpleScreenContainer>
  );
};
export default Venue;
