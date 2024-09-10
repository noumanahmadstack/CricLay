import { FC, useState } from 'react';
import { SafeAreaView } from 'react-native';
import SelectMatch from './modal';
import styles from '../styles';
import {
  GetTournamentMatch,
  onLoadMoreTournamentFixtureMatches,
  onLoadMoreTournamentLiveMatches,
  onLoadMoreTournamentResultsMatches,
} from '../../../../../redux/tournaments/getTournament/action';
import MatchesStatusTabs from '../../../../../tabs/matchTabs/matchStatuses';
import { GetMatchObjectState } from '../../../../../modelInterface/redux/matches/reducer';
import { PaginationProps } from '../../../../../modelInterface/pagination';
import FloatingTabBtn from '../../../../../components/floatingAddBtn';

const Matches: FC<{
  tournament_id: string,
  isPrivate: boolean,
  tournamentLiveMatches: GetMatchObjectState[],
  tournamentFixtureMatches: GetMatchObjectState[],
  touranamentResultMatches: GetMatchObjectState[],
  metadataTournamentLiveMatches: PaginationProps,
  metadataTournamentFixtureMatches: PaginationProps,
  metadataTournamentResultMatches: PaginationProps,
  tournamentType:string
}> = ({
  tournament_id,
  isPrivate,
  tournamentLiveMatches,
  tournamentFixtureMatches,
  touranamentResultMatches,
  metadataTournamentLiveMatches,
  metadataTournamentFixtureMatches,
  metadataTournamentResultMatches,
  tournamentType
}) => {
  
    const [visible, setVisible] = useState(false);
    return (
      <SafeAreaView style={styles.matchSafeView}>
        <SelectMatch
          visible={visible}
          onClose={() => setVisible(false)}
          tournament_id={tournament_id}
          isAmateur={tournamentType === "amateur"}
        />
        <MatchesStatusTabs
          liveData={tournamentLiveMatches}
          fixtureData={tournamentFixtureMatches}
          resultsData={touranamentResultMatches}
          metadataForLive={metadataTournamentLiveMatches}
          metadataForFixture={metadataTournamentFixtureMatches}
          metadataForResult={metadataTournamentResultMatches}
          onMountAllMatches={() =>
            GetTournamentMatch({ tournament_id, status: 'started' })
          }
          onMountFixtureMatches={() =>
            GetTournamentMatch({ tournament_id, status: 'fixture' })
          }
          onMountResultsMatches={() =>
            GetTournamentMatch({ tournament_id, status: 'completed' })
          }
          onEndReachedLive={() => onLoadMoreTournamentLiveMatches(tournament_id)}
          onEndReachedFixture={() => onLoadMoreTournamentFixtureMatches(tournament_id)}
          onEndReachedResult={() => onLoadMoreTournamentResultsMatches(tournament_id)}
          onRefreshingAllMatches={() =>
            GetTournamentMatch({ tournament_id, status: 'started' })
          }
          onRefreshingFixtureMatches={() =>
            GetTournamentMatch({ tournament_id, status: 'fixture' })
          }
          onRefreshingResultsMatches={() =>
            GetTournamentMatch({ tournament_id, status: 'completed' })
          }
          isAmateur={tournamentType === "amateur"}
        />
        {!isPrivate ? (
          <FloatingTabBtn onPress={() => setVisible(true)}  isAmateur={tournamentType === "amateur"}/>
        ) : null}
      </SafeAreaView>
    );
  };
export default Matches;