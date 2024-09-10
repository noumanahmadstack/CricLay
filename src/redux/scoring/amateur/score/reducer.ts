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
            matchSummaryUrl: '',
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
            goldenBallNumber: null,
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
    name: 'amateurScore',
    initialState,
    reducers: {
        setStatusCode: (
            state,
            action: PayloadAction<ScoringStateProps['matchDetail']['tickerToggleStatus']>,
        ) => {
            state.matchDetail.tickerToggleStatus = action.payload;
        },
        setIsVisibleGoldenBallModal: (
            state,
            action: PayloadAction<ScoringStateProps['isVisibleGoldenBallModal']>,
        ) => {
            state.isVisibleGoldenBallModal = action.payload;
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
        setGoldenBallNumber: (
            state,
            action: PayloadAction<ScoringStateProps['matchDetail']['currentInning']['goldenBallNumber']>,
        ) => {
            state.matchDetail.currentInning.goldenBallNumber = action.payload;
        },
        onSelectStriker: (
            state,
            action: PayloadAction<{ strikerId: string; nonStrikerId: string }>,
        ) => {
            const { strikerId, nonStrikerId } = action.payload;
            state.lineupData.strikerId = strikerId;
            state.lineupData.nonStrikerId = nonStrikerId;
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
                const isPlayerOut = state.matchDetail.currentInning.balls?.some((ball: BallObjProps) => ball.ballType == 'wicket' && ball.wicketAttributes?.playerOutId === playerObj.batsmanId && ball.wicketAttributes?.wicketType !== "retired");
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
            // if (
            //     state.matchDetail.currentInning.balls.length > 0 &&
            //     playerObj.bowlerId ==
            //     state.matchDetail.currentInning.balls[
            //         state.matchDetail.currentInning.balls.length - 1
            //     ].bowlerId
            // ) {
            //     toastMessage('You cannot choose the previous bowler again');
            //     return;
            // }
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
                ball.wicketAttributes?.wicketType == "retired"
            let includeExtras = true
            if (state.matchDetail.currentInning.totalOvers - 2 == prevBall?.overNumber && prevBall?.overBallsNumber === state.matchDetail.currentInning.ballsPerOver) {
                includeExtras = false
            } else if (state.matchDetail.currentInning.totalOvers - 1 == prevBall?.overNumber) {
                includeExtras = false
            } else {
                includeExtras = true
            }
            const addOverBallRuns = () => {
                let overBallsNumber = 0;
                let overNumber = 0;
                let ballNumber = 0;
                ballNumber = prevBall?.ballNumber ? prevBall.ballNumber + 1 : 1;
                if (state.matchDetail.currentInning.balls.length > 0) {
                    if (!includeExtras) {
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
                        if (!notIncludedBallsWicket) {
                            if (prevBall.overBallsNumber < state.matchDetail.currentInning.ballsPerOver) {
                                overNumber = prevBall.overNumber;
                                overBallsNumber = prevBall.overBallsNumber + 1;
                            } else {
                                overNumber = prevBall.overNumber + 1;
                                // overBallsNumber = ball.ballType == "extra"? 0: 1;
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
                    }
                } else {
                    return {
                        overBallsNumber: notIncludedBallsWicket ? 0 : 1,
                        overNumber: 0,
                        ballNumber,
                    };
                }
            };
            const { ballNumber, overBallsNumber, overNumber } = addOverBallRuns()
            const noBallGoldenballRuns = (ball.ballType == "extra" && ball.extrasType == "no_ball" && !includeExtras && state.matchDetail.currentInning.goldenBallNumber == (overBallsNumber + 1)) ? (2 + (ball.runs - 1) * 2) : ball.runs + 1
            const newBall: BallObjProps = {
                batsmanId: state.lineupData.strikerId,
                bowlerId: state.lineupData.bowlingData?.bowlerId ? state.lineupData.bowlingData.bowlerId : prevBall.bowlerId,
                nonStrikerId: state.lineupData.nonStrikerId,
                ballNumber,
                overBallsNumber,
                overNumber,
                inningId: state.matchDetail.currentInning.id,
                ballType: ball.ballType,
                extrasType: ball.extrasType,
                boundaryType: ball.boundaryType,
                runs: ball.extrasType == "safe" ? (includeExtras ? ball.runs : ((overBallsNumber == state.matchDetail.currentInning.goldenBallNumber && !(ball.ballType == 'bye' || ball.ballType == 'leg_bye')) ? ball.runs * 2 : ball.runs)) : state.matchDetail.currentInning.balls.filter((item) => item.overNumber == overNumber).some((item) => item.extrasType !== "safe") ? (includeExtras ? ball.runs + 3 : noBallGoldenballRuns) : noBallGoldenballRuns,
                wicketAttributes: ball.wicketAttributes
                    ? ball.wicketAttributes
                    : undefined,
                secondaryWicketAttributes: ball.secondaryWicketAttributes
                    ? ball.secondaryWicketAttributes
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
                if (includeExtras ? ball : newBall.extrasType) {
                    const actualRunsForGoldenBall: number = ball.ballType == 'extra' ? (newBall.runs - 2) / 2 : newBall.runs / 2
                    const overBallNumberForGoldenBall: number = newBall.ballType == 'extra' ? (overBallsNumber + 1) : overBallsNumber // if there is any extra ball at golden ball then it should return the score accordingly to it.
                    const strikeChangeOnNormalOvers: boolean = newBall.runs % 2 !== 0 // normally strike change on odd numbers
                    const strikeChangeOnWide: boolean = actualRunsForGoldenBall == 0 ? false : actualRunsForGoldenBall % 2 == 0 // when there is a simple wide, it should return false because the strike will not change, and if there is any odd number with it, then strike will change.
                    const strikeChangeInLastOver: boolean = (!includeExtras && state.matchDetail.currentInning.goldenBallNumber == overBallNumberForGoldenBall) && (ball.extrasType == 'wide' ? strikeChangeOnWide : actualRunsForGoldenBall % 2 !== 0) // it will manage all the strike changes specially on golden ball and with extra ball.
                    const strikeChangeOnOverCompletion: boolean = newBall.overBallsNumber == state.matchDetail.currentInning.ballsPerOver // strike change on over completion
                    if (strikeChangeOnNormalOvers || strikeChangeInLastOver) {
                        switchStrker();
                    }
                    if (strikeChangeOnOverCompletion) {
                        state.lineupData.bowlingData = initialState.lineupData.bowlingData; // reset bowling lineup upon over completion
                        switchStrker();
                    }
                }
            }
            if (ball?.ballType == 'wicket') {
                const currentBall = state.matchDetail.currentInning.balls[state.matchDetail.currentInning.balls.length - 1]
                state.lineupData.strikerId = initialState.lineupData.strikerId;
                state.lineupData.nonStrikerId = initialState.lineupData.nonStrikerId;
                if (ball.wicketAttributes?.playerOutId == currentBall.batsmanId || ball.secondaryWicketAttributes?.playerOutId == currentBall.batsmanId) {
                    currentBall.batsmanId == '';
                }
                if (ball.wicketAttributes?.playerOutId == currentBall.nonStrikerId || ball.secondaryWicketAttributes?.playerOutId == currentBall.nonStrikerId) {
                    currentBall.nonStrikerId == '';
                }
                if (ball.secondaryWicketAttributes?.playerOutId) {
                    state.lineupData.batterData = initialState.lineupData.batterData
                } else {
                    state.lineupData.batterData = state.lineupData.batterData.filter(
                        item => item.batsmanId !== ball.wicketAttributes?.playerOutId,
                    );
                }
            }
        },
        undoBowls: (state, action: PayloadAction<any>) => {
            const { battingPlaying, bowlerPlaying } = action.payload;
            const deletedBall = state.matchDetail.currentInning.balls[state.matchDetail.currentInning.balls.length - 1];
            if (deletedBall.ballNumber <= state.matchDetail.currentInning.ballsCount) {
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
                let includeExtras = true
                if (state.matchDetail.currentInning.totalOvers - 2 == currentBall?.overNumber && currentBall?.overBallsNumber === state.matchDetail.currentInning.ballsPerOver) {
                    includeExtras = false
                } else if (state.matchDetail.currentInning.totalOvers - 1 == currentBall?.overNumber) {
                    includeExtras = false
                } else {
                    includeExtras = true
                }
                const overBallNumberForGoldenBall: number = currentBall.ballType == 'extra' ? (currentBall?.overBallsNumber - 1) : currentBall?.overBallsNumber
                const actualRunsForGoldenBall: number = (!includeExtras && currentBall.ballType == 'extra') ? (currentBall.runs - 2) / 2 : currentBall.runs / 2
                const strikeChangeOnNormalOvers: boolean = currentBall.runs % 2 !== 0 // normally strike change on odd numbers
                const strikeChangeOnWide: boolean = actualRunsForGoldenBall == 0 ? false : actualRunsForGoldenBall % 2 == 0 // when there is a simple wide, it should return false because the strike will not change, and if there is any odd number with it, then strike will change.
                const strikeChangeInLastOver: boolean = (!includeExtras && state.matchDetail.currentInning.goldenBallNumber == overBallNumberForGoldenBall) && (currentBall.extrasType == 'wide' ? strikeChangeOnWide : actualRunsForGoldenBall % 2 !== 0) // it will manage all the strike changes specially on golden ball and with extra ball.
                const strikeChangeOnOverCompletion: boolean = currentBall.overBallsNumber == state.matchDetail.currentInning.ballsPerOver // strike change on over completion
                if (strikeChangeOnNormalOvers || strikeChangeOnOverCompletion || strikeChangeInLastOver) {
                    switchStrker();
                }
                else {
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
                // state.lineupData = initialState.lineupData;
            }
        },
    },
    extraReducers: builder => {
        builder.addCase('resetAmateurScore', () => {
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
    setGoldenBallNumber,
    updateCurrentInningBall,
    setIsVisibleGoldenBallModal,
    onEditBatsman,
    subtractSyncBallsCount
} = slice.actions;
export const amateurScoreReducer = slice.reducer;
