import { BatterStatsProps, BowlingStatsProps, FieldingStatsProps, Wicketstype } from '../scoring';
import { TeamObjProps } from '../team';

interface PlayerCommonObjProps {
  name: string;
  id: string;
}
export interface imageProps {
  uri: string,
  fileName: string,
  type: string
}
export interface PlayerObjProps extends PlayerCommonObjProps {
  id: string;
  bowlerId?: string;
  batsmanId?: string;
  country?: string;
  avatarUrl?: string;
  age?: number;
  isPlayingInMatch?: boolean;
  shareableId?: string;
  isVerified?:boolean

}
export interface LeaderBoardPlayers {
  name: string,
  id: string,
  topPerformance?: boolean;
  battingPoints?: number;
  bowlingPoints?: number;
  fielderPoints?: number;
  totalPoints: number;
  team?: TeamObjProps;
  batingStat?: BatterStatsProps;
  bowlingStat?: BowlingStatsProps;
  fielderStat?: FieldingStatsProps;
  player: PlayerObjProps;
}


export interface BatterObjProps extends PlayerObjProps {
  batsmanId: string;
  runs?: string;
  ballsCount?: string;
  fours?: string;
  sixers?: string;
  strikeRate?: string;
  wicket?: {
    fielder: {
      id: string;
      name: string;
    };
    bowler: {
      id: string;
      name: string;
    };
    wicketType: Wicketstype;
  };
}
export interface BowlerObjProps extends PlayerObjProps {
  bowlerId: string;
  wicketsCount?:number
}
export interface AddPlayerProps {
  name: string;
  email: string;
  country: string;
  city: string;
  phoneNumber: string;
}
export type PlayerRoleProps = 'player' | 'captain' | 'twelfth_man' | 'vice_captain'