import {FC, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import SimpleLoader from '../../../components/loaders/simpleLoader';
import {
  onMountAllPlayers,
  onLoadMoreAllPlayers,
} from '../../../redux/players/getPlayer/action';
import {RootState} from '../../../redux/store/store';
import PlayersListView from '../../../views/players/playersListView';
import { setSearchAllPlayerByName } from '../../../redux/players/getPlayer/reducer';

const AllPlayers: FC = () => {
  const {allPlayers, isLoading, metadataForAllPlayers,searchAllPlayerByName} = useSelector(
    (state: RootState) => state.getPlayerReducer,
  );
  const {currentPage, totalPages} = metadataForAllPlayers || {};
  const dispatch = useDispatch();

  useEffect(() => {
    onMountAllPlayers();
  }, [searchAllPlayerByName]);
  return (
    <>
      <SimpleLoader isLoading={isLoading} />
      <PlayersListView
        data={allPlayers}
        isPrivate={true}
        onLoadMore={onLoadMoreAllPlayers}
        onRefresh={onMountAllPlayers}
        onSubmitEditing={onMountAllPlayers}
        isLoading={isLoading}
        onChangeTextSearch={e => dispatch(setSearchAllPlayerByName(e))}
        searchKeywords={searchAllPlayerByName}
        isLoadingPagination={currentPage < totalPages}
      />
    </>
  );
};
export default AllPlayers;
