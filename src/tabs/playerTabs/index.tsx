import { FC } from 'react';
import { useWindowDimensions } from 'react-native';
import { TabView } from 'react-native-tab-view';
import { RenderSceneProps } from '../../modelInterface/screens/authentication/emailPhone';
import { SimpleScreenContainer } from '../../components/screensContainers/screenContainers';
import TabBarHeaders from '../../components/tabBarHeaders';
import FloatingTabBtn from '../../components/floatingAddBtn';
import Tab1 from './tab1';
import Tab2 from './tab2';
import {
  PlayersTabProps,
  PlayerTab1Props,
  PlayerTab2Props,
} from '../../modelInterface/tabs';
const PlayersTab: FC<PlayerTab1Props & PlayerTab2Props & PlayersTabProps> = ({
  routes,
  index,
  onIndexChange,
  onPressAddBtn,
  onMountTab1,
  onLoadMoreTab1,
  dataTab1,
  isLoadingTab1,
  metadataTab1,
  searchKeywordsTab1,
  onChangeTextTab1,
  onSubmitEditingTab1,
  onMountTab2,
  onLoadMoreTab2,
  dataTab2,
  isLoadingTab2,
  metadataTab2,
  searchKeywordsTab2,
  onChangeTextTab2,
  onSubmitEditingTab2,
  onPlayerToAddIntoPlaying,
  onRefresh1,
  onRefresh2,
  onSelectPlayer1,
  onSelectPlayer2,
  isMatchPlaying,
  isBatsman,
  ballsData,
  ballsPerOver,
  isAmateur,
  onLongPressTab1,
  onAddSubsituteTab1,
  onDelete,
  isDeleteable,
  isImpactPlayer,
  isSubsituted,
  totalOvers
}) => {
  const layout = useWindowDimensions();
  const renderScene = ({ route }: RenderSceneProps) => {
    switch (route.key) {
      case 'Tab1':
        return (
          <Tab1
            onMountTab1={onMountTab1}
            onLoadMoreTab1={onLoadMoreTab1}
            dataTab1={dataTab1}
            isLoadingTab1={isLoadingTab1}
            metadataTab1={metadataTab1}
            searchKeywordsTab1={searchKeywordsTab1}
            onChangeTextTab1={onChangeTextTab1}
            onSubmitEditingTab1={onSubmitEditingTab1}
            onRefresh1={onRefresh1}
            onSelectPlayer1={onSelectPlayer1}
            isMatchPlaying={isMatchPlaying}
            isBatsman={isBatsman}
            ballsData={ballsData}
            ballsPerOver={ballsPerOver}
            isAmateur={isAmateur}
            onLongPressTab1={onLongPressTab1}
            isImpactPlayer={isImpactPlayer}
            isSubsituted={isSubsituted}
            onAddSubsituteTab1={onAddSubsituteTab1}
            totalOvers={totalOvers}
            onDelete={onDelete}
            isDeleteable={isDeleteable}
          />
        );
      case 'Tab2':
        return (
          <Tab2
            onMountTab2={onMountTab2}
            onLoadMoreTab2={onLoadMoreTab2}
            dataTab2={dataTab2}
            isLoadingTab2={isLoadingTab2}
            metadataTab2={metadataTab2}
            searchKeywordsTab2={searchKeywordsTab2}
            onChangeTextTab2={onChangeTextTab2}
            onSubmitEditingTab2={onSubmitEditingTab2}
            onPlayerToAddIntoPlaying={onPlayerToAddIntoPlaying}
            onRefresh2={onRefresh2}
            onSelectPlayer2={onSelectPlayer2}
            isMatchPlaying={isMatchPlaying}
            isAmateur={isAmateur}
          />
        );
    }
  };
  return (
    <SimpleScreenContainer>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={onIndexChange}
        renderTabBar={props => (
          <TabBarHeaders
            {...props}
            leftCount={dataTab1?.length}
            selectedIndex={index}
            onPress={onIndexChange}
            isAmateur={isAmateur}
          />
        )}
        initialLayout={{ width: layout.width }}
      />
      <FloatingTabBtn onPress={onPressAddBtn} isAmateur={isAmateur} />
    </SimpleScreenContainer>
  );
};
export default PlayersTab;