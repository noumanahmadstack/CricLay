import { DropDownObjProps } from '../commonProps';
import { MatchStatus } from '../match';
import { PlayerObjProps } from '../player';
import { TeamObjProps } from '../team';

export interface InningLineupAttributesProps {
  id?: string;
  strikerId: string;
  nonStrikerId: string;
  bowlerId: string;
}
export interface BatterStatsAttributesProps {
  id?: string;
  shareableId?: string;
  name?: string;
  batsmanId: string;
  wicket?: WicketObjProps;
  batingStat?: BatterStatsProps;
  normalBalls?: number;
  player?: PlayerObjProps;
  runs?: string;
  ballsCount?: number;
  fours?: string;
  sixers?: string;
  strikeRate?: string;
  isImpactPlayer?: boolean;
  isSubsituted?: boolean;
  fallAtBallNumber?: number;
}
export interface BatterStatsProps {
  playedMatches?: number,
  innings?: number,
  runs?: string;
  ballsCount?: number;
  fifties?: number;
  hundreds?: number;
  hundredsPartnership?: number;
  fiftiesPartnership?: number;
  fours?: string;
  sixers?: string;
  strikeRate?: string;
  wicketType?: Wicketstype;
  wicket?: WicketObjProps;
  normalBalls?: number;
  averageRate?: number;
  points?: number;
  ballsFaced?: number;
  highestPartnership?: number;
  highestScore?: number
}
export interface BowlingStatsProps {
  playedMatches?: number,
  innings?: number,
  runs?: string;
  ballsCount?: string;
  overs: string;
  wide: number;
  economyRate: number;
  isBowling: boolean;
  maidenOvers: number;
  normalBalls: number;
  wicketsCount: number;
  extraBalls: number;
  averageRate?: number;
  points?: number;
  ballsFaced?: number;
  dotBalls?: number;
  fiveWickets?: number;
  threeWickets?: number;
  totalWickets?: number
}
export interface FieldingStatsProps {
  catches: number;
  stumpings: number;
  runOuts: number;
  points: number;
  totalWickets?: number
}
export interface BowlerStatsAttributesProps {
  id?: string;
  name: string;
  bowlerId: string;
  bowlingStat?: BowlingStatsProps;
  player?: PlayerObjProps;
  ballsCount?: string | number;
  wide?: number | string;
  overs?: string | number;
  medianOver?: string | number;
  wicketsCount?: string | number;
  runs?: string | number;
  economyRate?: string | number;
  maidenOvers?: string | number;
  isImpactPlayer?: boolean;
  isSubsituted?: boolean;
}
export interface WicketObjProps {
  inningId: string;
  playerOutId: string;
  fielderId?: string;
  id?: string;
  wicketNumber?: number;
  fallAtRuns?: number;
  playerOut?: PlayerObjProps;
  fallAtOver?: number;
  wicketType: Wicketstype;
  fielder?: PlayerObjProps;
  bowler?: PlayerObjProps;
}
export interface BallObjProps extends BallStandardProps {
  inningId: string;
  overBallsNumber: number;
  overNumber: number;
  batsmanId: string; // => [Require field]
  bowlerId: string; // => [Require field]
  nonStrikerId: string; // => [Require field]
  ballNumber: number;
  yCoordinate?: number;
  xCoordinate?: number;
  shotAngle?: number;
  id?: string;
  overId?: string;
  commentaryMessage?: string;
  bowler?: {
    name: string;
  };
  striker?: {
    name: string;
  };
  nonStriker?: {
    name: string;
  };
}
interface BallStandardProps {
  runs: number;
  ballType: BallType; // => [Require field] // normal | extra | wicket
  extrasType?: ExtrasType;
  boundaryType?: BoundaryType;
  wicketAttributes?: WicketObjProps;
  secondaryWicketAttributes?: WicketObjProps;

