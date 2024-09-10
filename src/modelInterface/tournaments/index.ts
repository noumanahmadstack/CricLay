import { OrganizerObjProps } from '../match';
import { PaginationProps } from '../pagination';
import { BatterObjProps, BowlerObjProps, LeaderBoardPlayers, PlayerObjProps } from '../player';
import { BatterStatsProps } from '../scoring';
import { TeamObjProps, TournamentTeamObjProps } from '../team';
import { GetVenueObjProps } from '../venues';

export interface GetTournamentObjectProps {
  coverPhotoUrl?: any;
  seasonYear: string;
  matchType?: string;
  startDate?: Date | any;
  endDate?: Date | any;
  organizer: OrganizerObjProps;
  groups: TournamentGroupsProps[];
  oversData?: string;
  id: string;
  tournament_id?: string;
  tournamentType: string;
  typeDescription?: string;
  group_id?: string;
  name: string;
  city: string;
  country: string;
  status?: string;
  ballType: string;
  playerPerTeam: number;
  teamOne?: TournamentTeamObjProps;
  teamTwo?: TournamentTeamObjProps;
  venue?: GetVenueObjProps;
  scheduledDatetime?: Date | any;
  shareableUrl: string;
  teams: { collection: TournamentTeamObjProps[] };
  mostValuablePlayers: LeaderBoardPlayersProps;
  leaderboard: LeaderBoardPlayersProps
  tournamentTeams: { collection: TournamentTeamObjProps[] };
  stats: TournamentStats;
  winningTeams: TournamentWinningTeams[] 
  topPerformances? :{
    batter:{
      id:string,
      player:{
        name:string,
        avatarUrl:string
      },
      team:{
        name:string
      },
      batingStat:{
        runs:number
      }
    }
    bowler:{
        id:string,
        player:{
          name:string,
          avatarUrl:string
        }
        team:{
          name:string
        }
    bowlingStat:{
      wicketsCount:number
    }
    }
  },
}
export interface TournamentWinningTeams {
    category: string;
    name: string;
    winningTeam: TournamentTeamObjProps;
    runnerUpTeam: TournamentTeamObjProps;
}
export interface TournamentGroupsProps {
  id: string;
  category: GroupCategoryType;
}
export interface LeaderBoardPlayersProps {
  collection: LeaderBoardPlayers[];
  metadata: PaginationProps;
}
export interface TournamentStats {
  playedMatchesCount: number;
  inningsCount: number;
  runsCount: number;
  wicketsCount: number;
  extrasBallsCount: number;
  ballsCount: number;
  foursCount: number;
  sixersCount: number;
  fiftiesCount: number;
  hundredsCount: number;
  fiftiesPartnershipCount: number;
  hundredsPartnershipCount: number;
  maidenCount: number;
  dotBallsCount: number;
  catchesCount: number;
  stumpsCount: number;
  ballsFacedCount: number;
  economy: number;
}

export interface GetTournamentGroupProps {
  id: string;
  tournament_id?: string;
  group_id?: string;
  name?: string;
  teams: { collection: TournamentTeamObjProps[] };
  tournamentTeams: { collection: TournamentTeamObjProps[] };
}
export interface TournamentObjectProps {
  id: string;
  name: string;
  coverPhotoUrl?: string,
  city?: string,
  country?: string
};
export interface TournamentPlayerStatsPlainData {
  name: string;
  details: string;
  dpImage: string;
}
export type TournamentLeaderboardTypes = 'bowling' | 'batting' | 'fielding'
export type TournamentMVPTypes = 'all' | 'bowling' | 'batting' | 'fielding'
export type GroupCategoryType = 'match' | 'knockout' | 'playoffs' | 'league'
