import {
  MatchStatus,
  OrganizerObjProps,
  streamingLinksProp,
  WinningStatsProps,
  WinningTeamProps,
} from '../../../match';
import { PaginationProps } from '../../../pagination';
import { LeaderBoardPlayers } from '../../../player';
import {
  BatterStatsAttributesProps,
  BowlerStatsAttributesProps,
  InningObjPros,
  ShowMatchSummaryProps,
} from '../../../scoring';
import { TabRoutesProps } from '../../../tabRoutes';
import { DrawStatusTypes, TeamObjProps, TournamentTeamObjProps } from '../../../team';
import { TournamentObjectProps } from '../../../tournaments';
import { GetVenueObjProps } from '../../../venues';

export interface StartMatchState {
  isLoading: boolean;
  index: number;
  tossWinningTeam: TeamObjProps;
  toss_decision: string;
  playersIndex: number;
  routes: TabRoutesProps;
  playersRoutes: TabRoutesProps;
  teamA: TeamObjProps;
  teamB: TeamObjProps;
  scheduled_datetime: string;
  ball_type: string;
  wickets: string;
  match_type: string;
  formate: string;
  overs: string;
  isTossModalOpen: boolean;
  toss_winning_team_id: string;
  tossDecisions: Array<{
    name: string;
    toss_decision: string;
  }>;
}

export interface BatterStatsAttributes {
  id?: string;
  name?: string;
  batsmanId: string;
  runs: string;
  fours: string;
  sixers: string;
  strikeRate: string;
  retiredHurt: boolean;
  ballsCount: number;
  isOut: boolean;
}

export interface BowllerStatsAttributes {
  bowlerId: string;
  name?: string;
  ballsCount: number;
  overs: string;
  runs: number;
  wide: number;
  retiredHurt: boolean;
  retiredHurtStatus: boolean;
  wicket?: string;
  maiden?: string;
  economyRate: string;
  isBowling: boolean;
}

export interface manOfTheMatch {
  name: string;
  // avatarUrl: string;
  batingStat: BatterStatsAttributesProps;
  bowlingStat: BowlerStatsAttributesProps;
}

export interface GetMatchObjectState {
  tickerToggleStatus?: ShowMatchSummaryProps
  id: string;
  isAmateur?: boolean;
  status?: MatchStatus;
  message?: string;
  group?: {
    id: string;
    name: string;
  };
  matchCategoryType?: string;
  matchSubCategoryType?: string;
  actionStatus?: DrawStatusTypes;
  stats: {
    manOfTheMatch: manOfTheMatch | null;
  };
  liveStreamingUrl: string;
  streamingLinks: streamingLinksProp[];
  organizer: OrganizerObjProps;
  shareableId: string;
  overs: number;
  wickets: number;
  ballType: string;
  teamOne: TeamObjProps;
  teamTwo: TeamObjProps;
  venue: GetVenueObjProps;
  scheduledDatetime: string;
  tossDecision: string;
  scorerId?: string;
  formate: string;
  matchType: string;
  matchId: string;
  targetScore?: number;
  tournament: TournamentObjectProps;
  scorer: {
    player: {
      shareableId: string;
    };
  };
  summary?: {
    matchSummaryUrl:string
    teamOne: TeamObjProps;
    teamTwo: TeamObjProps;
  };
  winningTeam: WinningTeamProps;
  isTie: boolean;
  winningStats: WinningStatsProps;
  currentInning: InningObjPros;
  overlayUrl: string;
  innings: InningObjPros[];
}
export interface GetTournamentMatchObjectState extends GetMatchObjectState {
  teamOne: TournamentTeamObjProps;
  teamTwo: TournamentTeamObjProps;
}
export interface GetMatchesState extends TabRoutesProps {
  liveMatches: GetMatchObjectState[];
  myLiveMatches: GetMatchObjectState[];
  myMatches: GetMatchObjectState[];
  fixtureMatches: GetMatchObjectState[];
  myFixtureMatches: GetMatchObjectState[];
  results: GetMatchObjectState[];
  myResults: GetMatchObjectState[];
  metadataLiveMatches: PaginationProps;
  metadataFixtureMatches: PaginationProps;
  metadataResultsMatches: PaginationProps;
  metadataMyMatches: PaginationProps;
  metadataMyLiveMatches: PaginationProps;
  metadataMyFixtureMatches: PaginationProps;
  metadataMyResultsMatches: PaginationProps;
  index: number;
  isRefreshing: false;
  isLoading: boolean;
  matchDetail: GetMatchObjectState;
}
export interface MatchDetailsStateProps {
  isLoading: boolean;
  matchDetail: GetMatchObjectState;
  matchMvps: LeaderBoardPlayers[]
}

// export interface mostValuablePlayerState {
//   isLoading?:boolean
//   matchMvps:PlayerObjProps[]
// }
