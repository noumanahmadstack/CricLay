import { VenuesProps } from '../../apis/venues';
import { WinningStatsProps, WinningTeamProps } from '../../match';
import { GetMatchObjectState } from '../../redux/matches/reducer';
import { TeamObjProps } from '../../team';
import { GetTournamentObjectProps } from '../../tournaments';

export interface TournamentListViewProps {
    data: GetTournamentObjectProps[];
    onEndReached?: () => void;
    onRefresh?: () => void;
    refreshing?: boolean;
    isLoadingPagination?: boolean;
    isLoading?: boolean;
    onSubmitEditing?: () => void;
    onChangeTextSearch?: (e: string) => void;
    searchKeywords?: string;
}
// export interface MatchViewProps extends GetMatchObjectState {
//   matchId: string;
//   userId?: string;
//   isPrivate?: boolean;
//   isStreaming?: boolean;
// }
// export interface LiveMatchViewProps {
//   teamOne: TeamObjProps;
//   teamTwo: TeamObjProps;
// }
// export interface CompletedMatchViewProps {
//   teamOne: TeamObjProps;
//   teamTwo: TeamObjProps;
//   id: string;
//   winningStats: WinningStatsProps;
//   isTie: boolean;
//   winningTeam: WinningTeamProps;
//   message?:string;
// }
// export interface FixtureViewProps {
//   teamOne: TeamObjProps;
//   teamTwo: TeamObjProps;
//   venue: VenuesProps;
// }
// export interface StreamingViewProps {
//   liveStreamingUrl?: string | null;
// }
