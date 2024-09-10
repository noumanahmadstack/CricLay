import { AddPlayerProps, PlayerRoleProps } from '../../player';
export interface CreatePlayerProps extends AddPlayerProps {
  countryCode?: string;
}
export interface AddRemovePlayerProps {
  teamId: string;
  playerId: string;
}
export interface RemoveMatchPlayerProps {
  match_players: string[];
}
export interface AddPlayerToMatchProps {
  team_id: string;
  match_id: string;
  players: string[];
  isBatsman?: boolean;
}
export interface GetMatchPlayerProps {
  match_id: string;
  team_id?: string;
}
export interface UpdateTeamPlayersProps {
  playerId?: string;
  teamId: string;
  role?: PlayerRoleProps;
  isWicketKeeper?: boolean;
  jerseyNumber?: number;
  matchId?:string
}