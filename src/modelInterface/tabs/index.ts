import { Route, SceneRendererProps, TabBarProps } from 'react-native-tab-view';
import { PaginationProps } from '../pagination';
import { PlayerObjProps } from '../player';
import {
  BallObjProps,
  BatterStatsAttributesProps,
  BowlerStatsAttributesProps,
  SelectPlayerDataProps,
} from '../scoring';
import { TabRoutesProps } from '../tabRoutes';
export interface TabViewHeaderProps
  extends SceneRendererProps,
  TabBarProps<Route> { }
export interface PlayerTab1Props {
  onMountTab1: () => void;
  onLoadMoreTab1?: () => void;
  dataTab1: BatterStatsAttributesProps[] | BowlerStatsAttributesProps[];
  isLoadingTab1: boolean;
  metadataTab1?: PaginationProps;
  searchKeywordsTab1?: string;
  isLoadingPagination?: boolean;
  onChangeTextTab1?: (keyword: string) => void;
  onSubmitEditingTab1?: () => void;
  onRefresh1?: () => void;
  onSelectPlayer1?: (data: SelectPlayerDataProps) => void;
  isMatchPlaying?: boolean;
  ballsData?: BallObjProps[];
  isBatsman?: boolean;
  ballsPerOver?: number;
  totalOvers?: number;
  isAmateur?: boolean;
  isImpactPlayer?:boolean;
  isSubsituted?:boolean;
  onLongPressTab1?: (data: SelectPlayerDataProps) => void;
  onAddSubsituteTab1?: (data: SelectPlayerDataProps) => void;
  onDelete?: (data: SelectPlayerDataProps) => void;
  isDeleteable?: boolean;
}
export interface PlayerTab2Props {
  onMountTab2: () => void;
  onLoadMoreTab2?: () => void;
  dataTab2: PlayerObjProps[];
  isLoadingPagination?: boolean;
  isLoadingTab2: boolean;
  metadataTab2?: PaginationProps;
  searchKeywordsTab2?: string;
  onChangeTextTab2?: (keyword: string) => void;
  onSubmitEditingTab2?: () => void;
  onPlayerToAddIntoPlaying?: (data: PlayerObjProps) => void;
  onRefresh2?: () => void;
  onSelectPlayer2?: (data: SelectPlayerDataProps) => void;
  isMatchPlaying?: boolean;
  totalOvers?: number;
  isAmateur?: boolean;
}
export interface PlayersTabProps extends TabRoutesProps {
  index: number;
  onIndexChange: (index: number) => void;
  onPressAddBtn?: () => void;
  onPlayerToAddIntoPlaying?: (data: PlayerObjProps) => void;
  isAmateur?: Boolean
}
export interface IsMatchPlayerProps {
  isMatchPlayer: boolean;
}
