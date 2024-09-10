import {FC} from 'react';
import styles from './styles';
import CommentaryView from '../commentaryView';
import Pagination from '../../../components/pagination';
import EmptyText from '../../../components/emptyText';
import {CommentaryListViewProps} from '../../../modelInterface/views/commentary';
const CommentaryListView: FC<CommentaryListViewProps> = ({
  onRefresh,
  isLoadingPagination,
  onLoadMore,
  inningNumber,
  isAmateur,
  ...props
}) => {
  
  return (
    <Pagination
      {...props}
      contentContainerStyle={styles.contentContainer}
      onRefreshing={onRefresh}
      onLoadMore={onLoadMore}
      inverted={true}
      ListEmptyComponent={<EmptyText title="No Commentary" />}
      isLoadingPagination={isLoadingPagination}
      renderItem={({item}) => (
        <CommentaryView isAmateur={isAmateur} {...item} inningNumber={inningNumber}/>
      )}
    />
  );
};
export default CommentaryListView;
