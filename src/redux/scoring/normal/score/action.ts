import { Alert } from 'react-native';
import { drawMatch, endInning, getMatch, getMatchToggleSummaryStatus, ticker } from '../../../../apiServices/endPoints/match';
import {
  createBall,
  updateBall,
  updateInningLineupApi,
} from '../../../../apiServices/endPoints/scoring';
import { errorCase } from '../../../../apiServices/statusCode';
import { toastMessage } from '../../../../components/toastMessages';
import { UpdateInningLineupApiProps } from '../../../../modelInterface/apis/scoring';
import { PlayerObjProps } from '../../../../modelInterface/player';
import { SelectLineupFunctionProps } from '../../../../modelInterface/redux/scoring/reducer';
import {
  BallObjLocalProps,
  BallObjProps,
  BatterStatsAttributesProps,
  BowlerStatsAttributesProps,
  CalculateBatsmanStatsProps,
  DrawCaseModalProps,
  InningObjPros,
  LineupBackendDataProps,
  LineupDataProps,
  ShowMatchSummaryProps,
  WicketObjProps,
  Wicketstype,
} from '../../../../modelInterface/scoring';
import { goBack } from '../../../../routes/rootNavigation';
import { onMountMyMatches } from '../../../matches/getMatches/action';
import { setIndex } from '../../../matches/getMatches/reducer';
import { store } from '../../../store/store';
import { resetState as resetTeamPlayerState } from '../teamPlayers/action';
import { setBattingPlaying, setBowlerPlaying } from '../teamPlayers/reducer';
import {
  onAddBalls,
  setInitialLineup,
  setIsLoading,
  initialState,
  setSyncBallsCount,
  onSelectStriker,
  setMatchDetails,
  updateCurrentInningBall,
  setStatusCode,
} from './reducer';

export const calculateStrikeRate = (
  runs: number,
  ballCount: number,
): number => {
  const dec = 2;
  const totalBalls = ballCount == 0 ? 1 : ballCount;
  const calcDec = Math.pow(10, dec);
  const strikeRate = (runs / totalBalls) * 100;
  return Math.trunc(strikeRate * calcDec) / calcDec;
};
export const calculateOvers = ({
  balls,
  ballsPerOver,
  targetBallNumber,
}: {
  balls: BallObjProps[];
  ballsPerOver: number;
  targetBallNumber?: number;
}): number => {
  const totalBalls = balls.filter(ball => {
    const notIncludedBallsWicket = ball.wicketAttributes?.wicketType == 'retired_hurt' ||
      ball.wicketAttributes?.wicketType == 'retired_out' ||
      ball.wicketAttributes?.wicketType == 'timed_out' ||
      ball.wicketAttributes?.wicketType == 'man_kaded' ||
      ball.wicketAttributes?.wicketType == 'absent_hurt'
    return typeof targetBallNumber === 'number'
      ? ball.ballNumber <= targetBallNumber && ball.extrasType === 'safe'
      : ball.extrasType === 'safe' && !notIncludedBallsWicket;
  }).length;

  if (totalBalls % ballsPerOver === 0) {
    return totalBalls / ballsPerOver;
  } else {
    return (
      Math.floor(totalBalls / ballsPerOver) + (totalBalls % ballsPerOver) / 10
    );
  }
};
export const calculateRuns = ({
  balls,
  targetBallNumber,
}: {
  balls: BallObjProps[];
  targetBallNumber?: number;
}): number => {
  let totalRuns = 0;
  for (const ball of balls) {
    if (!targetBallNumber || ball.ballNumber <= targetBallNumber) {
      totalRuns += ball.runs;
    }
  }

  return totalRuns;
};
export const calculateWickets = ({
  balls,
  targetBallNumber,
}: {
  balls: BallObjProps[];
  targetBallNumber?: number;
}): number => {
  return balls.filter(ball => {
    const notIncludedWicketsInInning = ball.wicketAttributes?.wicketType == 'retired_hurt' || ball.wicketAttributes?.wicketType == 'absent_hurt'
    return typeof targetBallNumber === 'number'
      ? ball.ballNumber <= targetBallNumber &&
      ball.wicketAttributes?.playerOutId !== undefined
      : ball.wicketAttributes?.playerOutId !== undefined && !notIncludedWicketsInInning;
  }).length;
};
export const calculateExtras = ({ balls }: { balls: BallObjProps[] }): number => {
  if (balls.length > 0) {
    return balls.reduce((sum, ball) => {
      const isByeLegBye = ball.ballType == 'leg_bye' || ball.ballType == 'bye';
      if (
        ball.extrasType == 'wide' ||
        (ball.extrasType == 'no_ball' && isByeLegBye) ||
        (ball.extrasType == 'safe' && isByeLegBye)
      ) {
        return sum + ball.runs;
      } else if ((ball.extrasType == 'no_ball' && !isByeLegBye) || ball?.wicketAttributes?.wicketType == 'stumped_with_wide') {
        return sum + 1;
      }
      return sum;
    }, 0);
  } else {
    return 0;
  }
};
let isApiCallInProgress = false;
export const hitBall = async () => {
  if (isApiCallInProgress) {
    return;
  }
  isApiCallInProgress = true;
  const { currentInning } = store.getState().scoreReducer.matchDetail;
  const { ballsCount } = currentInning;
  const balls = currentInning.balls.filter(
    item => item.ballNumber > ballsCount,
  );
  if (balls.length > 0) {
    const response = await createBall({ balls });
    if (response !== errorCase) {
      store.dispatch(setSyncBallsCount(response?.inning?.ballsCount));
    }
  }
  isApiCallInProgress = false;
};

