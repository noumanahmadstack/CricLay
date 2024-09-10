import {LineupDataProps} from '../../../scoring';
import {GetMatchObjectState} from '../../matches/reducer';

export interface ScoringStateProps {
  matchDetail: GetMatchObjectState;
  lineupData: LineupDataProps;
  isLoading: boolean;
  isVisibleGoldenBallModal:boolean;
}
export interface SelectLineupFunctionProps {
  strikerId: string;
  nonStrikerId: string;
}
