import {FC} from 'react';
import styles from './styles';
import PartnershipView from '../partnershipView';
import Pagination from '../../../components/pagination';
import EmptyText from '../../../components/emptyText';
import {PartnershipListViewProps} from '../../../modelInterface/views/partnerships';
const PartnershipsListView: FC<PartnershipListViewProps> = ({
  onRefresh,
  isLoadingPagination,
  onLoadMore,
  ...props
}) => {
  return (
    <Pagination
      {...props}
      contentContainerStyle={styles.contentContainer}
      onRefreshing={onRefresh}
      onLoadMore={onLoadMore}
      ListEmptyComponent={<EmptyText title="No Partnership" />}
      isLoadingPagination={isLoadingPagination}
      renderItem={({item}) => <PartnershipView {...item}/>}
    />
  );
};
export default PartnershipsListView;
