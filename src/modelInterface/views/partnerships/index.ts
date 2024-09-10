import {ReactElement} from 'react';
import {PartnershipProps} from '../../scoring';

export interface PartnershipListViewProps {
  data: PartnershipProps[];
  ListHeaderComponent?: ReactElement;
  isLoadingPagination?: boolean;
  onRefresh?: () => void;
  onLoadMore?: () => void;
}
export interface PartnershipViewProps extends PartnershipProps {}
