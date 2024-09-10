import { PaginationProps } from '../pagination';
import { PlayerObjProps } from '../player';
import {
  BatterStatsAttributesProps,
  BowlerStatsAttributesProps,
} from '../scoring';

export interface TeamAddProps {
  name: string;
  location: string;
}
export interface TeamObjProps extends TeamAddProps {
  id: string;
  category?: string;
  logoUrl?: string;
  players?: {
    collection?: PlayerObjProps[];
    metadata?: PaginationProps;
  };
  selectTeam?: string;
  topBattingPerformances?: BatterStatsAttributesProps[];
  topBowlingPerformances?: BowlerStatsAttributesProps[];
  runs?: number;
  wickets?: number;
  yetToBat?: boolean;
  overs?: number;
  matchesCount?: number;
  winningCount?: number;
  losingCount?: number;
  tieCount?: number;
  points?: number;
  netRunRate?: number;
  shareableId?: string;
  tournament_id?: string;
  creatorId?: string;
}
export interface TournamentTeamObjProps extends TeamObjProps {
  team: {
    id: string;
    name: string;
    logoUrl: string;
  };
}
export interface SelectTeamFromBackProps {
  selectTeam?: string;
}
export type ActionStatusTypes = 'draw'
export type DrawStatusTypes = 'bad_weather' | 'due_to_rain' | 'poor_wicket_and_outfield_conditions' | 'scores_tied' | 'forfeit_inning' | 'medical_emergency' | ''