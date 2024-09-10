import { FC, useEffect, useState, useMemo } from 'react';
import { useWindowDimensions } from 'react-native';
import { TabView } from 'react-native-tab-view';
import { useSelector } from 'react-redux';
import SimpleLoader from '../../../../components/loaders/simpleLoader';
import { SimpleScreenContainer } from '../../../../components/screensContainers/screenContainers';
import { InningScreenProps } from '../../../../modelInterface/scoring';
import { RenderSceneProps } from '../../../../modelInterface/screens/authentication/emailPhone';
import { matchViewDetail, onMountMatchMvps, onShareMatch, resetStates } from '../../../../redux/matches/matchDetails/action';
import { RootState } from '../../../../redux/store/store';
import MatchInfo from '../matchInfo';
import Partnership from '../partnership';
import MatchSummary from './summary';
import Commentary from '../commentary';
import ManOfMatch from './manofmatch';
import ShareBtn from '../../../../components/shareBtn';
import LeaderBoard from './leaderBoard';
import NewTabBarHeaders from '../../../../components/newTabBarHeader';
import { CommentaryIcon, LeaderboardIcon, MatchInfoIcon, PartnershipIcon, ScorecardIcon, SummaryIcon, TournamentIcon, WagonwheelIcon } from '../../../../assets/svg';
import Tournament from '../tournament';
import Stats from '../stats';
import ScoreCard from '../../../scoring/normal/scoreCard';
import colors from '../../../../theme/colors';
const CompletedMatchDetails: FC<any> = ({ route, navigation }) => {
  const { id, avoidFetch, isTie, isAmateur } = route.params;
  const { matchDetail, isLoading, matchMvps } = useSelector((state: RootState) => state.matchDetailsReducer);
  const { innings, teamOne, teamTwo, tournament } = matchDetail;
  const [index, setIndex] = useState<number>(0);
  const layout = useWindowDimensions();

  const routes = [
    {
      key: 'Summary',
      title: 'Summary',
      LeftChild: SummaryIcon
    },
    {
      key: 'LeaderBoard',
      title: 'LeaderBoard',
      LeftChild: LeaderboardIcon
    },
    {
      key: 'Stats',
      title: 'Stats',
      LeftChild: WagonwheelIcon
    },
    {
      key: 'ScoreCard',
      title: 'Scorecard',
      LeftChild: ScorecardIcon
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
  if (!!!isTie) {
    routes.splice(1, 0, {
      key: 'ManOfMatch',
      title: 'M.O.M',
      LeftChild: CommentaryIcon
    })
  }
  if (tournament?.id) {
    routes.splice(5, 0, {
      key: 'Tournament',
      title: 'Tournament',
      LeftChild: TournamentIcon
    })
  }
  useEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: isAmateur ? colors.darkAmateurPink : colors.themeBlue
      },
      headerRight: () => <ShareBtn onPress={() =>
        onShareMatch({
          teamOneName: teamOne?.name,
          teamTwoName: teamTwo?.name,
          matchId: id,
        })}
      />
    });
  }, [teamOne?.name, teamTwo?.name, navigation])
  useEffect(() => {
    if (!avoidFetch) {
      matchViewDetail(id);
      onMountMatchMvps(id)
    }
    return resetStates;
  }, [id, avoidFetch]);
  const scoreCardData = useMemo<InningScreenProps[]>(() => {
    return innings.map(inningData => {
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
        partnership: null,
        crr: inningData?.currentRunRate,
        rrr: null,
        strikerId: inningData?.inningLineup?.strikerId,
        batsmanData: inningData?.batingTeamPlayers,
        bowlersData: inningData?.bowlingTeamPlayers,
        isDetailed: true,
        partnerships: inningData?.partnerships,
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
      case 'Summary':
        return <MatchSummary
          isAmateur={isAmateur}
          matchDetail={matchDetail}
        />;
      case 'ManOfMatch':
        return <ManOfMatch matchDetail={matchDetail} />;
      case 'Stats':
        return <Stats data={scoreCardData} />;
      case 'LeaderBoard':
        return <LeaderBoard matchMvps={matchMvps} />;
      case 'ScoreCard':
        return <ScoreCard data={scoreCardData} />;
      case 'Partnership':
        return <Partnership data={scoreCardData} />;
      case 'Commentary':
        return <Commentary data={scoreCardData} />;
      case 'Tournament':
        return <Tournament tournament={tournament} />;
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
export default CompletedMatchDetails;
