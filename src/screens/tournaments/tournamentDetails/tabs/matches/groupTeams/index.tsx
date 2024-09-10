import React, {FC, useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../../../../../redux/store/store';
import TeamView from '../../../../../../views/teams/teamsView';
import {GetTournamentGroup} from '../../../../../../redux/tournaments/getTournament/action';
import styles from '../../styles';
import Pagination from '../../../../../../components/pagination';
import { marginHorizontal } from '../../../../../../theme/margins';

const GroupTeams: FC<any> = ({route}) => {
  const {selectTeam} = route.params;
  const {tournamentGroup, getTournament} = useSelector(
    (state: RootState) => state.getTournamentReducer,
  );
  const group_id = route?.params?.group_id;
  const tournament_id = route?.params?.tournament_id;
  useEffect(() => {
    if (group_id) {
      GetTournamentGroup({group_id, tournament_id});
    }
  }, [group_id, tournament_id]);
  return (
    <SafeAreaView style={styles.groupTeam}>
      <Pagination
        data={
          tournament_id && group_id
            ? tournamentGroup[0]?.teams?.collection
            : getTournament.teams.collection
        }
        style={{margin: marginHorizontal}}
        showsVerticalScrollIndicator={false}
        keyExtractor={({id}) => id}
        initialNumToRender={5}
        maxToRenderPerBatch={5}
        renderItem={({item}) => (
          <TeamView {...item} selectTeam={selectTeam} isOnSubmit={true} isPrivate={true} />
        )}
      />
    </SafeAreaView>
  );
};
export default GroupTeams;
