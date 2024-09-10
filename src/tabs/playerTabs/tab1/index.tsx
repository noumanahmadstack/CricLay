import { FC, useEffect, useMemo, useState } from 'react';
import { Text, useWindowDimensions, View } from 'react-native';
import { TabView } from 'react-native-tab-view';
import PlayersListView from '../../../views/players/playersListView';
import SimpleLoader from '../../../components/loaders/simpleLoader';
import SearchBar from '../../../components/searchBar';
import { PlayerTab1Props } from '../../../modelInterface/tabs';
import styles from './styles';
import TabBarHeaders from '../../../components/tabBarHeaders';
import { BatterStatsAttributesProps, BowlerStatsAttributesProps } from '../../../modelInterface/scoring';
const Tab1: FC<PlayerTab1Props> = ({
  onMountTab1,
  dataTab1,
  isLoadingTab1,
  searchKeywordsTab1,
  isLoadingPagination,
  onChangeTextTab1,
  onSubmitEditingTab1,
  onRefresh1,
  onSelectPlayer1,
  isMatchPlaying,
  isBatsman,
  ballsData,
  ballsPerOver,
  totalOvers,
  isAmateur,
  isImpactPlayer,
  isSubsituted,
  onLongPressTab1,
  onAddSubsituteTab1,
  onDelete,
  isDeleteable
}) => {
  const layout = useWindowDimensions();
  const filterData = useMemo(() => {
    const normalPlayers: BatterStatsAttributesProps[] | BowlerStatsAttributesProps[] = [];
    const retiredPlayers: BatterStatsAttributesProps[] | BowlerStatsAttributesProps[] = [];
    if (ballsData) {
      dataTab1.forEach((player: any) => {
        if (ballsData.some(ball => ball.wicketAttributes?.playerOutId === player.id && ball.wicketAttributes?.wicketType == "retired")) {
          retiredPlayers.push(player);
        } else {
          normalPlayers.push(player);
        }
      });
    }
    return { retiredPlayers, normalPlayers }
  }, [ballsData, dataTab1])
  const { retiredPlayers, normalPlayers } = filterData
  const routes: any = [
    {
      key: '0',
      title: 'Normal',
      data: normalPlayers
    },
    {
      key: '1',
      title: 'Retired',
      data: retiredPlayers
    }
  ]
  const [index, setIndex] = useState(0)
  useEffect(() => {
    onMountTab1();
  }, []);

  const renderScene = ({ route }: any) => {
    return <PlayersListView
      data={route?.data}
      onRefresh={onRefresh1}
      onSelectPlayer={onSelectPlayer1}
      isLoadingPagination={!!isLoadingPagination}
      isMatchPlaying={isMatchPlaying}
      ballsData={ballsData}
      isBatsman={isBatsman}
      ballsPerOver={ballsPerOver}
      totalOvers={totalOvers}
      isAmateur={isAmateur}
      onLongPress={onLongPressTab1}
      addSubsitute={onAddSubsituteTab1}
      isImpactPlayer={isImpactPlayer}
      isSubsituted={isSubsituted}
      onDelete={onDelete}
      isDeleteable={isDeleteable}
    />
  };
  return (
    <>
      <SimpleLoader isLoading={isLoadingTab1} />
      <SearchBar
        value={searchKeywordsTab1}
        onChangeText={onChangeTextTab1}
        onSubmitEditing={onSubmitEditingTab1}
      />
      {isAmateur ?
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          renderTabBar={props => (
            <TabBarHeaders
              {...props}
              selectedIndex={index}
              onPress={setIndex}
              isAmateur={true}
            />
          )}
          initialLayout={{ width: layout.width }}
        />
        :
        <>
          {dataTab1.length > 0 ? (
            <PlayersListView
              data={dataTab1}
              onRefresh={onRefresh1}
              onSelectPlayer={onSelectPlayer1}
              isLoadingPagination={!!isLoadingPagination}
              isMatchPlaying={isMatchPlaying}
              ballsData={ballsData}
              isBatsman={isBatsman}
              ballsPerOver={ballsPerOver}
              totalOvers={totalOvers}
              isAmateur={isAmateur}
              onLongPress={onLongPressTab1}
              addSubsitute={onAddSubsituteTab1}
              isImpactPlayer={isImpactPlayer}
              isSubsituted={isSubsituted}
              onDelete={onDelete}
              isDeleteable={isDeleteable}
            />
          ) : (
            !isLoadingTab1 && (
              <View style={styles.noPlayerContainer}>
                <Text style={styles.noPlayerTxt}>No player to show!</Text>
              </View>
            )
          )}
        </>
      }
    </>
  );
};
export default Tab1;
