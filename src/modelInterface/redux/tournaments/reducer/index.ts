import { PaginationProps } from '../../../pagination';
import { SearchByNameProps } from '../../../searchFields';
import { TabRoutesProps } from '../../../tabRoutes';
import {
  GetTournamentGroupProps,
  GetTournamentObjectProps,
  TournamentLeaderboardTypes,
  TournamentMVPTypes,
} from '../../../tournaments';
import { GetMatchObjectState } from '../../matches/reducer';
export interface GetTournamentState extends TabRoutesProps {
  searchByNameAllTournaments: SearchByNameProps['name'];
  mvpCategory: TournamentMVPTypes;
  tournamentRule: TournamentRuleProps[]
  leaderboardCategory: TournamentLeaderboardTypes;
  getTournament: GetTournamentObjectProps;
  upComingTournament: GetTournamentObjectProps[];
  recentTournament: GetTournamentObjectProps[];
  allPublicTournament: GetTournamentObjectProps[];
  myTournaments: GetTournamentObjectProps[];
  tournamentGroup: GetTournamentObjectProps[];
  tournamentLiveMatches: GetMatchObjectState[];
  tournamentFixtureMatches: GetMatchObjectState[];
  touranamentResultMatches: GetMatchObjectState[];
  metadataTournamentLiveMatches: PaginationProps;
  metadataTournamentFixtureMatches: PaginationProps;
  metadataTournamentResultMatches: PaginationProps;
  allTournaments: GetTournamentObjectProps[];
  allTournamentTeams: GetTournamentObjectProps[];
  allTournamentGroups: GetTournamentGroupProps[];
  metadataForAllTournaments: PaginationProps;
  metadataForAllTournamentTeams: PaginationProps;
  metadataForAllTournamentGroups: PaginationProps;
  metadataForTournamentGroup: PaginationProps;
  metadataForMyTournaments: PaginationProps;
  metadataForAllPublicTournaments: PaginationProps;
  metadataForGetTournament: PaginationProps;
  metadataForMyUpTournaments: PaginationProps;
  metadataForMyRecentTournaments: PaginationProps;
  isLoading: boolean;
  index: number;
  isRefreshing: boolean;
  tournamentRoundMatches?: GetMatchObjectState[];
}

export interface CreateTournamentState {
  name: string;
  seasonYear: string;
  playerPerTeam: number;
  country: string;
  city: string;
  startDate: string;
  endDate: string;
  tournamentType: string;
  typeDescription?: string;
  ballType: string;
  id?: string;
  updatedStartDate?: string | any;
  updatedEndDate?: string | any;
  isLoading: boolean;
}

interface TournamentRuleProps {
  category: string;
  content: React.ReactNode | any;
  title: string;
}