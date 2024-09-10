import { PageNoProps } from '../../commonProps';
import { MatchStatus, StartMatchObjProps } from '../../match';
import { KitPointsToggleProps } from '../../scoring';
import { ActionStatusTypes, DrawStatusTypes } from '../../team';

export interface StartMatchProps extends StartMatchObjProps {
  team_one_id: string;
  team_two_id: string;
  venue_id: string;
  status: string;
  scorerId?: string;
  balls_per_over?: number;
}
export interface GetMatchesProps extends PageNoProps {
  status?: MatchStatus;
}
export interface GetMatchProps {
  id: string;
}
export interface GetInningProps {
  id: string;
  kitPoint?: KitPointsToggleProps;
}
export interface SetGoldenBallProps {
  inningId: string;
  goldenBallNumber: number;
}
export interface UpdateMatchProps {
  id: string;
  status: string;
  toss_winning_team_id?: string;
  tossdecision?: string;
  scorerId?: string;
  overlayUrl?: string;
}

export interface ManOfMatchProps {
  matchId: string;
  playerId?: string;
}
export interface DrawMatchProps {
  id: string;
  actionStatus: ActionStatusTypes;
  drawStatus: DrawStatusTypes;
}