export const updateBallAction = async (ball: BallObjProps) => {
  const { ballNumber, inningId, runs, boundaryType } = ball
  const queryParams = {
    ballNumber,
    inningId,
    runs,
    boundaryType
  }
  store.dispatch(setIsLoading(true))
  const response = await updateBall(queryParams)
  store.dispatch(setIsLoading(false))
  if (response !== errorCase && response?.success) {
    toastMessage('Score on selected ball updated successfully!');
    store.dispatch(updateCurrentInningBall(ball))
  }
}
export const handleScore = async (ball: BallObjLocalProps) => {
  const { strikerId } = store.getState().scoreReducer.lineupData;
  if (strikerId == '' || strikerId == null) {
    toastMessage('Please select striker player');
    return;
  } else {
    await store.dispatch(onAddBalls(ball));
  }
};
export const calculateCCR = ({
  balls,
  ballsPerOver,
  currentRuns,
}: {
  balls: BallObjProps[];
  ballsPerOver: number;
  currentRuns: number;
}) => {
  const ballToDivde =
    balls.filter((ball: BallObjProps) => ball.extrasType == 'safe').length /
    ballsPerOver;
  if (ballToDivde > 0) {
    return (currentRuns / ballToDivde).toFixed(2);
  } else {
    return '0';
  }
};
export const calculateBatsmanState = ({
  batsmanId,
  balls,
}: {
  batsmanId: string;
  balls: BallObjProps[];
}): CalculateBatsmanStatsProps => {
  return balls.reduce(
    (accumulator, ball) => {
      const notIncludedBallsWicket = ball.wicketAttributes?.wicketType == 'retired_hurt' ||
        ball.wicketAttributes?.wicketType == 'retired_out' ||
        ball.wicketAttributes?.wicketType == 'timed_out' ||
        ball.wicketAttributes?.wicketType == 'man_kaded' ||
        ball.wicketAttributes?.wicketType == 'absent_hurt'
      if (ball.batsmanId === batsmanId) {
        if (ball.ballType === 'normal') {
          accumulator.runs += ball.runs;
          if (ball.boundaryType === 'four') {
            accumulator.fours += 1;
          } else if (ball.boundaryType === 'six') {
            accumulator.sixes += 1;
          }
        } else if (ball.extrasType == 'no_ball' && ball.ballType == 'extra') {
          accumulator.runs += ball.runs - 1;
        }
        if (ball.extrasType !== 'wide' && !notIncludedBallsWicket) {
          accumulator.ballCount += 1;
        }
        accumulator.bowlerId = ball.bowlerId;
      }
      if (ball.wicketAttributes?.playerOutId == batsmanId) {
        accumulator.wicketAttributes = ball.wicketAttributes;
      }
      let modifiedOverNumber = ball.overNumber
      if (ball.overBallsNumber > 4) {
        modifiedOverNumber++
      }
      accumulator.outAt = `${modifiedOverNumber}.${ball.overBallsNumber} overs`
      return accumulator;
    },
    {
      runs: 0,
      fours: 0,
      sixes: 0,
      ballCount: 0,
      wicketAttributes: { wicketType: '', inningId: '', playerOutId: '' },
      bowlerId: '',
      outAt:''
    } as CalculateBatsmanStatsProps,
  );
};
export const hasBatsmanPlayed = ({
  batsmanId,
  balls,
}: {
  batsmanId: string;
  balls: BallObjProps[];
}): boolean => {
  return balls?.some(
    e => e.batsmanId === batsmanId || e.nonStrikerId === batsmanId,
  );
};
export const sortedBatsman = ({
  batters,
  balls,
}: {
  batters: BatterStatsAttributesProps[];
  balls: BallObjProps[];
}): BatterStatsAttributesProps[] => {
  const playerIndexMap = new Map(
    batters.map((player, index) => [player.batsmanId, index]),
  );
  const uniqueBatsmanIds = Array.from(
    new Set(balls.flatMap(ball => [ball.batsmanId, ball.nonStrikerId])),
  );
  const playersNotInBalls = batters.filter(
    player => !uniqueBatsmanIds.includes(player.batsmanId),
  );
  const sortedPlayers = uniqueBatsmanIds
    .map(batsmanId => {
      const index = playerIndexMap.get(batsmanId);
      return index !== undefined ? batters[index]! : null;
    })
    .concat(playersNotInBalls)
    .filter(player => player !== null) as BatterStatsAttributesProps[];
  return sortedPlayers;
};

