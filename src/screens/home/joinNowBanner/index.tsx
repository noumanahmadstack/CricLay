import {FC} from 'react';
import {Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import {replace} from '../../../routes/rootNavigation';
const JoinNowBanner: FC = () => {
  return (
    <TouchableOpacity onPress={() => replace('LoginStartUp')}>
      <Image
        style={styles.image}
        source={require('../../../assets/images/home/joinNowBanner.png')}
      />
    </TouchableOpacity>
  );
};
export default JoinNowBanner;
