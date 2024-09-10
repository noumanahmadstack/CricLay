import {ReactElement} from 'react';
import {BallObjProps, OversObjProps} from '../../scoring';

export interface CommentaryListViewProps {
  data: OversObjProps[];
  ListHeaderComponent?: ReactElement;
  isLoadingPagination?: boolean;
  onRefresh?: () => void;
  onLoadMore?: () => void;
  inningNumber?: number;
  isAmateur?:boolean
}
export interface CommentaryBallsListViewProps {
  data: BallObjProps[];
  ListHeaderComponent?: ReactElement;
  isLoadingPagination?: boolean;
  onRefresh?: () => void;
  onLoadMore?: () => void;
  inningNumber?: number;
  isAmateur?:boolean
}
export interface CommentaryiewProps extends OversObjProps {
  inningNumber?: number;
  matchType:string;
  isAmateur:boolean
}
