import {FC, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {
  onLoadMoreLiveMatches,
  onMountAllMatches,
} from '../../../../redux/matches/getMatches/action';
import {RootState} from '../../../../redux/store/store';
import MatchListView from '../../../../views/matches/matchListView';
import SimpleLoader from '../../../../components/loaders/simpleLoader';
const LiveStreams: FC = () => {
  const {liveMatches, metadataLiveMatches, isLoading} = useSelector((state: RootState) => state.getMatchesReducer);
  const {currentPage, totalPages} = metadataLiveMatches;
  const data = liveMatches.filter(item => item.streamingLinks[0]?.link !== '');
  useEffect(() => {
    onMountAllMatches({status: 'started'});
  }, []);
  return (
    <>
      <SimpleLoader isLoading={isLoading} />
      <MatchListView
        data={data}
        onRefresh={() => onMountAllMatches({status: 'started'})}
        onEndReached={onLoadMoreLiveMatches}
        isLoading={isLoading}
        isLoadingPagination={data.length == 10 && currentPage < totalPages}
        isStreaming={true}
      />
    </>
  );
};
export default LiveStreams;
