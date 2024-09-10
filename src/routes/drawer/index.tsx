import { FC, useEffect } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from './custom';
import BottomTabs from '../bottomTabs';
import { DrawerIcon, HomeBottomTabIcon, HomeIcon, TeamIcon, TeamIconWithBG, TeamSelectIcon } from '../../assets/svg';
import styles from './styles';
import { getInitialURL } from '../../firebase';
import MyTeams from '../../screens/teams/selectTeams/myTeams';
import MyPlayers from '../../screens/teams/selectPlayers/myPlayers';
import colors from '../../theme/colors';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store/store';
const DrawerNavigation: FC = () => {
  const Drawer = createDrawerNavigator();
  const {userData} = useSelector((state: RootState) => state.userReducer);

  useEffect(() => {
    getInitialURL();
  }, []);
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={({ navigation }) => ({
        drawerActiveBackgroundColor: colors.themeBlue,
        drawerActiveTintColor: colors.white,
          headerStyle: styles.headerStyle,
        headerLeft: () => (
          <DrawerIcon
            onPress={navigation.toggleDrawer}
            style={styles.headerLeftIcon}
          />
        ),
        headerTitle: '',
        headerShadowVisible: false,
      })}
      initialRouteName="BottomTabs">
      <Drawer.Screen options={{
        headerTitleAlign: 'center',
        drawerIcon: ({ focused, size }) => (
          <HomeIcon />
        ),
        title: 'Dashboard',
      }} name="Dashboard" component={BottomTabs} />
{
  userData?.user && 
  <Drawer.Screen
  options={{
    headerTitleAlign: 'center',
    drawerIcon: ({ focused, size }) => (
      <TeamIconWithBG />
    ),
    title: 'My Teams',
  }} name="myTeams" component={MyTeams} />
}
     

    </Drawer.Navigator>
  );
};
export default DrawerNavigation;
