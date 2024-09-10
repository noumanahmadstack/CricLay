import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store/store';
import {
  GetMyTournament,
  onLoadMoreMyTournament,
} from '../../../../redux/tournaments/getTournament/action';
import { SimpleScreenContainer } from '../../../../components/screensContainers/screenContainers';
import TournamentListView from '../../../../views/tournament/listView';

const OnGoingTournament: FC<any> = ({ navigation, index }) => {
  const { myTournaments, metadataForMyTournaments} = useSelector((state: RootState) => state.getTournamentReducer);
  const { currentPage, totalPages } = metadataForMyTournaments

  const time_zone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  useEffect(() => {
    if (index == 0) {
      let isInitialMount = true;
      GetMyTournament({ status: 'ongoing', time_zone });
      const unsubscribe = navigation.addListener('focus', () => {
        if (!isInitialMount) {
          GetMyTournament({ status: 'ongoing', time_zone });
        }
      });
      isInitialMount = false;
      return unsubscribe;
    }
  }, [index, time_zone, navigation]);

  return (
    <SimpleScreenContainer isBlue={true}>
      <TournamentListView
        data={myTournaments}
        onRefresh={() => GetMyTournament({ status: 'ongoing', time_zone })}
        onEndReached={onLoadMoreMyTournament}
        isLoadingPagination={currentPage < totalPages}
      />
    </SimpleScreenContainer>
  );
};
export default OnGoingTournament;
