import { ReactElement } from 'react';
import { LeaderBoardPlayers, PlayerObjProps, PlayerRoleProps } from '../../player';
import {
  BallObjProps,
  BatterStatsAttributesProps,
  BowlerStatsAttributesProps,
  SelectPlayerDataProps,
} from '../../scoring';

export interface PlayerListViewProps {
  data:
  | PlayerObjProps[]
  | BatterStatsAttributesProps[]
  | BowlerStatsAttributesProps[];
  ListHeaderComponent?: ReactElement;
  onPlayerToAddIntoPlaying?: (data: PlayerObjProps) => void;
  isLoadingPagination?: boolean;
  isLoading?: boolean;
  onSelectPlayer?: (data: SelectPlayerDataProps) => void;
  onRefresh?: () => void;
  onLoadMore?: () => void;
  onSubmitEditing?: () => void;
  onChangeTextSearch?: (e: string) => void;
  onLongPress?: (data:SelectPlayerDataProps) => void;
  addSubsitute?: (data:SelectPlayerDataProps) => void;
  onDelete?: (data:SelectPlayerDataProps) => void;
  searchKeywords?: string;
  isMatchPlaying?: boolean;
  ballsData?: BallObjProps[];
  isBatsman?: boolean;
  ballsPerOver?: number;
  isPrivate?: boolean;
  viewType?: PlayerViewTypes;
  teamId?: string;
  totalOvers?: number;
  isAmateur?: boolean;
  isImpactPlayer?:boolean;
  isSubsituted?:boolean;
  isDeleteable?: boolean;
}
export interface PlayerViewProps extends PlayerObjProps, LeaderBoardPlayers {
  onPlayerToAddIntoPlaying?: (data: PlayerObjProps) => void;
  onSelectPlayer?: (data: SelectPlayerDataProps) => void;
  ballsPerOver?: number;
  disabled?: boolean;
  isMatchPlaying?: boolean;
  ballsData?: BallObjProps[];
  isBatsman?: boolean;
  isPrivate?: boolean;
  viewType?: PlayerViewTypes;
  teamId?: string;
  jerseyNumber?: string;
  isWicketKeeper?: boolean;
  role?: PlayerRoleProps;
  totalOvers?: number;
  isAmateur?: boolean;
  isImpactPlayer?:boolean;
  isSubsituted?:boolean;
  isShowSubsitutePlayer?:boolean;
  onLongPress?: (data:SelectPlayerDataProps) => void;
  addSubsitute?: (data:SelectPlayerDataProps) => void;
  onDelete?: (data:SelectPlayerDataProps) => void;
  isDeleteable?: boolean;
}
export type PlayerViewTypes = "leaderBoard" | "teamPlayers" | "editTeamPlayer" | "default"
