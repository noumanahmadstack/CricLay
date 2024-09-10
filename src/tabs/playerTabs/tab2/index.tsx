import { FC, useEffect } from 'react';
import { Text, View } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import PlayersListView from '../../../views/players/playersListView';
import SimpleLoader from '../../../components/loaders/simpleLoader';
import SearchBar from '../../../components/searchBar';
import { PlayerTab2Props } from '../../../modelInterface/tabs';
import styles from './styles';
const Tab2: FC<PlayerTab2Props> = ({
  onMountTab2,
  onLoadMoreTab2,
  dataTab2,
  isLoadingTab2,
  isLoadingPagination,
  searchKeywordsTab2,
  onChangeTextTab2,
  onSubmitEditingTab2,
  onPlayerToAddIntoPlaying,
  onRefresh2,
  onSelectPlayer2,
  totalOvers,
  isAmateur
}) => {
  const isFocused = useIsFocused();
  useEffect(() => {
    if (isFocused && searchKeywordsTab2 == '') {
      onMountTab2();
    }
  }, [isFocused, searchKeywordsTab2]);
  return (
    <>
      <SimpleLoader isLoading={isLoadingTab2} />
      <SearchBar
        value={searchKeywordsTab2}
        onChangeText={onChangeTextTab2}
        onSubmitEditing={onSubmitEditingTab2}
      />
      {dataTab2.length > 0 ? (
        <PlayersListView
          data={dataTab2}
          onPlayerToAddIntoPlaying={onPlayerToAddIntoPlaying}
          onRefresh={onRefresh2}
          onSelectPlayer={onSelectPlayer2}
          onLoadMore={onLoadMoreTab2}
          isLoadingPagination={isLoadingPagination}
          totalOvers={totalOvers}
          isAmateur={isAmateur}
        />
      ) : (
        !isLoadingTab2 && (
          <View style={styles.noPlayerContainer}>
            <Text style={styles.noPlayerTxt}>No player to show!</Text>
          </View>
        )
      )}
    </>
  );
};
export default Tab2;
