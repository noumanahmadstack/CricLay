import {FC, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  fetchMyTeamsData,
  onLoadMoreMyTeams,
  onMountMyTeams,
} from '../../../../redux/teams/teams/action';
import {setSearchByNameMyTeams} from '../../../../redux/teams/teams/reducer';
import {RootState} from '../../../../redux/store/store';
import {SelectTeamFromBackProps} from '../../../../modelInterface/team';
import TeamListView from '../../../../views/teams/teamListView';
const MyTeams: FC<SelectTeamFromBackProps> = ({selectTeam}) => {
  const dispatch = useDispatch();
  const {myTeams, searchByNameMyTeams, isLoading, metadataMyTeams} =
    useSelector((state: RootState) => state.teamsReducer);
  const {currentPage, totalPages} = metadataMyTeams;
  useEffect(() => {
    if (searchByNameMyTeams === '') {
      onMountMyTeams();
    }
  }, [searchByNameMyTeams]);
  return (
    <TeamListView
      data={myTeams}
      selectTeam={selectTeam}
      onEndReached={onLoadMoreMyTeams}
      isLoading={isLoading}
      onRefresh={fetchMyTeamsData}
      isLoadingPagination={currentPage < totalPages}
      onSubmitEditing={onMountMyTeams}
      isPrivate={true}
      onChangeTextSearch={e => dispatch(setSearchByNameMyTeams(e))}
      searchKeywords={searchByNameMyTeams}
    />
  );
};
export default MyTeams;
