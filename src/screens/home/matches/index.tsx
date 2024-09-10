import {FC, useEffect} from 'react';
import {Dimensions} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Carousel from 'react-native-snap-carousel';
import MatchView from '../../../views/matches/matchView';
import SlidersScreenContainer from '../components/slidersContainer';
import {onMountAllMatches} from '../../../redux/matches/getMatches/action';
import {RootState} from '../../../redux/store/store';
import {navigate} from '../../../routes/rootNavigation';
import {setIndex} from '../../../redux/matches/getMatches/reducer';
import PaginationLoader from '../../../components/loaders/paginationLoader';
import EmptyText from '../../../components/emptyText';
import {MatchStatus} from '../../../modelInterface/match';
import styles from './styles';
const Matches: FC<{status: MatchStatus}> = ({status}) => {
  const dispatch = useDispatch();
  const {liveMatches, isLoading, results, fixtureMatches} = useSelector(
    (state: RootState) => state.getMatchesReducer,
  );
  const {id} =
    useSelector((state: RootState) => state.userReducer.userData.user) || {};
  const {width} = Dimensions.get('screen');
  useEffect(() => {
    onMountAllMatches({status});
  }, [status]);
  return (
    <SlidersScreenContainer
      headerTitle={`${
        status == 'started'
          ? 'Live'
          : status == 'fixture'
          ? 'Upcoming'
          : 'Completed'
      } Matches`}
      onPressViewAll={() => {
        dispatch(
          setIndex(status == 'started' ? 0 : status == 'fixture' ? 1 : 2),
        ),
          navigate('Matches');
      }}>
      <Carousel
        data={
          status == 'started'
            ? liveMatches
            : status == 'fixture'
            ? fixtureMatches
            : results
        }
        renderItem={({item}) => (
          <MatchView status={status} userId={id} {...item} />
        )}
        ListEmptyComponent={
          isLoading ? (
            <PaginationLoader
              style={styles.paginationLoader}
              isLoading={isLoading}
            />
          ) : (
            <EmptyText
              containerStyle={styles.emptyTextContainer}
              title="No Matches"
            />
          )
        }
        sliderWidth={width}
        enableMomentum={true}
        initialNumToRender={2}
        keyExtractor={({id}) => id}
        maxToRenderPerBatch={2}
        itemWidth={width / 1.08}
        contentContainerCustomStyle={styles.contentContainerStyle}
      />
    </SlidersScreenContainer>
  );
};
export default Matches;
