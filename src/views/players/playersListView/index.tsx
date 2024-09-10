import { FC, useRef } from 'react';
import styles from './styles';
import PlayersView from '../playersView';
import { PlayerListViewProps } from '../../../modelInterface/views/playersListView';
import Pagination from '../../../components/pagination';
import EmptyText from '../../../components/emptyText';
import SearchBar from '../../../components/searchBar';
import SimpleLoader from '../../../components/loaders/simpleLoader';
const PlayersListView: FC<PlayerListViewProps> = ({
  onPlayerToAddIntoPlaying,
  addSubsitute,
  onSubmitEditing,
  onChangeTextSearch,
  searchKeywords,
  onRefresh,
  onSelectPlayer,
  onLongPress,
  onDelete,
  onLoadMore,
  isDeleteable,
  isLoadingPagination,
  isMatchPlaying,
  ballsData,
  isBatsman,
  ballsPerOver,
  isPrivate,
  viewType,
  teamId,
  isLoading,
  totalOvers,
  isAmateur,
  isImpactPlayer,
  isSubsituted,
  ...props
}) => {
  const subsitutePlayer = useRef<boolean>(false)
  let isShowSubsitutePlayer:boolean = false
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
        {...props}
        contentContainerStyle={styles.contentContainer}
        onRefreshing={onRefresh}
        onLoadMore={onLoadMore}
        extraData={[isShowSubsitutePlayer, subsitutePlayer.current]}
        ListEmptyComponent={<EmptyText title="No Players" />}
        isLoadingPagination={isLoadingPagination}
        renderItem={({ item }) => {
          if (item.isSubsituted) {
            subsitutePlayer.current = true
            isShowSubsitutePlayer = false
          }
          else if (isAmateur && item.isImpactPlayer && !subsitutePlayer.current) {
            isShowSubsitutePlayer= true
          }
          return (
            <PlayersView
              onPlayerToAddIntoPlaying={onPlayerToAddIntoPlaying}
              onSelectPlayer={onSelectPlayer}
              isMatchPlaying={isMatchPlaying}
              ballsData={ballsData}
              isBatsman={isBatsman}
              ballsPerOver={ballsPerOver}
              isPrivate={isPrivate}
              viewType={viewType}
              teamId={teamId}
              totalOvers={totalOvers}
              isAmateur={isAmateur}
              onLongPress={onLongPress}
              addSubsitute={addSubsitute}
              onDelete={onDelete}
              isImpactPlayer={isImpactPlayer}
              isSubsituted={isSubsituted}
              isShowSubsitutePlayer={isShowSubsitutePlayer}
              disabled={isAmateur ? ((item.isImpactPlayer && !subsitutePlayer.current) ? true : false || item.isSubsituted) : false}
              isDeleteable={isDeleteable}
              {...item}
            />
          )
        }}
      />
    </>
  );
};
export default PlayersListView;
