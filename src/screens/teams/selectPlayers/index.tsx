import {FC} from 'react';
import {useWindowDimensions} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {TabView} from 'react-native-tab-view';
import {RootState} from '../../../redux/store/store';
import {RenderSceneProps} from '../../../modelInterface/screens/authentication/emailPhone';
import {SimpleScreenContainer} from '../../../components/screensContainers/screenContainers';
import TabBarHeaders from '../../../components/tabBarHeaders';
import {setPlayersIndex} from '../../../redux/matches/startMatch/reducer';
import FloatingTabBtn from '../../../components/floatingAddBtn';
import MyPlayers from './myPlayers';
import Players from './players';
import {navigate} from '../../../routes/rootNavigation';
import {SelectPlayerRoutesProps} from '../../../modelInterface/routes/players';
const SelectPlayers: FC<SelectPlayerRoutesProps | any> = ({route}) => {
  const {id} = route.params || {};
  const dispatch = useDispatch();
  const {playersRoutes: routes, playersIndex: index} = useSelector(
    (state: RootState) => state.startMatchReducer,
  );
  const {myPlayers} = useSelector((state: RootState) => state.getPlayerReducer);
  const layout = useWindowDimensions();
  const renderScene = ({route}: RenderSceneProps) => {
    switch (route.key) {
      case 'MyPlayers':
        return <MyPlayers teamId={id} />;
      case 'Players':
        return <Players />;
    }
  };
  return (
    <SimpleScreenContainer>
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={index => dispatch(setPlayersIndex(index))}
        renderTabBar={props => (
          <TabBarHeaders
            {...props}
            leftCount={myPlayers?.length}
            selectedIndex={index}
            onPress={index => dispatch(setPlayersIndex(index))}
          />
        )}
        initialLayout={{width: layout.width}}
      />
      <FloatingTabBtn onPress={() => navigate('AddPlayers', {teamId: id})} />
    </SimpleScreenContainer>
  );
};
export default SelectPlayers;
