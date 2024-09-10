import {FC} from 'react';
import Video from 'react-native-video';
import styles from './styles';
import {onMount} from '../../redux/splash/action';
const Splash: FC = () => {
  return (
    <Video
      source={require('../../assets/videos/splash/splash.mp4')}
      style={styles.container}
      resizeMode="cover"
      onEnd={onMount}
    />
  );
};
export default Splash;
