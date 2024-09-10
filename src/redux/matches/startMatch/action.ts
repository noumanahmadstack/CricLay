import {
  ManOfMatch,
  startMatch,
  updateMatch,
} from '../../../apiServices/endPoints/match';
import { errorCase } from '../../../apiServices/statusCode';
import { toastMessage } from '../../../components/toastMessages';
import { onMountAllMatches, startScoring } from '../getMatches/action';
import { store } from '../../store/store';
import {
  setDate,
  setErrors,
  setIsOpenCalendar,
  setIsStartingFixture,
  setIsStartingLiveMatch,
  setIsTossModalOpen,
} from './reducer';
import { goBack, navigate } from '../../../routes/rootNavigation';
import { onStartMatchProps } from '../../../modelInterface/redux/matches/action';
import {
  startMatchValidation1,
  startMatchValidation2,
  startMatchValidation3,
} from '../../../utilis/formValidations/startMatch';
import { setIndex } from '../getMatches/reducer';
import { setMatchDetails } from '../../scoring/amateur/score/reducer';
import { resetState as resetTeamPlayers } from '../../scoring/normal/teamPlayers/action';
import { resetState as resetScore } from '../../scoring/amateur/score/action';
import { ManOfMatchProps } from '../../../modelInterface/apis/match';
import { setUpdateManOfMatch } from '../matchDetails/reducer';

export const onStartMatch = async ({ isStartDirect }: onStartMatchProps) => {
  const { teamA, teamB, venue, overs, match_type, formate, ball_type, wickets } =
    store.getState().startMatchReducer;
  const { valid, error } = startMatchValidation1({ teamA, teamB, venue });
  store.dispatch(setErrors(error));
  if (valid) {
    const { valid, error } = startMatchValidation2({
      overs,
      match_type,
      formate,
      ball_type,
      wickets,
    });
    store.dispatch(setErrors(error));
    if (valid) {
      if (isStartDirect) {
        store.dispatch(setIsTossModalOpen(true));
      } else {
        store.dispatch(setIsOpenCalendar(true));
      }
    }
  }
};
const startMatchFlow = async ({
  isStartDirect,
  status,
  group_id,
  tournament_id,
  categoryType,
  subCategory,
  tournamentType
}: onStartMatchProps) => {
  const {
    teamA,
    teamB,
    overs,
    match_type,
    formate,
    scheduled_datetime,
    ball_type,
    wickets,
    toss_winning_team_id,
    toss_decision,
    venue,
    scorerId,
  } = store.getState().startMatchReducer;
  const response = await startMatch({
    team_one_id: teamA?.id,
    team_two_id: teamB?.id,
    wickets: Number(wickets),
    ball_type,
    match_type,
    // balls_per_over: tournamentType == "amateur" ? 5: 6,
    scheduled_datetime,
    formate,
    scorerId,
    overs: Number(overs),
    status,
    venue_id: venue?.id,
    ...(isStartDirect && {
      toss_winning_team_id,
      toss_decision,
    }),
    ...(group_id && {
      group_id,
    }),
    ...(tournament_id && {
      tournament_id,
    }),
    ...(categoryType && {
      categoryType
    }),
    ...(subCategory && {
      subCategory
    })
    
  });
  if (response !== errorCase) {
    resetTeamPlayers();
    resetScore();
    if (response?.success) {
      onMountAllMatches({ status });
      switch (status) {
        case 'started':
          store.dispatch(setMatchDetails(response?.match));
          if (response?.match?.matchType == "amateur") {
            navigate('AmateurScoring', { id: response?.match?.id, isFromStartScreen: true })
          } else {
            navigate('Scoring', { id: response?.match?.id, isFromStartScreen: true });
          }
          store.dispatch(setIndex(0));
          break;
        case 'fixture':
          store.dispatch(setIndex(1));
          navigate('Matches');
          break;
        case 'completed':
          store.dispatch(setIndex(2));
          navigate('Matches');
          break;
      }
      toastMessage('Match created Successfully!');
    }
    store.dispatch(setIsTossModalOpen(false));
  }
};

export const onConfirmDate = async ({
  date,
  group_id,
  tournament_id,
  categoryType,
  subCategory,
  id
}: {
  date: Date;
  group_id?: string;
  tournament_id?: string;
  categoryType?:string;
  subCategory?:string;
  id:string
}) => {
  store.dispatch(setDate(date));
  store.dispatch(setIsOpenCalendar(false));
  if(!id){
    setTimeout(async () => {
      store.dispatch(setIsStartingFixture(true));
      await startMatchFlow({
        status: 'fixture',
        isStartDirect: false,
        group_id,
        tournament_id,
        categoryType,
        subCategory
      });
      store.dispatch(setIsStartingFixture(false));
    }, 400);
  }
   
};
export const onDoneMatchFormat = () => {
  const { overs, match_type, formate, ball_type, wickets } =
    store.getState().startMatchReducer;
  const { valid, error } = startMatchValidation2({
    overs,
    match_type,
    formate,
    ball_type,
    wickets,
  });
  store.dispatch(setErrors(error));
  if (valid) {
    goBack();
  }
};

export const onToss = async ({
  group_id,
  tournament_id,
  id,
  categoryType,
  subCategory,
  tournamentType
}: {
  group_id?: string;
  tournament_id?: string;
  id?: string;
  categoryType?:string;
  subCategory?:string;
  tournamentType?: string;
}) => {
  const { toss_winning_team_id, toss_decision } = store.getState().startMatchReducer;
  const { valid, error } = startMatchValidation3({
    toss_winning_team_id,
    toss_decision,
  });
  store.dispatch(setErrors(error));
  if (valid) {
    store.dispatch(setIsStartingLiveMatch(true));
    id ? startScoring({ toss_decision, toss_winning_team_id, id })
      : await startMatchFlow({
        status: 'started',
        isStartDirect: true,
        group_id,
        tournament_id,
       categoryType,
       subCategory,
       tournamentType
      });
    store.dispatch(setIsStartingLiveMatch(false));
  }
};

export const editMatch = async (id: any) => {
  const {
    teamA,
    teamB,
    overs,
    match_type,
    formate,
    scheduled_datetime,
    ball_type,
    wickets,
    venue,
    scorerId,
    categoryType,
    subCategory
  } = store.getState().startMatchReducer;
  const response = await updateMatch({
    id,
    team_one_id: teamA?.id,
    team_two_id: teamB?.id,
    wickets: Number(wickets),
    ball_type,
    match_type,
    scheduled_datetime,
    formate,
    overs: Number(overs),
    status: 'fixture',
    venue_id: venue?.id,
    scorerId: scorerId,
    categoryType,
    ...(categoryType !== 'match' && {
      subCategory
    })
  });
  if (response !== errorCase) {
    onMountAllMatches({ status: 'fixture' });
    toastMessage('Match updated Successfully!');
    navigate('Matches');
  }
};

export const manOfMatch = async ({ playerId, matchId }: ManOfMatchProps) => {
  goBack();
  if (playerId) {
    const response = await ManOfMatch({ playerId, matchId });
    if (response !== errorCase) {
      store.dispatch(setUpdateManOfMatch(response?.manOfTheMatch));
      toastMessage('Man Of Match set Successfully!');
    }
  }
};
export const resetState = () => {
  store.dispatch({ type: 'resetStartMatch' });
};