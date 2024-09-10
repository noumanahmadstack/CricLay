import { FC, memo, ReactNode, useCallback, useMemo, useRef, useState } from 'react';
import { ActivityIndicator, TouchableOpacity, View } from 'react-native';
import YoutubePlayer, { YoutubeIframeRef } from 'react-native-youtube-iframe';
import { StreamingViewProps } from '../../../../modelInterface/views/matchListView';
import { navigate } from '../../../../routes/rootNavigation';
import colors from '../../../../theme/colors';
import styles from '../styles';
const StreamingMatchView: FC<StreamingViewProps> = ({ liveStreamingUrl, listing, onPress, style }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const playerRef = useRef<YoutubeIframeRef>(null);
  const extractVideoIdFromUrl = useMemo<string | undefined>(() => {
    const regex =
      /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    if (liveStreamingUrl) {
      const match = liveStreamingUrl.match(regex);
      if (match && match[1]) {
        return match[1];
      }
    }
    return undefined;
  }, [liveStreamingUrl]);
  const onHandlePress = useCallback(() => {
    if (onPress) {
      onPress()
    } else {
      navigate('StreamingDetail', { liveStreamingUrl })
    }
  }, [onPress])

  const RenderLoader = useMemo<ReactNode>(() => isLoading && (
    <ActivityIndicator
      style={styles.activityLoaderStreaming}
      size="large"
      color={colors.themeBlue}
    />
  ), [isLoading])
  return (
    <TouchableOpacity activeOpacity={0.8} disabled={!!!listing} onPress={onHandlePress} style={[styles.streamingMatchesContainer, style]}>
      <View pointerEvents="none" style={styles.streamingMatchesContainer}>
        {RenderLoader}
        <YoutubePlayer
          ref={playerRef}
          height={225}
          webViewStyle={listing ? styles.youtubePlayerRounded : styles.youtubePlayer}
          play={false}
          onReady={() => setIsLoading(false)}
          videoId={extractVideoIdFromUrl}
        />
      </View>
    </TouchableOpacity>
  );
};
export default memo(StreamingMatchView);
