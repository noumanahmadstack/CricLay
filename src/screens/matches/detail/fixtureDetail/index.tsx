import { FC, useEffect } from 'react';
import { Text, FlatList, View } from 'react-native';
import { SimpleScreenContainer } from '../../../../components/screensContainers/screenContainers';
import TeamsIconTitleContainer from '../../../../components/teamsIconTitleContainer';
import styles from './styles/styles';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store/store';
import Toss from '../../startMatch/toss';
import {
  setIsTossModalOpen,
  setTossDecision,
  setTossWinningTeamId,
} from '../../../../redux/matches/startMatch/reducer';
import SimpleLoader from '../../../../components/loaders/simpleLoader';
import {
  matchViewDetail,
  onShareMatch,
  resetStates,
} from '../../../../redux/matches/matchDetails/action';
import { startScoring } from '../../../../redux/matches/getMatches/action';
import ShareBtn from '../../../../components/shareBtn';

const FixtureDetail: FC<any> = ({ route, navigation }) => {
  const { id, avoidFetch } = route.params || {};
  const dispatch = useDispatch();
  const { matchDetail, isLoading } = useSelector(
    (state: RootState) => state.matchDetailsReducer,
  );
  const {
    isStartingLiveMatch,
    isTossModalOpen,
    toss_winning_team_id,
    toss_decision,
  } = useSelector((state: RootState) => state.startMatchReducer);
  const { teamOne, teamTwo, formate, scorer } = matchDetail || {};
  const { player } = scorer || {};
  const { shareableId: scorerShareableId } = player || {};
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <ShareBtn onPress={() =>
        onShareMatch({
          teamOneName: teamOne?.name,
          teamTwoName: teamTwo?.name,
          matchId: id,
        })}
      />
    });
  }, [teamOne?.name, teamTwo?.name, navigation])
  useEffect(() => {
    if (!avoidFetch) {
      matchViewDetail(id);
    }
  }, [id, avoidFetch]);

  const formatTimestamp = (timestamp: Date | any) => {
    const options = {
      year: 'numeric' as const,
      month: 'long' as const,
      day: 'numeric' as const,
      hour: 'numeric' as const,
      minute: '2-digit' as const,
      hour12: true as const,
    };
    const date = new Date(timestamp);
    return date.toLocaleTimeString('en-US', options);
  };
  const data = [
    {
      title: 'Organiser',
      description: matchDetail.organizer?.name,
    },
    {
      title: 'Match Title',
      description: matchDetail.matchType,
    },
    {
      title: 'Formate',
      description: formate,
    },
    {
      title: 'Ball Type',
      description: matchDetail.ballType,
    },
    {
      title: 'Playing',
      description: matchDetail.wickets,
    },
    {
      title: 'Overs',
      description: matchDetail.overs,
    },
    {
      title: 'Venue',
      description: matchDetail.venue?.title,
    },
    {
      title: 'Date & Time',
      description: formatTimestamp(matchDetail?.scheduledDatetime),
    },
    {
      title: 'Scorer ID',
      description: scorerShareableId,
    },
    {
      title: 'Match ID',
      description: matchDetail.shareableId,
    },
  ];
  useEffect(() => {
    return resetStates;
  }, []);
  return (
    <SimpleScreenContainer>
      <SimpleLoader isLoading={isLoading} />
      <Toss
        onRequestClose={() => dispatch(setIsTossModalOpen(false))}
        isVisible={isTossModalOpen}
        teamAName={teamOne?.name}
        teamBName={teamTwo?.name}
        isSelectedTeamA={teamOne?.id === toss_winning_team_id}
        isSelectedTeamB={teamTwo?.id === toss_winning_team_id}
        onPressDecision={toss_decision =>
          dispatch(setTossDecision(toss_decision))
        }
        toss_decision={toss_decision}
        isLoading={isStartingLiveMatch}
        error={''}
        onSubmit={() =>
          startScoring({
            toss_decision,
            toss_winning_team_id,
            id: matchDetail.id,
          })
        }
        onPressTeamA={() => dispatch(setTossWinningTeamId(teamOne?.id))}
        onPressTeamB={() => dispatch(setTossWinningTeamId(teamTwo?.id))}
      />
      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}
        ListHeaderComponent={
          <TeamsIconTitleContainer
            name1={matchDetail.teamOne.name}
            name2={matchDetail.teamTwo.name}
            team1Logo={matchDetail.teamOne?.logoUrl}
            team2Logo={matchDetail.teamTwo?.logoUrl}
            isSelected1={false}
            isSelected2={false}
          />
        }
        renderItem={({ item }) => {
          return (
            <View style={styles.listViewContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <View style={styles.seprator} />
              <Text style={styles.desc}>
                {item.description ? item.description : '--'}
              </Text>
            </View>
          );
        }}
      />
    </SimpleScreenContainer>
  );
};
export default FixtureDetail;
