import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Matches from '../../screens/matches';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { navigationRef } from '../rootNavigation';
import LoginStartUp from '../../screens/authentication/mainScreen/login';
import SignUpStartUp from '../../screens/authentication/mainScreen/signUp';
import Login from '../../screens/authentication/login';
import SignUp from '../../screens/authentication/signUp';
import ForgetPassword from '../../screens/authentication/forgetPassword';
import BottomTabs from '../bottomTabs';
import Splash from '../../screens/splash';
import SelectTeams from '../../screens/teams/selectTeams';
import colors from '../../theme/colors';
import MatchFormat from '../../screens/matches/startMatch/matchFormat';
import Venue from '../../screens/matches/startMatch/venue';
import AddVenue from '../../screens/matches/startMatch/venue/addVenue';
import SelectPlayers from '../../screens/teams/selectPlayers';
import AddPlayers from '../../screens/players/addPlayers';
import Scoring from '../../screens/scoring/normal';
import TeamPlayers from '../../screens/matches/startMatch/teamPlayers/normal';
import Tournaments from '../../screens/tournaments';
import TournamentDetails from '../../screens/tournaments/tournamentDetails';
import CreateTournament from '../../screens/tournaments/createTournament';
import GroupTeams from '../../screens/tournaments/tournamentDetails/tabs/matches/groupTeams';
import MyTeams from '../../screens/tournaments/tournamentDetails/getTeam';
import MyMatches from '../../screens/matches/myMatches';
import LiveMatchDetails from '../../screens/matches/detail/liveMatchDetail';
import FixtureDetail from '../../screens/matches/detail/fixtureDetail';
import CompletedMatchDetails from '../../screens/matches/detail/completedDetail';
import StartMatch from '../../screens/matches/startMatch';
import Teams from '../../screens/teams/selectTeams/teams';
import MyPlayers from '../../screens/teams/selectPlayers/myPlayers';
import AllPlayers from '../../screens/players/allPlayers';
import AllTournaments from '../../screens/tournaments/allTournaments';
import StreamingDetail from '../../views/matches/streaming/streamingDetail';
import Drawer from '../drawer';
import Profile from '../../screens/profile';
import TeamProfile from '../../screens/teams/profileView';
import PlayerProfile from '../../screens/players/profileView';
import PlayingPlayers from '../../screens/matches/detail/completedDetail/playersOfTeams';
import UpdateTeamPlayer from '../../screens/players/updateTeamPlayer';
import StreamingList from '../../views/matches/streaming/streamingList';
import ScoringAction from '../../screens/scoring/normal/score/actions';
import OutOptions from '../../screens/scoring/normal/score/out/options';
import AmateurScoring from '../../screens/scoring/amateur';
import ClaimPlayer from '../../screens/players/profileView/claimProfile';
import PointsDetails from '../../tabs/tournament/groups/pointDetails';
import AmateurRules from '../../screens/tournaments/amatureTournament';
import AmateurTeamPlayers from '../../screens/matches/startMatch/teamPlayers/amateur';
import OutOptionsAmateur from '../../screens/scoring/amateur/score/out/options';
import ScoringActionAmateur from '../../screens/scoring/amateur/score/actions';
const Stack = createNativeStackNavigator();
const Navigation: React.FC = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Splash"
          component={Splash}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="LoginStartUp"
          component={LoginStartUp}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="SignUpStartUp"
          component={SignUpStartUp}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Login"
          component={Login}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="SignUp"
          component={SignUp}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="ForgetPassword"
          component={ForgetPassword}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="BottomTabs"
          component={BottomTabs}
        />
        <Stack.Screen
          options={{ headerShadowVisible: false, headerShown: false }}
          name="Drawer"
          component={Drawer}
        />
        <Stack.Screen
          options={{
            headerStyle: { backgroundColor: colors.themeBlue },
            headerTintColor: colors.white,
            headerTitle: 'Select Team',
            headerBackTitleVisible: false,
            title: 'Select Team',
          }}
          name="SelectTeams"
          component={SelectTeams}
        />
        <Stack.Screen
          options={{
            headerStyle: { backgroundColor: colors.themeBlue },
            headerTintColor: colors.white,
            headerTitle: 'Profile',
            headerBackTitleVisible: false,
            title: 'Profile',
          }}
          name="Profile"
          component={Profile}
        />
        <Stack.Screen
          options={{
            headerStyle: { backgroundColor: colors.themeBlue },
            headerTintColor: colors.white,
            headerTitle: 'Claim Profile',
            headerBackTitleVisible: false,
            title: 'Claim Profile',
          }}
          name="ClaimProfile"
          component={ClaimPlayer}
        />

        <Stack.Screen
          options={{
            headerStyle: { backgroundColor: colors.themeBlue },
            headerTintColor: colors.white,
            headerTitle: 'Match Format',
            headerBackTitleVisible: false,
            title: 'Match Format',
          }}
          name="MatchFormat"
          component={MatchFormat}
        />
        <Stack.Screen
          options={{
            headerStyle: { backgroundColor: colors.themeBlue },
            headerTintColor: colors.white,
            headerTitle: 'Venue',
            headerBackTitleVisible: false,
            title: 'Venue',
          }}
          name="Venue"
          component={Venue}
        />
        <Stack.Screen
          options={{
            headerStyle: { backgroundColor: colors.themeBlue },
            headerTintColor: colors.white,
            headerTitle: 'Add Venue',
            headerBackTitleVisible: false,
            title: 'Add Venue',
          }}
          name="AddVenue"
          component={AddVenue}
        />
        <Stack.Screen
          options={{
            headerStyle: { backgroundColor: colors.themeBlue },
            headerTintColor: colors.white,
            headerTitle: 'Select Players',
            headerBackTitleVisible: false,
            title: 'Select Players',
          }}
          name="SelectPlayers"
          component={SelectPlayers}
        />
        <Stack.Screen
          options={{
            headerStyle: { backgroundColor: colors.themeBlue },
            headerTintColor: colors.white,
            headerTitle: 'Team Players',
            headerBackTitleVisible: false,
            title: 'Team Players',
          }}
          name="MyPlayers"
          component={MyPlayers}
        />
        <Stack.Screen
          options={{
            headerStyle: { backgroundColor: colors.themeBlue },
            headerTintColor: colors.white,
            headerBackTitleVisible: false,
          }}
          name="Matches"
          component={Matches}
        />
        <Stack.Screen
          options={{
            headerStyle: { backgroundColor: colors.themeBlue },
            headerTintColor: colors.white,
            headerTitle: 'Add Players',
            headerBackTitleVisible: false,
            title: 'Add Players',
          }}
          name="AddPlayers"
          component={AddPlayers}
        />
        <Stack.Screen
          options={{
            headerStyle: { backgroundColor: colors.themeBlue },
            headerTintColor: colors.white,
            headerTitle: 'Scoring',
            headerBackTitleVisible: false,
            title: 'Scoring',
          }}
          name="Scoring"
          component={Scoring}
        />
        <Stack.Screen
          options={{
            headerStyle: { backgroundColor: colors.darkAmateurPink },
            headerTintColor: colors.white,
            headerTitle: 'Scoring',
            headerBackTitleVisible: false,
            title: 'Scoring',
          }}
          name="AmateurScoring"
          component={AmateurScoring}
        />
        <Stack.Screen
          options={{
            headerStyle: { backgroundColor: colors.themeBlue },
            headerTintColor: colors.white,
            headerTitle: 'Team Players',
            headerBackTitleVisible: false,
            title: 'Team Players',
          }}
          name="TeamPlayers"
          component={TeamPlayers}
        />
        <Stack.Screen
          options={{
            headerStyle: { backgroundColor: colors.darkAmateurPink },
            headerTintColor: colors.white,
            headerTitle: 'Team Players',
            headerBackTitleVisible: false,
            title: 'Team Players',
          }}
          name="AmateurTeamPlayers"
          component={AmateurTeamPlayers}
        />
        <Stack.Screen
          options={{
            headerStyle: { backgroundColor: colors.themeBlue },
            headerTintColor: colors.white,
            headerTitle: 'Playing Players',
            headerBackTitleVisible: false,
            title: ' Playing Players',
          }}
          name="PlayingPlayers"
          component={PlayingPlayers}
        />
        <Stack.Screen
          options={{
            headerStyle: { backgroundColor: colors.themeBlue },
            headerTintColor: colors.white,
            headerTitle: 'All Players',
            headerBackTitleVisible: false,
            title: 'All Players',
          }}
          name="AllPlayers"
          component={AllPlayers}
        />
        <Stack.Screen
          options={{
            headerStyle: { backgroundColor: colors.themeBlue },
            headerTintColor: colors.white,
            headerTitle: 'Tournaments',
            headerBackTitleVisible: false,
            title: 'Tournaments',
          }}
          name="Tournaments"
          component={Tournaments}
        />
        <Stack.Screen
          options={{
            headerStyle: { backgroundColor: colors.themeBlue },
            headerTintColor: colors.white,
            headerTitle: 'All Tournaments',
            headerBackTitleVisible: false,
            title: 'All Tournaments',
          }}
          name="AllTournaments"
          component={AllTournaments}
        />
        <Stack.Screen
          options={{
            headerStyle: { backgroundColor: colors.themeBlue },
            headerTintColor: colors.white,
            headerShown: false,
            headerTitle: 'Tournaments',
            headerBackTitleVisible: false,
            title: 'Tournament Details',
          }}
          name="TournamentDetails"
          component={TournamentDetails}
        />
        <Stack.Screen
          options={{
            headerStyle: { backgroundColor: colors.themeBlue },
            headerTintColor: colors.white,
            headerTitle: 'Create Tournament',
            headerBackTitleVisible: false,
            headerShown: true,
            title: 'Create Tournament',
          }}
          name="CreatTournament"
          component={CreateTournament}
        />
        <Stack.Screen
          options={{
            headerStyle: { backgroundColor: colors.themeBlue },
            headerTintColor: colors.white,
            headerTitle: 'Select Team',
            headerBackTitleVisible: false,
            title: 'Select Team',
          }}
          name="GroupTeams"
          component={GroupTeams}
        />
        <Stack.Screen
          options={{
            headerStyle: { backgroundColor: colors.themeBlue },
            headerTintColor: colors.white,
            headerTitle: 'My Teams',
            headerBackTitleVisible: false,
            title: 'My Teams',
          }}
          name="myTeams"
          component={MyTeams}
        />
        <Stack.Screen
          options={{
            headerStyle: { backgroundColor: colors.themeBlue },
            headerTintColor: colors.white,
            headerTitle: 'Select Out Actions',
            headerBackTitleVisible: false,
            title: 'Select Out Actions',
          }}
          name="OutOptions"
          component={OutOptions}
        />
        <Stack.Screen
          options={{
            headerStyle: { backgroundColor: colors.darkAmateurPink },
            headerTintColor: colors.white,
            headerTitle: 'Select Out Actions',
            headerBackTitleVisible: false,
            title: 'Select Out Actions',
          }}
          name="OutOptionsAmateur"
          component={OutOptionsAmateur}
        />
        <Stack.Screen
          options={{
            headerStyle: { backgroundColor: colors.themeBlue },
            headerTintColor: colors.white,
            headerTitle: 'Actions',
            headerBackTitleVisible: false,
            title: 'Actions',
          }}
          name="ScoringAction"
          component={ScoringAction}
        />
        <Stack.Screen
          options={{
            headerStyle: { backgroundColor: colors.darkAmateurPink },
            headerTintColor: colors.white,
            headerTitle: 'Actions',
            headerBackTitleVisible: false,
            title: 'Actions',
          }}
          name="ScoringActionAmateur"
          component={ScoringActionAmateur}
        />
        <Stack.Screen
          options={{
            headerStyle: { backgroundColor: colors.themeBlue },
            headerTintColor: colors.white,
            headerTitle: 'Match Details',
            headerBackTitleVisible: false,
            title: 'Match Details',
          }}
          name="LiveMatchDetails"
          component={LiveMatchDetails}
        />
        <Stack.Screen
          options={{
            headerStyle: { backgroundColor: colors.themeBlue },
            headerTintColor: colors.white,
            headerTitle: 'Match Details',
            headerBackTitleVisible: false,
            title: 'Match Details',
          }}
          name="CompletedMatchDetails"
          component={CompletedMatchDetails}
        />
        <Stack.Screen
          options={{
            headerStyle: { backgroundColor: colors.themeBlue },
            headerTintColor: colors.white,
            headerTitle: 'Fixture Details',
            headerBackTitleVisible: false,
            title: 'Fixture Details',
          }}
          name="FixtureDetail"
          component={FixtureDetail}
        />
        <Stack.Screen
          options={{
            headerStyle: { backgroundColor: colors.themeBlue },
            headerTintColor: colors.white,
            headerTitle: 'My Matches',
            headerBackTitleVisible: false,
            title: 'My Matches',
          }}
          name="MyMatches"
          component={MyMatches}
        />
        <Stack.Screen
          options={{
            headerStyle: { backgroundColor: colors.themeBlue },
            headerTintColor: colors.white,
            headerTitle: 'Edit Matches',
            headerBackTitleVisible: false,
            title: 'Edit Matches',
          }}
          name="StartMatch"
          component={StartMatch}
        />
        <Stack.Screen
          options={{
            headerStyle: { backgroundColor: colors.themeBlue },
            headerTintColor: colors.white,
            headerTitle: 'Start Match',
            headerBackTitleVisible: false,
            title: 'Start Match',
          }}
          name="StartTournamentMatch"
          component={StartMatch}
        />
        <Stack.Screen
          options={{
            headerStyle: { backgroundColor: colors.themeBlue },
            headerTintColor: colors.white,
            headerTitle: 'All Teams',
            headerBackTitleVisible: false,
            title: 'All Teams',
          }}
          name="AllTeams"
          component={Teams}
        />
        <Stack.Screen
          options={{
            headerStyle: { backgroundColor: colors.amateurPink },
            headerTintColor: colors.white,
            headerTitle: 'Hundred Balls Rules',
            headerBackTitleVisible: false,
            title: 'Amateur',
          }}
          name="AmateurRules"
          component={AmateurRules}
        />

        <Stack.Screen
          options={{
            headerStyle: { backgroundColor: colors.themeBlue },
            headerTintColor: colors.white,
            headerTitle: 'Match Streaming',
            headerBackTitleVisible: false,
            title: 'Match Streaming',
          }}
          name="StreamingDetail"
          component={StreamingDetail}
        />
        <Stack.Screen
          options={{
            headerStyle: { backgroundColor: colors.themeBlue },
            headerTintColor: colors.white,
            headerTitle: 'Match Streaming Links',
            headerBackTitleVisible: false,
            title: 'Match Streaming',
          }}
          name="StreamingList"
          component={StreamingList}
        />
        <Stack.Screen
          options={{
            headerStyle: { backgroundColor: colors.themeBlue },
            headerTintColor: colors.white,
            headerTitle: 'Match Wise Points',
            headerBackTitleVisible: false,
            title: 'Match Wise Points',
          }}
          name="PointsDetails"
          component={PointsDetails}
        />
        <Stack.Screen
          options={{
            headerStyle: { backgroundColor: colors.themeBlue },
            headerTintColor: colors.white,
            headerTitle: 'Team Profile',
            headerBackTitleVisible: false,
            title: 'Team Profile',
          }}
          name="TeamProfile"
          component={TeamProfile}
        />
        <Stack.Screen
          options={{
            headerStyle: { backgroundColor: colors.themeBlue },
            headerTintColor: colors.white,
            headerTitle: 'Player Profile',
            headerBackTitleVisible: false,
            title: 'Player Profile',
          }}
          name="PlayerProfile"
          component={PlayerProfile}
        />
        <Stack.Screen
          options={{
            headerStyle: { backgroundColor: colors.themeBlue },
            headerTintColor: colors.white,
            headerTitle: 'Update Player Team Profile',
            headerBackTitleVisible: false,
            title: 'Update Player Team Profile',
          }}
          name="UpdateTeamPlayer"
          component={UpdateTeamPlayer}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;