import {FC, useEffect} from 'react';
import {FixtureMatchTabDataProps} from '../../../../modelInterface/match';
import MatchListView from '../../../../views/matches/matchListView';

const FixtureMatches: FC<FixtureMatchTabDataProps> = props => {
  const {
    fixtureData,
    metadataForFixture,
    onMountFixtureMatches,
    onEndReachedFixture,
    onRefreshingFixtureMatches,
  } = props;
  const {currentPage, totalPages} = metadataForFixture || {};
  useEffect(() => {
    onMountFixtureMatches();
  }, []);
  return (
    <MatchListView
      data={fixtureData}
      isLoadingPagination={currentPage < totalPages}
      onEndReached={onEndReachedFixture}
      onRefresh={onRefreshingFixtureMatches}
    />
  );
};
export default FixtureMatches;
