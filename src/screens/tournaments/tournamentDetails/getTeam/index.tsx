import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  onLoadMoreMyTeams,
  onMountMyTeams,
} from '../../../../redux/teams/teams/action';
import { setSearchByNameMyTeams } from '../../../../redux/teams/teams/reducer';
import { RootState } from '../../../../redux/store/store';
import TeamListView from '../../../../views/teams/teamListView';
import { SimpleScreenContainer } from '../../../../components/screensContainers/screenContainers';
const MyTeams: FC<any> = ({ route }) => {
  const { tournament_id } = route.params || {};
  const dispatch = useDispatch();
  const { myTeams, searchByNameMyTeams, isLoading, metadataMyTeams } =
    useSelector((state: RootState) => state.teamsReducer);
  const { currentPage, totalPages } = metadataMyTeams;
  useEffect(() => {
    if (searchByNameMyTeams === '') {
      onMountMyTeams();
    }
  }, [searchByNameMyTeams]);
  return (
    <SimpleScreenContainer>
      <TeamListView
        data={myTeams}
        selectTeam={'selectTeam'}
        onEndReached={onLoadMoreMyTeams}
        isLoading={isLoading}
        isLoadingPagination={currentPage < totalPages}
        onSubmitEditing={onMountMyTeams}
        onChangeTextSearch={e => dispatch(setSearchByNameMyTeams(e))}
        searchKeywords={searchByNameMyTeams}
        isOnSubmit={true}
        isPrivate={true}
        tournament_id={tournament_id}
      />
    </SimpleScreenContainer>
  );
};
export default MyTeams;
