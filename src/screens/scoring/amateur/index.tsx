import { FC, useEffect, useMemo, useState } from 'react';
import { useWindowDimensions } from 'react-native';
import { HeaderBackButton } from '@react-navigation/elements';
import { TabView } from 'react-native-tab-view';
import { useDispatch, useSelector } from 'react-redux';
import { SimpleScreenContainer } from '../../../components/screensContainers/screenContainers';
import ShareBtn from '../../../components/shareBtn';
import TabViewHeader from '../../../components/simpleTabViewHeader';
import { InningObjPros, InningScreenProps } from '../../../modelInterface/scoring';
import { RenderSceneProps } from '../../../modelInterface/screens/authentication/emailPhone';
import { onShareMatch } from '../../../redux/matches/matchDetails/action';
import {
    calculateCCR,
    calculateCurrentPartnership,
    calculateExtras,
    calculateOvers,
    calculateRemainingBalls,
    calculateRequireRunRate,
    calculateRuns,
    calculateWickets,
    convertBackendLineupToLocalLineup,
    getMatchDetails,
    showEndInningMessage,
    sortedBatsman,
} from '../../../redux/scoring/amateur/score/action';
import { initialState, subtractSyncBallsCount } from '../../../redux/scoring/amateur/score/reducer';
import { RootState } from '../../../redux/store/store';
import { goBack, reset } from '../../../routes/rootNavigation';
import Score from './score';
import ScoreCard from './scoreCard';
import styles from './styles';
import Stats from './stats';
const AmateurScoring: FC<any> = ({ route, navigation }) => {
    const dispatch = useDispatch()
    const { id, isFromStartScreen } = route.params || {};
    const [index, setIndex] = useState<number>(0);
    const layout = useWindowDimensions();
    const routes = [
        {
            key: 'Score',
            title: 'Score',
        },
        {
            key: 'ScoreCard',
            title: 'Scorecard',
        },
        {
            key: 'Stats',
            title: 'Stats',
        },
    ];
    const { lineupData, isLoading, matchDetail, isVisibleGoldenBallModal } = useSelector((state: RootState) => state.amateurScoreReducer);
    const { currentInning, innings, teamOne, teamTwo, tossDecision, targetScore, shareableId, overlayUrl } = matchDetail || { targetScore: '0' };
    const includeExtras = currentInning.totalOvers - 1 !== currentInning.balls[currentInning.balls.length - 1]?.overNumber
    const { ballsCount } = currentInning;
    const { battingPlaying, bowlerPlaying } = useSelector((state: RootState) => state.teamPlayerReducer);
    const { balls, ballsPerOver, totalOvers } = currentInning;
    const currentPartnership = calculateCurrentPartnership({ currentInning, lineupData });
    const wicketsDown = useMemo<number>(() => calculateWickets({ balls }), [balls]);
    const totalExtras = useMemo<number>(() => calculateExtras({ balls, totalOvers: currentInning.totalOvers }), [balls]);
    const currentOver = useMemo<number>(() => calculateOvers({ balls, ballsPerOver, totalOvers: currentInning.totalOvers }), [balls, ballsPerOver, currentInning.totalOvers]);
    const currentRuns = useMemo<number>(() => calculateRuns({ balls }), [balls]);
    const currentRunRate = useMemo<string>(() => calculateCCR({ balls, ballsPerOver, currentRuns, totalOvers }), [balls, ballsPerOver, currentRuns, totalOvers]);
    const isShowInningEnd = useMemo<boolean>(() => showEndInningMessage({ wicketsDown, currentOver, currentRuns, currentInning, targetScore }),
        [wicketsDown, currentOver, currentRuns, currentInning, targetScore]
    );
    const remainingScore =
        currentInning.inningNumber == 2 && targetScore
            ? targetScore > currentRuns
                ? targetScore - currentRuns
                : 0
            : 0;
    const remainingBalls = useMemo<number>(() => calculateRemainingBalls({ totalOvers, ballsPerOver, currentOver }), [totalOvers, ballsPerOver, currentOver]);
    const rrr = useMemo<string | null>(
        () => currentInning.inningNumber == 2 && !isShowInningEnd
            ? calculateRequireRunRate({ remainingBalls, currentRuns, targetScore, ballsPerOver })
            : null,
        [remainingBalls, currentRuns, targetScore, ballsPerOver, isShowInningEnd, currentInning.inningNumber,],
    );
    useEffect(() => {
        // this is for if our sync balls are negative, then it will subtract that negative value from our backend sync balls which is ballsCount and send balls from that ball number
        if (balls.length - ballsCount < 0) {
            dispatch(subtractSyncBallsCount(-(balls.length - ballsCount)))
        }
    }, [ballsCount, balls.length])
    useEffect(() => {
        navigation.setOptions({
            headerRight: () => <ShareBtn onPress={() =>
                onShareMatch({
                    teamOneName: teamOne?.name,
                    teamTwoName: teamTwo?.name,
                    matchId: id,
                })}
            />,
            headerLeft: (props: any) => (
                <HeaderBackButton
                    onPress={() => Boolean(isFromStartScreen) ? reset([{ name: 'Drawer' }], 0) : goBack()}
                    labelVisible={false}
                    style={styles.backBtnStyle}
                    {...props}
                />
            ),
        });
    }, [teamOne?.name, teamTwo?.name, navigation])
    useEffect(() => {
        getMatchDetails(id);
    }, [navigation, id]);
    const scoreCardData = useMemo<InningScreenProps[]>(() => {
        const currentInningObj: InningScreenProps = {
            teamNameTitle:
                currentInning.batingTeam.name +
                '\n' +
                (currentRuns + '/' + wicketsDown),
            batingTeam: currentInning.batingTeam,
            inningNumber: currentInning.inningNumber,
            isSelected: true,
            overs: currentOver,
            extras: totalExtras,
            partnership: currentInning.inningNumber == 1 ? currentPartnership : null,
            crr: currentRunRate,
            rrr,
            inningData: currentInning,
            strikerId: lineupData.strikerId,
            batsmanData: sortedBatsman({ batters: battingPlaying, balls }),
            bowlersData: bowlerPlaying,
            lineupData,
            isScorecard: true,
            isSecondInningStarted: innings.length == 2,
            matchStatus: 'started',
            partnerships: currentInning.partnerships,
            oversData: currentInning.overs,
            inningStatus: currentInning.status,
            onRefresh: () => getMatchDetails(id),
            isAmateur: true
        };
        if (currentInning.inningNumber == 1) {
            return [currentInningObj];
        } else if (currentInning.inningNumber == 2) {
            const findIndex = innings.findIndex(
                (item: InningObjPros) => item.inningNumber == 1,
            );
            const inningData = innings[findIndex];
            if (inningData) {
                const inningObj: InningScreenProps = {
                    teamNameTitle:
                        inningData?.batingTeam?.name +
                        '\n' +
                        (inningData?.runs + '/' + inningData?.currentWickets),
                    inningNumber: inningData.inningNumber,
                    batingTeam: inningData.batingTeam,
                    isSelected: true,
                    overs: inningData?.currentOvers,
                    extras: inningData?.extrasTotal,
                    partnership: null,
                    crr: inningData?.currentRunRate,
                    rrr: null,
                    inningData,
                    strikerId: inningData?.inningLineup?.strikerId,
                    batsmanData: sortedBatsman({
                        batters: inningData?.batingTeamPlayers,
                        balls: inningData?.balls,
                    }),
                    bowlersData: inningData?.bowlingTeamPlayers,
                    lineupData:
                        inningData?.inningLineup?.striker ||
                            inningData?.inningLineup?.nonStriker
                            ? convertBackendLineupToLocalLineup({
                                inningLineup: inningData.inningLineup,
                            })
                            : initialState.lineupData,
                    isScorecard: true,
                    matchStatus: 'started',
                    oversData: inningData.overs,
                    partnerships: inningData.partnerships,
                    inningStatus: inningData.status,
                    onRefresh: () => getMatchDetails(id)
                };
                return [inningObj, currentInningObj];
            }
        }
        return [];
    }, [
        currentInning,
        innings,
        lineupData,
        battingPlaying,
        balls,
        bowlerPlaying,
        currentOver,
        currentPartnership,
        currentRunRate,
        currentRuns,
        rrr,
        totalExtras,
        wicketsDown,
    ]);
    const renderScene = ({ route }: RenderSceneProps) => {
        switch (route.key) {
            case 'Score':
                return (
                    <Score
                        route={route}
                        currentInning={currentInning}
                        lineupData={lineupData}
                        teamOne={teamOne}
                        teamtwo={teamTwo}
                        tossDecision={tossDecision}
                        isLoading={isLoading}
                        targetScore={targetScore}
                        battingPlaying={battingPlaying}
                        bowlerPlaying={bowlerPlaying}
                        currentPartnership={currentPartnership}
                        wicketsDown={wicketsDown}
                        totalExtras={totalExtras}
                        currentOver={currentOver}
                        currentRuns={currentRuns}
                        currentRunRate={currentRunRate}
                        isShowInningEnd={isShowInningEnd}
                        remainingScore={remainingScore}
                        remainingBalls={remainingBalls}
                        rrr={rrr}
                        shareableId={shareableId}
                        isVisibleGoldenBallModal={isVisibleGoldenBallModal}
                        onRefresh={() => getMatchDetails(id)}
                        refreshing={isLoading}
                        syncBalls={balls.length - ballsCount}
                        includeExtras={includeExtras}
                        otherTeamsRuns={
                            currentInning.inningNumber == 2
                                ? innings.find(item => item.inningNumber == 1)?.runs
                                : 0
                        }
                        otherBattingTeamId={
                            currentInning.inningNumber == 2
                                ? innings.find(item => item.inningNumber == 1)?.batingTeamId
                                : ''
                        }
                        otherTeamsWickets={
                            currentInning.inningNumber == 2
                                ? innings.find(item => item.inningNumber == 1)?.currentWickets
                                : 0
                        }
                        matchStatus="started"
                        overlayUrl={overlayUrl}
                        isAmateur={true}
                    />
                );
            case 'ScoreCard':
                return <ScoreCard data={scoreCardData} />;
            case 'Stats':
                return <Stats data={scoreCardData} />;
        }
    };
    return (
        <SimpleScreenContainer isBlue={true}>
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                renderTabBar={e => <TabViewHeader {...e} />}
                initialLayout={{ width: layout.width }}

            />
        </SimpleScreenContainer>
    );
};
export default AmateurScoring;