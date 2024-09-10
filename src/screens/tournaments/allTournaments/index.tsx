import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SimpleLoader from '../../../components/loaders/simpleLoader';
import { SimpleScreenContainer } from '../../../components/screensContainers/screenContainers';
import { RootState } from '../../../redux/store/store';
import {
  getAllTournaments,
  onLoadMoreAllPublicTournament,
} from '../../../redux/tournaments/getTournament/action';
import TournamentListView from '../../../views/tournament/listView';
import { setSearchByNameAllTournament } from '../../../redux/tournaments/getTournament/reducer';

const AllTournaments: FC = () => {
  const { allPublicTournament, isLoading, metadataForAllPublicTournaments ,searchByNameAllTournaments} = useSelector((state: RootState) => state.getTournamentReducer);
  const { currentPage, totalPages } = metadataForAllPublicTournaments
  const dispatch = useDispatch();

  useEffect(() => {
    getAllTournaments();
  }, [searchByNameAllTournaments]);
  return (
    <SimpleScreenContainer isBlue={true}>
      <SimpleLoader isLoading={isLoading} />
      <TournamentListView
        data={allPublicTournament}
        onRefresh={getAllTournaments}
        onEndReached={onLoadMoreAllPublicTournament}
        onSubmitEditing={getAllTournaments}
        isLoading={isLoading}
        onChangeTextSearch={e => dispatch(setSearchByNameAllTournament(e))}
        searchKeywords={searchByNameAllTournaments}
        isLoadingPagination={currentPage < totalPages}
      />
    </SimpleScreenContainer>
  );
};
export default AllTournaments;