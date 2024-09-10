import {PaginationProps} from '../../../pagination';
import {SearchByNameProps} from '../../../searchFields';
import {AddVenueObjProps, GetVenueObjProps} from '../../../venues';

export interface MatchVenuesState extends AddVenueObjProps {
  data: GetVenueObjProps[];
  isRefreshing: boolean;
  isLoading: boolean;
  error: string;
  metadata: PaginationProps;
  searchForVenueByName: SearchByNameProps['name'];
}
