import { StyleProp, ViewStyle } from 'react-native';
import { VenuesProps } from '../../apis/venues';
import { WinningStatsProps, WinningTeamProps } from '../../match';
import { GetMatchObjectState } from '../../redux/matches/reducer';
import { DrawStatusTypes, TeamObjProps } from '../../team';

export interface MatchListViewProps {
  data: GetMatchObjectState[];
  onEndReached?: () => void;
  onRefresh?: () => void;
  refreshing?: boolean;
  isLoadingPagination?: boolean;
  isLoading?: boolean;
  isStreaming?: boolean;
}
export interface MatchViewProps extends GetMatchObjectState {
  matchId: string;
  userId?: string;
  isPrivate?: boolean;
  isStreaming?: boolean;
}
export interface LiveMatchViewProps {
  teamOne: TeamObjProps;
  teamTwo: TeamObjProps;
}
export interface CompletedMatchViewProps {
  teamOne: TeamObjProps;
  teamTwo: TeamObjProps;
}
export interface FixtureViewProps {
  teamOne: TeamObjProps;
  teamTwo: TeamObjProps;
  venue: VenuesProps;
  matchType:string
}
export interface StreamingViewProps {
  liveStreamingUrl?: string | null;
  listing?: boolean;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}
