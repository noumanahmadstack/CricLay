import {FC, useMemo, useRef, useState} from 'react';
import {View, Dimensions} from 'react-native';
import YoutubePlayer, {YoutubeIframeRef} from 'react-native-youtube-iframe';
import SimpleLoader from '../../../../components/loaders/simpleLoader';
import styles from './styles';
const StreamingDetail: FC<any> = ({route}) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const {height} = Dimensions.get('screen');
  const {liveStreamingUrl} = route.params || {};
  const playerRef = useRef<YoutubeIframeRef>(null);
  const extractVideoIdFromUrl = useMemo(() => {
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
  return (
    <View style={styles.container}>
      <SimpleLoader isLoading={isLoading} />
      <YoutubePlayer
        ref={playerRef}
        height={height}
        play={true}
        videoId={extractVideoIdFromUrl}
        onReady={() => setIsLoading(false)}
      />
    </View>
  );
};
export default StreamingDetail;
