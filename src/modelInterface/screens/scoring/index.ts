import { DropDownObjProps } from '../../commonProps';
import { GetMatchObjectState } from '../../redux/matches/reducer';
import {
  BallObjLocalProps,
  BallObjProps,
  BallType,
  BatterStatsAttributesProps,
  BowlerStatsAttributesProps,
  ExtrasType,
  InputScoreProps,
  KitPointsToggleProps,
  LineupDataProps,
  SelectPlayerDataProps,
  ShowMatchSummaryProps,
  WicketObjProps,
  Wicketstype,
} from '../../scoring';
import { TeamObjProps } from '../../team';

export interface InputScoreOptionsProps {
  onPressScore: (data: BallObjLocalProps) => void;
  onRequestOpenWideCases: () => void;
  onRequestOpenNoBallCases: () => void;
  onRequestOpenLegByeCases: () => void;
  onRequestOpenByeCases: () => void;
  onRequestOpenNormalRunsCases: () => void;
  loneSurvivor?: boolean;
  striker?: BatterStatsAttributesProps;
}
export interface OverScoresProps {
  scoreInOver: BallObjProps[];
  ballsPerOver: number;
  totalOvers: number;
}
export interface PlayerScoreBoardProps {
  batsmanData: BatterStatsAttributesProps[];
  bowlerData?: BowlerStatsAttributesProps;
  onSelectStriker: (params: BatterStatsAttributesProps) => void;
  strikerId: string;
}
export interface ROEPProps {
  crr?: string;
  overs?: number | string;
  extras?: number;
  partnership?: number | null;
  rrr?: number | string | null;
}
export interface SelectPlayersProps {
  batsmanLength: number;
  isSelectedBowler: boolean;
  onPressBatsman: () => void;
  onPressBowler: () => void;
  isAmateur?: boolean
}
export interface OutOptionsProps {
  // isVisible: boolean;
  // onRequestClose?: () => void;
}
export interface OutOptionsModalProps {
  isVisible: boolean;
  onRequestClose: () => void;
  selectedBall?: BallObjLocalProps;
  headerTitle: string;
  wicketType?: Wicketstype;
  onConfirm?: ({
    batter,
    fielder,
    runs,
    ballType,
    extrasType,
    nonStriker,
  }: OutOptionsOnConfirmProps) => void;
}
export interface SelectFielderOptProps {
  title: string;
  name?: string;
  image?: string;
  disabled?: boolean;
  onPress?: () => void;
}
export interface OutOptionsOnConfirmProps {
  batter: BatterStatsAttributesProps;
  fielder: BowlerStatsAttributesProps;
  nonStriker?: BatterStatsAttributesProps;
  runs?: number;
  ballType: BallType;
  extrasType: ExtrasType;
}
export interface WideOptionsModalProps {
  isVisible: boolean;
  onRequestClose: () => void;
  onConfirm?: (balls: BallObjLocalProps) => void;
}
export interface RetiredOutModalProps {
  isVisible: boolean;
  onRequestClose: () => void;
  onConfirm?: (balls: BallObjLocalProps) => void;
  playerObj: BatterStatsAttributesProps;
  lineupData?: LineupDataProps;
  inningId?: string
}
export interface GoldenOptionsModalProps {
  isVisible: boolean;
  onRequestClose: () => void;
  onConfirm?: (data: DropDownObjProps) => void;
  goldenBallNumber?: number | null;
}
export interface DrawOptionsModalProps {
  isVisible: boolean;
  onRequestClose: () => void;
  onConfirm?: (data: DropDownObjProps) => void;
}
export interface ShowSummaryModalProps {
  isVisible: boolean;
  onRequestClose: () => void;
  onConfirm?: (data: { status: ShowMatchSummaryProps, id: string }) => void;
  matchDetail: GetMatchObjectState;
  isAmateur?: boolean
}
export interface PointsToggleModalProps {
  isVisible: boolean;
  onRequestClose: () => void;
  onConfirm?: (data: KitPointsToggleProps) => void;
  teamOne: TeamObjProps;
  teamTwo: TeamObjProps;
}
export interface PendingActionsModalProps {
  isVisible: boolean;
  onRequestClose: () => void;
  onConfirm?: () => void;
  pendingActionsCount: number;
}
export interface MatchPlayerProps {
  isBatsman: boolean;
  isVisible: boolean;
  headerTitle: string;
  onConfirm: (data: SelectPlayerDataProps) => void;
  onRequestClose: () => void;
}

export interface UpdateModalProps {
  isVisible: boolean;
  onRequestClose: () => void;
  onConfirm?: (props: BallObjProps) => void;
  ballData?: BallObjProps;
  isAmateur?: boolean;
}

// export const initialBallData: ballData = {
//   ballNumber: 0,
//   ballType: '',
//   batsmanId: '',
//   boundaryType: '',
//   bowlerId: '',
//   extrasType: '',
//   id: '',
//   inningId: '',
//   nonStrikerId: '',
//   overBallsNumber: 0,
//   overNumber: 0,
//   runs: 0,
//   wicketAttributes: null
// };

// export interface ballData {
//   ballNumber: number;
//   ballType: string;
//   batsmanId: string;
//   boundaryType: string;
//   bowlerId: string;
//   extrasType: string;
//   id: string;
//   inningId: string;
//   nonStrikerId: string;
//   overBallsNumber: number;
//   overNumber: number;
//   runs: number;
//   wicketAttributes: null | any; // Adjust the type according to your actual data structure

// }