import { PaginationProps } from '../pagination';
import { GetMatchObjectState } from '../redux/matches/reducer';
import {
  BatterStatsAttributesProps,
  BowlerStatsAttributesProps,
  InningObjPros,
} from '../scoring';

export interface StartMatchObjProps {
  categoryType?: string,
  subCategory?: string
  wickets: number;
  ball_type: string;
  match_type: string;
  scheduled_datetime: string | Date;
  formate: string;
  overs: number;
  toss_winning_team_id?: string;
  toss_decision?: string;
}

export interface LineUpScreenProps {
  id: string;
  teamOneName: string;
  teamTwoName: string;
  isSelctedTeamOne: boolean;
  isSelectedTeamTwo: boolean;
  currentOver: number;
  totalExtras: number;
  currentPartnership: number;
  currentRunRate: string;
  rrr: number | null;
  strikerId: string;
  batsmanData: BatterStatsAttributesProps[];
  bowlerData: BowlerStatsAttributesProps;
  inningNumber: number;
  teamOneLogo?: string;
  teamTwoLogo?: string;
  isDetailed?: boolean;
  liveStreamingUrl?: string;
  streamingLinks?: streamingLinksProp[];
  remainingScore?: number;
  remainingBalls?: number;
  inningStatus?: InningObjPros['status'];
  duration: InningObjPros['duration'];
  isAmateur?: boolean;
}
export interface OrganizerObjProps {
  id: string;
  name: string;
}
export interface WinningTeamProps {
  name: string;
  id: string;
  logoUrl?: string;
}
export interface WinningStatsProps {
  winByRuns: boolean;
  byRuns: string;
  winByWickets: boolean;
  byWickets: string;
}
export type MatchStatus = 'started' | 'completed' | 'fixture';

export interface LiveMatchTabDataProps {
  onMountAllMatches: () => void;
  onRefreshingAllMatches: () => void;
  liveData: GetMatchObjectState[];
  metadataForLive: PaginationProps;
  onEndReachedLive: () => void;
}
export interface FixtureMatchTabDataProps {
  onMountFixtureMatches: () => void;
  onRefreshingFixtureMatches: () => void;
  fixtureData: GetMatchObjectState[];
  metadataForFixture: PaginationProps;
  onEndReachedFixture: () => void;
}
export interface ResultsMatchTabDataProps {
  onMountResultsMatches: () => void;
  onRefreshingResultsMatches: () => void;
  resultsData: GetMatchObjectState[];
  metadataForResult: PaginationProps;
  onEndReachedResult: () => void;
}
export interface MatchesStatusTabsProps
  extends LiveMatchTabDataProps,
  FixtureMatchTabDataProps,
  ResultsMatchTabDataProps {
  isAmateur?: boolean;
}

export interface streamingLinksProp {
  link: string;
  id: string;
}