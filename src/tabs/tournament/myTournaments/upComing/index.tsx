import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { SimpleScreenContainer } from '../../../../components/screensContainers/screenContainers';
import { RootState } from '../../../../redux/store/store';
import {
  GetMyTournament,
  onLoadMoreMyUpComingTournament,
} from '../../../../redux/tournaments/getTournament/action';
import TournamentListView from '../../../../views/tournament/listView';

const UpComingTournament: FC<any> = ({ navigation, index }) => {
  const { upComingTournament,metadataForMyUpTournaments } = useSelector((state: RootState) => state.getTournamentReducer);
  const { currentPage, totalPages } = metadataForMyUpTournaments

  const time_zone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  useEffect(() => {
    if (index == 1) {
      let isInitialMount = true;
      GetMyTournament({ status: 'upcoming', time_zone });
      const unsubscribe = navigation.addListener('focus', () => {
        if (!isInitialMount) {
          GetMyTournament({ status: 'upcoming', time_zone });
        }
      });
      isInitialMount = false;
      return unsubscribe;
    }
  }, [index, time_zone, navigation]);

  return (
    <SimpleScreenContainer isBlue={true}>
      <TournamentListView
        data={upComingTournament}
        onRefresh={() => GetMyTournament({ status: 'upcoming', time_zone })}
        onEndReached={onLoadMoreMyUpComingTournament}
        isLoadingPagination={currentPage < totalPages}
      />
    </SimpleScreenContainer>
  );
};
export default UpComingTournament;
