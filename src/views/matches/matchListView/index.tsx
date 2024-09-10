import { FC } from 'react';
import styles from './styles';
import MatchView from '../matchView';
import { MatchListViewProps } from '../../../modelInterface/views/matchListView';
import SimpleLoader from '../../../components/loaders/simpleLoader';
import Pagination from '../../../components/pagination';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store/store';
import EmptyText from '../../../components/emptyText';
const MatchListView: FC<MatchListViewProps> = ({
  data,
  onEndReached,
  onRefresh,
  isLoadingPagination,
  isLoading,
  isStreaming,
}) => {
  const { matchId } = useSelector((state: RootState) => state.scoreReducer.matchDetail.currentInning) || {};
  const { id } = useSelector((state: RootState) => state.userReducer.userData.user) || {};
  return (
    <>
      <SimpleLoader isLoading={!!isLoading} />
      <Pagination
        data={data}
        onLoadMore={onEndReached}
        onRefreshing={onRefresh}
        contentContainerStyle={styles.contentContainer}
        ListEmptyComponent={<EmptyText title="No Matches"/>}
        isLoadingPagination={isLoadingPagination}
        renderItem={({ item }) => (
          <MatchView
            {...item}
            isStreaming={isStreaming}
            matchId={matchId}
            userId={id}
          />
        )}
      />
    </>
  );
};
export default MatchListView;
