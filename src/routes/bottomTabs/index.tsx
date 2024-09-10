import {FC} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useSelector, useDispatch} from 'react-redux';
import colors from '../../theme/colors';
import Home from '../../screens/home';
import {
  ActionBottomTabIcon,
  NotificationBottomIcon,
  StartMatchBottomIcon,
  StreamingBottomIcon,
  HomeBottomTabIcon,
} from '../../assets/svg';
import LiveStreaming from '../../screens/matches/detail/liveStreaming';
import styles from './styles';
import StartMatch from '../../screens/matches/startMatch';
import Notifications from '../../screens/notifications';
import {checkUserLogined} from '../../redux/authentication/login/action';
import LoginModal from '../../views/authentication/loginModal';
import {
  setIsShowActionModal,
  setShowLoginModal,
} from '../../redux/authentication/login/reducer';
import {RootState} from '../../redux/store/store';
import ActionModal from '../../views/actionModal';
const BottomTabs: FC = () => {
  const dispatch = useDispatch();
  const {showLoginModal} = useSelector(
    (state: RootState) => state.loginReducer,
  );
  const Tab = createBottomTabNavigator();
  const ActionComponent = () => {
    return null;
  };
  return (
    <>
      <ActionModal />
      <LoginModal
        onRequestClose={() => dispatch(setShowLoginModal(false))}
        visible={showLoginModal}
      />
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarStyle: styles.tabBarStyle,
          tabBarActiveTintColor: colors.white,
          headerShown: false,
          headerShadowVisible: false,
        }}>
        <Tab.Screen
          options={{tabBarIcon: HomeBottomTabIcon}}
          name="Home"
          component={Home}
        />
        <Tab.Screen
          options={{
            tabBarIcon: StreamingBottomIcon,
            headerTitle: 'Live Streaming',
            title: 'Live Streaming',
          }}
          name="LiveStreaming"
          component={LiveStreaming}
        />
        <Tab.Screen
          name="Action"
          component={ActionComponent}
          listeners={{
            tabPress: e => {
              e.preventDefault(), dispatch(setIsShowActionModal(true));
            }
          }}
          options={{
            tabBarIconStyle: styles.homeIcon,
            tabBarIcon: ActionBottomTabIcon,
            tabBarLabel: '',
          }}
        />
        <Tab.Screen
          listeners={{tabPress: checkUserLogined}}
          options={{
            tabBarIcon: StartMatchBottomIcon,
            headerTitle: 'Start Match',
            title: 'Start Match',
          }}
          name="Start Match"
          component={StartMatch}
        />
        <Tab.Screen
          options={{tabBarIcon: NotificationBottomIcon}}
          name="Notifications"
          component={Notifications}
        />
      </Tab.Navigator>
    </>
  );
};
export default BottomTabs;
