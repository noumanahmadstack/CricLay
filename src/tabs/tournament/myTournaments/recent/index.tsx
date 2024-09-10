import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store/store';
import {
  GetMyTournament,
  onLoadMoreMyRecentTournament,
} from '../../../../redux/tournaments/getTournament/action';
import { SimpleScreenContainer } from '../../../../components/screensContainers/screenContainers';
import TournamentListView from '../../../../views/tournament/listView';

const RecentTournament: FC<any> = ({ navigation, index }) => {
  const { recentTournament,metadataForMyRecentTournaments } = useSelector((state: RootState) => state.getTournamentReducer);
  const { currentPage, totalPages } = metadataForMyRecentTournaments;
  const time_zone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  useEffect(() => {
    if (index == 0) {
      let isInitialMount = true;
      GetMyTournament({ status: 'completed', time_zone });
      const unsubscribe = navigation.addListener('focus', () => {
        if (!isInitialMount) {
          GetMyTournament({ status: 'completed', time_zone });
        }
      });
      isInitialMount = false;
      return unsubscribe;
    }
  }, [index, time_zone, navigation]);

  return (
    <SimpleScreenContainer isBlue={true}>
      <TournamentListView
        data={recentTournament}
        onRefresh={() => GetMyTournament({ status: 'completed', time_zone })}
        onEndReached={onLoadMoreMyRecentTournament}
        isLoadingPagination={currentPage < totalPages}
      />
    </SimpleScreenContainer>
  );
};
export default RecentTournament;
