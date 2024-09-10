import { getMatch, matchMvps, ticker } from '../../../apiServices/endPoints/match';
import { store } from '../../store/store';
import { setIsLoading, setMatchDetail, setMatchMvps, setStatusCode } from './reducer';
import { BallObjProps, ShowMatchSummaryProps, WicketObjProps } from '../../../modelInterface/scoring';
import { onShare } from '../../../firebase';
import { MatchStatus } from '../../../modelInterface/match';
import { errorCase } from '../../../apiServices/statusCode';

export const matchViewDetail = async (
  id: string,
): Promise<MatchStatus | null> => {
  store.dispatch(setIsLoading(true));
  const response = await getMatch({ id });
  store.dispatch(setIsLoading(false));
  if (response !== errorCase) {
    store.dispatch(setMatchDetail(response));
    return response?.status as MatchStatus;
  }
  return null;
};
export const matchViewDetailInterval = async (id: string) => {
  const response = await getMatch({ id });
  if (response !== errorCase) {
    store.dispatch(setMatchDetail(response));
  }
};
export const resetStates = () => {
  store.dispatch({ type: 'resetMatchDetails' });
};
export const onShareMatch = async ({
  matchId,
}: {
  teamOneName?: string;
  teamTwoName?: string;
  matchId: string;
}) => {
  onShare({ pathName: 'matches', id: matchId });
};
export const scoreAndOutHelper = (data: BallObjProps) => {
  if (data.ballType) {
    switch (data.ballType) {
      case "bye":
        return `B${data?.runs}`;
      case "leg_bye":
        return `LB${data?.runs}`;
      case "wicket":
        if (data.secondaryWicketAttributes?.playerOutId) {
          return "DD"
        } else if (data.wicketAttributes?.wicketType == "retired") {
          return "Rtrd"
        }
        return `Out`;
      case "extra":
        return `${data?.extrasType == "wide"
            ? `WD${Number(data?.runs) > 1 ? data?.runs : ""}`
            : data?.extrasType == "no_ball"
              ? `NB${data?.runs}`
              : data?.runs
          }`;
      case "normal":
        return `${data?.runs}`;
      default:
        return `${data?.runs ? data?.runs : 0}`;
    }
  }
};
export const outCaseCommentaryHelper = (data?: WicketObjProps) => {
  const { wicketType, bowler, fielder } = data || {};
  switch (wicketType) {
    case 'bowled':
      return `${bowler?.name} delivers a fantastic ball. It's a bowled wicket!`;
    case 'catch_bowled':
      return `Fantastic catch by the ${bowler?.name}!`;
    case 'catch':
      return `${fielder?.name} with the grab! Catch successfully taken!`;
    case 'catch_behind':
      return `${fielder?.name} snags the catch behind the stumps!`;
    case 'stumped':
      return `${fielder?.name} with the stumping! Outstanding wicket-keeping!`;
    case 'lbw':
      return `LBW! The umpire's finger goes up as ${bowler?.name} nails the stumps line.`;
    case 'run_out':
      return `Run-out!${fielder?.name} showcasing exceptional fielding skills with that impressive throw!`;
    case 'hit_wicket':
      return 'Hit-wicket! The batsman dislodges the bails while playing a shot.';
    case 'retired_hurt':
      return 'The batsman is retiring hurt due to an injury.';
    case 'absent_hurt':
      return 'The batsman is declared absent hurt and is leaving the field.';
    case 'hit_the_ball_twice':
      return 'The batsman is given out for hitting the ball twice.';
    case 'obstructing_the_field':
      return 'The batsman is given out for obstructing the field.';
    case 'timed_out':
      return 'The new batsman is timed out as he fails to arrive on time.';
    default:
      return 'Out';
  }
};
export const runsCaseCommentary = (runs: number) => {
  switch (runs) {
    case 6:
      return "Impressive! That's a maximum, a six!";
    case 5:
      return 'The batsmen exhibited excellent running between the wickets, securing five runs.';
    case 4:
      return "That's a boundary – a four!";
    case 3:
      return 'Three runs – excellent running between the batsmen.';
    case 2:
      return 'The batsmen ran well and scored two runs.';
    case 1:
      return 'The batsmen grabbed a single.';
    case 0:
      return "No runs were scored on that delivery; it's a dot ball.";
    default:
      return 'Invalid runs value.';
  }
};
export const commentaryMessageHelper = (data: BallObjProps) => {
  const { ballType, runs, wicketAttributes, extrasType } = data || {};
  switch (ballType) {
    case 'bye':
      return `${runs} Bye`;
    case 'leg_bye':
      return `${runs} LB`;
    case 'wicket':
      return outCaseCommentaryHelper(wicketAttributes);
    case 'extra':
      if (extrasType === 'wide') {
        return `Its a Wide ${runs > 1 ? 'and ' + (runs - 1) + ' Runs' : ''}`;
      } else if (extrasType === 'no_ball') {
        return `Its a No ball ${runs > 1 ? 'and ' + (runs - 1) + ' Runs' : ''}`;
      } else {
        return '';
      }
    case 'normal':
      return runsCaseCommentary(runs);
    default:
      return `${runs ? runs : 'Its a Dot'}`;
  }
};
export const summaryToggleAction = async ({ status, id }: { status: ShowMatchSummaryProps, id: string }) => {
  store.dispatch(setIsLoading(true));
  const variables = {
    id,
    status
  }
  const response = await ticker(variables)
  store.dispatch(setIsLoading(false));
  if (response !== errorCase && response?.success) {
    store.dispatch(setStatusCode(response?.tickerToggleStatus))
  }
}
export const onMountMatchMvps = async (id: string) => {
  store.dispatch(setIsLoading(true));
  const response = await matchMvps({ id });
  if (response !== errorCase) {
    store.dispatch(setMatchMvps(response));
  }
  store.dispatch(setIsLoading(false));
};