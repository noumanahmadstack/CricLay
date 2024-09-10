import { FC, memo, ReactNode, useCallback, useMemo } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import GradientColor from '../../../theme/gradientColors';
import { onHandleOnClickMatch } from '../../../redux/matches/getMatches/action';
import styles from './styles';
import { capitalizeEachFirstLetter, dateTimeFormatter } from '../../../utilis/dateFormatter';
import StreamingMatchView from './streaming';
import LiveMatchView from './live';
import FixtureMatchView from './fixture';
import CompletedMatchView from './completed';
import { MatchViewProps } from '../../../modelInterface/views/matchListView';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import colors from '../../../theme/colors';
const MatchView: FC<MatchViewProps> = ({
  teamOne,
  teamTwo,
  status,
  id,
  matchId,
  scorerId,
  userId,
  formate,
  venue,
  matchType,
  tournament,
  scheduledDatetime,
  winningTeam,
  winningStats,
  organizer,
  isPrivate,
  liveStreamingUrl,
  streamingLinks,
  isTie,
  isStreaming,
  message,
  actionStatus
}) => {
  const renderMatchType = useMemo(() => {
    if (status == 'started') {
      return 'Live';
    } else if (status == 'fixture') {
      return 'Schedule';
    } else if (status == 'completed') {
      return 'Completed';
    }
  }, [status]);
  const onHandlePress = useCallback(() => {
    onHandleOnClickMatch({
      id,
      scorerId,
      userId,
      status,
      name: tournament?.name ? tournament?.name : matchType,
      isPrivate,
      liveStreamingUrl,
      organizer,
      isTie,
      message,
      isStreaming,
      streamingLinks,
      matchType
    });
  }, [
    id,
    scorerId,
    userId,
    status,
    isPrivate,
    liveStreamingUrl,
    organizer,
    matchType,
    tournament?.name,
    isTie,
    message,
    isStreaming,
    streamingLinks
  ]);
  const memorizeDate = useMemo<string>(
    () => dateTimeFormatter(scheduledDatetime),
    [scheduledDatetime],
  );
  const isOwner: boolean = (scorerId == userId || userId == organizer?.id)
  const linearGradientColor = useMemo(() => matchType === 'amateur' ? GradientColor.amateurGradient : GradientColor.theme, [matchType])
  const memorizedLayout = useMemo<ReactNode>(() => {
    if (isStreaming) {
      return <StreamingMatchView liveStreamingUrl={streamingLinks[0]?.link} />;
    } else {
      if (status == 'started') {
        return <LiveMatchView teamOne={teamOne} teamTwo={teamTwo} />;
      } else if (status == 'fixture') {
        return (
          <FixtureMatchView teamOne={teamOne} teamTwo={teamTwo} venue={venue} matchType={matchType} />
        );
      } else if (status == 'completed') {
        return (
          <CompletedMatchView
            teamOne={teamOne}
            teamTwo={teamTwo}
          />
        );
      }
      return null;
    }
  }, [
    status,
    id,
    isTie,
    liveStreamingUrl,
    teamOne,
    teamTwo,
    venue,
    winningStats,
    winningTeam,
    isStreaming
  ]);
  const matchResultMessage = useMemo(() => {
    if (isTie || actionStatus) {
      return message;
    } else {
      return `${winningTeam?.name} Won by ${winningStats?.winByWickets
        ? winningStats.byWickets + ' wickets'
        : winningStats?.byRuns + ' runs'
        }`;
    }
  }, [isTie, winningStats, winningTeam]);
  const linearGradientColorForBar = useMemo<(string | number)[]>(() => (isOwner && status == 'started') ? linearGradientColor : status == 'fixture' ? GradientColor.blueGradient : GradientColor.transparentGradient, [isOwner, status])
  const barContent = useMemo<string | undefined>(() => (isOwner && status == 'started') ? 'Scorer' : status == 'completed' ? matchResultMessage : venue?.title, [isOwner, status, matchResultMessage, venue])
  const memorizedScorerLayout = useMemo<ReactNode>(() => {
    if (status == 'fixture' || status == 'completed' || (status == 'started' && isOwner)) {
      return (
        <LinearGradient
          style={[styles.scorerGradient, status == 'fixture' && styles.scorerGradientFixture, status == 'started' && styles.scorerGradientScorer]}
          colors={linearGradientColorForBar}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}>
          {status == 'fixture' &&
            <Text style={styles.bottomText}>View Details</Text>
          }
          <View style={styles.locationContainer}>
            {status == 'fixture' && venue?.title &&
              <EvilIcons name="location" size={20} color={colors.white} />
            }
            <Text style={[styles.matchStatusTxt, status == 'completed' && styles.matchStatusRedTxt]}>{barContent}</Text>
          </View>
        </LinearGradient>
      );
    }
    return null;
  }, [status, isStreaming, userId, organizer?.id, scorerId, venue]);
  const renderHeader = useMemo<string>(() => {
    if (isStreaming) {
      return `${teamOne?.name} VS ${teamTwo?.name}`
    } else if (tournament?.name) {
      return capitalizeEachFirstLetter(tournament?.name)
    }
    return capitalizeEachFirstLetter(matchType)
  }, [tournament?.name, isStreaming])
  const RenderDate = useMemo<ReactNode>(() => (status === 'fixture' || status === 'completed') && (
    <Text style={styles.date}>{memorizeDate}</Text>
  ), [status])
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onHandlePress}
      style={styles.container}>
      <View style={styles.nameContainer}>
        <LinearGradient
          style={styles.overInnings}
          colors={linearGradientColor}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}>
          <Text style={styles.oversInningTitle}>{formate?.toUpperCase()}</Text>
        </LinearGradient>
        <View style={styles.contentContainer}>
          <Text style={styles.matchesName} ellipsizeMode='tail' numberOfLines={1}>
            {renderHeader}
          </Text>
          {RenderDate}
        </View>
        <LinearGradient
          style={styles.matchStatus}
          colors={linearGradientColor}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}>
          <Text style={styles.matchStatusTxt}>{renderMatchType}</Text>
        </LinearGradient>
      </View>
      <>
        {memorizedLayout}
        {memorizedScorerLayout}
      </>
    </TouchableOpacity>
  );
};
export default memo(MatchView);