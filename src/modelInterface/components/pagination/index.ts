import {FlatListProps} from 'react-native';
export interface PaginationComponentProps extends FlatListProps<any> {
  onLoadMore?: () => void;
  onRefreshing?: () => void;
  isLoadingPagination?: boolean;
}