  yCoordinate?: number;
  xCoordinate?: number;
  shotAngle?: number;
}
export interface DrawCaseModalProps extends DropDownObjProps {
}
export interface BallObjLocalProps extends BallStandardProps {
  key: string;
  value: string;
  Icon?: any;
}
export interface InputScoreProps {
  key?: string;
  value?: string;
  batsmanId?: string;
  bowlerId?: string;
  runs: number;
  ballType?: BallType;
  wicketType: Wicketstype;
  isWicket: boolean;
  extrasType?: ExtrasType;
  fielderId: null | string;
  playerOutId: null | string;
}
export interface InputScoreOptionsProps {
  onPressScore: (data: BallObjLocalProps) => void;
}
export interface InputScoreOptionsDataProps {
  key: string;
  value: string;
  runs: number;
  ballType: BallType;
  isWicket: boolean;
  wicketType: Wicketstype;
  extrasType: ExtrasType;
  fielderId: null | string;
  playerOutId: null | string;
}
export interface CurrentPartnershipProps {
  id: string; // Assuming 'id' is of type string, you can adjust it based on your actual data type
  batsmanOneId: string;
  batsmanTwoId: string;
  runs: number;
  normalBalls: number;
  extraBalls: number;
  ballsCount: number;
  batsmanOneRuns: number;
  batsmanTwoRuns: number;
  batsmanOneBalls: number;
  batsmanTwoBalls: number;
}
export interface InningObjPros {
  id: string;
  status: InningStatuses;
  matchId?: string;
  ballsCount: number;
  currentWickets: string | number;
  batingTeamId?: string;
  bowlingTeamId?: string;
  inningNumber: number;
  totalOvers: number;
  currentOvers: number;
  currentRunRate: string;
  currentPartnership: CurrentPartnershipProps;
  runs: number;
  totalWickets: number;
  extrasTotal: number;
  ballsPerOver: number;
  extrasWides?: number;
  batingTeamPlayers: BatterStatsAttributesProps[];
  bowlingTeamPlayers: BowlerStatsAttributesProps[];
  extrasByes?: number;
  extrasLegByes?: number;
  extrasNoBalls?: number;
  extrasPenalty?: number;
  inningLineup: LineupBackendDataProps;
  batingTeam: TeamProps;
  bowlingTeam: TeamProps;
  balls: BallObjProps[];
  partnerships: PartnershipProps[];
  overs: OversObjProps[];
  duration: number | null;
  goldenBallNumber?: number | null;
}
export interface PartnershipProps {
  batsmanOne: {
    name: string;
  };
  batsmanTwo: {
    name: string;
  };
  batsmanOneRuns: string;
  batsmanTwoRuns: string;
  batsmanOneBalls: string;
  batsmanTwoBalls: string;
  runs: string;
  normalBalls: string;
  extraBalls: string;
  ballsCount: string;
  oversData?: OversObjProps[];
}
export interface TeamProps {
  id: string;
  name: string;
  logoUrl?: string;
}
export interface LineupBackendDataProps {
  strikerId: string;
  nonStrikerId: string;
  bowlerId: string;
  striker: BatterStatsAttributesProps;
  nonStriker: BatterStatsAttributesProps;
  bowler: BowlerStatsAttributesProps;
  strikerStat: {
    batsmanId: string;
    name: string;
    runs: string;
    fours: string;
    sixers: string;
    strikeRate: string;
    retiredHurt: boolean;
    retiredHurtStatus: number;
    ballsCount: string;
    isOut: boolean;
  };
  nonStrikerStat: {
    batsmanId: string;
    name: string;
    runs: string;
    fours: string;
    sixers: string;
    strikeRate: string;
    retiredHurt: boolean;
    retiredHurtStatus: number;
    ballsCount: number | string;
    isOut: boolean;
  };
  bowlerStat: {
    bowlerId: string;
    name: string;
    ballsCount: string;
    overs: string;
    runs: string;
    wide: string;
    maidenOvers: number;
    retiredHurt: boolean;
    wicketsCount: number;
    wicket: string;
    maiden: string;
    retiredHurtStatus: number;
    economyRate: string;
    isBowling: boolean;
  };
}
export interface LineupDataProps {
  batterData: BatterStatsAttributesProps[];
  bowlingData: BowlerStatsAttributesProps;
  strikerId: string;
  nonStrikerId: string;
}
export interface PlayerScoreboardProps {
  batsmanData?: BatterStatsAttributesProps[];
  bowlerData?: BowlerStatsAttributesProps | null;
  bowlersData?: BowlerStatsAttributesProps[];
  onSelectStriker?: (params: BatterStatsAttributesProps) => void;
  strikerId?: string;
  isDetailed?: boolean;
  currentInning?: InningObjPros;
  isScorecard?: boolean;
  lineupData?: LineupDataProps;
  matchStatus?: MatchStatus;
  hideBatterStatus?: boolean;
  onEditBatter?: (data:BatterStatsAttributesProps) => void;
  onEditBowler?: () => void;
  inningStatus?: string;
  includeExtras?: boolean;
  loneSurvivor?: boolean;
  onFifty?: (data: BatterStatsAttributesProps) => void;
}
export interface BatterCaseProps {
  disableTouch: boolean;
  item: BatterStatsAttributesProps;
  bowlerData?: BowlerStatsAttributesProps;
  bowlersData?: BowlerStatsAttributesProps[];
  onSelectStriker?: (params: BatterStatsAttributesProps) => void;
  onFifty?: (params: BatterStatsAttributesProps) => void;
  strikerId?: string;
  isDetailed?: boolean;
  currentInning?: InningObjPros;
  isScorecard?: boolean;
  matchStatus?: MatchStatus;
  hideBatterStatus?: boolean;
  lineupData?: LineupDataProps;
  onEditBatter?:(data:BatterStatsAttributesProps)=>void
}
export interface BowlerCaseProps {
  bowlerData?: BowlerStatsAttributesProps | null;
  bowlersData?: BowlerStatsAttributesProps[];
  currentInning?: InningObjPros;
  isScorecard?: boolean;
  isDetailed?: boolean;
  lineupData?: LineupDataProps;
  isSelected?: boolean;
  onEditBowler?: () => void;
}
export interface BowlerViewProps {
  name: string;
  image: string;
  overs: string | number;
  medianOver: string | number;
  wickets: string | number;
  runs: string | number;
  economyRate: number | string;
  isSelected?: boolean;
  currentStatus?: string;
}
export interface BatterViewProps {
  name: string;
  image: string;
  runs: string | number;
  ballCount: string | number;
  isStriker?: boolean;
  fours: string | number;
  sixes: string | number;
  strikerRate: string | number;
  currentStatus?: string | null;
  disableTouch?: boolean;
  onSelect?: () => void;
  isOut?: boolean;
  isScorecard?: boolean;
  matchStatus?: MatchStatus;
  onLongPress?:()=>void
}
export interface OversObjProps {
  id: string;
  accumulativeScore?: number;
  accumulativeWickets?: number;
  commentaryBalls: BallObjProps[];
  overNumber: number;
  sixes: number;
  fours: number;
  runs: number;
  runRate: number;
  wicketsTaken: number;
  ballsCount: number;
  maiden: boolean;
}
export interface InningScreenProps {
  teamNameTitle: string;
  isSelected: boolean;
  inningNumber: number;
  batingTeam: TeamProps;
  bowlingTeam?: TeamProps;
  overs?: number;
  extras?: number;
  partnership?: number | null;
  crr?: string;
  rrr?: number | string | null;
  inningData?: InningObjPros;
  strikerId?: string;
  batsmanData?: BatterStatsAttributesProps[];
  bowlersData?: BowlerStatsAttributesProps[];
  lineupData?: LineupDataProps;
  isScorecard?: true;
  isSecondInningStarted?: boolean;
  isDetailed?: boolean;
  matchStatus?: MatchStatus;
  tabType?: InningScreenType;
  partnerships?: PartnershipProps[];
  oversData?: OversObjProps[];
  playingPlayers?: BatterStatsAttributesProps[] | BowlerStatsAttributesProps[];
  onPressPlayer?: (data: SelectPlayerDataProps) => void;
  inningStatus?: InningObjPros['status'];
  onRefresh?: () => Promise<void | null | string>;
  isAmateur?: boolean;
}
export interface InningsTabScreenProps {
  data: InningScreenProps[];
  tabType?: InningScreenType;
  oversData?: OversObjProps[];
  isAmateur?: boolean;
}
export interface InningsTabScreenProps {
  data: InningScreenProps[];
  isCommentry?: boolean;
}
export interface RenderSceneInningTabProps {
  route: { key: string; title: string; data: InningScreenProps };
}
export interface ScoringScreenProps {
  route: any;
  currentInning: InningObjPros;
  overlayUrl?: string;
  lineupData: LineupDataProps;
  teamOne: TeamObjProps;
  teamtwo: TeamObjProps;
  tossDecision: string;
  isLoading: boolean;
  targetScore?: string | number | any;
  battingPlaying: BatterStatsAttributesProps[];
  bowlerPlaying: BowlerStatsAttributesProps[];
  currentPartnership: number;
  wicketsDown: number;
  totalExtras: number;
  currentOver: number;
  currentRuns: number;
  currentRunRate: string;
  isShowInningEnd: boolean;
  remainingScore: number;
  remainingBalls: number;
  rrr: string | null;
  shareableId: string;
  syncBalls: number;
  onRefresh?: () => Promise<void>;
  refreshing: boolean;
  otherTeamsRuns?: number;
  otherTeamsWickets?: number | string;
  otherBattingTeamId?: string;
  matchStatus?: MatchStatus;
  inningStatus?: string;
  includeExtras?: boolean;
  isAmateur?: boolean;
  isVisibleGoldenBallModal?: boolean;
}
export interface CalculateBatsmanStatsProps {
  runs: number;
  fours: number;
  sixes: number;
  ballCount: number;
  wicketAttributes: WicketObjProps;
  secondaryWicketAttributes?: WicketObjProps;
  bowlerId: string;
  showAlert: boolean;
  disabledSelect: boolean;
  outAt: string;
}

