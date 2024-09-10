import {PaginationProps} from '../../../pagination';
import {AddPlayerProps, PlayerObjProps} from '../../../player';
import { BatterStatsProps, BowlingStatsProps, FieldingStatsProps } from '../../../scoring';
import {SearchByNameProps} from '../../../searchFields';
import {TeamObjProps} from '../../../team';
import {GetMatchObjectState} from '../../matches/reducer';
export interface AddPlayersState extends AddPlayerProps {
  isLoading: boolean;
  error: string;
}
export interface PlayersState {
  myPlayers: PlayerObjProps[];
  allPlayers: PlayerObjProps[];
  metadataForMyPlayers: PaginationProps;
  metadataForAllPlayers: PaginationProps;
  searchMyPlayerByName: SearchByNameProps['name'];
  searchAllPlayerByName: SearchByNameProps['name'];
  isLoading: boolean;
}
export interface PlayerDetailsState {
  id: string;
  name: string;
  avatarUrl:string;
  age: number;
  country: string;
  city: string;
  isVerified:boolean;
  specialityType: string;
  battingStat:BatterStatsProps;
  bowlingStat:BowlingStatsProps;
  fielderStat:FieldingStatsProps;
  liveMatches: GetMatchObjectState[];
  fixtureMatches: GetMatchObjectState[];
  resultsMatches: GetMatchObjectState[];
  metadataTeamLiveMatches: PaginationProps;
  metadataTeamFixtureMatches: PaginationProps;
  metadataTeamResultsMatches: PaginationProps;
  teams: TeamObjProps[];
  allMatches:GetMatchObjectState[];
  metadataplayerAllMatches:PaginationProps;
  metadataTeam: PaginationProps;
  isLoading: boolean;
}
