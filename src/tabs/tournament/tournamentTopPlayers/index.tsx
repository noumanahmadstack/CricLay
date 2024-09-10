import { FC, useState } from 'react';
import { useWindowDimensions } from 'react-native';
import { TabView } from 'react-native-tab-view';
import { RenderSceneProps } from '../../../modelInterface/screens/authentication/emailPhone';
import TabBarHeaders from '../../../components/tabBarHeaders';
import MVP from './mvp';
import Leaderboard from './leaderboard';
import { LeaderBoardPlayersProps, TournamentLeaderboardTypes, TournamentMVPTypes } from '../../../modelInterface/tournaments';
const TournamentTopPlayersTab: FC<{ mvpCategory: TournamentMVPTypes, leaderboardCategory: TournamentLeaderboardTypes, mvp: LeaderBoardPlayersProps, leaderboard: LeaderBoardPlayersProps, id: string, isAmateur?:boolean }> = ({
    mvp,
    leaderboard,
    leaderboardCategory,
    mvpCategory,
    isAmateur,
    id
}) => {
    const [index, setIndex] = useState<number>(0)
    const routes = [
        {
            key: 'MVP',
            title: 'MVP'
        },
        {
            key: 'Leaderboard',
            title: 'Leaderboard'
        }
    ]
    const layout = useWindowDimensions();
    const renderScene = ({ route }: RenderSceneProps) => {
        switch (route.key) {
            case 'MVP':
                return (
                    <MVP
                        mvp={mvp}
                        id={id}
                        mvpCategory={mvpCategory}
                    />
                );
            case 'Leaderboard':
                return (
                    <Leaderboard
                        leaderboard={leaderboard}
                        leaderboardCategory={leaderboardCategory}
                        id={id}
                    />
                );
        }
    };
    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            renderTabBar={props => (
                <TabBarHeaders
                    {...props}
                    isAmateur={isAmateur}
                    selectedIndex={index}
                    onPress={setIndex}
                />
            )}
            initialLayout={{ width: layout.width }}
        />
    );
};
export default TournamentTopPlayersTab;