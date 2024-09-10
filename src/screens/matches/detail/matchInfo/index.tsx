import { FC, useCallback, useMemo } from 'react';
import { Text, FlatList, View, Clipboard, Linking } from 'react-native';
import { SimpleScreenContainer } from '../../../../components/screensContainers/screenContainers';
import TeamsIconTitleContainer from '../../../../components/teamsIconTitleContainer';
import { GetMatchObjectState } from '../../../../modelInterface/redux/matches/reducer';
import styles from './styles/styles';
import { toastMessage } from '../../../../components/toastMessages';
import VideoStreamingBtn from '../../../../components/videoStreamingBtn';
import { navigate } from '../../../../routes/rootNavigation';

const MatchInfo: FC<{ matchDetail: GetMatchObjectState }> = ({ matchDetail }) => {
  const {
    id,
    formate,
    organizer,
    matchType,
    ballType,
    wickets,
    overs,
    venue,
    scheduledDatetime,
    shareableId,
    scorer,
    liveStreamingUrl,
    streamingLinks
  } = matchDetail || {};
  const { player } = scorer || {};
  const { shareableId: scorerShareableId } = player || {};
  const formatTimestamp = useMemo(() => {
    const options = {
      year: 'numeric' as const,
      month: 'long' as const,
      day: 'numeric' as const,
      hour: 'numeric' as const,
      minute: '2-digit' as const,
      hour12: true as const,
    };
    const date = new Date(scheduledDatetime);
    return date.toLocaleTimeString('en-US', options);
  }, [scheduledDatetime]);
  const openGoogleMaps = useCallback(() => {
    const { lat, long, title } = venue || {};
    const url = `https://www.google.com/maps/search/?api=1&query=${lat},${long}&query_place_id=${title}`;
    Linking.openURL(url)
      .then((supported) => {
        if (!supported) {
          toastMessage('Opening Google Maps is not supported on this device');
        } else {
          return Linking.openURL(url);
        }
      })
      .catch((err) => toastMessage('An error occurred'));
  }, [venue]);
  const handleLongPress = useCallback(async () => {
    if (shareableId) {
      await Clipboard.setString(shareableId.toString());
      toastMessage('Text copied to clipboard!');
    }
  }, [shareableId]);
  const data = [
    {
      title: 'Organiser',
      description: organizer?.name,
    },
    {
      title: 'Match Title',
      description: matchType,
    },
    {
      title: 'Formate',
      description: formate,
    },
    {
      title: 'Ball Type',
      description: ballType,
    },
    {
      title: 'Playing',
      description: wickets,
    },
    {
      title: 'Overs',
      description: overs,
    },
    {
      title: 'Venue',
      onPress: openGoogleMaps,
      description: venue?.title,
    },
    {
      title: 'Date & Time',
      description: formatTimestamp,
    },
    {
      title: 'Scorer ID',
      description: scorerShareableId,
    },
    {
      title: 'Match ID',
      description: shareableId,
      onPress: handleLongPress
    },
  ];

  return (
    <SimpleScreenContainer isBlue={true}>
      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}
        ListHeaderComponent={
          <>
            <TeamsIconTitleContainer
              name1={matchDetail.teamOne.name}
              name2={matchDetail.teamTwo.name}
              isSelected1={false}
              isSelected2={false}
              team1Logo={matchDetail.teamOne?.logoUrl}
              team2Logo={matchDetail.teamTwo?.logoUrl}
            />
            {liveStreamingUrl ?
              <VideoStreamingBtn onPress={() => navigate('StreamingList', { streamingLinks, id })} title='Watch Video Streaming' />
              : null}
          </>
        }
        renderItem={({ item }) => {
          return (
            <View style={styles.listViewContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <View style={styles.seprator} />
              <Text
                disabled={!!!item.onPress}
                onPress={item.onPress}
                style={styles.desc}>
                {item.description ? item.description : '--'}
              </Text>
            </View>
          );
        }}
      />
    </SimpleScreenContainer>
  );
};
export default MatchInfo;