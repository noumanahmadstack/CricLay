import { FC, useEffect, useState, useMemo, useLayoutEffect } from 'react';
import { useWindowDimensions } from 'react-native';
import { TabView } from 'react-native-tab-view';
import { useSelector } from 'react-redux';
import SimpleLoader from '../../../../components/loaders/simpleLoader';
import { SimpleScreenContainer } from '../../../../components/screensContainers/screenContainers';
import { BatterStatsAttributesProps, InningScreenProps } from '../../../../modelInterface/scoring';
import { RenderSceneProps } from '../../../../modelInterface/screens/authentication/emailPhone';
import { matchViewDetail, matchViewDetailInterval, onShareMatch, resetStates } from '../../../../redux/matches/matchDetails/action';
import { nameAndScore } from '../../../../redux/scoring/amateur/score/action';
import { RootState } from '../../../../redux/store/store';
import MatchInfo from '../matchInfo';
import Partnership from '../partnership';
import CurrentLineUp from './currentLineup';
import Commentary from '../commentary';
import ShareBtn from '../../../../components/shareBtn';
import NewTabBarHeaders from '../../../../components/newTabBarHeader';
import { CommentaryIcon, LiveIcon, MatchInfoIcon, PartnershipIcon, ScorecardIcon, WagonwheelIcon } from '../../../../assets/svg';
import Stats from '../stats';
import ScoreCard from '../../../scoring/normal/scoreCard';
import colors from '../../../../theme/colors';
import { calculateRemainingBalls } from '../../../../redux/scoring/normal/score/action';
const LiveMatchDetails: FC<any> = ({
  route,
  navigation,
}) => {
  const { id, avoidFetch, isAmateur } = route.params;
  const { matchDetail, isLoading } = useSelector((state: RootState) => state.matchDetailsReducer);
  const { innings, currentInning, teamOne, teamTwo, liveStreamingUrl, streamingLinks, matchType, targetScore } = matchDetail;
  const { runs, totalOvers, ballsPerOver, currentOvers: currentOver, inningNumber, status, duration } = currentInning || {}
  const [index, setIndex] = useState<number>(0);
  const layout = useWindowDimensions();
  const remainingScore = useMemo(() => inningNumber == 2 && targetScore
    ? targetScore > runs
      ? targetScore - runs
      : 0
    : 0, [inningNumber, targetScore, runs])
  const remainingBalls = useMemo<number>(() => calculateRemainingBalls({ totalOvers, ballsPerOver, currentOver }), [totalOvers, ballsPerOver, currentOver]);
  const routes = [
    {
      key: 'CurrentLineUp',
      title: 'Live',
      LeftChild: LiveIcon
    },
    {
      key: 'ScoreCard',
      title: 'Scorecard',
      LeftChild: ScorecardIcon
    },
    {
      key: 'Stats',
      title: 'Stats',
      LeftChild: WagonwheelIcon
    },
    {
      key: 'Partnership',
      title: 'Partnerships',
      LeftChild: PartnershipIcon
    },
    {
      key: 'Commentary',
      title: 'Commentary',
      LeftChild: CommentaryIcon
    },
    {
      key: 'MatchInfo',
      title: 'Info',
      LeftChild: MatchInfoIcon
    },
  ];
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <ShareBtn onPress={() =>
        onShareMatch({
          teamOneName: teamOne?.name,
          teamTwoName: teamTwo?.name,
          matchId: id,
        })}
      />,
      headerStyle: {
        backgroundColor: isAmateur ? colors.darkAmateurPink : colors.themeBlue, // Set the background color of the header
      },
    });
  }, [teamOne?.name, teamTwo?.name, navigation])
  useEffect(() => {
    if (!avoidFetch) {
      matchViewDetail(id);
    }
    const intervalId = setInterval(() => {
      matchViewDetailInterval(id);
    }, 10000);
    return () => {
      resetStates();
      clearInterval(intervalId);
    };
  }, [id, avoidFetch, navigation]);
  const scoreCardData = useMemo<InningScreenProps[]>(() => {
    return innings.map((inningData) => {
      return {
        teamNameTitle:
          inningData?.batingTeam?.name +
          '\n' +
          (inningData?.runs + '/' + inningData?.currentWickets),
        inningNumber: inningData.inningNumber,
        batingTeam: inningData.batingTeam,
        isSelected: true,
        overs: inningData?.currentOvers,
        extras: inningData?.extrasTotal,
        partnership: inningData?.currentPartnership?.runs
          ? inningData?.currentPartnership?.runs
          : null,
        crr: inningData?.currentRunRate,
        rrr: null,
        strikerId: inningData?.inningLineup?.strikerId,
        batsmanData: inningData?.batingTeamPlayers,
        bowlersData: inningData?.bowlingTeamPlayers,
        isDetailed: true,
        matchStatus: 'started',
        partnerships: inningData.partnerships,
        oversData: inningData?.overs,
        inningStatus: inningData.status,
        onRefresh: () => matchViewDetail(id),
        inningData,
        isAmateur
      };
    });
  }, [innings]);
  const renderScene = ({ route }: RenderSceneProps) => {
    switch (route.key) {
      case 'CurrentLineUp':
        return (
          <CurrentLineUp
            id={id}
            teamOneName={
              nameAndScore({ id: matchDetail?.teamOne?.id, innings }) !== '--'
                ? nameAndScore({ id: matchDetail?.teamOne?.id, innings })
                : matchDetail?.teamOne?.name
            }
            teamTwoName={
              nameAndScore({ id: matchDetail?.teamTwo?.id, innings }) !== '--'
                ? nameAndScore({ id: matchDetail?.teamTwo?.id, innings })
                : matchDetail?.teamTwo?.name
            }
            teamOneLogo={matchDetail?.teamOne?.logoUrl}
            teamTwoLogo={matchDetail?.teamTwo?.logoUrl}
            isSelctedTeamOne={
              matchDetail?.teamOne?.id == currentInning?.batingTeam?.id
            }
            isSelectedTeamTwo={
              matchDetail?.teamTwo?.id == currentInning?.batingTeam?.id
            }
            currentOver={currentInning?.currentOvers}
            currentPartnership={currentInning?.currentPartnership?.runs}
            totalExtras={currentInning?.extrasTotal}
            currentRunRate={currentInning?.currentRunRate}
            rrr={null}
            liveStreamingUrl={liveStreamingUrl}
            batsmanData={
              [
                currentInning?.inningLineup?.striker?.batsmanId
                  ? currentInning.inningLineup.striker
                  : null,
                currentInning?.inningLineup?.nonStriker?.batsmanId
                  ? currentInning.inningLineup.nonStriker
                  : null,
              ].filter(Boolean) as BatterStatsAttributesProps[]
            }
            bowlerData={currentInning?.inningLineup?.bowler}
            inningNumber={currentInning?.inningNumber}
            strikerId={currentInning?.inningLineup?.strikerId}
            isDetailed={true}
            streamingLinks={streamingLinks}
            remainingScore={remainingScore}
            remainingBalls={remainingBalls}
            inningStatus={status}
            duration={duration}
            isAmateur={isAmateur}
          />
        );
      case 'ScoreCard':
        return <ScoreCard data={scoreCardData} />;
      case 'Stats':
        return <Stats data={scoreCardData} />;
      case 'Partnership':
        return <Partnership data={scoreCardData} />;
      case 'Commentary':
        return <Commentary data={scoreCardData} />;
      case 'MatchInfo':
        return <MatchInfo matchDetail={matchDetail} />;
    }
  };
  return (
    <SimpleScreenContainer isBlue={true}>
      <SimpleLoader isLoading={isLoading} />
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        renderTabBar={props => <NewTabBarHeaders onPress={setIndex} selectedIndex={index} {...props} isAmateur={isAmateur} />}
        initialLayout={{ width: layout.width }}
      />
    </SimpleScreenContainer>
  );
};
export default LiveMatchDetails;
