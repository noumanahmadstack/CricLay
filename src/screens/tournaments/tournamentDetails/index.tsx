import React, { FC, useEffect, useState, useMemo } from 'react';
import {
  ImageBackground,
  View,
  Text,
  SafeAreaView,
  useWindowDimensions,
  Share,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { GetTournamentDetails, resetTournamentStates } from '../../../redux/tournaments/getTournament/action';
import { goBack } from '../../../routes/rootNavigation';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store/store';
import { TabView } from 'react-native-tab-view';
import Teams from './tabs/teams';
import Matches from './tabs/matches';
import styles from './styles';
import { dateFormatter } from '../../../utilis/dateFormatter';
import { toastMessage } from '../../../components/toastMessages';
import Stats from './tabs/stats';
import TournamentTopPlayersTab from '../../../tabs/tournament/tournamentTopPlayers';
import { RenderSceneProps } from '../../../modelInterface/screens/authentication/emailPhone';
import SimpleLoader from '../../../components/loaders/simpleLoader';
import { GroupIcon, MatchIcon, PointsIcon, StatsIcon, TeamIcon, TopPlayerIcon } from '../../../assets/svg';
import NewTabBarHeaders from '../../../components/newTabBarHeader';
import TournamentGroupsTabs from '../../../tabs/tournament/groups';
import OverView from './tabs/overView';
import colors from '../../../theme/colors';

const TournamentDetails: FC<any> = ({ navigation, route }) => {
  const [index, setIndex] = useState<number>(0);
  const routes = [
    {
      key: 'OverView',
      title: 'OverView',
      LeftChild: PointsIcon
    },
    {
      key: 'Teams',
      title: 'Teams',
      LeftChild: TeamIcon
    },
    {
      key: 'Groups',
      title: 'Standings',
      LeftChild: GroupIcon
    },
    {
      key: 'Matches',
      title: 'Matches',
      LeftChild: MatchIcon
    },
    {
      key: 'Stats',
      title: 'Stats',
      LeftChild: StatsIcon
    },
    {
      key: 'TOPP',
      title: 'Top Players',
      LeftChild: TopPlayerIcon
    },
  ]
  const layout = useWindowDimensions();
  const { getTournament, leaderboardCategory, isLoading, allTournamentGroups, tournamentLiveMatches, tournamentFixtureMatches, touranamentResultMatches, metadataTournamentLiveMatches, metadataTournamentFixtureMatches, metadataTournamentResultMatches, mvpCategory, tournamentRoundMatches } = useSelector((state: RootState) => state.getTournamentReducer);
  const { id: userId } = useSelector((state: RootState) => state.userReducer?.userData?.user) || {};
  const { shareableUrl, coverPhotoUrl, startDate, endDate, name, mostValuablePlayers, leaderboard, teams, organizer } = getTournament
  const { id: organizerId } = organizer || {}
  const { id, tournamentType } = route.params;
  
  useEffect(() => {
    GetTournamentDetails({ id, leaderboardCategory, mvpCategory });
    return resetTournamentStates
  }, [id, leaderboardCategory, mvpCategory]);  
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: `Check out this URL: ${shareableUrl}`,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
        } else {
        }
      } else if (result.action === Share.dismissedAction) {
      }
    } catch (error: any) {
      toastMessage(error.message);
    }
  };
  const renderScene = ({ route }: RenderSceneProps) => {
    switch (route.key) {
      case 'OverView':
        return <OverView
          getTournament={getTournament}
        />
      case 'Teams':
        return <Teams
          data={teams.collection}
          isPrivate={userId !== organizerId}
          tournament_id={id} 
          tournamentType={tournamentType}
          singlePlayerTab={true}
          />
      case 'Groups':
        return <TournamentGroupsTabs
          isPrivate={userId !== organizerId}
          allTournamentGroups={allTournamentGroups}
          getTournament={getTournament}
          tournamentRoundMatches={tournamentRoundMatches}  
          tournamentType={tournamentType}
        />
      case 'Matches':
        return <Matches
          tournamentLiveMatches={tournamentLiveMatches}
          tournamentFixtureMatches={tournamentFixtureMatches}
          touranamentResultMatches={touranamentResultMatches}
          metadataTournamentLiveMatches={metadataTournamentLiveMatches}
          metadataTournamentFixtureMatches={metadataTournamentFixtureMatches}
          metadataTournamentResultMatches={metadataTournamentResultMatches}
          isPrivate={userId !== organizerId}
          tournamentType={tournamentType}
          tournament_id={id} />
      case 'Stats':
        return <Stats
          getTournament={getTournament}
        />;
      case 'TOPP':
        return <TournamentTopPlayersTab
          leaderboardCategory={leaderboardCategory}
          mvpCategory={mvpCategory}
          id={id}
          mvp={mostValuablePlayers}
          leaderboard={leaderboard}
          isAmateur={tournamentType == 'amateur'}
        />;
      default:
        return null;
    }
  };
  const startDateFormat = useMemo(
    () => dateFormatter(startDate),
    [startDate],
  );
  const endDateFormat = useMemo(
    () => dateFormatter(endDate),
    [endDate],
  );
  return (
    <View style={styles.mainWrapper}>
      <SimpleLoader isLoading={isLoading} />
      <ImageBackground
        style={styles.imageSize}
        resizeMode="cover"
        source={
          coverPhotoUrl
            ? { uri: coverPhotoUrl }
            : require('../../../assets/images/tournament/tournament.png')
        }>
        <SafeAreaView style={[styles.headerSafeView, { backgroundColor: tournamentType === "amateur" ? colors.darkAmateurPink : colors.themeBlue }]}>
          <View style={styles.flexDirection}>
            <AntDesign
              name="left"
              color={'white'}
              size={30}
              style={{ flex: 0.35 }}
              onPress={goBack}
            />
            <Text style={styles.headerTitle}>Tournaments</Text>
          </View>
          <View style={styles.nameRow}>
            <View>
              <Text style={styles.name}>{name}</Text>
              <Text style={styles.dateId}>
                {startDateFormat}-{endDateFormat}
              </Text>
            </View>
            <View style={styles.rowDirection}>
              {userId == organizerId ? (
                <AntDesign
                  name="edit"
                  color={'white'}
                  size={30}
                  onPress={() => navigation.navigate('CreatTournament')}
                />
              ) : null}
              <AntDesign
                name="sharealt"
                color={'white'}
                size={30}
                onPress={onShare}
              />
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        renderTabBar={props => (
          <NewTabBarHeaders selectedIndex={index} onPress={setIndex} {...props} isAmateur={tournamentType === "amateur" ? true : false} />
        )}
        initialLayout={{ width: layout.width }}
      />
    </View>
  );
};

export default TournamentDetails;