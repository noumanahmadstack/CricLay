import {StartMatchState} from '../../../redux/startMatch/reducer';
export interface StartMatchValidationProps1 {
  teamA: StartMatchState['teamA'];
  teamB: StartMatchState['teamB'];
  venue: StartMatchState['venue'];
}
export interface StartMatchValidationProps2 {
  wickets: StartMatchState['wickets'];
  overs: StartMatchState['overs'];
  formate: StartMatchState['formate'];
  match_type: StartMatchState['match_type'];
  ball_type: StartMatchState['ball_type'];
}
export interface StartMatchValidationProps3 {
  toss_winning_team_id?: StartMatchState['toss_winning_team_id'];
  toss_decision?: StartMatchState['toss_decision'];
}