export type Wicketstype =
  | 'bowled'
  | 'catch'
  | 'catch_behind'
  | 'catch_bowled'
  | 'stumped'
  | 'run_out'
  | 'man_kaded'
  | 'lbw'
  | 'hit_wicket'
  | 'retired_hurt'
  | 'retired_out'
  | 'retired'
  | 'absent_hurt'
  | 'hit_the_ball_twice'
  | 'obstructing_the_field'
  | 'timed_out'
  | 'stumped_with_wide'
  | '';
export type BallType = 'normal' | 'extra' | 'wicket' | 'leg_bye' | 'bye' | '';
export type ExtrasType = 'safe' | 'wide' | 'no_ball' | '';
export type BoundaryType = 'safe' | 'four' | 'six' | '';
export type InningScreenType =
  | 'commentary'
  | 'card'
  | 'partnership'
  | 'playingPlayers'
  | 'stats';
export type SelectPlayerDataProps = Partial<BatterStatsAttributesProps> &
  Partial<BowlerStatsAttributesProps> &
  Partial<PlayerObjProps>;
export type ShowMatchSummaryProps = "regular" | "first_inning_summary" | "match_summary" | "current_batting_summary" | "current_bowling_summary";
export type InningStatuses = 'completed' | 'in_progress' | '';
export interface KitPointsToggleProps {
  teamOneTrouser: boolean;
  teamOneShirt: boolean;
  teamTwoTrouser: boolean;
  teamTwoShirt: boolean;
}