import { FC } from 'react';
import { useWindowDimensions } from 'react-native';
import { SimpleScreenContainer } from '../../../components/screensContainers/screenContainers';
import { TabView } from 'react-native-tab-view';
import TabBarHeaders from '../../../components/tabBarHeaders';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store/store';
import { RenderSceneProps } from '../../../modelInterface/screens/authentication/emailPhone';
import { resetTournament, setIndex } from '../../../redux/tournaments/getTournament/reducer';
import FloatingTabBtn from '../../../components/floatingAddBtn';
import { NavigationProps } from '../../../modelInterface/navigation';
import OnGoingTournament from './onGoing';
import UpComingTournament from './upComing';
import RecentTournament from './recent';

const MyTournamentsTabs: FC<NavigationProps> = ({ navigation }) => {
    const { routes, index } = useSelector((state: RootState) => state.getTournamentReducer);
    const layout = useWindowDimensions();
    const dispatch = useDispatch();
    const renderScene = ({ route }: RenderSceneProps) => {
        switch (route.key) {
            case 'Ongoing':
                return <OnGoingTournament navigation={navigation} index={index} />;
            case 'Upcoming':
                return <UpComingTournament navigation={navigation} index={index} />;
                case 'Recent':
                    return <RecentTournament navigation={navigation} index={index} />;
        }
    };
    return (
        <SimpleScreenContainer>
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={index => dispatch(setIndex(index))}
                renderTabBar={props => (
                    <TabBarHeaders
                        {...props}
                        selectedIndex={index}
                        onPress={index => dispatch(setIndex(index))}
                    />
                )}
                initialLayout={{
                    width: layout.width,
                }}
            />
            <FloatingTabBtn
                onPress={() => {
                    dispatch(resetTournament());
                    navigation.navigate('CreatTournament');
                }}
            />
        </SimpleScreenContainer>
    );
};
export default MyTournamentsTabs;
