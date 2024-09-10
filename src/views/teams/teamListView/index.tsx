import { FC } from 'react';
import SearchBar from '../../../components/searchBar';
import TeamView from '../teamsView';
import styles from './styles';
import SimpleLoader from '../../../components/loaders/simpleLoader';
import { TeamListViewProps } from '../../../modelInterface/views/teamListView';
import Pagination from '../../../components/pagination';
import EmptyText from '../../../components/emptyText';
const TeamListView: FC<TeamListViewProps> = ({
  selectTeam,
  data,
  onEndReached,
  onRefresh,
  isLoadingPagination,
  isLoading,
  onSubmitEditing,
  onChangeTextSearch,
  searchKeywords,
  isOnSubmit,
  tournament_id,
  singlePlayerTab,
  disableWholeView,
  isPrivate,
  onPress,
}) => {  
  return (
    <>
      <SimpleLoader isLoading={!!isLoading} />
      {onChangeTextSearch ?
        <SearchBar
          onSubmitEditing={onSubmitEditing}
          onChangeText={onChangeTextSearch}
          value={searchKeywords}
        /> : null}
      <Pagination
        data={data}
        onRefreshing={onRefresh}
        contentContainerStyle={styles.contentContainerStyle}
        isLoadingPagination={isLoadingPagination}
        ListEmptyComponent={<EmptyText title="No Team" />}
        onLoadMore={onEndReached}
        renderItem={({ item }) => (
          <TeamView
            {...item}
            selectTeam={selectTeam}
            isOnSubmit={isOnSubmit}
            singlePlayerTab={singlePlayerTab}
            tournament_id={tournament_id}
            disableWholeView={disableWholeView}
            isPrivate={isPrivate}
            onPress={onPress}
          />
        )}
      />
    </>
  );
};
export default TeamListView;
