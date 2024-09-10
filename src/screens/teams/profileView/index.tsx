import { FC, useState, useEffect } from 'react';
import { Clipboard, useWindowDimensions } from 'react-native';
import TabBarHeaders from '../../../components/tabBarHeaders';
import { TabView } from 'react-native-tab-view';
import { SimpleScreenContainer } from '../../../components/screensContainers/screenContainers';
import TeamIconTitle from '../../../components/teamIconTitle';
import { Text } from 'react-native';
import { toastMessage } from '../../../components/toastMessages';
import styles from './styles';
import {
  fetchTeamsMatchesData,
  onMountTeamProfile,
  onLoadMoreFixtureMatches,
  onLoadMoreLiveMatches,
  onLoadMoreResultsMatches,
  onLoadMoreTeamPlayers,
  resetStates,
} from '../../../redux/teams/teamProfile/action';
import PlayersListView from '../../../views/players/playersListView';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store/store';
import MatchesStatusTabs from '../../../tabs/matchTabs/matchStatuses';
import SimpleLoader from '../../../components/loaders/simpleLoader';
import { RenderSceneProps } from '../../../modelInterface/screens/authentication/emailPhone';
import FloatingTabBtn from '../../../components/floatingAddBtn';
import { navigate } from '../../../routes/rootNavigation';
import Stats from './stats';
const TeamProfile: FC<any> = ({ route }) => {
  const { logoUrl, id, name, shareableId } = route.params || {};
  const {
    teamPlayers,
    overAllStat,
    battingStat,
    bowlingStat,
    fielderStat,
    metadataTeamPlayer,
    liveMatches,
    fixtureMatches,
    resultsMatches,
    isLoading,
    metadataTeamLiveMatches,
    metadataTeamResultsMatches,
    metadataTeamFixtureMatches,
    creatorId,
  } = useSelector((state: RootState) => state.teamProfileReducer);
  const { isLoading: isLoadingAddingPlayer } = useSelector(
    (state: RootState) => state.addPlayerReducer,
  );
  const { id: userId } =
    useSelector((state: RootState) => state.userReducer?.userData?.user) || {};
  const [index, setIndex] = useState<number>(0);
  const layout = useWindowDimensions();
  const [routes] = useState([
    { key: 'Players', title: 'Players' },
    { key: 'Matches', title: 'Matches' },
    { key: "Stats", title: 'Stats' }
  ]);
  useEffect(() => {
    if (id && !isLoadingAddingPlayer) {
      onMountTeamProfile(id);
    }
    return resetStates;
  }, [id, isLoadingAddingPlayer]);
  const renderScene = ({ route }: RenderSceneProps) => {
    switch (route.key) {
      case 'Players':
        return (
          <PlayersListView
            data={teamPlayers}
            isLoadingPagination={metadataTeamPlayer?.currentPage < metadataTeamPlayer?.totalPages}
            isPrivate={true}
            onLoadMore={() => onLoadMoreTeamPlayers(id)}
            onRefresh={() => onMountTeamProfile(id)}
            teamId={id}
            viewType={creatorId == userId ? 'editTeamPlayer' : 'default'}
          />
        );
      case 'Matches':
        return (
          <MatchesStatusTabs
            liveData={liveMatches}
            fixtureData={fixtureMatches}
            resultsData={resultsMatches}
            metadataForFixture={metadataTeamFixtureMatches}
            metadataForLive={metadataTeamLiveMatches}
            metadataForResult={metadataTeamResultsMatches}
            onMountAllMatches={() =>
              fetchTeamsMatchesData({ id, status: 'started' })
            }
            onMountFixtureMatches={() =>
              fetchTeamsMatchesData({ id, status: 'fixture' })
            }
            onMountResultsMatches={() =>
              fetchTeamsMatchesData({ id, status: 'completed' })
            }
            onEndReachedLive={() => onLoadMoreLiveMatches(id)}
            onEndReachedFixture={() => onLoadMoreFixtureMatches(id)}
            onEndReachedResult={() => onLoadMoreResultsMatches(id)}
            onRefreshingAllMatches={() =>
              fetchTeamsMatchesData({ id, status: 'started' })
            }
            onRefreshingFixtureMatches={() =>
              fetchTeamsMatchesData({ id, status: 'fixture' })
            }
            onRefreshingResultsMatches={() =>
              fetchTeamsMatchesData({ id, status: 'completed' })
            }
          />
        );
      case 'Stats':
        return (
          <Stats
            overAllStat={overAllStat}
            batterStat={battingStat}
            bowlerStat={bowlingStat}
            fielderStat={fielderStat}
          />
        )
      default:
        return null;
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
      <TeamIconTitle name={name} logoURL={logoUrl} />
      <Text style={styles.IDText} onLongPress={handleLongPress}>
        ID: {shareableId}
      </Text>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        renderTabBar={props => (
          <TabBarHeaders selectedIndex={index} onPress={setIndex} {...props} />
        )}
        initialLayout={{ width: layout.width }}
      />
      {index == 0 && creatorId == userId ? (
        <FloatingTabBtn onPress={() => navigate('AddPlayers', { teamId: id })} />
      ) : null}
    </SimpleScreenContainer>
  );
};
export default TeamProfile;