export const hasBowlerPlayed = ({
  bowlerId,
  balls,
}: {
  bowlerId: string;
  balls: BallObjProps[];
}) => {
  return balls?.some(e => e.bowlerId === bowlerId);
};
export const calculateBowlerState = ({
  bowlerId,
  balls,
  ballsPerOver,
}: {
  bowlerId: string;
  balls: BallObjProps[];
  ballsPerOver: number;
}) => {
  let currentOver = '0';
  let overs = 0.0;
  const bowlerWicketsType: Wicketstype[] = [
    'bowled',
    'catch',
    'catch_behind',
    'catch_bowled',
    'stumped',
    'lbw',
    'hit_wicket',
  ];
  const bowlerStats = balls.reduce(
    (accumulator, ball) => {
      const notIncludedBallsWicket = ball.wicketAttributes?.wicketType == 'retired_hurt' ||
        ball.wicketAttributes?.wicketType == 'retired_out' ||
        ball.wicketAttributes?.wicketType == 'timed_out' ||
        ball.wicketAttributes?.wicketType == 'man_kaded' ||
        ball.wicketAttributes?.wicketType == 'absent_hurt'
      if (ball.bowlerId === bowlerId) {
        if (ball.ballType === 'normal') {
          const over = `${ball.overNumber}.${ball.overBallsNumber}`;
          if (over !== currentOver) {
            currentOver = over;
          }
        } else if (ball.wicketAttributes?.playerOutId) {
          // [bowled catch catch_behind catch_bowled stumped run_out man_kaded lbw hit_wicket retired_hurt absent_hurt retired hit_the_ball_twice obstructing_the_field timed_out]
          if (bowlerWicketsType.includes(ball.wicketAttributes.wicketType)) {
            accumulator.wickets += 1;
          }
        }
        accumulator.ballCount += 1;
        if (
          ball.extrasType !== 'safe' &&
          (ball.ballType == 'leg_bye' || ball.ballType == 'bye')
        ) {
          accumulator.runs += 1;
        } else if (
          ball.extrasType == 'safe' &&
          (ball.ballType == 'leg_bye' || ball.ballType == 'bye')
        ) {
          accumulator.runs = accumulator.runs;
        } else {
          accumulator.runs += ball.runs;
        }
        if (ball.extrasType == 'safe' && !notIncludedBallsWicket) {
          accumulator.nonExtraCount += 1;
        }
        return accumulator;
      }
      return accumulator;
    },
    { wickets: 0, runs: 0, ballCount: 0, economyRate: 0, nonExtraCount: 0 }, // Start with "0.0" for the first ball
  );
  if (bowlerStats.nonExtraCount % ballsPerOver === 0) {
    overs = bowlerStats.nonExtraCount / ballsPerOver;
  } else {
    overs =
      Math.floor(bowlerStats.nonExtraCount / ballsPerOver) +
      (bowlerStats.nonExtraCount % ballsPerOver) / 10;
  }
  const economyRate = overs == 0 ? 0 : (bowlerStats.runs / overs).toFixed(2);
  return {
    ...bowlerStats,
    overs,
    economyRate,
  };
};

