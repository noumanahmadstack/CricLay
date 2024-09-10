import React from 'react';
import {FC} from 'react';
import {FlatList, View, Text, SafeAreaView} from 'react-native';
import {useSelector} from 'react-redux';
import SimpleLoader from '../../../../components/loaders/simpleLoader';
import { RootState } from '../../../../redux/store/store';
import styles from './styles';


const PointsDetails: FC = ({route}: any) => {
  const {isLoading, getTournament} = useSelector(
    (state: RootState) => state.getTournamentReducer,
  );
  const detail = route?.params;
  const renderListHeader = () => {
    if (getTournament.tournamentTeams.collection.length > 0) {
      return (
        <>
          <Text style={styles.SimpleText}>{detail.team?.name}</Text>
          <Text style={styles.SimpleText}>NRR {detail.netRunRate}</Text>
          <View style={[styles.deteailpointTableHeader]}>
            <Text style={styles.detialHeaderText}>Runs Scored</Text>
            <Text style={styles.detialHeaderText}>Runs Conceded</Text>
            <Text style={styles.detialHeaderText}>Balls Faced</Text>
            <Text style={styles.detialHeaderText}>Balls Bowled</Text>
            <Text style={styles.detialHeaderText}>Points</Text>
          </View>
          <View style={styles.seperator} />
        </>
      );
    } else {
      return null; // or any other fallback UI if needed
    }
  };
  return (
    <SafeAreaView style={styles.safeAriaView}>
      <SimpleLoader isLoading={isLoading} />
      <FlatList
        style={{marginHorizontal: 20}}
        showsVerticalScrollIndicator={false}
        data={detail.pointList}
        keyExtractor={({id}) => id}
        ListHeaderComponent={renderListHeader}
        ItemSeparatorComponent={() => <View style={styles.seperator} />}
        renderItem={({item}) => (
          <>
            <View style={[styles.cardTextWrapper, {width: '100%'}]}>
              <Text style={styles.scoreText}>
                {item.runsScored
                  ? item.runsScored + '\n' + item.opponentTeam.name
                  : '0'}{' '}
              </Text>
              <Text style={styles.scoreText}>
                {item.runsConceded ? item.runsConceded : '0'}
              </Text>
              <Text style={styles.scoreText}>
                {item.ballsFaced ? item.ballsFaced : '0'}
              </Text>
              <Text style={styles.scoreText}>
                {item.ballsBowled ? item.ballsBowled : '0'}
              </Text>
              <Text style={styles.scoreText}>
                {item.points ? item.points : '0'}
              </Text>
            </View>
          </>
        )}
      />
    </SafeAreaView>
  );
};
export default PointsDetails;
