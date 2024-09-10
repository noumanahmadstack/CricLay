import {FC, useEffect} from 'react';
import {useSelector} from 'react-redux';
import SimpleLoader from '../../../components/loaders/simpleLoader';
import {
  resetStatesMyMatches,
  onMountMyMatches,
  onLoadMoreMyLiveMatches,
  onLoadMoreMyFixtureMatches,
  onLoadMoreMyResultsMatches,
} from '../../../redux/matches/getMatches/action';
import {RootState} from '../../../redux/store/store';
import MatchesStatusTabs from '../../../tabs/matchTabs/matchStatuses';

const MyMatches: FC = () => {
  const {
    myLiveMatches,
    myFixtureMatches,
    myResults,
    metadataMyLiveMatches,
    metadataMyFixtureMatches,
    metadataMyResultsMatches,
    isLoading,
  } = useSelector((state: RootState) => state.getMatchesReducer);
  useEffect(() => {
    return resetStatesMyMatches;
  }, []);
  return (
    <>
      <SimpleLoader isLoading={isLoading} />
      <MatchesStatusTabs
        liveData={myLiveMatches}
        fixtureData={myFixtureMatches}
        resultsData={myResults}
        metadataForLive={metadataMyLiveMatches}
        metadataForFixture={metadataMyFixtureMatches}
        metadataForResult={metadataMyResultsMatches}
        onMountAllMatches={() => onMountMyMatches({status: 'started'})}
        onMountFixtureMatches={() => onMountMyMatches({status: 'fixture'})}
        onMountResultsMatches={() => onMountMyMatches({status: 'completed'})}
        onEndReachedLive={onLoadMoreMyLiveMatches}
        onEndReachedFixture={onLoadMoreMyFixtureMatches}
        onEndReachedResult={onLoadMoreMyResultsMatches}
        onRefreshingAllMatches={() => onMountMyMatches({status: 'started'})}
        onRefreshingFixtureMatches={() => onMountMyMatches({status: 'fixture'})}
        onRefreshingResultsMatches={() =>
          onMountMyMatches({status: 'completed'})
        }
      />
    </>
  );
};
export default MyMatches;
