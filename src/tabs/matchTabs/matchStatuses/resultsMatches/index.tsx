import {FC, useEffect} from 'react';
import {ResultsMatchTabDataProps} from '../../../../modelInterface/match';
import MatchListView from '../../../../views/matches/matchListView';

const ResultsMatches: FC<ResultsMatchTabDataProps> = props => {
  const {
    resultsData,
    metadataForResult,
    onMountResultsMatches,
    onEndReachedResult,
    onRefreshingResultsMatches,
  } = props;
  const {currentPage, totalPages} = metadataForResult || {};
  useEffect(() => {
    onMountResultsMatches();
  }, []);

  return (
    <MatchListView
      data={resultsData}
      isLoadingPagination={currentPage < totalPages}
      onEndReached={onEndReachedResult}
      onRefresh={onRefreshingResultsMatches}
    />
  );
};
export default ResultsMatches;
