import {FC} from 'react';
import {useSelector} from 'react-redux';
import SimpleLoader from '../../components/loaders/simpleLoader';
import {
  onMountAllMatches,
  onLoadMoreLiveMatches,
  onLoadMoreResultsMatches,
  onLoadMoreFixtureMatches,
} from '../../redux/matches/getMatches/action';
import {RootState} from '../../redux/store/store';
import MatchesStatusTabs from '../../tabs/matchTabs/matchStatuses';

const Matches: FC = () => {
  const {
    liveMatches,
    fixtureMatches,
    results,
    metadataLiveMatches,
    metadataFixtureMatches,
    metadataResultsMatches,
    isLoading,
  } = useSelector((state: RootState) => state.getMatchesReducer);
  return (
    <>
      <SimpleLoader isLoading={isLoading} />
      <MatchesStatusTabs
        liveData={liveMatches}
        fixtureData={fixtureMatches}
        resultsData={results}
        metadataForLive={metadataLiveMatches}
        metadataForFixture={metadataFixtureMatches}
        metadataForResult={metadataResultsMatches}
        onMountAllMatches={() => onMountAllMatches({status: 'started'})}
        onMountFixtureMatches={() => onMountAllMatches({status: 'fixture'})}
        onMountResultsMatches={() => onMountAllMatches({status: 'completed'})}
        onEndReachedLive={onLoadMoreLiveMatches}
        onEndReachedFixture={onLoadMoreFixtureMatches}
        onEndReachedResult={onLoadMoreResultsMatches}
        onRefreshingAllMatches={() => onMountAllMatches({status: 'started'})}
        onRefreshingFixtureMatches={() =>
          onMountAllMatches({status: 'fixture'})
        }
        onRefreshingResultsMatches={() =>
          onMountAllMatches({status: 'completed'})
        }
      />
    </>
  );
};
export default Matches;