export const calculateMedianOver = (bowlerId?: string) => {
  const { balls, ballsPerOver } = store.getState().scoreReducer.matchDetail.currentInning;
  let medanOver = 0;
  let currentOverNumber = 0;
  let regularBalls = 0;
  let ballsCountPerOver = 0;
  for (let index = 0; index < balls.length; index++) {
    const element = balls[index];
    const notIncludedBallsWicket = element.wicketAttributes?.wicketType == 'retired_hurt' ||
      element.wicketAttributes?.wicketType == 'retired_out' ||
      element.wicketAttributes?.wicketType == 'timed_out' ||
      element.wicketAttributes?.wicketType == 'man_kaded' ||
      element.wicketAttributes?.wicketType == 'absent_hurt'
    if (element.bowlerId == bowlerId) {
      if (element.overNumber !== currentOverNumber) {
        currentOverNumber = element.overNumber;
        regularBalls = 0; // Reset regular balls count when overNumber changes
        ballsCountPerOver = 1;
      } else {
        ballsCountPerOver += 1;
      }
      if (!notIncludedBallsWicket && (element.extrasType !== 'wide' &&
        element.extrasType !== 'no_ball' &&
        element.runs == 0) ||
        (element.extrasType == 'safe' &&
          (element.ballType == 'bye' || element.ballType == 'leg_bye'))
      ) {
        regularBalls += 1;
      } else {
        regularBalls = 0;
      }
      if (regularBalls == ballsPerOver && ballsCountPerOver == ballsPerOver) {
        medanOver += 1;
        regularBalls = 0;
      }
    }
  }
  return medanOver;
};

