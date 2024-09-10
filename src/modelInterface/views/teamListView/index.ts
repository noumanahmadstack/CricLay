import {SelectTeamFromBackProps, TeamObjProps} from '../../team';

export interface TeamListViewProps extends SelectTeamFromBackProps {
  data: TeamObjProps[];
  onEndReached?: () => void;
  isOnSubmit?: boolean;
  isPrivate?:boolean;
  onRefresh?: () => void;
  refreshing?: boolean;
  isLoadingPagination?: boolean;
  isLoading?: boolean;
  onSubmitEditing?: () => void;
  onChangeTextSearch?: (e: string) => void;
  searchKeywords?: string;
  tournament_id?: string;
  singlePlayerTab?: boolean;
  disableWholeView?: boolean;
  onPress?: (data: TeamObjProps) => void;
}
export interface TeamViewProps extends TeamObjProps, SelectTeamFromBackProps {
  isOnSubmit?: boolean;
  singlePlayerTab?: boolean;
  isPrivate?:boolean;
  disableWholeView?: boolean;
  onPress?: (data: TeamObjProps) => void;
}
