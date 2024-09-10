import { FC, useMemo, useState, useEffect } from 'react';
import { useWindowDimensions } from 'react-native';
import { SimpleScreenContainer } from '../../../components/screensContainers/screenContainers';
import { TabView } from 'react-native-tab-view';
import TabBarHeaders from '../../../components/tabBarHeaders';
import MatchListView from '../../../views/matches/matchListView';
import PointTable from '../../../views/tournament/pointTable/listView';
import { GetTournamentGroupProps, GetTournamentObjectProps, GroupCategoryType } from '../../../modelInterface/tournaments';
import { capitalizeFirstLetter } from '../../../utilis/dateFormatter';
import { GetMatchObjectState } from '../../../modelInterface/redux/matches/reducer';
import { GetTournamentGroupMathces } from '../../../redux/tournaments/getTournament/action';
const TournamentGroupsTabs: FC<{ isPrivate: boolean, getTournament: GetTournamentObjectProps, allTournamentGroups: GetTournamentGroupProps[], tournamentRoundMatches?: GetMatchObjectState[], tournamentType: string }> = ({ isPrivate, allTournamentGroups, getTournament, tournamentRoundMatches, tournamentType }) => {
    const [index, setIndex] = useState<number>(0)
    const { teams, id, groups } = getTournament || {}
    const layout = useWindowDimensions();
    const uniqueData = useMemo<Array<{ id: string, category: GroupCategoryType }>>(() => groups?.filter((obj, index, self) => index === self.findIndex((t) => (
        t.category === obj?.category
    ))), [groups])
    useEffect(() => {
        const leagueIndex = uniqueData?.findIndex((item) => item?.category === 'league')
        if (index !== -1 && index !== leagueIndex && uniqueData.length > 0) {
            GetTournamentGroupMathces({ categoryType: uniqueData[index]?.category, tournament_id: id })
        }
    }, [index])    
    const routes = Array.isArray(uniqueData) ? uniqueData?.map(item => {
        return {
            key: item?.id,
            title: capitalizeFirstLetter(item?.category),
            category: item?.category
        };
    }) : [];
    const renderScene = ({ route }: {
        route: {
            key: string;
            title: GroupCategoryType;
            category: GroupCategoryType;
        }
    }) => {
        if (route?.category == 'league') {
            return <PointTable
                teams={teams?.collection}
                allTournamentGroups={allTournamentGroups}
                isPrivate={isPrivate}
                tournament_id={id}
                tournamentType={tournamentType}
            />
        }
        return <MatchListView
            data={tournamentRoundMatches?.map((item) => {
                return {
                    ...item,
                    tournament: {
                        name: `${item?.group?.name} - ${item?.matchSubCategoryType}`
                    }
                } as GetMatchObjectState
            }) || []}
            onRefresh={() => GetTournamentGroupMathces({ categoryType: uniqueData[index]?.category, tournament_id: id })}
        />;
    };
    return (
        <SimpleScreenContainer>
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                renderTabBar={props => (
                    <TabBarHeaders
                        {...props}
                        selectedIndex={index}
                        onPress={setIndex}
                        isAmateur={tournamentType == 'amateur'}
                    />
                )}
                initialLayout={{
                    width: layout.width,
                }}
            />
        </SimpleScreenContainer>
    );
};
export default TournamentGroupsTabs;