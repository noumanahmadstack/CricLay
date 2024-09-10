import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store/store';
import {
  onLoadMoreAllTeams,
  onMountAllTeams,
} from '../../../../redux/teams/teams/action';
import { SelectTeamFromBackProps } from '../../../../modelInterface/team';
import TeamListView from '../../../../views/teams/teamListView';
import { setSearchByNameAllTeams } from '../../../../redux/teams/teams/reducer';
const Teams: FC<SelectTeamFromBackProps> = () => {
  const dispatch = useDispatch();
  const { allTeams, searchByNameAllTeams, isLoading, metadataAllTeams } =
    useSelector((state: RootState) => state.teamsReducer);
  const { currentPage, totalPages } = metadataAllTeams;
  useEffect(() => {
    if (searchByNameAllTeams === '') {
      onMountAllTeams();
    }
  }, [searchByNameAllTeams]);
  return (
    <TeamListView
      data={allTeams}
      onEndReached={onLoadMoreAllTeams}
      isLoading={isLoading}
      isLoadingPagination={currentPage < totalPages}
      onSubmitEditing={onMountAllTeams}
      onChangeTextSearch={e => dispatch(setSearchByNameAllTeams(e))}
      searchKeywords={searchByNameAllTeams}
      singlePlayerTab={true}
      isPrivate={true}
    />
  );
};
export default Teams;
