import {PaginationProps} from '../../../pagination';
import { BatterStatsProps, BowlingStatsProps, FieldingStatsProps } from '../../../scoring';
import {SearchByNameProps} from '../../../searchFields';
import {TeamObjProps} from '../../../team';
import {GetMatchObjectState} from '../../matches/reducer';
export interface TeamsState {
  myTeams: Array<TeamObjProps>;
  allTeams: Array<TeamObjProps>;
  metadataMyTeams: PaginationProps;
  metadataAllTeams: PaginationProps;
  searchByNameAllTeams: SearchByNameProps['name'];
  searchByNameMyTeams: SearchByNameProps['name'];
  isLoading: boolean;
}
export interface AddTeamsState {
  name: string;
  tournament_id: string;
  location: string;
  error: string;
  isShowAddTeamModal: boolean;
  isLoading: boolean;
  team_id: string;
}
export interface TeamProfileState {
  creatorId: string;
  overAllStat:AllStat;
  battingStat:BatterStatsProps;
  bowlingStat:BowlingStatsProps;
  fielderStat:FieldingStatsProps;
  teamPlayers: Array<TeamObjProps>;
  liveMatches: GetMatchObjectState[];
  fixtureMatches: GetMatchObjectState[];
  resultsMatches: GetMatchObjectState[];
  metadataTeamLiveMatches: PaginationProps;
  metadataTeamFixtureMatches: PaginationProps;
  metadataTeamResultsMatches: PaginationProps;
  metadataTeamPlayer: PaginationProps;
  isLoading: boolean;
}
export interface AllStat {
  potmAward:number;
  lowestRuns:number;
  wonMatches:number;
  highestRuns:number;
  lossMatches:number;
  drawnMatches:number;
  playedMatches:number;
  tournamentCount:number
} 
