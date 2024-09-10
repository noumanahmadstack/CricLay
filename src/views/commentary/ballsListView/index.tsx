import {FC} from 'react';
import styles from './styles';
import Pagination from '../../../components/pagination';
import EmptyText from '../../../components/emptyText';
import {CommentaryBallsListViewProps} from '../../../modelInterface/views/commentary';
import CommentaryBallsView from '../ballsView';
const CommentaryBallsListView: FC<CommentaryBallsListViewProps> = ({
  onRefresh,
  isLoadingPagination,
  onLoadMore,
  isAmateur,
  ...props
}) => {
  return (
    <Pagination
      {...props}
      contentContainerStyle={styles.contentContainer}
      onRefreshing={onRefresh}
      onLoadMore={onLoadMore}
      ListEmptyComponent={<EmptyText title="No Commentary Balls" />}
      isLoadingPagination={isLoadingPagination}
      renderItem={({item}) => <CommentaryBallsView {...item} isAmateur={isAmateur} />}
    />
  );
};
export default CommentaryBallsListView;
