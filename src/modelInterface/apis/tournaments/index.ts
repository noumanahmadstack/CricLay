import { CreateTournamentState } from '../../redux/tournaments/reducer';
import { TournamentLeaderboardTypes, TournamentMVPTypes } from '../../tournaments';

export interface GetTournamentProps {
  id?: string;
  name?:string;
  tournament_id?: string;
  group_id?: string;
  status?: string;
  page?: number;
  limit?: number;
  time_zone?: string;
  categoryType?:string;
  category?: TournamentLeaderboardTypes | TournamentMVPTypes;
  mvpCategory?: TournamentMVPTypes;
}

export interface CreateTournamentProps
  extends Omit<CreateTournamentState, 'isLoading'> { }