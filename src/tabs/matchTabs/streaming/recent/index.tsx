import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  onMountAllMatches,
  onLoadMoreResultsMatches,
} from '../../../../redux/matches/getMatches/action';
import { RootState } from '../../../../redux/store/store';
import MatchListView from '../../../../views/matches/matchListView';
import SimpleLoader from '../../../../components/loaders/simpleLoader';
const RecentStreams: FC = () => {
  const { metadataResultsMatches, isLoading, results } = useSelector(
    (state: RootState) => state.getMatchesReducer,
  );
  const { currentPage, totalPages } = metadataResultsMatches;
  const data = results.filter(item => item.streamingLinks[0]?.link);
  useEffect(() => {
    onMountAllMatches({ status: 'completed' });
  }, []);
  return (
    <>
      <SimpleLoader isLoading={isLoading} />
      <MatchListView
        data={data}
        onRefresh={() => onMountAllMatches({ status: 'completed' })}
        onEndReached={onLoadMoreResultsMatches}
        isLoading={isLoading}
        isLoadingPagination={data.length == 10 && currentPage < totalPages}
        isStreaming={true}
      />
    </>
  );
};
export default RecentStreams;
