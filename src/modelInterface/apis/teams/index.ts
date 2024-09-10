import {PageNoProps} from '../../commonProps';
import {MatchStatus} from '../../match';
import {SearchByNameProps} from '../../searchFields';

export interface CreateTeamProps {
  name: string;
  location: string;
  tournament_id?: string;
  team_id?: string;
}
export interface GetTeamProps {
  id: string;
  status?: MatchStatus;
  page?: number;
}
export interface GetPlayingStatusOfPlayerInMatchProps {
  playerMatchId?: string;
}
export interface GetTeamsProps extends PageNoProps, SearchByNameProps {}
