import { TournamentLeaderboardTypes, TournamentMVPTypes } from "../../../tournaments";

export interface TournamentIdActionProps {
  id?: string;
  name?:string;
  tournament_id?: string;
  group_id?: string;
  team_id?: string;
  status?: string;
  time_zone?: string;
  categoryType?:string
}
export interface GetTournamentActionProps {
  id: string;
  leaderboardCategory: TournamentLeaderboardTypes;
  mvpCategory: TournamentMVPTypes;
}