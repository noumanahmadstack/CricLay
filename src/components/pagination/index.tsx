import {FC, useCallback, useState} from 'react';
import {FlatList} from 'react-native';
import {PaginationComponentProps} from '../../modelInterface/components/pagination';
import ListViewSeprator from '../listViewSeprator';
import PaginationLoader from '../loaders/paginationLoader';
const Pagination: FC<PaginationComponentProps> = props => {
  const {onRefreshing, onLoadMore, isLoadingPagination, ...flatListProps} =
    props;
  const [isLoadingNextPage, setisLoadingNextPage] = useState<boolean>(false);
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
  const handleOnLoadMore = useCallback(async () => {
    if (onLoadMore) {
      if (!isLoadingNextPage) {
        setisLoadingNextPage(true);
        await onLoadMore();
        setisLoadingNextPage(false);
      }
    }
  }, [isLoadingNextPage, onLoadMore]);
  const handleOnRefreshing = useCallback(async () => {
    if (onRefreshing) {
      setIsRefreshing(true);
      await onRefreshing();
      setIsRefreshing(false);
    }
  }, [onRefreshing]);
  return (
    <FlatList
    showsVerticalScrollIndicator={false}
      keyExtractor={({id}) => id}
      onEndReached={handleOnLoadMore}
      refreshing={isRefreshing}
      onRefresh={handleOnRefreshing}
      onEndReachedThreshold={0.1}
      ListFooterComponent={
        isLoadingPagination ? <PaginationLoader isLoading={true} /> : null
      }
      ItemSeparatorComponent={() => <ListViewSeprator />}
      {...flatListProps}
    />
  );
};
export default Pagination;
