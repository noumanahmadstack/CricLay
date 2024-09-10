import {FC, useEffect} from 'react';
import {LiveMatchTabDataProps} from '../../../../modelInterface/match';
import MatchListView from '../../../../views/matches/matchListView';

const LiveMatches: FC<LiveMatchTabDataProps> = props => {
  const {
    onMountAllMatches,
    metadataForLive,
    liveData,
    onRefreshingAllMatches,
    onEndReachedLive,
  } = props;
  const {currentPage, totalPages} = metadataForLive || {};
  useEffect(() => {
    onMountAllMatches();
  }, []);
  return (
    <MatchListView
      data={liveData}
      isLoadingPagination={currentPage < totalPages}
      onEndReached={onEndReachedLive}
      onRefresh={onRefreshingAllMatches}
    />
  );
};
export default LiveMatches;
