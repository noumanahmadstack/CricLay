import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { toastMessage } from '../../../../components/toastMessages';
import { ScoringStateProps } from '../../../../modelInterface/redux/scoring/reducer';
import {
    BallObjLocalProps,
    BallObjProps,
    BatterStatsAttributesProps,
    BowlerStatsAttributesProps,
    InningLineupAttributesProps,
    WicketObjProps,
} from '../../../../modelInterface/scoring';
export const initialState: ScoringStateProps = {
    isVisibleGoldenBallModal: false,
    matchDetail: {
        tickerToggleStatus: 'regular',
        id: '',
        isAmateur: false,
        streamingLinks: [],
        overlayUrl: '',
        tossDecision: '',
        shareableId: '',
        liveStreamingUrl: '',
        scheduledDatetime: '',
        formate: '',
        stats: {
            manOfTheMatch: {
                name: '',
                batingStat: {
                    name: '',
                    batsmanId: '',
                    runs: '',
                    fours: '',
                    sixers: '',
                    strikeRate: '',
                    ballsCount: 0,
                },
                bowlingStat: {
                    name: '',
                    bowlerId: '',
                    overs: '',
                    runs: 0,
                    economyRate: '',
                },
            },
        },
        teamOne: {
            id: '',
            name: '',
            location: '',
            runs: 0,
            wickets: 0,
            yetToBat: false,
            overs: 0,
        },
        scorer: {
            player: {
                shareableId: '',
            },
        },
        teamTwo: {
            id: '',
            name: '',
            location: '',
            runs: 0,
            wickets: 0,
            yetToBat: false,
            overs: 0,
        },
        organizer: {
            id: '',
            name: '',
        },
        winningTeam: {
            name: '',
            id: '',
        },
        venue: {
            id: '',
            title: '',
            subTitle: '',
            lat: '',
            long: '',
            fullAddress: '',
        },
        isTie: false,
        winningStats: {
            winByRuns: false,
            byRuns: '',
            winByWickets: false,
            byWickets: '',
        },
        overs: 0,
        ballType: '',
        wickets: 0,
        matchId: '',
        matchType: '',
        tournament: {
            id: '',
            name: '',
        },
        summary: {
            matchSummaryUrl: "",
            teamOne: {
                id: '',
                name: '',
                location: '',
            },
            teamTwo: {
                id: '',
                name: '',
                location: '',
            },
        },
        currentInning: {
            id: '',
            status: '',
            ballsCount: 0,
            duration: 0,
            matchId: '',
            bowlingTeam: {
                id: '',
                name: '',
            },
            currentWickets: 0,
            batingTeamId: '',
            bowlingTeamId: '',
            inningNumber: 1,
            totalOvers: 0,
            currentOvers: 0,
            currentRunRate: '',
            runs: 0,
            totalWickets: 0,
            ballsPerOver: 0,
            extrasTotal: 0,
            extrasWides: 0,
            extrasByes: 0,
            extrasLegByes: 0,
            extrasNoBalls: 0,
            extrasPenalty: 0,
            batingTeamPlayers: [],
            bowlingTeamPlayers: [],
            balls: [],
            batingTeam: {
                id: '',
                name: '',
            },
            currentPartnership: {
                id: ' ',
                batsmanOneId: ' ',
                batsmanTwoId: ' ',
                runs: 0,
                normalBalls: 0,
                extraBalls: 0,
                ballsCount: 0,
                batsmanOneRuns: 0,
                batsmanTwoRuns: 0,
                batsmanOneBalls: 0,
                batsmanTwoBalls: 0,
            },
            inningLineup: {
                strikerId: '',
                nonStrikerId: '',
                bowlerId: '',
                striker: {
                    name: '',
                    id: '',
                    shareableId: '',
                    batsmanId: '',
                },
                nonStriker: {
                    name: '',
                    id: '',
                    shareableId: '',
                    batsmanId: '',
                },
                bowler: {
                    name: '',
                    bowlerId: '',
                },
                strikerStat: {
                    batsmanId: '',
                    name: '',
                    runs: '0',
                    fours: '0',
                    sixers: '0',
                    strikeRate: '0.0',
                    retiredHurt: false,
                    retiredHurtStatus: 0,
                    ballsCount: '0',
                    isOut: false,
                },
                nonStrikerStat: {
                    batsmanId: '',
                    name: '',
                    runs: '0',
                    fours: '0',
                    sixers: '0',
                    strikeRate: '0.0',
                    retiredHurt: false,
                    retiredHurtStatus: 0,
                    ballsCount: 0,
                    isOut: false,
                },
                bowlerStat: {
                    bowlerId: '',
                    name: '',
                    ballsCount: '0',
                    overs: '0',
                    runs: '0',
                    wide: '0',
                    wicket: '0',
                    maiden: '0',
                    retiredHurt: false,
                    retiredHurtStatus: 0,
                    economyRate: ' 0.0',
                    isBowling: false,
                    maidenOvers: 0,
                    wicketsCount: 0,
                },
            },
            partnerships: [],
            overs: [],
        },
        innings: [],
    },
    lineupData: {
        batterData: [],
        bowlingData: {
            id: '',
            name: '',
            bowlerId: '',
            wicketsCount: 0,
        },
        strikerId: '',
        nonStrikerId: '',
    },
    isLoading: false,
};
const slice = createSlice({
    name: 'score',
    initialState,
    reducers: {
        setStatusCode: (
            state,
            action: PayloadAction<ScoringStateProps['matchDetail']['tickerToggleStatus']>,
        ) => {
            state.matchDetail.tickerToggleStatus = action.payload;
        },
        setMatchSummaryToggleStatus: (
            state,
            action: PayloadAction<ScoringStateProps['matchDetail']['tickerToggleStatus']>,
        ) => {
            state.matchDetail.tickerToggleStatus = action.payload;
        },

        setMatchDetails: (
            state,
            action: PayloadAction<ScoringStateProps['matchDetail']>,
        ) => {
            state.matchDetail = action.payload;
        },
        setSyncBallsCount: (
            state,
            action: PayloadAction<
                ScoringStateProps['matchDetail']['currentInning']['ballsCount']
            >,
        ) => {
            state.matchDetail.currentInning.ballsCount = action.payload;
        },
        subtractSyncBallsCount: (
            state,
            action: PayloadAction<
                ScoringStateProps['matchDetail']['currentInning']['ballsCount']
            >,
        ) => {
            state.matchDetail.currentInning.ballsCount -= action.payload;
        },
        setIsLoading: (
            state,
            action: PayloadAction<ScoringStateProps['isLoading']>,
        ) => {
            state.isLoading = action.payload;
        },
        onSelectStriker: (
            state,
            action: PayloadAction<{ strikerId: string; nonStrikerId: string }>,
        ) => {
            const { strikerId, nonStrikerId } = action.payload;
            state.lineupData.strikerId = strikerId;
            state.lineupData.nonStrikerId = nonStrikerId;
        },
        onEditBatsman: (
            state,
            action: PayloadAction<{ selectedBatsmanId: string, batter: BatterStatsAttributesProps }>,
        ) => {
            const { batter, selectedBatsmanId } = action.payload;
            const { batsmanId } = batter
            let editBallsCount: number | null = null
            const hasMatch = state.lineupData.batterData.some(
                (obj: BatterStatsAttributesProps) =>
                    obj.batsmanId === batter.batsmanId,
            );
            if (hasMatch) {
                toastMessage(
                    'Please Select another player. This player is already taken',
                );
            } else {
            if (batsmanId) {
                state.matchDetail.currentInning.balls = state.matchDetail.currentInning.balls.map((ball) => {
                    if (ball.batsmanId == selectedBatsmanId) {
                        if (editBallsCount == null) {
                            editBallsCount = ball.ballNumber - 1
                        }
                        return { ...ball, batsmanId }
                    }
                    if (ball.nonStrikerId == selectedBatsmanId) {
                        if (editBallsCount == null) {
                            editBallsCount = ball.ballNumber - 1
                        }
                        return { ...ball, nonStrikerId: batsmanId }
                    }
                    return ball
                })
                if (editBallsCount !== null) {
                    state.matchDetail.currentInning.ballsCount = editBallsCount
                }
                for (let i = 0; i < state.lineupData.batterData.length; i++) {
                    if (state.lineupData.batterData[i].batsmanId === selectedBatsmanId) {
                        state.lineupData.batterData[i] = batter;
                        break;
                    }
                }
                if (state.lineupData.strikerId == selectedBatsmanId) {
                    state.lineupData.strikerId = batsmanId
                } else if (state.lineupData.nonStrikerId == selectedBatsmanId) {
                    state.lineupData.nonStrikerId = batsmanId
                }
            }
        }
        },
        onSelectBatter: (state, action: PayloadAction<any>) => {
            const { playerObj } = action.payload;
            const hasMatch = state.lineupData.batterData.some(
                (obj: BatterStatsAttributesProps) =>
                    obj.batsmanId === playerObj.batsmanId,
            );
            if (hasMatch) {
                toastMessage(
                    'Please Select another player. This player is already taken',
                );
            } else {
                // Check if the player is out
                const isPlayerOut = state.matchDetail.currentInning.balls?.some(
                    (ball: BallObjProps) =>
                        ball.ballType === 'wicket' &&
                        ball.wicketAttributes?.playerOutId === playerObj.batsmanId,
                );
                if (isPlayerOut) {
                    toastMessage(
                        'Selected player is already out. Please Select another player.',
                    );
                } else {
                    state.lineupData.batterData = [
                        ...state.lineupData.batterData,
                        playerObj,
                    ];
                }
            }
        },
        onSelectBowler: (state, action: PayloadAction<any>) => {
            const { playerObj, data } = action.payload;
            if (
                state.matchDetail.currentInning.balls.length > 0 &&
                playerObj.bowlerId ==
                state.matchDetail.currentInning.balls[
                    state.matchDetail.currentInning.balls.length - 1
                ].bowlerId
            ) {
                toastMessage('You cannot choose the previous bowler again');
                return;
            }
            const indexOfCurrentBowler = data.findIndex(
                (items: BowlerStatsAttributesProps) =>
                    items.bowlerId == playerObj.bowlerId,
            );
            if (indexOfCurrentBowler !== -1) {
                state.lineupData.bowlingData = data[indexOfCurrentBowler];
            }
        },
        updateCurrentInningBall: (
            state,
            action: PayloadAction<BallObjProps>,
        ) => {
            state.matchDetail.currentInning.balls = state.matchDetail.currentInning.balls.map((ballObj) => {
                if (ballObj.ballNumber == action.payload.ballNumber) {
                    return action.payload
                } else {
                    return ballObj
                }
            })
        },
        resetLineup: state => {
            state.lineupData = initialState.lineupData;
        },
        setInitialLineup: (
            state,
            action: PayloadAction<ScoringStateProps['lineupData']>,
        ) => {
            state.lineupData = action.payload;
        },
        onAddBalls: (state, action: PayloadAction<BallObjLocalProps>) => {
            const ball = action.payload;
            const prevBall =
                state.matchDetail.currentInning.balls[
                state.matchDetail.currentInning.balls.length - 1
                ];
            const notIncludedBallsWicket = ball.wicketAttributes?.wicketType == 'retired_hurt' ||
                ball.wicketAttributes?.wicketType == 'retired_out' ||
                ball.wicketAttributes?.wicketType == 'timed_out' ||
                ball.wicketAttributes?.wicketType == 'man_kaded' ||
                ball.wicketAttributes?.wicketType == 'absent_hurt' ||
                ball.wicketAttributes?.wicketType == 'retired'
            const addOverBallRuns = () => {
                let overBallsNumber = 0;
                let overNumber = 0;
                let ballNumber = 0;
                ballNumber = prevBall?.ballNumber ? prevBall.ballNumber + 1 : 1;
                if (state.matchDetail.currentInning.balls.length > 0) {
                    if (ball.extrasType !== 'wide' && ball.extrasType !== 'no_ball' && !notIncludedBallsWicket) {
                        if (prevBall.overBallsNumber < state.matchDetail.currentInning.ballsPerOver) {
                            overNumber = prevBall.overNumber;
                            overBallsNumber = prevBall.overBallsNumber + 1;
                        } else {
                            overNumber = prevBall.overNumber + 1;
                            overBallsNumber = 1;
                        }
                        return {
                            overBallsNumber,
                            overNumber,
                            ballNumber,
                        };
                    } else if (prevBall.overBallsNumber == state.matchDetail.currentInning.ballsPerOver) {
                        return {
                            ballNumber,
                            overBallsNumber: 0,
                            overNumber: prevBall.overNumber + 1,
                        };
                    } else {
                        return {
                            ballNumber,
                            overBallsNumber: prevBall.overBallsNumber,
                            overNumber: prevBall.overNumber,
                        };
                    }
                } else {
                    return {
                        overBallsNumber: (ball.extrasType == 'wide' || ball.extrasType == 'no_ball' || notIncludedBallsWicket) ? 0 : 1,
                        overNumber: 0,
                        ballNumber,
                    };
                }
            };
            const newBall: BallObjProps = {
                batsmanId: state.lineupData.strikerId,
                bowlerId: state.lineupData.bowlingData.bowlerId,
                nonStrikerId: state.lineupData.nonStrikerId,
                ...addOverBallRuns(),
                inningId: state.matchDetail.currentInning.id,
                ballType: ball.ballType,
                extrasType: ball.extrasType,
                boundaryType: ball.boundaryType,
                runs: ball.runs,
                wicketAttributes: ball.wicketAttributes
                    ? ball.wicketAttributes
                    : undefined,
            };
            if (ball?.shotAngle || ball?.xCoordinate || ball?.yCoordinate) {
                newBall.shotAngle = ball.shotAngle;
                newBall.xCoordinate = ball.xCoordinate;
                newBall.yCoordinate = ball.yCoordinate;
            }
            state.matchDetail.currentInning.balls = [
                ...state.matchDetail.currentInning.balls,
                newBall,
            ];
            const switchStrker = () => {
                const temp = state.lineupData.strikerId;
                state.lineupData.strikerId = state.lineupData.nonStrikerId;
                state.lineupData.nonStrikerId = temp;
            };
            if (state.matchDetail.currentInning.balls.length > 0) {
                if (ball.extrasType === 'safe') {
                    if (ball.runs % 2 !== 0) {
                        switchStrker();
                    }
                    if (
                        state.matchDetail.currentInning.balls[
                            state.matchDetail.currentInning.balls.length - 1
                        ].overBallsNumber == state.matchDetail.currentInning.ballsPerOver
                    ) {
                        state.lineupData.bowlingData = initialState.lineupData.bowlingData;
                        switchStrker();
                    }
                } else if (ball.extrasType == 'no_ball' || ball.extrasType == 'wide') {
                    if (ball.runs % 2 == 0) {
                        switchStrker();
                    }
                }
            }
            if (ball?.ballType == 'wicket') {
                state.lineupData.strikerId = initialState.lineupData.strikerId;
                state.lineupData.nonStrikerId = initialState.lineupData.nonStrikerId;
                if (
                    ball.wicketAttributes?.playerOutId ==
                    state.matchDetail.currentInning.balls[
                        state.matchDetail.currentInning.balls.length - 1
                    ].batsmanId
                ) {
                    state.matchDetail.currentInning.balls[
                        state.matchDetail.currentInning.balls.length - 1
                    ].batsmanId == '';
                } else if (
                    ball.wicketAttributes?.playerOutId ==
                    state.matchDetail.currentInning.balls[
                        state.matchDetail.currentInning.balls.length - 1
                    ].nonStrikerId
                ) {
                    state.matchDetail.currentInning.balls[
                        state.matchDetail.currentInning.balls.length - 1
                    ].nonStrikerId == '';
                }
                state.lineupData.batterData = state.lineupData.batterData.filter(
                    item => item.batsmanId !== ball.wicketAttributes?.playerOutId,
                );
            }
        },
        undoBowls: (state, action: PayloadAction<any>) => {
            const { battingPlaying, bowlerPlaying } = action.payload;
            const deletedBall =
                state.matchDetail.currentInning.balls[
                state.matchDetail.currentInning.balls.length - 1
                ];
            if (
                deletedBall.ballNumber <= state.matchDetail.currentInning.ballsCount
            ) {
                state.matchDetail.currentInning.ballsCount -= 1;
            }
            state.matchDetail.currentInning.balls.pop();
            const currentBall =
                state.matchDetail.currentInning.balls[
                state.matchDetail.currentInning.balls.length - 1
                ];
            const findBattersById = (
                strikerId: InningLineupAttributesProps['strikerId'],
                nonStrikerId: InningLineupAttributesProps['nonStrikerId'],
                playerOutId?: WicketObjProps['playerOutId'],
            ) => {
                const result = [];
                for (const item of battingPlaying) {
                    if (item.batsmanId !== playerOutId && item.batsmanId === strikerId) {
                        result.push(item);
                    } else if (
                        item.batsmanId !== playerOutId &&
                        item.batsmanId === nonStrikerId
                    ) {
                        result.push(item);
                    } else if (playerOutId) {
                        if (
                            item.batsmanId === deletedBall.batsmanId ||
                            item.batsmanId == deletedBall.nonStrikerId
                        ) {
                            result.push(item);
                        }
                    }
                }
                return result;
            };
            const findBowlerById = (
                bowlerId: BallObjProps['bowlerId'],
                ball: BallObjProps,
            ) => {
                if (
                    ball.overBallsNumber ==
                    state.matchDetail.currentInning.ballsPerOver &&
                    ball.ballType !== 'extra'
                ) {
                    return {};
                } else {
                    for (const item of bowlerPlaying) {
                        if (item.bowlerId === bowlerId) {
                            return item;
                        }
                    }
                }
            };
            const switchStrker = () => {
                const temp = currentBall.wicketAttributes?.playerOutId == currentBall.batsmanId
                    ? deletedBall.batsmanId == currentBall.nonStrikerId
                        ? deletedBall.nonStrikerId
                        : deletedBall.batsmanId
                    : currentBall.batsmanId;
                state.lineupData.strikerId = currentBall.wicketAttributes?.playerOutId == currentBall.nonStrikerId
                    ? deletedBall.nonStrikerId == currentBall.batsmanId
                        ? deletedBall.batsmanId
                        : deletedBall.nonStrikerId
                    : currentBall.nonStrikerId;
                state.lineupData.nonStrikerId = temp;
            };
            if (state.matchDetail.currentInning.balls.length > 0) {
                state.lineupData.batterData = findBattersById(
                    currentBall.batsmanId,
                    currentBall.nonStrikerId,
                    currentBall.wicketAttributes?.playerOutId,
                );
                state.lineupData.bowlingData = findBowlerById(
                    currentBall.bowlerId,
                    currentBall,
                );
                if (currentBall.extrasType == 'safe' &&
                    (currentBall.runs % 2 !== 0 ||
                        currentBall.overBallsNumber ==
                        state.matchDetail.currentInning.ballsPerOver)
                ) {
                    switchStrker();
                } else if (
                    (currentBall.extrasType == 'no_ball' || currentBall.extrasType == 'wide') &&
                    currentBall.runs % 2 == 0
                ) {
                    switchStrker();
                } else {
                    state.lineupData.strikerId =
                        currentBall.wicketAttributes?.playerOutId == currentBall.batsmanId
                            ? deletedBall.batsmanId == currentBall.nonStrikerId
                                ? deletedBall.nonStrikerId
                                : deletedBall.batsmanId
                            : currentBall.batsmanId;
                    state.lineupData.nonStrikerId =
                        currentBall.wicketAttributes?.playerOutId == currentBall.nonStrikerId
                            ? deletedBall.nonStrikerId == currentBall.batsmanId
                                ? deletedBall.batsmanId
                                : deletedBall.nonStrikerId
                            : currentBall.nonStrikerId;
                }
            } else {
                state.lineupData = initialState.lineupData;
            }
        },
    },
    extraReducers: builder => {
        builder.addCase('resetScore', () => {
            return initialState;
        });
    },
});
export const {
    setStatusCode,
    setMatchSummaryToggleStatus,
    setMatchDetails,
    setIsLoading,
    onSelectStriker,
    onSelectBatter,
    onSelectBowler,
    onAddBalls,
    undoBowls,
    resetLineup,
    setInitialLineup,
    setSyncBallsCount,
    updateCurrentInningBall,
    onEditBatsman,
    subtractSyncBallsCount
} = slice.actions;
export const scoreReducer = slice.reducer;