export const calculateCurrentPartnership = ({
  currentInning,
  lineupData,
}: {
  currentInning: InningObjPros;
  lineupData: LineupDataProps;
}) => {
  const { balls } = currentInning;
  const strikerIndex = balls.findIndex(
    (ball: BallObjProps) =>
      ball?.batsmanId === lineupData?.strikerId ||
      ball?.nonStrikerId === lineupData?.strikerId,
  );
  const nonStrikerIndex = balls.findIndex(
    (ball: BallObjProps) =>
      ball?.batsmanId === lineupData?.nonStrikerId ||
      ball?.nonStrikerId === lineupData?.nonStrikerId,
  );
  let startIndex = Math.max(strikerIndex, nonStrikerIndex);
  let partnership = 0;
  if (startIndex !== -1) {
    for (let index = startIndex; index < balls.length; index++) {
      const runs = balls[index].runs;
      partnership += runs;
    }
  }
  if (balls[balls.length - 1]?.wicketAttributes?.playerOutId) {
    return 0;
  } else {
    return partnership;
  }
};
export const onHandleEndInning = ({ action }: { action?: boolean }) => {
  Alert.alert(
    'End Inning',
    'Are you sure want to end this Inning?',
    [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'Confirm',
        onPress: () => {
          if (action) {
            goBack();
          }
          endInningAction();
        },
      },
    ],
    { cancelable: false },
  );
};
export const onHandleDrawMatch = () => {
  Alert.alert(
    'Draw Match',
    'Are you sure want to draw this match?',
    [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'Confirm',
        onPress: () => {
          goBack();
          // endInningAction({ action });
        },
      },
    ],
    { cancelable: false },
  );
};
export const showEndInningMessage = ({
  wicketsDown,
  currentOver,
  currentRuns,
  currentInning,
  targetScore,
}: {
  wicketsDown: number;
  currentOver: number;
  currentRuns: number;
  currentInning: InningObjPros;
  targetScore?: number;
}): boolean => {
  const { inningNumber, totalOvers, totalWickets } = currentInning;
  const targetWickets = totalWickets - 1;
  if (inningNumber == 1) {
    if (totalOvers == currentOver || wicketsDown >= targetWickets) {
      return true;
    }
  } else if (inningNumber == 2 && targetScore) {
    if (
      totalOvers == currentOver ||
      wicketsDown >= targetWickets ||
      currentRuns >= targetScore
    ) {
      return true;
    }
  }
  return false;
};
export const endInningAction = async () => {
  const { id } = store.getState().scoreReducer.matchDetail.currentInning;
  store.dispatch(setIsLoading(true));
  const response = await endInning({ id });
  if (response !== errorCase) {
    if (response?.success) {
      resetState();
      resetTeamPlayerState();
      if (response?.match.status == 'completed') {
        onMountMyMatches({ status: 'started' });
        onMountMyMatches({ status: 'completed' });
        onMountMyMatches({ status: 'fixture' });
        store.dispatch(setIndex(2));
        goBack();
        toastMessage('Match Completed Successfully');
      } else {
        store.dispatch(setMatchDetails(response?.match));
        store.dispatch(setSyncBallsCount(0));
      }
    }
  }
  store.dispatch(setIsLoading(false));
};
export const drawMatchAction = async ({ key }: DrawCaseModalProps) => {
  goBack()
  const { id } = store.getState().scoreReducer.matchDetail;
  store.dispatch(setIsLoading(true));
  const variables = {
    id,
    drawStatus: key,
    actionStatus: 'draw'
  }
  const response = await drawMatch(variables)
  store.dispatch(setIsLoading(false));
  if (response !== errorCase && response?.success) {
    goBack()
    toastMessage("Match has been draw!")
  }
}

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

export const getMatchDetails = async (id: string) => {
  if (id) {
    store.dispatch(setIsLoading(true));
    const response = await getMatch({ id });
    if (response !== errorCase) {
      const currentBall =
        response?.currentInning?.balls[
        response?.currentInning.balls.length - 1
        ];
      const lineUpdata = response?.currentInning.inningLineup;
      const batterData = [lineUpdata?.striker, lineUpdata?.nonStriker].filter(
        Boolean,
      ) as LineupDataProps['batterData'];
      const lineUp = {
        batterData: batterData.filter(
          item =>
            item?.batsmanId !== currentBall?.wicketAttributes?.playerOutId,
        ),
        bowlingData:
          currentBall?.overBallsNumber == response?.currentInning.ballsPerOver
            ? initialState.lineupData.bowlingData
            : lineUpdata?.bowler,
        strikerId:
          currentBall?.wicketAttributes?.playerOutId == lineUpdata?.strikerId
            ? initialState.lineupData.strikerId
            : lineUpdata.strikerId,
        nonStrikerId:
          currentBall?.wicketAttributes?.playerOutId == lineUpdata?.nonStrikerId
            ? initialState.lineupData.nonStrikerId
            : lineUpdata.nonStrikerId,
      };
      store.dispatch(setInitialLineup(lineUp));
      resetTeamPlayerState();
      store.dispatch(setMatchDetails(response));
      store.dispatch(setBattingPlaying(response?.currentInning.batingTeamPlayers));
      store.dispatch(setBowlerPlaying(response?.currentInning.bowlingTeamPlayers));
    }
    store.dispatch(setIsLoading(false));
  }
};
export const getMatchSummaryStatus = async () => {
  const { id } = store.getState().scoreReducer.matchDetail;
  if (id) {
    store.dispatch(setIsLoading(true));
    const response = await getMatchToggleSummaryStatus({ id });
    if (response !== errorCase) {
      store.dispatch(setStatusCode(response?.tickerToggleStatus))
      store.dispatch(setIsLoading(false));
    }
  }
}

