import {FC} from 'react';
import {useWindowDimensions} from 'react-native';
import {TabView} from 'react-native-tab-view';
import {useDispatch, useSelector} from 'react-redux';
import {SimpleScreenContainer} from '../../../components/screensContainers/screenContainers';
import TabBarHeaders from '../../../components/tabBarHeaders';
import {RenderSceneProps} from '../../../modelInterface/screens/authentication/emailPhone';
import {RootState} from '../../../redux/store/store';
import FixtureMatches from './fixtureMatches';
import LiveMatches from './liveMatches';
import {setIndex} from '../../../redux/matches/getMatches/reducer';
import ResultsMatches from './resultsMatches';
import {MatchesStatusTabsProps} from '../../../modelInterface/match';
const MatchesStatusTabs: FC<MatchesStatusTabsProps> = props => {
  const {isAmateur} = props
  const dispatch = useDispatch();
  const {routes, index} = useSelector(
    (state: RootState) => state.getMatchesReducer,
  );
  const layout = useWindowDimensions();
  const renderScene = ({route}: RenderSceneProps) => {
    switch (route.key) {
      case 'Live':
        return <LiveMatches {...props} />;
      case 'Fixtures':
        return <FixtureMatches {...props} />;
      case 'Results':
        return <ResultsMatches {...props} />;
    }
  };
  return (
    <SimpleScreenContainer isBlue={true}>
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={index => dispatch(setIndex(index))}
        renderTabBar={props => (
          <TabBarHeaders
            {...props}
            isAmateur={isAmateur}
            selectedIndex={index}
            onPress={index => dispatch(setIndex(index))}
          />
        )}
        initialLayout={{width: layout.width}}
      />
    </SimpleScreenContainer>
  );
};
export default MatchesStatusTabs;
