import {FC, useState} from 'react';
import {Text, useWindowDimensions} from 'react-native';
import {TabView} from 'react-native-tab-view';
import TabBarHeaders from '../../components/tabBarHeaders';
import {RenderSceneProps} from '../../modelInterface/screens/authentication/emailPhone';
import {TeamObjProps} from '../../modelInterface/team';
import PlayerScoreboard from '../../screens/scoring/normal/score/playerScoreboard';
import styles from './styles';

const MatchSummaryTab: FC<{teamOne?: TeamObjProps; teamTwo?: TeamObjProps,isAmateur?:boolean}> = ({
  teamOne,
  teamTwo,
  isAmateur
}) => {
  const {
    topBattingPerformances: topBattingPerformancesOne,
    topBowlingPerformances: topBowlingPerformancesOne,
  } = teamOne || {};
  const {
    topBattingPerformances: topBattingPerformancesTwo,
    topBowlingPerformances: topBowlingPerformancesTwo,
  } = teamTwo || {};
  const layout = useWindowDimensions();
  const [index, setIndex] = useState<number>(0);
  const routes = [
    {
      key: 'team1',
      title: `${teamOne?.name}`,
    },
    {
      key: 'team2',
      title: `${teamTwo?.name}`,
    },
  ];
  const renderScene = ({route}: RenderSceneProps) => {
    switch (route.key) {
      case 'team1':
        return (
          <>
            <Text style={styles.topPerformerTitle}>
              Top Performances of the Team
            </Text>
            <PlayerScoreboard
              strikerId={''}
              batsmanData={topBattingPerformancesOne}
              bowlersData={topBowlingPerformancesOne}
              isDetailed={true}
              hideBatterStatus={true}
            />
          </>
        );
      case 'team2':
        return (
          <>
            <Text style={styles.topPerformerTitle}>
              Top Performances of the Team
            </Text>
            <PlayerScoreboard
              strikerId={''}
              batsmanData={topBattingPerformancesTwo}
              bowlersData={topBowlingPerformancesTwo}
              isDetailed={true}
              hideBatterStatus={true}
            />
          </>
        );
    }
  };

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      renderTabBar={props => (
        <TabBarHeaders {...props} selectedIndex={index} onPress={setIndex} isAmateur={isAmateur} />
      )}
      sceneContainerStyle={{marginVertical: 10}}
      initialLayout={{width: layout.width}}
    />
  );
};
export default MatchSummaryTab;