export const calculateRemainingBalls = ({
  totalOvers,
  ballsPerOver,
  currentOver,
}: {
  totalOvers: number;
  ballsPerOver: number;
  currentOver: number;
}) => {
  const totalBalls =
    Math.floor(totalOvers) * ballsPerOver + Math.round((totalOvers % 1) * 10);
  const currentBalls =
    Math.floor(currentOver) * ballsPerOver + Math.round((currentOver % 1) * 10);
  return totalBalls - currentBalls;
};
export const calculateRequireRunRate = ({
  currentRuns,
  remainingBalls,
  targetScore,
  ballsPerOver,
}: {
  currentRuns: number;
  remainingBalls: number;
  targetScore?: number;
  ballsPerOver: number;
}): string => {
  if (targetScore) {
    const requiredRunRate =
      ((targetScore - currentRuns) / remainingBalls) * ballsPerOver;
    return requiredRunRate.toFixed(1);
  }
  return '0';
};
export const convertBackendLineupToLocalLineup = ({
  inningLineup,
}: {
  inningLineup: LineupBackendDataProps;
}): LineupDataProps => {
  return {
    strikerId: inningLineup.strikerId,
    nonStrikerId: inningLineup.nonStrikerId,
    bowlingData: inningLineup.bowler,
    batterData: [inningLineup?.striker, inningLineup?.nonStriker].filter(
      Boolean,
    ) as LineupDataProps['batterData'],
  };
};
export const nameAndScore = ({
  id,
  innings,
}: {
  id: string;
  innings: InningObjPros[];
}) => {
  const inning = innings?.find(item => item?.batingTeamId == id);
  if (inning) {
    return `${inning?.batingTeam?.name} \n ${inning?.runs} / ${inning?.currentWickets}`;
  }
  return '--';
};
export const updateLineupAction = async (
  variables: UpdateInningLineupApiProps,
) => {
  const response = await updateInningLineupApi(variables);
  if (response !== errorCase) {
    // toastMessage()
  }
};
export const decideStrikerNonStriker = ({
  batterData,
  batsmanId,
}: {
  batterData: BatterStatsAttributesProps[];
  batsmanId: string;
}): SelectLineupFunctionProps => {
  const strikerNonStriker = {
    strikerId: '',
    nonStrikerId: '',
  };
  const indexOfCurrentBatsman = batterData.findIndex(
    (item: BatterStatsAttributesProps) => item.batsmanId == batsmanId,
  );
  if (batterData.length == 2) {
    if (indexOfCurrentBatsman !== -1) {
      strikerNonStriker.strikerId = batterData[indexOfCurrentBatsman].batsmanId;
    }
    strikerNonStriker.nonStrikerId =
      batterData[1 - indexOfCurrentBatsman].batsmanId;
  } else {
    toastMessage('Select both batters first!!');
  }
  return strikerNonStriker;
};
export const onHandleSelectStriker = ({
  batsmanId,
  batterData,
  inningId,
}: {
  batsmanId: string;
  batterData: BatterStatsAttributesProps[];
  inningId: string;
}) => {
  const strikerNonStriker = decideStrikerNonStriker({ batterData, batsmanId });
  const variables: UpdateInningLineupApiProps = {
    inningId,
    ...strikerNonStriker,
  };
  store.dispatch(onSelectStriker(strikerNonStriker));
  updateLineupAction(variables);
};
// this function can calculate the and maintain the history of all partnership of the inning

// const calculatePartnership = (balls: BallObjProps[])=> {
//     const ballObj = store.getState().scoreReducer.ballObj
//     let partnership = 0;
//     let currentBatsmanId = ballObj.batsmanId;
//     let currentNonStrikerId = ballObj.nonStrikerId;
//     const partnershipHistory = [];
//     for (const ball of balls) {
//       if (ball.batsmanId === currentBatsmanId && ball.nonStrikerId === currentNonStrikerId) {
//         partnership += ball.runs;
//       } else {
//         // Start a new partnership
//         if (currentBatsmanId && currentNonStrikerId) {
//           partnershipHistory.push({ batsmanId: currentBatsmanId, nonStrikerId: currentNonStrikerId, partnership });
//         }
//         partnership = ball.runs;
//         currentBatsmanId = ball.batsmanId;
//         currentNonStrikerId = ball.nonStrikerId;
//       }
//     }

