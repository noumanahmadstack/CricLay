import { FC, useState, useEffect } from 'react';
import { Clipboard, Image, TouchableOpacity, View, useWindowDimensions } from 'react-native';
import TabBarHeaders from '../../../components/tabBarHeaders';
import { TabView } from 'react-native-tab-view';
import { SimpleScreenContainer } from '../../../components/screensContainers/screenContainers';
import TeamIconTitle from '../../../components/teamIconTitle';
import { Text } from 'react-native';
import { toastMessage } from '../../../components/toastMessages';
import styles from './styles';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store/store';
import MatchesStatusTabs from '../../../tabs/matchTabs/matchStatuses';
import SimpleLoader from '../../../components/loaders/simpleLoader';
import { RenderSceneProps } from '../../../modelInterface/screens/authentication/emailPhone';
import About from './about';
import {
  fetchPlayersMatchesData,
  onMountPlayer,
  onLoadMoreFixtureMatches,
  onLoadMoreLiveMatches,
  onLoadMorePlayerTeams,
  onLoadMoreResultsMatches,
  onLoadMoreAllMatches,
} from '../../../redux/players/playerDetails/action';
import TeamListView from '../../../views/teams/teamListView';
import Stats from './stats';
import MatchListView from '../../../views/matches/matchListView';
import colors from '../../../theme/colors';
import GradientBtn from '../../../components/btns/gradientBtn';
import { navigate } from '../../../routes/rootNavigation';
import { VerifiedIcon } from '../../../assets/svg';
import PlayerIconTitle from '../../../components/playerIconTitle';
const PlayerProfile: FC<any> = ({ route, navigation }) => {
  const { id, name, shareableId } = route.params || {};
  const {
    age,
    country,
    city,
    specialityType,
    isVerified,
    battingStat,
    bowlingStat,
    fielderStat,
    teams,
    avatarUrl,
    metadataTeam,
    allMatches,
    liveMatches,
    fixtureMatches,
    resultsMatches,
    isLoading,
    metadataTeamLiveMatches,
    metadataTeamResultsMatches,
    metadataTeamFixtureMatches
  } = useSelector((state: RootState) => state.playerDetailReducer);
  const [index, setIndex] = useState<number>(0);
  const layout = useWindowDimensions();
  const [routes] = useState([
    { key: 'About', title: 'About' },
    { key: 'Teams', title: 'Teams' },
    { key: 'Matches', title: 'Matches' },
    { key: 'Stats', title: 'Stats' },
  ]);
  useEffect(() => {
    if (id) {
      onMountPlayer(id);
      fetchPlayersMatchesData({ id })
    }
  }, [id]);
  const renderScene = ({ route }: RenderSceneProps) => {
    switch (route.key) {
      case 'About':
        return (
          <About
            name={name}
            country={country}
            city={city}
            age={age}
            specialityType={specialityType}
          />
        );
      case 'Matches':
        return (
          <MatchListView
            data={allMatches}
            isLoading={isLoading}
            // onRefresh={() => fetchPlayersMatchesData(id)}
            onEndReached={() => onLoadMoreAllMatches(id)}
            isLoadingPagination={
              metadataTeam?.currentPage < metadataTeam?.totalPages
            }
          />
        );
      case 'Teams':
        return (
          <TeamListView
            data={teams}
            onEndReached={() => onLoadMorePlayerTeams(id)}
            onRefresh={() => onMountPlayer(id)}
            isLoading={isLoading}
            isLoadingPagination={
              metadataTeam?.currentPage < metadataTeam?.totalPages
            }
            disableWholeView={true}
            singlePlayerTab={true}
          />
        );
      case 'Stats':
        return (
          <Stats
            batterStat={battingStat}
            bowlerStat={bowlingStat}
            fielderStat={fielderStat}
          />
        )
    }
  };
  const handleLongPress = async () => {
    if (shareableId) {
      await Clipboard.setString(shareableId);
      toastMessage('Match ID copied to clipboard!');
    }
  };
  return (
    <SimpleScreenContainer isBlue={true}>
      <SimpleLoader isLoading={isLoading} />
      <PlayerIconTitle name={name} avatarUrl={avatarUrl} isVerified={isVerified}/>
      <Text style={styles.IDText} onLongPress={handleLongPress}>
        ID: {shareableId}
      </Text>
      {
        !isVerified ?
        <GradientBtn
          title='Claim Profile'
          onPress={() => navigate('ClaimProfile', { "playerId": id })}
          btnStyle={styles.btnStyle}
          textStyle={styles.btnTitle}
        />:
        <GradientBtn
        title='Verified'
        btnStyle={styles.btnStyle}
        textStyle={styles.btnTitle}
      />
      //  null
      }

      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        renderTabBar={props => (
          <TabBarHeaders selectedIndex={index} onPress={setIndex} {...props} />
        )}
        initialLayout={{ width: layout.width }}
      />
    </SimpleScreenContainer>
  );
};
export default PlayerProfile;
