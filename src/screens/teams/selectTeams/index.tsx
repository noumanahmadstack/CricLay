import {FC} from 'react';
import {useWindowDimensions} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {TabView} from 'react-native-tab-view';
import {RootState} from '../../../redux/store/store';
import {RenderSceneProps} from '../../../modelInterface/screens/authentication/emailPhone';
import {SimpleScreenContainer} from '../../../components/screensContainers/screenContainers';
import MyTeams from './myTeams';
import Teams from './teams';
import TabBarHeaders from '../../../components/tabBarHeaders';
import {setIndex} from '../../../redux/matches/startMatch/reducer';
import {setIsShowAddTeamModal} from '../../../redux/teams/addTeam/reducer';
import FloatingTabBtn from '../../../components/floatingAddBtn';
import AddTeam from './addTeam';
const SelectTeams: FC<any> = ({route}) => {
  const {selectTeam} = route.params;
  const dispatch = useDispatch();
  const {routes, index} = useSelector(
    (state: RootState) => state.startMatchReducer,
  );
  const isShowAddTeamModal = useSelector(
    (state: RootState) => state.addTeamReducer.isShowAddTeamModal,
  );
  const layout = useWindowDimensions();
  const renderScene = ({route}: RenderSceneProps) => {
    switch (route.key) {
      case 'MyTeams':
        return <MyTeams selectTeam={selectTeam} />;
      case 'Teams':
        return <Teams selectTeam={selectTeam} />;
    }
  };
  return (
    <SimpleScreenContainer isBlue={true}>
      <AddTeam
        isVisible={isShowAddTeamModal}
        onClose={() => dispatch(setIsShowAddTeamModal(false))}
      />
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={index => dispatch(setIndex(index))}
        renderTabBar={props => (
          <TabBarHeaders
            {...props}
            selectedIndex={index}
            onPress={index => dispatch(setIndex(index))}
          />
        )}
        initialLayout={{width: layout.width}}
      />
      <FloatingTabBtn onPress={() => dispatch(setIsShowAddTeamModal(true))} />
    </SimpleScreenContainer>
  );
};
export default SelectTeams;