//     // Add the last partnership to the history
//     if (currentBatsmanId && currentNonStrikerId) {
//       partnershipHistory.push({ batsmanId: currentBatsmanId, nonStrikerId: currentNonStrikerId, partnership });
//     }
//     return partnershipHistory;
//   }
export const outBy = ({
  id,
  bowlersData,
}: {
  id?: string;
  bowlersData?: BowlerStatsAttributesProps[];
}): PlayerObjProps => {
  return (bowlersData?.find(
    (item: BowlerStatsAttributesProps) => item?.bowlerId === id,
  ) ?? {}) as PlayerObjProps;
};
export const calculateFallOfWickets = ({
  balls,
  batsmanData,
  bowlersData,
  ballsPerOver,
}: {
  balls: BallObjProps[];
  batsmanData: BatterStatsAttributesProps[];
  bowlersData: BowlerStatsAttributesProps[];
  ballsPerOver: number;
}): BatterStatsAttributesProps[] => {
  let fallOfWickets = [];
  for (let index = 0; index < balls.length; index++) {
    const element = balls[index];
    if (element?.wicketAttributes?.wicketType) {
      const wicket: WicketObjProps = {
        id: '',
        inningId: '',
        wicketType: element?.wicketAttributes?.wicketType,
        playerOutId: element.wicketAttributes?.playerOutId,
        fielder: outBy({ id: element.wicketAttributes.fielderId, bowlersData }),
        bowler: outBy({ id: element.bowlerId, bowlersData }),
        fallAtRuns: calculateRuns({
          balls,
          targetBallNumber: element.ballNumber,
        }),
        wicketNumber: calculateWickets({
          balls,
          targetBallNumber: element.ballNumber,
        }),
        fallAtOver: calculateOvers({
          balls,
          ballsPerOver,
          targetBallNumber: element.ballNumber,
        }),
      };
      const batterObj: BatterStatsAttributesProps = {
        name: batsmanData.find(item => item?.batsmanId == element?.batsmanId)
          ?.name,
        batsmanId: element.batsmanId,
        wicket,
      };
      fallOfWickets.push(batterObj);
    }
  }
  return fallOfWickets;
};
export const calculateNotPlayedFromBackend = ({
  batsmanData,
}: {
  batsmanData?: BatterStatsAttributesProps[];
}): string => {
  if (batsmanData) {
    return batsmanData
      .filter(obj => obj?.batingStat === null)
      .map(obj => obj.name)
      .join(', ');
  }
  return '';
};
export const calculateFallOfWicketsFromBackend = ({
  batsmanData,
}: {
  batsmanData?: BatterStatsAttributesProps[];
}): string => {
  if (batsmanData) {
    return batsmanData
      .filter(obj => obj?.batingStat?.wicket?.wicketType !== undefined)
      .map(
        batter =>
          `${batter?.batingStat?.wicket?.wicketNumber}-${batter?.batingStat?.wicket?.fallAtRuns} (${batter?.batingStat?.wicket?.playerOut?.name}, ${batter?.batingStat?.wicket?.fallAtOver} Ov)`,
      )
      .join(', ');
  }
  return '';
};
export const calculateFallOfWicketsFromLocal = ({
  balls,
  batsmanData,
  bowlersData,
  ballsPerOver,
}: {
  balls: BallObjProps[];
  batsmanData: BatterStatsAttributesProps[];
  bowlersData: BowlerStatsAttributesProps[];
  ballsPerOver: number;
}): string => {
  if (batsmanData) {
    const batsmanLocalData = calculateFallOfWickets({
      balls,
      ballsPerOver,
      batsmanData,
      bowlersData,
    });
    return batsmanLocalData
      .filter(obj => obj?.wicket?.wicketType !== undefined)
      .map(
        batter =>
          `${batter?.wicket?.wicketNumber}-${batter?.wicket?.fallAtRuns} (${batter?.name}, ${batter?.wicket?.fallAtOver} Ov)`,
      )
      .join(', ');
  }
  return '';
};

export const resetState = () => {
  store.dispatch({ type: 'resetScore' });
};