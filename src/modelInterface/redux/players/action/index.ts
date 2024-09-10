import {PlayerObject} from '../reducer';

export interface OnAddPlayerToTeamProps {
  teamId: string;
  player: PlayerObject;
}
export interface OnSubmitProps {
  teamId: string;
}
